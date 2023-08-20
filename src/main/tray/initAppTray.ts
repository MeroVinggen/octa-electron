import { Tray, screen } from 'electron';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { openMainWindow } from '../mainWindow/utils';
import { createTrayWindow, getTrayWindowSizes } from './windowCreation';
import appIconURL from '/resources/octopus-teal.png?asset';
import { getTrayWinCoord } from './utils';

let tray: Electron.CrossProcessExports.Tray;

export const initAppTray = () => {
  tray = new Tray(appIconURL);

  createTrayWindow();

  const trayWindow = windowInstanceRegistry.get("tray")!;

  tray.setToolTip('Octa');

  tray.on("click", openMainWindow);

  tray.on("right-click", () => {
    const trayWinSizes = getTrayWindowSizes();
    const screenSizes = screen.getPrimaryDisplay().workAreaSize;
    const { x, y } = screen.getCursorScreenPoint();

    trayWindow.getWin()!.setPosition(
      getTrayWinCoord(x, trayWinSizes.width, screenSizes.width),
      getTrayWinCoord(y, trayWinSizes.height, screenSizes.height)
    );
    trayWindow.getWin()!.show();
  });
};
