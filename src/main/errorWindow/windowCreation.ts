import { is } from '@electron-toolkit/utils';
import { app, screen, type BrowserWindow } from 'electron';
import { join } from 'path';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { createWindow } from '../../utils/window/windowCreator';
import appIconURL from '/resources/octopus-red.png?asset';

const errorWindowSourceLoader = (win: BrowserWindow) => {
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + "/errorWindow/index.html");
  } else {
    win.loadFile(join(__dirname, '../renderer/errorWindow/index.html'));
  }
};

export const createErrorWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const winRegistryInstance = windowInstanceRegistry.get("error")!;

  const win = createWindow({
    windowSettings: {
      height: 90,
      width: 220,
      x: width - 230, // 10px - screen edge margin
      y: height / 2 - 45,
      show: false,
      frame: false,
      transparent: true,
      resizable: false,
      icon: appIconURL,
      webPreferences: {
        preload: join(__dirname, '../preload/main.js'),
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
      {
        event: "closed",
        handlers: [
          () => app.exit(1)
        ]
      }
    ]
  });

  winRegistryInstance.setWin(win);
};
