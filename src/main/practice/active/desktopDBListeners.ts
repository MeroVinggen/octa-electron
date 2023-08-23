import { createDebounce } from '../../../utils/helpers';
import { desktopDBObserver } from '../../DB/desktopDBObserver';
import { activePractice } from './main';

let appDBObserverListeners: {
  updateAppSettings: (...params: unknown[]) => void;
  clearAppSettings: () => void;
};

const initAppDBObserverListeners = () => {
  appDBObserverListeners = {
    // 30s
    updateAppSettings: createDebounce(activePractice.updateAppSettings, 30_000),
    clearAppSettings: activePractice.stopCurrentTimers,
  } as const;
};

/**
 * listening desktop DB for active practice settings update
 */
export const initActivePracticeDesktopDBObserverListeners = () => {
  initAppDBObserverListeners();

  desktopDBObserver.subscribe((action, data) => {
    if (action in appDBObserverListeners) {
      appDBObserverListeners[action](data);
    }
  });
};
