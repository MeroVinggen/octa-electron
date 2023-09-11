import { electronApp, optimizer } from '@electron-toolkit/utils';
import { app } from 'electron';
import { openMainWindow } from '../mainWindow/utils';
import { onAppTryLaunch } from './utils';

export type LaunchAppConfig = {
  afterLaunch: Function[];
};

export const launchApp = async () => {
  onAppTryLaunch();

  await app.whenReady();

  electronApp.setAppUserModelId('octa.mero');

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // preventing app of quit if all windows are closed
  app.on("window-all-closed", () => null);

  // if user try to launch app - just opening the main window instead
  app.on('second-instance', openMainWindow);
};
