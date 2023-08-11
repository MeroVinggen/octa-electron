import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import { initRenderersErrorListeners } from '../../shared/Errors/renderersErrorListeners';
import { createErrorLogFolder } from '../../shared/Errors/utils';
import { initWindowInstanceRegistry } from '../../shared/windowRegistries/utils';
import { buildPathFromRoot } from '../../utils/helpers';
import { getAppSettingsData } from '../DB/utils';
import { initWebDBListeners } from '../DB/webDBListeners';
import { createMainWindow } from '../mainWindow/windowCreation';
import { initPassivePractice } from '../practice/passive/main';

const APP_CONFIG = {
  firstLaunch: false
};

export const createAppConfig = () => {
  writeFile(buildPathFromRoot("appConfig.json"), JSON.stringify(APP_CONFIG));
};

export const checkAppFirstLaunch = () => existsSync(buildPathFromRoot("appConfig.json")) ? false : true;

/**
 * runs before app ready 
 */
export const appLaunchPreparer = async () => {
  let openAppWindowAtStart: boolean;

  if (checkAppFirstLaunch()) {
    openAppWindowAtStart = true;
    appFirstLaunchSetup();
  } else {
    ({ openAppWindowAtStart } = (await getAppSettingsData()).basic);
    appNotFirstLaunchSetup();
  }

  appGeneralSetup();

  return openAppWindowAtStart;
};

export const appFirstLaunchSetup = () => {
  createAppConfig();
};

export const appNotFirstLaunchSetup = () => {
  initPassivePractice();
};

/**
 * runs anyway on app start
 */
export const appGeneralSetup = () => {
  createErrorLogFolder();
  initRenderersErrorListeners();
  initWindowInstanceRegistry();
  initWebDBListeners();
};

type OnAppReadyProps = {
  openAppWindowAtStart: boolean;
};

/**
 * runs after app ready
 */
export const onAppReady = (data: OnAppReadyProps) => {
  if (data.openAppWindowAtStart) {
    createMainWindow();
  }
};
