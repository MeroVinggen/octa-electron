import { ipcMain } from 'electron';
import { windowInstanceRegistry } from "../../shared/windowRegistries/windowInstanceRegistry";
import { closeApp } from '../App/utils';
import { IdleMode } from "../DB/interface";
import { getCurrentIdleModeData, onUpdateIdleModeState, onUpdateIdleModeTimerData } from "../idleMode/idleMode";

import { closeMainWindow, maximizeMainWindow, minimizeMainWindow, onGetIdleModeData, unmaximizeMainWindow } from './utils';

const onUpdateIdleModeStateSignal = (
  _: Electron.IpcMainEvent,
  idleModeState: IdleMode["isEnabled"]
) => {
  onUpdateIdleModeState(idleModeState);
  windowInstanceRegistry.get("tray")?.getWin()?.webContents.send("update idle mode", ...getCurrentIdleModeData());
};

const onUpdateIdleModeTimerDataSignal = (
  _: Electron.IpcMainEvent,
  idleModeTimer: IdleMode["timerValue"],
) => {
  onUpdateIdleModeTimerData(idleModeTimer);
  windowInstanceRegistry.get("tray")?.getWin()?.webContents.send("update idle mode", ...getCurrentIdleModeData());
};

export const initMainWindowListeners = () => {
  ipcMain.on("onAppExit", closeApp);
  ipcMain.on("closeMainWindow", closeMainWindow);
  ipcMain.on("unmaximizeMainWindow", unmaximizeMainWindow);
  ipcMain.on("maximizeMainWindow", maximizeMainWindow);
  ipcMain.on("minimizeMainWindow", minimizeMainWindow);

  ipcMain.on("getIdleModeMainWin", onGetIdleModeData);
  ipcMain.on("updateIdleModeStateMainWin", onUpdateIdleModeStateSignal);
  ipcMain.on("updateIdleModeTimerDataMainWin", onUpdateIdleModeTimerDataSignal);
};
