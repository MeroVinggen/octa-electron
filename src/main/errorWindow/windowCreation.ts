import { is } from '@electron-toolkit/utils';
import { type BrowserWindow } from 'electron';
import { join } from 'path';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { createWindow } from '../../utils/window/windowCreator';
import { addOpenedErrorWindow, subtractOpenedErrorWindow } from './openedWindowCounter';

const errorWindowSourceLoader = (win: BrowserWindow) => {
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + "/errorWindow/index.html");
  } else {
    win.loadFile(join(__dirname, '../renderer/errorWindow/index.html'));
  }
};

export const createErrorWindow = () => {
  const winRegistryInstance = windowInstanceRegistry.get("error")!;

  const win = createWindow({
    windowSettings: {
      height: 350,
      width: 400,
      show: false,
      frame: false,
      transparent: true,
      resizable: false,
      webPreferences: {
        preload: join(__dirname, '../preload/errorWindow/main.js'),
        sandbox: false,
        devTools: is.dev,
      }
    },
    sourceLoader: errorWindowSourceLoader,
    listeners: [
      {
        event: 'show',
        handlers: [
          addOpenedErrorWindow,
        ]
      },
      {
        event: 'ready-to-show',
        handlers: [
          () => winRegistryInstance.getWin()!.show(),
          () => winRegistryInstance.onOpen(),
        ]
      },
      {
        event: 'closed',
        handlers: [
          () => winRegistryInstance.onClose(),
          subtractOpenedErrorWindow,
        ]
      },
    ]
  });

  winRegistryInstance.setWin(win);
};
