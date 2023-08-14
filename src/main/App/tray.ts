import { Tray } from 'electron';
import appIconURL from '/resources/octopus-teal.png?asset';

let tray: Electron.CrossProcessExports.Tray;

export const initAppTray = () => {
  tray = new Tray(appIconURL);

  tray.setToolTip('Octa');
};
