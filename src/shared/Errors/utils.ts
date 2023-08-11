import { existsSync, mkdirSync } from 'fs';
import { buildPathFromRoot } from '../../utils/helpers';
import { appendFile } from 'fs/promises';

export const ERROR_LOG_FOLDER_PATH = buildPathFromRoot("errorLogs");

export const createErrorLogFolder = () => {
  if (!existsSync(ERROR_LOG_FOLDER_PATH)) {
    mkdirSync(ERROR_LOG_FOLDER_PATH);
  }
};

export const recordIpcMainError = (err) => {
  appendFile(buildPathFromRoot(ERROR_LOG_FOLDER_PATH, "ipcMainErrs.txt"), `${String(new Date().toDateString())} - ${err}\n`);
};
