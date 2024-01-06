import { app, ipcMain, shell } from 'electron';
import { ERROR_LOG_FOLDER_PATH } from "../../shared/Errors/utils";
import { closeApp } from "../App/utils";

// if the error window will be closed in any other way other than "errorWinClose"
// the app will exit (look at error window creation listeners)
export const initErrorWindowListeners = () => {
  ipcMain.on("errorWinClose", () => {
    app.exit(1);
  });

  ipcMain.on("errorWinOpenErrorLogsFolder", () => {
    shell.openPath(ERROR_LOG_FOLDER_PATH);
    closeApp();
  });
};
