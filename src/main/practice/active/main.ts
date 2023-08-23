import { Practice } from '../Practice';
import { initActivePracticeDesktopDBObserverListeners } from './desktopDBListeners';
import { createActivePracticeWindow } from './windowCreation';
import { initWindowListeners } from './windowListeners';

export let activePractice: Practice;

export const initActivePractice = () => {
  activePractice = new Practice("activePractice", createActivePracticeWindow, "active");
  initWindowListeners();
  initActivePracticeDesktopDBObserverListeners();
  activePractice.setup();
};

/**
 * not calling active practice setup
 */
export const initActivePracticeOnFirstLaunch = () => {
  initWindowListeners();
  initActivePracticeDesktopDBObserverListeners();
};
