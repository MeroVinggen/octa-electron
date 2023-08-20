import { ipcMain } from 'electron';
import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { AppSettings, Word, YearData } from '../../DB/interface';
import { utilsWithCatch } from '../../DB/utilsWithCatch';
import { sendToMainWindowNewPassivePracticeResult } from '../../mainWindow/windowMessaging';

const getNotificationSetting = async (e: Electron.IpcMainEvent) => {
  const appSettings = await utilsWithCatch.get("getAppSettingsData")!() as AppSettings;
  e.reply("getNotificationSetting", appSettings.practice.passive.soundNotification);
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
  utilsWithCatch.get("onAddWord")!(updatedWord);
  utilsWithCatch.get("updateStatistic")!(updatedCurYearData);
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
