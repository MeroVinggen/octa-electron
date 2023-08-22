import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { desktopDBObserver } from '../../DB/desktopDBObserver';
import { Word } from '../../DB/interface';
import { checkDictionaryIsEmpty, getAppSettingsData } from '../../DB/utils';
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

const updateAppSettings = async () => {
  const oldPassivePracticeDataString = passivePractice.settingsSnapshot.getSnapshot();
  const newPassivePracticeData = (await getAppSettingsData()).practice.passive;
  const newPassivePracticeDataString = JSON.stringify(newPassivePracticeData);

  const isChangedPassivePracticeData = newPassivePracticeDataString !== oldPassivePracticeDataString;

  if (isChangedPassivePracticeData) {
    passivePractice.reInit(newPassivePracticeData);
  }
};

let updateAppSettingsWithDebounceTimerID: NodeJS.Timeout;

// 30s
// let updateAppSettingsWithDebounceTimerTimeout = 30_000;
let updateAppSettingsWithDebounceTimerTimeout = 5_000;

const updateAppSettingsWithDebounce = () => {
  clearTimeout(updateAppSettingsWithDebounceTimerID);
  updateAppSettingsWithDebounceTimerID = setTimeout(
    updateAppSettings,
    updateAppSettingsWithDebounceTimerTimeout
  );
};

const appDBObserverListeners = {
  onEditWord: (data) => proceedIfPassivePracticeWindowNotClosed(onEditWord, data),
  onDeleteWord: (data) => proceedIfPassivePracticeWindowNotClosed(onDeleteWord, data),
  onDictionaryClear,
  updateAppSettings: updateAppSettingsWithDebounce,
  clearAppSettings: () => passivePractice.stopCurrentTimers(),
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
