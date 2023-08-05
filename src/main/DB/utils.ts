import { appdb } from './DB';
// import { AppSettings, SettingsStore, YearData } from './interface';

export const onAddWord = async (word) => {
  await appdb.push(`/dictionary/${word.id}`, word);
};

export const onDeleteWord = async (wordId) => {
  await appdb.delete(`/dictionary/${wordId}`);
};

export const onDictionaryClear = async () => {
  await appdb.delete(`/dictionary`);
};

export const onStatisticClear = async () => {
  await appdb.delete('/statistic');
};

export const updateStatistic = async (yearData) => {
  await appdb.push(`/statistic/${yearData.year}`, yearData);
};

export const updatePracticeData = async (practiceData) => {
  await appdb.push('/practiceSettings', practiceData);
};

export const updateAppSettingsData = async (appSettingsData) => {
  await appdb.push('/appSettings', appSettingsData);
};

export const onAppSettingsClear = async () => {
  await appdb.delete('/appSettings');
};


const dictionaryDataImport = (rows) => {
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
  dataArr.forEach(({tableName, rows}) => {
    importHandlers[tableName](rows);
  });
}

export const importAppDBData = async (file: File) => {
  await appdb.delete('/');
  parseImportedData(file);
};
