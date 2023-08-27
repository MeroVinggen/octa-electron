import { electronApp, optimizer } from '@electron-toolkit/utils';
import { app } from 'electron';

export type LaunchAppConfig = {
  afterLaunch: Function[];
};
 
export const launchApp = async () => {
  await app.whenReady();

  electronApp.setAppUserModelId('octa.mero');

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // preventing app of quit if all windows are closed
  app.on("window-all-closed", () => null);
};
