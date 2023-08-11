import { ipcMain } from 'electron';
import { appendFile } from 'fs/promises';
import { buildPathFromRoot } from '../../utils/helpers';
import { ERROR_LOG_FOLDER_PATH, recordIpcMainError } from './utils';

export const initRenderersErrorListeners = () => {
  ipcMain.on("mainWinErr", async (_, errMsg: string) => {
    appendFile(buildPathFromRoot(ERROR_LOG_FOLDER_PATH, "mainWinErrs.txt"), `${String(new Date().toDateString())} - ${errMsg}\n`)
      .catch((err) => recordIpcMainError(err));
  });

  ipcMain.on("passivePracticeWinErr", async (_, errMsg: string) => {
    appendFile(buildPathFromRoot(ERROR_LOG_FOLDER_PATH, "passivePracticeWinErr.txt"), `${String(new Date().toDateString())} - ${errMsg}\n`)
      .catch((err) => recordIpcMainError(err));
  });
};
