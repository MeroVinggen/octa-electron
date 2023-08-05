import { appDBObserver } from './appDBObserver';
import { importAppDBData, onAddWord, onAppSettingsClear, onDeleteWord, onDictionaryClear, onStatisticClear, updateAppSettingsData, updatePracticeData, updateStatistic } from './utils';

const appDBObserverListeners = {
  onAddWord,
  onEditWord: onAddWord,
  onDeleteWord,
  onDictionaryClear,
  initStatisticData: updateStatistic,
  onStatisticClear,
  initPracticeData: updatePracticeData,
  updatePracticeData,
  updateStatistic,
  initAppSettingsData: updateAppSettingsData,
  updateAppSettingsData,
  onAppSettingsClear,
  importAppDBData,
};

export const initDesktopDBListeners = () => {
  appDBObserver.subscribe((action, data) => {
    appDBObserverListeners[action](data);
  });
};
