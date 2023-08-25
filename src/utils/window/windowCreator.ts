import { is } from '@electron-toolkit/utils';
import { BrowserWindow } from 'electron';

type WindowEvents = "ready-to-show" | "closed" | "show" | "blur" | "maximize" | "unmaximize";

type AdditionalSettings = {
  openDevTools?: boolean;
};

type CreateWindowConfig = {
  windowSettings: Electron.BrowserWindowConstructorOptions;
  additionalSettings?: AdditionalSettings;
  listeners: { event: WindowEvents, handlers: Function[]; }[];
  sourceLoader: (win: BrowserWindow) => void;
};

export const createWindow = (config: CreateWindowConfig) => {
  const win = new BrowserWindow(config.windowSettings);

  win.setMenu(null);

  if (config.additionalSettings?.openDevTools && is.dev) {
    setTimeout(() => {
      win.webContents.openDevTools();
    }, 1000);
  }

  config.listeners.forEach(({ event, handlers }) => {
    handlers.forEach((handler) => {
      // @ts-ignore
      win.on(event, handler);
    });
  });

  config.sourceLoader(win);

  return win;
};
