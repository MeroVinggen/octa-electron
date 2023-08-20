import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';

/**
 * hiding tray window (is not closing)
 */
export const closeTrayWindow = () => {
  windowInstanceRegistry.get("tray")!.getWin()!.hide();
};

export const getTrayWinCoord = (mouseCoord: number, trayWinSize: number, screenSize: number) => {
  // 50 - offset from screen edge
  const isTrayWinFitsInScreen = mouseCoord + trayWinSize < screenSize - 50;

  if (isTrayWinFitsInScreen) {
    return mouseCoord;
  }

  return screenSize - trayWinSize - 10;
};
