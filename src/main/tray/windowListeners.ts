import { ipcMain } from 'electron';
import { closeApp } from '../App/utils';
import { onUpdateIdleModeState, onUpdateIdleModeTimerData } from "../idleMode/idleMode";
import { openMainWindow } from '../mainWindow/utils';
import { closeTrayWindow, onGetIdleModeData } from './utils';

// "Idle mode" is not dispatching
type trayMenuList = ["Open main window", "Exit Octa"];

const trayMenuItemClickHandlers: Record<trayMenuList[number], (e: Electron.IpcMainEvent) => void> = {
  "Open main window": () => { closeTrayWindow(); openMainWindow(); },
  "Exit Octa": () => { closeTrayWindow(); closeApp(); },
};

const onTrayMenuItemClick = (e: Electron.IpcMainEvent, itemName: trayMenuList[number]) => {
  if (itemName in trayMenuItemClickHandlers) {
    trayMenuItemClickHandlers[itemName](e);
  } else {
    throw new Error("Unknown tray menu command - " + itemName);
  }
};

export const initTrayWindowListeners = () => {
  ipcMain.on("trayMenuItemClick", onTrayMenuItemClick);

  ipcMain.on("getIdleModeData", onGetIdleModeData);
  ipcMain.on("updateIdleModeState", onUpdateIdleModeState);
  ipcMain.on("updateIdleModeTimerData", onUpdateIdleModeTimerData);
};
