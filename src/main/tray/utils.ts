import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { getTrayInstance } from './initAppTray';

/**
 * hiding tray window (is not closing)
 */
export const closeTrayWindow = () => {
  windowInstanceRegistry.get("tray")!.getWin()!.hide();
};

export const getTrayWinCoord = (mouseCoord: number, trayWinSize: number, screenSize: number) => {
  // 55 = 50 offset from screen edge + 5 shift from mouse
  const isTrayWinFitsInScreen = mouseCoord + trayWinSize + 55 < screenSize;

  if (isTrayWinFitsInScreen) {
    return mouseCoord + 5;
  }

  return mouseCoord - trayWinSize - 5;
};

export const destroyTray = () => {
  getTrayInstance().destroy();
};
