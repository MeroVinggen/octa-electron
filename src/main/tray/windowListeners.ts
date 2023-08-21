import { ipcMain } from 'electron';
import { closeApp } from '../App/utils';
import { openMainWindow } from '../mainWindow/utils';
import { closeTrayWindow } from './utils';

type trayMenuList = ["Open main window", "Exit"];

const trayMenuItemClickHandlers: Record<trayMenuList[number], Function> = {
  "Open main window": () => { closeTrayWindow(); openMainWindow(); },
  "Exit": () => { closeTrayWindow(); closeApp(); },
};

const onTrayMenuItemClick = (_, itemName: trayMenuList[number]) => {
  if (itemName in trayMenuItemClickHandlers) {
    trayMenuItemClickHandlers[itemName]();
  } else {
    throw new Error("Unknown tray menu command - " + itemName);
  }
};

export const initTrayWindowListeners = () => {
  ipcMain.on("trayMenuItemClick", onTrayMenuItemClick);
};
