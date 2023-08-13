import { ipcMain } from 'electron';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';

let errorMsg: string;

export const setErrorMsg = (msg: string) => {
  errorMsg = msg;
};

export const initErrorWindowListeners = () => {
  // on window asking for error msg
  ipcMain.on("errorWindowGetError", (e) => {
    e.reply("errorWindowGetError", errorMsg);
  });
  
  ipcMain.on("errorWindowOkBtnClick", () => {
    windowInstanceRegistry.get("error")!.close();
  });
};
