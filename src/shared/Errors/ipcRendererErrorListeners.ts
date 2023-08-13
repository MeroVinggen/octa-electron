import { ipcMain } from 'electron';
import { IPC_RENDERER_MAIN_WINDOW_ERROR_FILE_PATH, IPC_RENDERER_PASSIVE_PRACTICE_WINDOW_ERROR_FILE_PATH, recordError, showErrorWindow } from './utils';

export const initRenderersErrorListeners = () => {
  ipcMain.on("mainWinErr", async (_, errMsg: string) => {
    recordError(errMsg, IPC_RENDERER_MAIN_WINDOW_ERROR_FILE_PATH);
    showErrorWindow("MainWinErr error: " + errMsg);
  });

  ipcMain.on("passivePracticeWinErr", async (_, errMsg: string) => {
    recordError(errMsg, IPC_RENDERER_PASSIVE_PRACTICE_WINDOW_ERROR_FILE_PATH);
    showErrorWindow("PassivePracticeWinErr error: " + errMsg);
  });
};
