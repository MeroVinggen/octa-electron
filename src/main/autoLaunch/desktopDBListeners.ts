import { desktopDBObserver } from '../DB/desktopDBObserver';
import { getAppSettingsData } from '../DB/utils';
import { disableAutoLaunch, enableAutoLaunch } from './main';

const updateAppSettings = async () => {
  (await getAppSettingsData()).basic.startWithSystem
    ? enableAutoLaunch()
    : disableAutoLaunch();
};

export const initAutoLaunchDesktopDBObserverListeners = () => {
  desktopDBObserver.subscribe((action) => {
    if (action === "updateAppSettings") {
      updateAppSettings();
    }
  });
};
