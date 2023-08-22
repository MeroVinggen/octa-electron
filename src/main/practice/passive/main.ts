import { Practice } from '../Practice';
import { initPassivePracticeDesktopDBObserverListeners } from './desktopDBListeners';
import { createPassivePracticeWindow } from './windowCreation';
import { initWindowListeners } from './windowListeners';

export let passivePractice: Practice;

export const initPassivePractice = () => {
  passivePractice = new Practice("passivePractice", createPassivePracticeWindow, "passive");
  initWindowListeners();
  initPassivePracticeDesktopDBObserverListeners();
  passivePractice.setup();
};

/**
 * not calling passive practice setup
 */
export const initPassivePracticeOnFirstLaunch = () => {
  initWindowListeners();
  initPassivePracticeDesktopDBObserverListeners();
};
