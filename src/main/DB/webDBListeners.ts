import { ipcMain } from 'electron';
import { importAppDBData, onAddWord, onAppSettingsClear, onDeleteWord, onDictionaryClear, onStatisticClear, updateAppSettingsData, updatePracticeData, updateStatistic } from './utils';

const webDBListeners = {
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

/**
 * updating desktop DB according to web DB changes
 */
export const initWebDBListeners = () => {
  Object.entries(webDBListeners).forEach(([key, handler]) => {
    ipcMain.on(key, (_, data) => handler(data));
  });
};
