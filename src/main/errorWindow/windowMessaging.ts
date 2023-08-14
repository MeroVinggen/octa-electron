import { ipcMain } from 'electron';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';

const errorMsgs: string[] = [];

export const addErrorMsg = (msg: string) => {
  errorMsgs.push(msg);

  const errorWindow = windowInstanceRegistry.get("error")!;

  // if error window is already open sending updated errors array
  if (!errorWindow.getIsClosed()) {
    errorWindow.getWin()!.webContents.send("errorWindowGetError", errorMsgs);
  }
};

export const initErrorWindowListeners = () => {
  // on window asking for error msg
  ipcMain.on("errorWindowGetError", (e) => {
    e.reply("errorWindowGetError", errorMsgs);
  });
  
  ipcMain.on("errorWindowOkBtnClick", () => {
    windowInstanceRegistry.get("error")!.close();
  });
};
