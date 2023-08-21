export type UtilsWithCatchKeys = "onAddWord"
  | "onDeleteWord"
  | "onDictionaryClear"
  | "getDictionaryData"
  | "checkDictionaryIsEmpty"
  | "onStatisticClear"
  | "updateStatistic"
  | "updatePracticeData"
  | "updateAppSettingsData"
  | "onAppSettingsClear"
  | "getAppSettingsData"
  | "importAppDBData";

type UtilsWithCatchValues = (...params: unknown[]) => unknown;

export const utilsWithCatch = new Map<UtilsWithCatchKeys, UtilsWithCatchValues>();
