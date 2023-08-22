import { initPassivePracticeDesktopDBObserverListeners } from './desktopDBListeners';
import { setupPassivePractice } from './practiceSetup';
import { initWindowListeners } from './windowListeners';

export const initPassivePractice = () => {
  initWindowListeners();
  initPassivePracticeDesktopDBObserverListeners();
  setupPassivePractice();
};

/**
 * not calling passive practice setup
 */
export const initPassivePracticeOnFirstLaunch = () => {
  initWindowListeners();
  initPassivePracticeDesktopDBObserverListeners();
};
