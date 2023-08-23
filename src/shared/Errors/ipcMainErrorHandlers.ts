import { app } from 'electron';
import { IPC_MAIN_ERROR_FILE_PATH, recordError } from './utils';

export const initIpcMainErrorHandlers = () => {
  process.on('uncaughtException', async (error) => {
    await recordError((error.message || error) + "\nstack: " + error?.stack, IPC_MAIN_ERROR_FILE_PATH);
    app.exit(1);
  });

  process.on('unhandledRejection', async (error: Error) => {
    await recordError((error.message || error) + "\nstack: " + error?.stack, IPC_MAIN_ERROR_FILE_PATH);
    app.exit(1);
  });
};

setTimeout(() => {
  throw new Error("test 1")
}, 2000)
