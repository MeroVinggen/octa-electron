import { desktopDBObserver } from '../../DB/desktopDBObserver';
import { getAppSettingsData } from '../../DB/utils';
import { activePractice } from './main';

const updateAppSettings = async () => {
  const oldActivePracticeDataString = activePractice.settingsSnapshot.getSnapshot();
  const newActivePracticeData = (await getAppSettingsData()).practice.active;
  const newActivePracticeDataString = JSON.stringify(newActivePracticeData);

  const isChangedActivePracticeData = newActivePracticeDataString !== oldActivePracticeDataString;

  if (isChangedActivePracticeData) {
    activePractice.reInit(newActivePracticeData);
  }
};

let updateAppSettingsWithDebounceTimerID: NodeJS.Timeout;

// 30s
// let updateAppSettingsWithDebounceTimerTimeout = 30_000;
let updateAppSettingsWithDebounceTimerTimeout = 5_000;

const updateAppSettingsWithDebounce = () => {
  clearTimeout(updateAppSettingsWithDebounceTimerID);
  updateAppSettingsWithDebounceTimerID = setTimeout(
    updateAppSettings,
    updateAppSettingsWithDebounceTimerTimeout
  );
};

const appDBObserverListeners = {
  updateAppSettings: updateAppSettingsWithDebounce,
  clearAppSettings: () => activePractice.stopCurrentTimers(),
} as const;

/**
 * listening desktop DB for active practice settings update
 */
export const initActivePracticeDesktopDBObserverListeners = () => {
  desktopDBObserver.subscribe((action, data) => {
    if (action in appDBObserverListeners) {
      appDBObserverListeners[action](data);
    } else {
      throw new Error("Unknown desktopDBObserver command - " + action);
    }
  });
};
