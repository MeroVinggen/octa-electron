import { existsSync, mkdirSync } from 'fs';
import { appendFile } from 'fs/promises';
import { join, resolve } from 'path';

export const WEEK_DAY_BY_INDEX = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
} as const;

export const toMilliseconds = ({ h = 0, m = 0, s = 0 }: { h?: number, m?: number, s?: number; }) => (h * 3600 + m * 60 + s) * 1000;

export const ROOT_PATH = resolve('./');

export const ERRORS_LOGS_FOLDER = join(ROOT_PATH, "errorLogs");

export const createErrorLogsFolder = () => {
  if (!existsSync(ERRORS_LOGS_FOLDER)) {
    mkdirSync(ERRORS_LOGS_FOLDER);
  }
};

export const writeIpcMainError = (err) => {
  appendFile(join(ERRORS_LOGS_FOLDER, "ipcMainErrs.txt"), `${String(new Date().toDateString())} - ${err}\n`);
};
