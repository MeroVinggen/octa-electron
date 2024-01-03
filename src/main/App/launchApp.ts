import { electronApp, optimizer } from '@electron-toolkit/utils';
import { app } from 'electron';

export const setAppAdditionalListenersAndModelId = () => {
  if (import.meta.env.DEV) {
    electronApp.setAppUserModelId('octa.test');
  } else {
    electronApp.setAppUserModelId('octa.mero');
  }

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // preventing app of quit if all windows are closed
  app.on("window-all-closed", () => null);
};
