import { IPC_MAIN_ERROR_FILE_PATH, onError } from './utils';

// app exit proceeding in ipcRendererErrorListeners on error window close
export const initIpcMainErrorHandlers = () => {
  process.on('uncaughtException', (error) => {
    onError(error, IPC_MAIN_ERROR_FILE_PATH);
  });

  process.on('unhandledRejection', async (error: Error) => {
    onError(error, IPC_MAIN_ERROR_FILE_PATH);
  });
};
