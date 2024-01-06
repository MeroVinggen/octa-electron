import { ipcMain } from 'electron';
import { onAddWord, onAppSettingsClear, onDeleteWord, onDictionaryClear, onEditWord, onImportAppData, onStatisticClear, updateAppSettingsData, updateIdleMode, updatePracticeData, updateStatistic } from './utils';

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
    initIdleModeData: updateIdleMode,
    updateIdleModeData: updateIdleMode,
    onAppSettingsClear,
    importAppDBData: onImportAppData,
  };
};

/**
 * updating desktopDB according to webDB changes
 */
export const initWebDBListeners = () => {
  setupListenersList();

  Object.entries(webDBListeners).forEach(([key, handler]) => {
    ipcMain.on(key, (_, ...data) => handler(...data));
    // ipcMain.on(key, (_, ...data) => { console.log(`DB listener - ${key}`); handler(...data) });
  });
};
