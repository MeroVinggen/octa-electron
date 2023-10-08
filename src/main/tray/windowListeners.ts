import { ipcMain } from 'electron';
import { closeApp } from '../App/utils';
import { openMainWindow } from '../mainWindow/utils';
import { closeTrayWindow } from './utils';
import { passivePractice } from '../practice/passive/main';
import { activePractice } from '../practice/active/main';

type trayMenuList = ["Open main window", "Idle mode", "Exit"];

const trayMenuItemClickHandlers: Record<trayMenuList[number], (e: Electron.IpcMainEvent) => void> = {
  "Open main window": () => { closeTrayWindow(); openMainWindow(); },
  "Idle mode": (e) => { 
    closeTrayWindow(); 
    const isIdleMode = passivePractice.idleMode();
    activePractice.idleMode();
    e.reply("update idle mode", isIdleMode);
  },
  "Exit": () => { closeTrayWindow(); closeApp(); },
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
};
