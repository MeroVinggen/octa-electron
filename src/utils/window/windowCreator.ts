import { is } from '@electron-toolkit/utils';
import { BrowserWindow } from 'electron';
import { join } from 'path';

type WindowEvents = "ready-to-show" | "closed"

type CreateWindowConfig = {
  width: number;
  height: number;
  show: boolean;
  preload: string;
  listeners: { event: WindowEvents, handlers: Function[]; }[];
  sourceLoader: (win: BrowserWindow) => void;
};

export const createWindow = (config: CreateWindowConfig) => {
  const win = new BrowserWindow({
    width: config.width,
    height: config.height,
    show: config.show,
    webPreferences: {
      preload: join(__dirname, config.preload),
      sandbox: false,
      devTools: is.dev
    },
  });

  win.setMenu(null);

  if (is.dev) {
    win.webContents.openDevTools();
  }

  config.listeners.forEach(({ event, handlers}) => {
    handlers.forEach((handler) => {
      // @ts-ignore
      win.on(event, handler);
    });
  });

  config.sourceLoader(win);

  return win;
};
