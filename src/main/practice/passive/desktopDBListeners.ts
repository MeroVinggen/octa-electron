import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { createDebounce } from '../../../utils/helpers';
import { desktopDBPubSub } from '../../DB/desktopDBPubSub';
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

/**
 * listening desktop DB for passive practice settings update
 */
export const initPassivePracticeDesktopDBObserverListeners = () => {
  desktopDBPubSub.subscribe("onEditWord", (data) => proceedIfPassivePracticeWindowNotClosed(onEditWord, data));
  desktopDBPubSub.subscribe("onDeleteWord", (data) => proceedIfPassivePracticeWindowNotClosed(onDeleteWord, data));
  desktopDBPubSub.subscribe("onDictionaryClear", onDictionaryClear);
  desktopDBPubSub.subscribe("updateAppSettings", createDebounce(passivePractice.updateAppSettings, 1_000));
  desktopDBPubSub.subscribe("clearAppSettings", passivePractice.stopCurrentTimers);
};
