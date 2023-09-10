import { is } from '@electron-toolkit/utils';
import { BrowserWindow } from 'electron';

type WindowEvents = "ready-to-show" | "closed" | "show" | "blur" | "maximize" | "unmaximize";

type WebcontentsEvents = "did-finish-load";

type AdditionalSettings = {
  openDevTools?: boolean;
};

type CreateWindowConfig = {
  windowSettings: Electron.BrowserWindowConstructorOptions;
  additionalSettings?: AdditionalSettings;
  windowListeners: { event: WindowEvents, handlers: Function[]; }[];
  webcontentsListeners?: { event: WebcontentsEvents, handlers: Function[]; }[];
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

  config.windowListeners.forEach(({ event, handlers }) => {
    handlers.forEach((handler) => {
      // @ts-ignore
      win.on(event, handler);
    });
  });

  config.webcontentsListeners?.forEach(({ event, handlers }) => {
    handlers.forEach((handler) => {
      // @ts-ignore
      win.webContents.on(event, handler);
    });
  });

  config.sourceLoader(win);

  return win;
};
