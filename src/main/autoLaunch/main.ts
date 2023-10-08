import { app } from 'electron';
import { initAutoLaunchDesktopDBObserverListeners } from './desktopDBListeners';

export const initAutoLauncher = () => {
  initAutoLaunchDesktopDBObserverListeners();
};

export const enableAutoLaunch = () => {
  console.log("app auto launch disabled");
  return;

  if (import.meta.env.PROD) {
    app.setLoginItemSettings({
      openAtLogin: true
    });
  } else {
    console.log("app auto launch enabled | doesn't work in DEV");
  }
};

export const disableAutoLaunch = () => {
  app.setLoginItemSettings({
    openAtLogin: false
  });
};
