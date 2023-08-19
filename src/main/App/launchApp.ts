import { electronApp, optimizer } from '@electron-toolkit/utils';
import { app } from 'electron';

export type LaunchAppConfig = {
  afterLaunch: Function[];
};

export const launchApp = async () => {
  await app.whenReady();

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.dictionary.mero');

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // preventing app of quit if all windows are closed
  app.on("window-all-closed", () => null);
};
