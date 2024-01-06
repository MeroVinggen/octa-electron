import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { IdleMode } from "../DB/interface";
import { getCurrentIdleModeData } from "../idleMode/idleMode";
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

// export const onIdleModeCountdownStart = (timerStart: IdleMode["timerStart"], timerValue: IdleMode["timerValue"]) => {
//   windowInstanceRegistry.get("tray")!.getWin()!.webContents.send("idle mode countdown start", timerStart, timerValue);
// };

export const onGetIdleModeData = async () => {
  windowInstanceRegistry.get("tray")!.getWin()!.webContents.send("idle mode initial data", ...getCurrentIdleModeData());
};
