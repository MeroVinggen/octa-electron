import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { createDebounce } from '../../../utils/helpers';
import { desktopDBObserver } from '../../DB/desktopDBObserver';
import { Word } from '../../DB/interface';
import { checkDictionaryIsEmpty } from '../../DB/utils';
import { passivePractice } from './main';

const proceedIfPassivePracticeWindowNotClosed = (callback: Function, ...params: unknown[]) => {
  if (windowInstanceRegistry.get("passivePractice")!.getIsClosed()) {
    return;
  }
  callback(...params);
};

const onEditWord = (wordId: Word["id"]) => {
  windowInstanceRegistry.get("passivePractice")!.getWin()!.webContents.send("onEditWord", wordId);
};

const onDeleteWord = (wordId: Word["id"]) => {
  checkDictionaryIsEmpty()
    .then((isEmpty) => {
      isEmpty
        ? windowInstanceRegistry.get("passivePractice")!.close()
        : windowInstanceRegistry.get("passivePractice")!.getWin()!.webContents.send("onDeleteWord", wordId);
    });
};

const onDictionaryClear = () => {
  windowInstanceRegistry.get("passivePractice")!.close();
};

// 30s
const updateAppSettingsWithDebounce = createDebounce(passivePractice.updateAppSettings, 30_000);

const appDBObserverListeners = {
  onEditWord: (data) => proceedIfPassivePracticeWindowNotClosed(onEditWord, data),
  onDeleteWord: (data) => proceedIfPassivePracticeWindowNotClosed(onDeleteWord, data),
  onDictionaryClear,
  updateAppSettings: updateAppSettingsWithDebounce,
  clearAppSettings: passivePractice.stopCurrentTimers,
} as const;

/**
 * listening desktop DB for passive practice settings update
 */
export const initPassivePracticeDesktopDBObserverListeners = () => {
  desktopDBObserver.subscribe((action, data) => {
    if (action in appDBObserverListeners) {
      appDBObserverListeners[action](data);
    } else {
      throw new Error("Unknown desktopDBObserver command - " + action);
    }
  });
};
