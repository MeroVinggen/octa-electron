import { is } from '@electron-toolkit/utils';
import { BrowserWindow } from 'electron';
import { join } from 'path';
import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { createWindow } from '../../../utils/window/windowCreator';
import appIconURL from '/resources/octopus-teal.png?asset';

const passivePracticeWindowSourceLoader = (win: BrowserWindow) => {
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + "/passivePractice/index.html");
  } else {
    win.loadFile(join(__dirname, '../renderer/passivePractice/index.html'));
  }
};

export const createPassivePracticeWindow = () => {
  const winRegistryInstance = windowInstanceRegistry.get("passivePractice")!;

  const win = createWindow({
    windowSettings: {
      height: 600,
      width: 400,
      show: false,
      frame: false,
      resizable: false,
      icon: appIconURL,
      webPreferences: {
        preload: join(__dirname, '../preload/main.js'),
        sandbox: false,
        devTools: is.dev,
      }
    }, 
    sourceLoader: passivePracticeWindowSourceLoader,
    windowListeners: [
      {
        event: 'ready-to-show',
        handlers: [
          () => winRegistryInstance.getWin()!.showInactive(),
          () => winRegistryInstance.onOpen(),
        ]
      },
      {
        event: 'closed',
        handlers: [
          () => winRegistryInstance.onClose(),
        ]
      },
    ]
  });

  winRegistryInstance.setWin(win);
};
