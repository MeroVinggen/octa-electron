import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { createDebounce } from '../../../utils/helpers';
import { desktopDBObserver } from '../../DB/desktopDBObserver';
import { checkDictionaryIsEmpty } from '../../DB/utils';
import { activePractice } from './main';

const proceedIfActivePracticeWindowNotClosed = (callback: Function, ...params: unknown[]) => {
  if (windowInstanceRegistry.get("activePractice")!.getIsClosed()) {
    return;
  }
  callback(...params);
};

const onDeleteWord = async () => {
  if (await checkDictionaryIsEmpty()) {
    windowInstanceRegistry.get("activePractice")!.close();
  }
};

let appDBObserverListeners: {
  onDeleteWord: (data: any) => void;
  updateAppSettings: (...params: unknown[]) => void;
  clearAppSettings: () => void;
};

const initAppDBObserverListeners = () => {
  appDBObserverListeners = {
    onDeleteWord: (data) => proceedIfActivePracticeWindowNotClosed(onDeleteWord, data),
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
