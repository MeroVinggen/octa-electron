import { is } from '@electron-toolkit/utils';
import { BrowserWindow } from 'electron';
import { join } from 'path';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { createWindow } from '../../utils/window/windowCreator';

const trayWindowSizes = { 
  height: 105,
  width: 160,
};

export const getTrayWindowSizes = () => ({ ...trayWindowSizes });

const trayWindowSourceLoader = (win: BrowserWindow) => {
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + "/trayWindow/index.html");
  } else {
    win.loadFile(join(__dirname, '../renderer/trayWindow/index.html'));
  }
};

export const createTrayWindow = () => {
  const winRegistryInstance = windowInstanceRegistry.get("tray")!;

  const win = createWindow({
    windowSettings: {
      ...trayWindowSizes,
      show: false,
      frame: false,
      resizable: false,
      transparent: true,
      alwaysOnTop: true,
      skipTaskbar: true,
      webPreferences: {
        preload: join(__dirname, '../preload/main.js'),
        sandbox: false,
        devTools: false,
      }
    },
    sourceLoader: trayWindowSourceLoader,
    windowListeners: [
      {
        event: 'blur',
        handlers: [
          () => win.hide(),
        ]
      },
    ]
  });

  winRegistryInstance.setWin(win);
};
