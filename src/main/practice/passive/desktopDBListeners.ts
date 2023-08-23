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

let appDBObserverListeners: {
  onEditWord: (data: any) => void;
  onDeleteWord: (data: any) => void;
  onDictionaryClear: () => void;
  updateAppSettings: (...params: unknown[]) => void;
  clearAppSettings: () => void;
};

const initAppDBObserverListeners = () => {
  appDBObserverListeners = {
    onEditWord: (data) => proceedIfPassivePracticeWindowNotClosed(onEditWord, data),
    onDeleteWord: (data) => proceedIfPassivePracticeWindowNotClosed(onDeleteWord, data),
    onDictionaryClear,
    // 30s
    updateAppSettings: createDebounce(passivePractice.updateAppSettings, 30_000),
    clearAppSettings: passivePractice.stopCurrentTimers,
  };
};

/**
 * listening desktop DB for passive practice settings update
 */
export const initPassivePracticeDesktopDBObserverListeners = () => {
  initAppDBObserverListeners();
  
  desktopDBObserver.subscribe((action, data) => {
    if (action in appDBObserverListeners) {
      appDBObserverListeners[action](data);
    }
  });
};
