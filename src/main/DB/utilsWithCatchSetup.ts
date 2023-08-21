import { RunPromiseWithCatch } from '../../shared/Errors/utils';
import { checkDictionaryIsEmpty, getAppSettingsData, getDictionaryData, importAppDBData, onAddWord, onAppSettingsClear, onDeleteWord, onDictionaryClear, onStatisticClear, updateAppSettingsData, updatePracticeData, updateStatistic } from './utils';
import { utilsWithCatch } from './utilsWithCatch';

export const initUtilsWithCatchSetup = () => {
  utilsWithCatch.set("onAddWord", (...params) => RunPromiseWithCatch(onAddWord, params));
  utilsWithCatch.set("onDeleteWord", (...params) => RunPromiseWithCatch(onDeleteWord, params));
  utilsWithCatch.set("onDictionaryClear", (...params) => RunPromiseWithCatch(onDictionaryClear, params));
  utilsWithCatch.set("getDictionaryData", (...params) => RunPromiseWithCatch(getDictionaryData, params));
  utilsWithCatch.set("checkDictionaryIsEmpty", (...params) => RunPromiseWithCatch(checkDictionaryIsEmpty, params));
  utilsWithCatch.set("onStatisticClear", (...params) => RunPromiseWithCatch(onStatisticClear, params));
  utilsWithCatch.set("updateStatistic", (...params) => RunPromiseWithCatch(updateStatistic, params));
  utilsWithCatch.set("updatePracticeData", (...params) => RunPromiseWithCatch(updatePracticeData, params));
  utilsWithCatch.set("updateAppSettingsData", (...params) => RunPromiseWithCatch(updateAppSettingsData, params));
  utilsWithCatch.set("onAppSettingsClear", (...params) => RunPromiseWithCatch(onAppSettingsClear, params));
  utilsWithCatch.set("getAppSettingsData", (...params) => RunPromiseWithCatch(getAppSettingsData, params));
  utilsWithCatch.set("importAppDBData", (...params) => RunPromiseWithCatch(importAppDBData, params));
};
