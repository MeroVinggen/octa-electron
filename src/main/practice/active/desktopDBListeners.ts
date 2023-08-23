import { createDebounce } from '../../../utils/helpers';
import { desktopDBObserver } from '../../DB/desktopDBObserver';
import { activePractice } from './main';

// 30s
const updateAppSettingsWithDebounce = createDebounce(activePractice.updateAppSettings, 30_000);

const appDBObserverListeners = {
  updateAppSettings: updateAppSettingsWithDebounce,
  clearAppSettings: activePractice.stopCurrentTimers,
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
