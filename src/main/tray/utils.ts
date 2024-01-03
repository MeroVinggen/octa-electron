import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { IdleModeSettings } from "../DB/interface";
import { getIdleModeData } from "../DB/utils";
import { getTrayInstance } from './initAppTray';

/**
 * hiding tray window (is not closing)
 */
export const closeTrayWindow = () => {
  windowInstanceRegistry.get("tray")!.getWin()!.hide();
};

export const getTrayWinCoord = (mouseCoord: number, trayWinSize: number, screenSize: number) => {
  // 55 = 50 offset from screen edge + 5 shift from mouse
  return mouseCoord + trayWinSize + 55 < screenSize 
    ? mouseCoord + 5 
    : mouseCoord - trayWinSize - 5;
};

export const destroyTray = () => {
  getTrayInstance().destroy();
};

export const onChangeIdleMode = (mode: IdleModeSettings["isEnabled"]) => {
  windowInstanceRegistry.get("tray")!.getWin()!.webContents.send("update idle mode", mode);
};

export const onIdleModeCountdownStart = (timerStart: IdleModeSettings["timerStart"], timerValue: IdleModeSettings["timerValue"]) => {
  windowInstanceRegistry.get("tray")!.getWin()!.webContents.send("idle mode countdown start", timerStart, timerValue);
};

export const onGetIdleModeData = async () => {
  const { isEnabled, timerStart, timerValue } = await getIdleModeData();
  windowInstanceRegistry.get("tray")!.getWin()!.webContents.send("idle mode initial data", isEnabled, timerStart, timerValue);
};
