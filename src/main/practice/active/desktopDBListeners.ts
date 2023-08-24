import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { createDebounce } from '../../../utils/helpers';
import { desktopDBPubSub } from '../../DB/desktopDBPubSub';
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

/**
 * listening desktop DB for active practice settings update
 */
export const initActivePracticeDesktopDBObserverListeners = () => {
  desktopDBPubSub.subscribe("onDeleteWord", (data) => proceedIfActivePracticeWindowNotClosed(onDeleteWord, data));
  desktopDBPubSub.subscribe("updateAppSettings", createDebounce(activePractice.updateAppSettings, 1_000));
  desktopDBPubSub.subscribe("clearAppSettings", activePractice.stopCurrentTimers);
};
