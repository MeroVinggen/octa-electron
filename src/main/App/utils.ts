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
import { initAutoLauncher } from '../autoLaunch/main';
import { initErrorWindowListeners } from '../errorWindow/windowMessaging';
import { initIdleMode, initIdleModeAppListeners } from "../idleMode/idleMode";
import { openMainWindow } from '../mainWindow/utils';
import { createMainWindow } from '../mainWindow/windowCreation';
import { initMainWindowListeners } from '../mainWindow/windowListeners';
import { initActivePracticeOnFirstLaunch } from '../practice/active/main';
import { initPassivePracticeOnFirstLaunch } from '../practice/passive/main';
import { initAppTray } from '../tray/initAppTray';
import { initTrayWindowListeners } from '../tray/windowListeners';
import { windowInstanceRegistry } from "../../shared/windowRegistries/windowInstanceRegistry";

export const APP_CONFIG = {
  firstLaunch: false
};

/**
  * quit if another app instance is already running
  */
// export const onAppTryLaunch = async () => {
export const onAppTryLaunch = () => {

  // if another app instance is already running
  if (!app.requestSingleInstanceLock()) {
    app.exit();
  } else {

    // main instance event
    app.on('second-instance', () => {
      openMainWindow();
    });
  }
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

  // fix for tay window blinking on show
  app.commandLine.appendSwitch('wm-window-animations-disabled');

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
  APP_CONFIG.firstLaunch = true;
};

const appNotFirstLaunchSetup = () => {
  initIdleMode();
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
  initAutoLauncher();
  initIdleModeAppListeners();
  initPassivePracticeOnFirstLaunch();
  initActivePracticeOnFirstLaunch();
};

type OnAppReadyProps = {
  openAppWindowAtStart: boolean;
};

/**
 * runs after app ready
 */
export const onAppReady = (data: OnAppReadyProps) => {
  
  // at first app launch tray will be created only after main window did full initialization
  // (e.g. webDB data is rdy)
  if (!APP_CONFIG.firstLaunch) {
    initAppTray();
  } else {
    windowInstanceRegistry.get("main")?.addNextDidFinishLoadListeners(initAppTray);
  }

  if (data.openAppWindowAtStart) {
    createMainWindow();
  }
};
