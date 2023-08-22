import { ipcMain } from 'electron';
import { importAppDBData, onAddWord, onAppSettingsClear, onDeleteWord, onDictionaryClear, onEditWord, onStatisticClear, updateAppSettingsData, updatePracticeData, updateStatistic } from './utils';

let webDBListeners: { [key: string]: Function; };

const setupListenersList = () => {
  webDBListeners = {
    onAddWord,
    onEditWord,
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
};

/**
 * updating desktop DB according to web DB changes
 */
export const initWebDBListeners = () => {
  setupListenersList();

  Object.entries(webDBListeners).forEach(([key, handler]) => {
    ipcMain.on(key, (_, data) => handler(data));
  });
};
