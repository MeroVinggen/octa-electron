import { desktopDBPubSub } from '../DB/desktopDBPubSub';
import { getAppSettingsData } from '../DB/utils';
import { disableAutoLaunch, enableAutoLaunch } from './main';

const onUpdateAppSettings = async () => {
  (await getAppSettingsData()).basic.startWithSystem
    ? enableAutoLaunch()
    : disableAutoLaunch();
};

export const initAutoLaunchDesktopDBObserverListeners = () => {
  desktopDBPubSub.subscribe("updateAppSettings", onUpdateAppSettings);
};
