import { ipcMain } from 'electron';
import { appendFile } from 'fs/promises';
import { join } from 'path';
import { ERRORS_LOGS_FOLDER, writeIpcMainError } from '../../utils/helpers';

export const initRenderersErrorListeners = () => {
  ipcMain.on("mainWinErr", async (_, errMsg: string) => {
    appendFile(join(ERRORS_LOGS_FOLDER, "mainWinErrs.txt"), `${String(new Date().toDateString())} - ${errMsg}\n`)
      .catch((err) => writeIpcMainError(err));
  });

  ipcMain.on("passivePracticeWinErr", async (_, errMsg: string) => {
    appendFile(join(ERRORS_LOGS_FOLDER, "passivePracticeWinErr.txt"), `${String(new Date().toDateString())} - ${errMsg}\n`)
      .catch((err) => writeIpcMainError(err));
  });
};
