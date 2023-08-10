import { initPassivePracticeDesktopDBObserverListeners, setupPassivePractice } from './practiceSetup';
import { initWindowListeners } from './windowListeners';

export const initPassivePractice = () => {
  initWindowListeners();
  initPassivePracticeDesktopDBObserverListeners();
  setupPassivePractice();
};
