import { app } from 'electron';
import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import { initIpcMainErrorHandlers } from '../../shared/Errors/ipcMainErrorHandlers';
import { initRenderersErrorListeners } from '../../shared/Errors/ipcRendererErrorListeners';
import { createErrorLogFolder } from '../../shared/Errors/utils';
import { initWindowInstanceRegistry } from '../../shared/windowRegistries/utils';
import { buildPathFromRoot } from '../../utils/helpers';
import { getAppSettingsData } from '../DB/utils';
import { initWebDBListeners } from '../DB/webDBListeners';
import { initErrorWindowListeners } from '../errorWindow/windowMessaging';
import { createMainWindow } from '../mainWindow/windowCreation';
import { initMainWindowListeners } from '../mainWindow/windowListeners';
import { initPassivePractice, initPassivePracticeOnFirstLaunch } from '../practice/passive/main';
import { initAppTray } from '../tray/initAppTray';
import { initTrayWindowListeners } from '../tray/windowListeners';

const APP_CONFIG = {
  firstLaunch: false
};

export const closeApp = () => app.quit();

const createAppConfig = () => {
  writeFile(buildPathFromRoot("appConfig.json"), JSON.stringify(APP_CONFIG));
};

const checkAppFirstLaunch = () => existsSync(buildPathFromRoot("appConfig.json")) ? false : true;

/**
 * runs before app ready 
 */
export const appLaunchPreparer = async () => {
  let openAppWindowAtStart: boolean;

  // on app first run
  if (checkAppFirstLaunch()) {
    openAppWindowAtStart = true;
    appFirstLaunchSetup();
    // app not first time run
  } else {
    ({ openAppWindowAtStart } = (await getAppSettingsData()).basic);
    appNotFirstLaunchSetup();
  }

  appGeneralSetup();

  return openAppWindowAtStart;
};

const appFirstLaunchSetup = () => {
  createAppConfig();
  initPassivePracticeOnFirstLaunch();
};

const appNotFirstLaunchSetup = () => {
  initPassivePractice();
};

/**
 * runs anyway on app start
 */
const appGeneralSetup = () => {
  createErrorLogFolder();
  initRenderersErrorListeners();
  initWindowInstanceRegistry();
  initWebDBListeners();
  initErrorWindowListeners();
  initIpcMainErrorHandlers();
  initMainWindowListeners();
  initTrayWindowListeners();
};

type OnAppReadyProps = {
  openAppWindowAtStart: boolean;
};

/**
 * runs after app ready
 */
export const onAppReady = (data: OnAppReadyProps) => {
  initAppTray();

  if (data.openAppWindowAtStart) {
    createMainWindow();
  }
};
