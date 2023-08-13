export type UtilsWithCatchKeys = "onAddWord"
  | "onDeleteWord"
  | "onDictionaryClear"
  | "getDictionaryData"
  | "onStatisticClear"
  | "updateStatistic"
  | "updatePracticeData"
  | "updateAppSettingsData"
  | "onAppSettingsClear"
  | "getAppSettingsData"
  | "importAppDBData";

type UtilsWithCatchValues = (...params: unknown[]) => unknown;

export const utilsWithCatch = new Map<UtilsWithCatchKeys, UtilsWithCatchValues>();
