import { app, ipcMain } from 'electron';
import { IPC_RENDERER_ACTIVE_PRACTICE_WINDOW_ERROR_FILE_PATH, IPC_RENDERER_ERROR_WINDOW_ERROR_FILE_PATH, IPC_RENDERER_MAIN_WINDOW_ERROR_FILE_PATH, IPC_RENDERER_PASSIVE_PRACTICE_WINDOW_ERROR_FILE_PATH, IPC_RENDERER_TRAY_WINDOW_ERROR_FILE_PATH, onError } from './utils';

export const initRenderersErrorListeners = () => {
  ipcMain.on("mainWinErr", (_, error: Error) => {
    onError(error, IPC_RENDERER_MAIN_WINDOW_ERROR_FILE_PATH);
  });

  ipcMain.on("passivePracticeWinErr", (_, error: Error) => {
    onError(error, IPC_RENDERER_PASSIVE_PRACTICE_WINDOW_ERROR_FILE_PATH);
  });

  ipcMain.on("activePracticeWinErr", (_, error: Error) => {
    onError(error, IPC_RENDERER_ACTIVE_PRACTICE_WINDOW_ERROR_FILE_PATH);
  });

  ipcMain.on("trayWinErr", (_, error: Error) => {
    onError(error, IPC_RENDERER_TRAY_WINDOW_ERROR_FILE_PATH);
  });

  ipcMain.on("errorWinErr", (_, error: Error) => {
    onError(error, IPC_RENDERER_ERROR_WINDOW_ERROR_FILE_PATH);
  });

  ipcMain.on("errorWinClose", () => {
    app.exit(1);
  });
};
