import { ipcMain } from 'electron';
import { closeApp } from '../App/utils';

// menu -> exit
export const initMainWindowListeners = () => {
  ipcMain.on("onAppExit", closeApp);
};
