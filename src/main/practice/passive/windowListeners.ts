import { ipcMain } from 'electron';
import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { Word, YearData } from '../../DB/interface';
import { getAppSettingsData, onAddWord, updateStatistic } from '../../DB/utils';
import { sendToMainWindowNewPassivePracticeResult } from '../../mainWindow/windowMessaging';

const getNotificationSetting = async (e: Electron.IpcMainEvent) => {
  const appSettings = await getAppSettingsData();
  e.reply("getPassiveNotificationSetting", appSettings.practice.passive.soundNotification);
};

const onPassivePracticeResult = (e: Electron.IpcMainEvent, result: boolean, word: Word, practiceTarget: "original" | "translation") => {
  if (windowInstanceRegistry.get("main")!.getIsClosed()) {
    e.reply("updateDBPracticeResult");
  } else {
    windowInstanceRegistry.get("passivePractice")!.close();
    sendToMainWindowNewPassivePracticeResult(result, word, practiceTarget);
  }
};

// if main win is closed - update by passivePractice win
const onUpdateDBWithPracticeResult = (_, updatedWord: Word, updatedCurYearData: YearData) => {
  onAddWord(updatedWord);
  updateStatistic(updatedCurYearData);
  windowInstanceRegistry.get("passivePractice")!.close();
};

/**
 * listening for passive practice result & update
 */
export const initWindowListeners = () => {
  ipcMain.on("passivePracticeResult", onPassivePracticeResult);
  ipcMain.on("getNotificationSetting", getNotificationSetting);
  // if main win is closed - update by sended data from passivePractice win
  ipcMain.on("updateDBPracticeResult", onUpdateDBWithPracticeResult);
};
