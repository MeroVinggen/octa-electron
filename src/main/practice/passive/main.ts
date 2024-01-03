import { Practice } from '../Practice';
import { initPassivePracticeDesktopDBObserverListeners } from './desktopDBListeners';
import { createPassivePracticeWindow } from './windowCreation';
import { initWindowListeners } from './windowListeners';

export let passivePractice: Practice;

const initPassivePracticeInstance = () => {
  passivePractice = new Practice("passivePractice", createPassivePracticeWindow, "passive");
};

// export const initPassivePractice = () => {
//   initPassivePracticeInstance();
//   initWindowListeners();
//   initPassivePracticeDesktopDBObserverListeners();
//   passivePractice.setup();
// };

/**
 * not calling passive practice setup
 */
export const initPassivePracticeOnFirstLaunch = () => {
  initPassivePracticeInstance();
  initWindowListeners();
  initPassivePracticeDesktopDBObserverListeners();
};
