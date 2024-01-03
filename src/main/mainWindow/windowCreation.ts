import { is } from '@electron-toolkit/utils';
import { type BrowserWindow } from 'electron';
import { join } from 'path';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { createWindow } from '../../utils/window/windowCreator';
import { onWindowMaximize, onWindowUnmaximize } from './utils';
import appIconURL from '/resources/octopus-teal.png?asset';

const mainWindowSourceLoader = (win: BrowserWindow) => {
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + "/mainWindow/index.html");
  } else {
    win.loadFile(join(__dirname, '../renderer/mainWindow/index.html'));
  }
};

export const createMainWindow = () => {
  const winRegistryInstance = windowInstanceRegistry.get("main")!;

  const win = createWindow({
    windowSettings: {
      height: 700,
      width: 800,
      show: false,
      frame: false,
      icon: appIconURL,
      webPreferences: {
        preload: join(__dirname, '../preload/main.js'),
        sandbox: false,
        devTools: is.dev,
      }
    },
    sourceLoader: mainWindowSourceLoader,
    windowListeners: [
      {
        event: 'ready-to-show',
        handlers: [
          () => winRegistryInstance.getWin()!.show(),
          () => winRegistryInstance.onOpen(),
          () => winRegistryInstance.getWin()!.webContents.openDevTools(),
        ]
      },
      {
        event: 'closed',
        handlers: [
          () => winRegistryInstance.onClose(),
        ]
      },
      {
        event: 'maximize',
        handlers: [
          onWindowMaximize,
        ]
      },
      {
        event: 'unmaximize',
        handlers: [
          onWindowUnmaximize,
        ]
      }
    ],
    webcontentsListeners: [
      {
        event: 'did-finish-load',
        handlers: [
          ...winRegistryInstance.getNextDidFinishLoadListeners(),
        ]
      },
    ]
  });

  win.webContents.session.setSpellCheckerLanguages(['en-US', 'ru']);

  winRegistryInstance.setWin(win);
};
