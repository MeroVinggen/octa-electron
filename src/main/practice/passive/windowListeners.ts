import { ipcMain } from 'electron';
import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { Word } from '../../DB/interface';
import { utilsWithCatch } from '../../DB/utilsWithCatch';
import { sendToMainWindowNewPassivePracticeResult } from '../../mainWindow/windowMessaging';

const onPassivePracticeResult = (e: Electron.IpcMainEvent, result: boolean, word: Word) => {
  if (windowInstanceRegistry.get("main")!.getIsClosed()) {
    e.reply("updateDBPracticeResult");
  } else {
    windowInstanceRegistry.get("passivePractice")!.close();
    sendToMainWindowNewPassivePracticeResult(result, word);
  }
};

// if main win is closed - update by passivePractice win
const onUpdateDBWithPracticeResult = (_, word: Word) => {
  utilsWithCatch.get("onAddWord")!(word);
  windowInstanceRegistry.get("passivePractice")!.close();
};

/**
 * listening for passive practice result & update
 */
export const initWindowListeners = () => {
  ipcMain.on("passivePracticeResult", onPassivePracticeResult);
  // if main win is closed - update by passivePractice win
  ipcMain.on("updateDBPracticeResult", onUpdateDBWithPracticeResult);
};
