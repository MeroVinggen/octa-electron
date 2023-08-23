import AutoLaunch  from 'auto-launch';
import { getAppExePath } from '../App/utils';
import { initAutoLaunchDesktopDBObserverListeners } from './desktopDBListeners';

let octaAutoLauncher: AutoLaunch;

export const initAutoLauncher = () => {
  octaAutoLauncher = new AutoLaunch({
    name: 'Octa',
    path: getAppExePath(),
  });

  initAutoLaunchDesktopDBObserverListeners();
};

export const enableAutoLaunch = () => {
  if (import.meta.env.PROD) {
    octaAutoLauncher.enable();
  } else {
    console.log("auto launch enabled | doesn't work in DEV")
  }
}

export const disableAutoLaunch = () => octaAutoLauncher.disable();
