import { electronApp, optimizer } from '@electron-toolkit/utils';
import { app } from 'electron';

export type LaunchAppConfig = {
  afterLaunch: Function[];
};

export const launchApp = async(config?: LaunchAppConfig) => {
  await app.whenReady();

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.dictionary.mero');

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  config?.afterLaunch?.forEach(func => func());
};
