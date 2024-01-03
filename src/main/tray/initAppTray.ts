import { Tray, screen } from 'electron';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { openMainWindow } from '../mainWindow/utils';
import { getTrayWinCoord } from './utils';
import { createTrayWindow, trayWindowSizes } from './windowCreation';
import appIconURL from '/resources/icon.ico?asset';

let tray: Electron.CrossProcessExports.Tray;

export const getTrayInstance = () => tray;

export const initAppTray = () => {
  tray = new Tray(appIconURL);

  createTrayWindow();

  tray.setToolTip('Octa');

  tray.on("click", openMainWindow);

  tray.on("right-click", () => {
    const screenSizes = screen.getPrimaryDisplay().workAreaSize;
    const { x, y } = screen.getCursorScreenPoint();
    const trayWindow = windowInstanceRegistry.get("tray")!;
    trayWindow.getWin()!.setBounds({
      x: getTrayWinCoord(x, trayWindowSizes.width, screenSizes.width),
      y: getTrayWinCoord(y, trayWindowSizes.height, screenSizes.height),
      width: trayWindowSizes.width,
      height: trayWindowSizes.height
    });
    trayWindow.getWin()!.show();
  });
};
