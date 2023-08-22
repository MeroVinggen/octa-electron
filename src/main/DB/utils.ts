import { desktopDB } from './desktopDB';
import { desktopDBObserver } from './desktopDBObserver';
import { AppSettings, Word } from './interface';

export const onAddWord = async (word: Word) => {
  await desktopDB.push(`/dictionary/${word.id}`, word);
};

export const onEditWord = async (word: Word) => {
  await onAddWord(word);
  desktopDBObserver.broadcast("onEditWord", word.id);
};

export const onDeleteWord = async (wordId: Word["id"]) => {
  await desktopDB.delete(`/dictionary/${wordId}`);
  desktopDBObserver.broadcast("onDeleteWord", wordId);
};

export const onDictionaryClear = async () => {
  await desktopDB.delete("/dictionary");
  desktopDBObserver.broadcast("onDictionaryClear");
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

// init & update
export const updateAppSettingsData = async (appSettingsData) => {
  await desktopDB.push('/appSettings', appSettingsData);
  desktopDBObserver.broadcast("updateAppSettings");
};

export const onAppSettingsClear = async () => {
  await desktopDB.delete('/appSettings');
  desktopDBObserver.broadcast("clearAppSettings");
};

export const getAppSettingsData = async (): Promise<AppSettings> => {
  return desktopDB.getData("/appSettings");
};

type Rows = Word & {
  $types: unknown;
};

const dictionaryDataImport = (rows: Rows[]) => {
  // removing unneeded '$types' prop
  rows.forEach(({ $types, ...word }) => onAddWord(word));
};

const practiceSettingsDataImport = (rows) => {
  updatePracticeData(rows[0].$[1]);
};

const statisticDataImport = (rows) => {
  rows.forEach(updateStatistic);
};

const appSettingsDataImport = (rows) => {
  updateAppSettingsData(rows[0].$[1]);
};

const importHandlers = {
  dictionary: dictionaryDataImport,
  practiceSettings: practiceSettingsDataImport,
  statistic: statisticDataImport,
  appSettings: appSettingsDataImport
};

const parseImportedData = async (file: File) => {
  const dataArr = JSON.parse(await file.text()).data.data;
  dataArr.forEach(({ tableName, rows }) => {
    importHandlers[tableName](rows);
  });
};

export const importAppDBData = async (file: File) => {
  await desktopDB.delete('/');
  parseImportedData(file);
};
