import { initRenderersErrorListeners } from '../shared/ipcMain/renderersErrorListeners';
import { initWindowInstanceRegistry } from '../shared/windowRegistries/utils';
import { createErrorLogsFolder } from '../utils/helpers';
import { launchApp } from './App/launchApp';
import { getAppSettingsData } from './DB/utils';
import { initWebDBListeners } from './DB/webDBListeners';
import { createMainWindow } from './mainWindow/windowCreation';
import { initPassivePractice } from './practice/passive/main';

(async () => {
  createErrorLogsFolder();
  initRenderersErrorListeners();
  initWindowInstanceRegistry();
  initWebDBListeners();
  initPassivePractice();

  const { startWithSystem, openAppWindowAtStart } = (await getAppSettingsData()).basic;

  launchApp({
    afterLaunch: [
      () => {
        openAppWindowAtStart && createMainWindow();
        // createMainWindow();

      }
    ]
  });
})();
