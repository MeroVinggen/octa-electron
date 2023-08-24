import { ipcMain } from 'electron';
import { closeApp } from '../App/utils';
import { closeMainWindow, maximizeMainWindow, minimizeMainWindow, unmaximizeMainWindow } from './utils';

export const initMainWindowListeners = () => {
  ipcMain.on("onAppExit", closeApp);
  ipcMain.on("closeMainWindow", closeMainWindow);
  ipcMain.on("unmaximizeMainWindow", unmaximizeMainWindow);
  ipcMain.on("maximizeMainWindow", maximizeMainWindow);
  ipcMain.on("minimizeMainWindow", minimizeMainWindow);
};
