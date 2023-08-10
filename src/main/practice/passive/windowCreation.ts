import { is } from '@electron-toolkit/utils';
import { BrowserWindow } from 'electron';
import { join } from 'path';
import { createWindow } from '../../../utils/window/windowCreator';
import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';

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
    height: 600,
    width: 400,
    show: false,
    preload: '../preload/passivePractice/main.js',
    sourceLoader: passivePracticeWindowSourceLoader,
    listeners: [
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
        ]
      },
    ]
  });

  winRegistryInstance.setWin(win);
};
