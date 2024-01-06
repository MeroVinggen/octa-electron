import { windowInstanceRegistry } from "../../shared/windowRegistries/windowInstanceRegistry";
import { desktopDB } from './desktopDB';
import { desktopDBPubSub } from './desktopDBPubSub';
import { AppSettings, IdleMode, Word } from './interface';

export const onAddWord = async (word: Word) => {
  await desktopDB.push(`/dictionary/${word.id}`, word);
};

export const onEditWord = async (word: Word) => {
  await onAddWord(word);
  desktopDBPubSub.publish("onEditWord", word.id);
};

export const onDeleteWord = async (wordId: Word["id"]) => {
  await desktopDB.delete(`/dictionary/${wordId}`);
  desktopDBPubSub.publish("onDeleteWord", wordId);
};

export const onDictionaryClear = async () => {
  await desktopDB.delete("/dictionary");
  desktopDBPubSub.publish("onDictionaryClear");
};

export const getDictionaryData = async () => {
  return desktopDB.getData("/dictionary");
};

/**
 * returns `true` if it's empty, otherwise `false`
 */
export const checkDictionaryIsEmpty = async () =>
  desktopDB.getData("/dictionary")
    .then((data) => Object.keys(data).length === 0)
    // if can't read '/dictionary' it means it's empty
    .catch(() => true);

export const onStatisticClear = async () => {
  await desktopDB.delete('/statistic');
};

// init & update
export const updateStatistic = async (yearData) => {
  await desktopDB.push(`/statistic/${yearData.year}`, yearData);
};

// init & update
export const updatePracticeData = async (practiceData) => {
  await desktopDB.push('/practiceSettings', practiceData);
};

/* ------------------------------ app settings ------------------------------ */

// init & update
export const updateAppSettingsData = async (appSettingsData: AppSettings) => {
  await desktopDB.push('/appSettings', appSettingsData);
  desktopDBPubSub.publish("updateAppSettings");
};

export const onAppSettingsClear = async () => {
  await desktopDB.delete('/appSettings');
  desktopDBPubSub.publish("clearAppSettings");
};

export const getAppSettingsData = async (): Promise<AppSettings> => {
  return desktopDB.getData("/appSettings");;
};

/* -------------------------------- idle mode ------------------------------- */

// init & update
export const updateIdleMode = async (idleModeData: IdleMode) => {
  await desktopDB.push('/idleMode', idleModeData);
};

export const getIdleMode = async (): Promise<IdleMode> => {
  return desktopDB.getData("/idleMode");
};

type DictionaryRow = Word & {
  $types: unknown;
};

const dictionaryDataImport = async (rows: DictionaryRow[]) => {
  for (let i = 0; i < rows.length; i += 1) {
    // removing unneeded '$types' prop
    delete rows[i].$types;
    await onAddWord(rows[i]);
  }
};

const practiceSettingsDataImport = (rows) => {
  return updatePracticeData(rows[0].$[1]);
};

const idleModeDataImport = (rows) => {
  return updatePracticeData(rows[0].$[1]);
};

const appSettingsDataImport = (rows) => {
  return updateAppSettingsData(rows[0].$[1]);
};

const statisticDataImport = async (rows: unknown[]) => {
  for (let i = 0; i < rows.length; i += 1) {
    await updateStatistic(rows[i]);
  }
};

const importHandlers = {
  dictionary: dictionaryDataImport,
  practiceSettings: practiceSettingsDataImport,
  statistic: statisticDataImport,
  appSettings: appSettingsDataImport,
  idleMode: idleModeDataImport
};

const importHandlersCount = 5;
let currentImportHandlersInWork: Promise<void>[] = [];

const importAppDBData = async (tableName, rows) => {
  return importHandlers[tableName](rows);
};

export const onImportAppData = async (tableName, rows) => {
  await desktopDB.delete('/');
  currentImportHandlersInWork.push(importAppDBData(tableName, rows));

  if (currentImportHandlersInWork.length === importHandlersCount) {
    Promise.allSettled(currentImportHandlersInWork)
      .then(() => {
        currentImportHandlersInWork = [];
        windowInstanceRegistry.get("main")?.getWin()?.webContents.send("importDBDataFinished");
      })
  }
}
