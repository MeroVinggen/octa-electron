import { existsSync, mkdirSync } from 'fs';
import { appendFile } from 'fs/promises';
import { join } from 'path';
import { createErrorWindow } from '../../main/errorWindow/windowCreation';
import { addErrorMsg } from '../../main/errorWindow/windowMessaging';
import { buildPathFromRoot } from '../../utils/helpers';
import { windowInstanceRegistry } from '../windowRegistries/windowInstanceRegistry';

export const ERROR_LOG_FOLDER_PATH = buildPathFromRoot("errorLogs");

export const IPC_MAIN_ERROR_FILE_PATH = join(ERROR_LOG_FOLDER_PATH, "ipcMainErrs.txt");
export const IPC_RENDERER_MAIN_WINDOW_ERROR_FILE_PATH = join(ERROR_LOG_FOLDER_PATH, "mainWinErrs.txt");
export const IPC_RENDERER_PASSIVE_PRACTICE_WINDOW_ERROR_FILE_PATH = join(ERROR_LOG_FOLDER_PATH, "passivePracticeWinErr.txt");

export const createErrorLogFolder = () => {
  if (!existsSync(ERROR_LOG_FOLDER_PATH)) {
    mkdirSync(ERROR_LOG_FOLDER_PATH);
  }
};

export const recordError = (err, path: string) =>
  appendFile(path, `${String(new Date().toDateString())} - ${err}\n`)
    .catch((err) => console.log(err));

export const RunPromiseWithCatch = async<T extends (...args: any) => any>(func: T, params: unknown[]): Promise<ReturnType<T> | undefined> => {
  try {
    return await func(...params);
  } catch (err) {
    recordError(err, IPC_MAIN_ERROR_FILE_PATH);
    showErrorWindow("Run promise with catch fail: " + err);
  }
};

export const showErrorWindow = (error: string) => {
  addErrorMsg(error);
  
  // open error window only if it's closed
  if (windowInstanceRegistry.get("error")!.getIsClosed()) {
    createErrorWindow();
  }
};
