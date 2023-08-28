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

// close window proceeds in ipcRendererErrorListeners (entire app close)
// and error window close event in window creation
export const initErrorWindowListeners = () => {
  // on window asking for error msg
  ipcMain.on("errorWindowGetError", (e) => {
    e.reply("errorWindowGetError", errorMsgs);
  });
};
