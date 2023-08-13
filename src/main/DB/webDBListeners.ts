import { ipcMain } from 'electron';
import { utilsWithCatch } from './utilsWithCatch';

let webDBListeners: { [key: string]: Function; };

const setupListenersList = () => {
  webDBListeners = {
    onAddWord: utilsWithCatch.get("onAddWord")!,
    onEditWord: utilsWithCatch.get("onAddWord")!,
    onDeleteWord: utilsWithCatch.get("onDeleteWord")!,
    onDictionaryClear: utilsWithCatch.get("onDictionaryClear")!,
    initStatisticData: utilsWithCatch.get("updateStatistic")!,
    onStatisticClear: utilsWithCatch.get("onStatisticClear")!,
    initPracticeData: utilsWithCatch.get("updatePracticeData")!,
    updatePracticeData: utilsWithCatch.get("updatePracticeData")!,
    updateStatistic: utilsWithCatch.get("updateStatistic")!,
    initAppSettingsData: utilsWithCatch.get("updateAppSettingsData")!,
    updateAppSettingsData: utilsWithCatch.get("updateAppSettingsData")!,
    onAppSettingsClear: utilsWithCatch.get("onAppSettingsClear")!,
    importAppDBData: utilsWithCatch.get("importAppDBData")!,
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
