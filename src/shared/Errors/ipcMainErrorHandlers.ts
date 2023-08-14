import { app } from 'electron';
import { IPC_MAIN_ERROR_FILE_PATH, recordError } from './utils';

export const initIpcMainErrorHandlers = () => {
  process.on('uncaughtException', async (error) => {
    await recordError(error, IPC_MAIN_ERROR_FILE_PATH);
    app.exit(1);
  });

  process.on('unhandledRejection', async (reason) => {
    await recordError(reason, IPC_MAIN_ERROR_FILE_PATH);
    app.exit(1);
  });
};
