import { ipcMain } from 'electron';
import { windowInstanceRegistry } from "../../shared/windowRegistries/windowInstanceRegistry";
import { closeApp } from '../App/utils';
import { IdleMode } from "../DB/interface";
import { getCurrentIdleModeData, onUpdateIdleModeState, onUpdateIdleModeTimerData } from "../idleMode/idleMode";
import { openMainWindow } from '../mainWindow/utils';
import { closeTrayWindow, onGetIdleModeData } from './utils';

// "Idle mode" is not dispatching
type trayMenuList = ["Open main window", "Exit Octa"];

const trayMenuItemClickHandlers: Record<trayMenuList[number], (e: Electron.IpcMainEvent) => void> = {
  "Open main window": () => { closeTrayWindow(); openMainWindow(); },
  "Exit Octa": () => { closeApp(); },
};

const onTrayMenuItemClick = (e: Electron.IpcMainEvent, itemName: trayMenuList[number]) => {
  if (itemName in trayMenuItemClickHandlers) {
    trayMenuItemClickHandlers[itemName](e);
  } else {
    throw new Error("Unknown tray menu command - " + itemName);
  }
};

const onUpdateIdleModeStateSignal = (
  _: Electron.IpcMainEvent,
  idleModeState: IdleMode["isEnabled"]
) => {
  onUpdateIdleModeState(idleModeState);
  windowInstanceRegistry.get("main")?.getWin()?.webContents.send("update idle mode", ...getCurrentIdleModeData());
};

const onUpdateIdleModeTimerDataSignal = (
  _: Electron.IpcMainEvent,
  idleModeTimer: IdleMode["timerValue"],
) => {
  onUpdateIdleModeTimerData(idleModeTimer);
  windowInstanceRegistry.get("main")?.getWin()?.webContents.send("update idle mode", ...getCurrentIdleModeData());
};

export const initTrayWindowListeners = () => {
  ipcMain.on("trayMenuItemClick", onTrayMenuItemClick);

  ipcMain.on("getIdleModeDataTrayWin", onGetIdleModeData);
  ipcMain.on("updateIdleModeStateTrayWin", onUpdateIdleModeStateSignal);
  ipcMain.on("updateIdleModeTimerDataTrayWin", onUpdateIdleModeTimerDataSignal);
};
