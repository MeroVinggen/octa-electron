import { Practice } from '../Practice';
import { initActivePracticeDesktopDBObserverListeners } from './desktopDBListeners';
import { createActivePracticeWindow } from './windowCreation';
import { initWindowListeners } from './windowListeners';

export let activePractice: Practice;

const initActivePracticeInstance = () => {
  activePractice = new Practice("activePractice", createActivePracticeWindow, "active");
};

// export const initActivePractice = () => {
//   initActivePracticeInstance();
//   initWindowListeners();
//   initActivePracticeDesktopDBObserverListeners();
//   activePractice.setup();
// };

/**
 * not calling active practice setup
 */
export const initActivePracticeOnFirstLaunch = () => {
  initActivePracticeInstance();
  initWindowListeners();
  initActivePracticeDesktopDBObserverListeners();
};
