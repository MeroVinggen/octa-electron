import { app, ipcMain } from 'electron';
import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { getAppSettingsData } from '../../DB/utils';
import { openMainWindow } from '../../mainWindow/utils';

const getNotificationSetting = async (e: Electron.IpcMainEvent) => {
  const appSettings = await getAppSettingsData();
  e.reply("getNotificationSetting", appSettings.practice.active.soundNotification);
};

const openPracticePage = () => {
  windowInstanceRegistry.get("main")!.getWin()!.webContents.send("openPracticePage");
};

const onActivePracticeWindowAnswer = (_, answer: boolean) => {
  if (answer) {
    if (windowInstanceRegistry.get("main")!.getIsClosed()) {
      windowInstanceRegistry.get("main")!.addNextDidFinishLoadListeners(() => {
        // fix: did-finish-load triggers before webview ready to receive msgs
        setTimeout(openPracticePage, 300);
      });
      openMainWindow();
    } else {
      openPracticePage();
    }
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
