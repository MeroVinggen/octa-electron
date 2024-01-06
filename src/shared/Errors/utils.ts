import { existsSync, mkdirSync } from 'fs';
import { appendFile } from 'fs/promises';
import { createErrorWindow } from '../../main/errorWindow/windowCreation';
import { destroyTray } from '../../main/tray/utils';
import { buildPathFromRoot } from '../../utils/helpers';
import { windowInstanceRegistry } from '../windowRegistries/windowInstanceRegistry';

export const ERROR_LOG_FOLDER_PATH = buildPathFromRoot("errorLogs");

export const IPC_MAIN_ERROR_FILE_PATH = buildPathFromRoot("errorLogs", "ipcMainErrs.txt");
export const IPC_RENDERER_MAIN_WINDOW_ERROR_FILE_PATH = buildPathFromRoot("errorLogs", "mainWinErrs.txt");
export const IPC_RENDERER_PASSIVE_PRACTICE_WINDOW_ERROR_FILE_PATH = buildPathFromRoot("errorLogs", "passivePracticeWinErr.txt");
export const IPC_RENDERER_ACTIVE_PRACTICE_WINDOW_ERROR_FILE_PATH = buildPathFromRoot("errorLogs", "activePracticeWinErr.txt");
export const IPC_RENDERER_TRAY_WINDOW_ERROR_FILE_PATH = buildPathFromRoot("errorLogs", "trayWinErr.txt");
export const IPC_RENDERER_ERROR_WINDOW_ERROR_FILE_PATH = buildPathFromRoot("errorLogs", "errorWinErr.txt");

export const createErrorLogFolder = () => {
  if (!existsSync(ERROR_LOG_FOLDER_PATH)) {
    mkdirSync(ERROR_LOG_FOLDER_PATH);
  }
};

const recordError = (err, path: string) =>
  appendFile(path, `\n${String(new Date().toDateString())} - ${err}\n`);

const showErrorWindow = () => {

  // open error window only if it's closed
  if (windowInstanceRegistry.get("error")!.getIsClosed()) {
    createErrorWindow();
  }
};

export const onError = async (error: Error, errorRecordFilePath: string) => {
  await recordError((error.message || error) + "\nstack: " + error.stack, errorRecordFilePath);
  closeAllSourcesExceptError();
  showErrorWindow();
};

/**
 * `close` all windows except error if opened and `destroy` tray
 */
const closeAllSourcesExceptError = () => {
  windowInstanceRegistry.get("activePractice")?.close();
  windowInstanceRegistry.get("passivePractice")?.close();
  windowInstanceRegistry.get("main")?.close();
  windowInstanceRegistry.get("tray")?.close();
  destroyTray();
};
