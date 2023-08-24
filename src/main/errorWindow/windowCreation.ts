import { is } from '@electron-toolkit/utils';
import { type BrowserWindow } from 'electron';
import { join } from 'path';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { createWindow } from '../../utils/window/windowCreator';

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
      height: 500,
      width: 700,
      show: false,
      frame: false,
      hasShadow: true,
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
        event: 'ready-to-show',
        handlers: [
          () => winRegistryInstance.getWin()!.show(),
          () => winRegistryInstance.onOpen(),
        ]
      },
    ]
  });

  winRegistryInstance.setWin(win);
};
