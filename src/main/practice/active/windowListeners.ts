import { ipcMain } from 'electron';
import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { getAppSettingsData } from '../../DB/utils';
import { openMainWindow } from '../../mainWindow/utils';

const getNotificationSetting = async (e: Electron.IpcMainEvent) => {
  const appSettings = await getAppSettingsData();
  e.reply("getNotificationSetting", appSettings.practice.active.soundNotification);
};

const onActivePracticeWindowAnswer = (_, answer: boolean) => {
  if (answer) {
    openMainWindow();
  } 
  
  windowInstanceRegistry.get("activePractice")!.close();
};

/**
 * listening for active practice result & update
 */
export const initWindowListeners = () => {
  ipcMain.on("activePracticeWindowAnswer", onActivePracticeWindowAnswer);
  ipcMain.on("getActiveNotificationSetting", getNotificationSetting);
};
