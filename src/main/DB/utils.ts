import { desktopDB } from './desktopDB';
import { desktopDBObserver } from './desktopDBObserver';
import { Word } from './interface';

// add & edit word
export const onAddWord = async (word: Word) => {
  await desktopDB.push(`/dictionary/${word.id}`, word);
};

export const onDeleteWord = async (wordId) => {
  await desktopDB.delete(`/dictionary/${wordId}`);
};

export const onDictionaryClear = async () => {
  await desktopDB.delete(`/dictionary`);
};

export const getDictionaryData = async () => {
  return desktopDB.getData(`/dictionary`);
};

/**
 * returns `true` if ot's empty, otherwise `false`
 */
export const checkDictionaryIsEmpty = async () => {
  return desktopDB.getData(`/dictionary`)
    .then((data) => Object.keys(data).length === 0);
};

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

export const getAppSettingsData = async () => {
  return desktopDB.getData(`/appSettings`);
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
