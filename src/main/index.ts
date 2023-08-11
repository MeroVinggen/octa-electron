import { initRenderersErrorListeners } from '../shared/Errors/renderersErrorListeners';
import { createErrorLogFolder } from '../shared/Errors/utils';
import { initWindowInstanceRegistry } from '../shared/windowRegistries/utils';
import { launchApp } from './App/launchApp';
import { checkAppFirstLaunch, createAppConfig } from './App/utils';
import { getAppSettingsData } from './DB/utils';
import { initWebDBListeners } from './DB/webDBListeners';
import { createMainWindow } from './mainWindow/windowCreation';
import { initPassivePractice } from './practice/passive/main';

(async () => {
  let openAppWindowAtStart: boolean;

  if (checkAppFirstLaunch()) {
    createAppConfig();
    openAppWindowAtStart = true;
  } else {
    ({ openAppWindowAtStart } = (await getAppSettingsData()).basic);
    initPassivePractice();
  }

  createErrorLogFolder();
  initRenderersErrorListeners();
  initWindowInstanceRegistry();
  initWebDBListeners();

  launchApp({
    afterLaunch: [
      () => {
        openAppWindowAtStart && createMainWindow();
        // createMainWindow();

      }
    ]
  });
})();
