import { ipcMain } from 'electron';
import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { Word } from '../../DB/interface';
import { onAddWord } from '../../DB/utils';
import { sendToMainWindowNewPassivePracticeResult } from '../../mainWindow/windowMessaging';

const onPassivePracticeResult = (e: Electron.IpcMainEvent, result: boolean, word: Word) => {
  console.log("onPassivePracticeResult", result);

  if (windowInstanceRegistry.get("main")!.getIsClosed()) {
    console.log('main win is closed');
    e.reply("updateDBPracticeResult");
  } else {
    console.log('main win is opened');
    windowInstanceRegistry.get("passivePractice")!.getWin()!.close();
    sendToMainWindowNewPassivePracticeResult(result, word);
  }
};

// if main win is closed - update by passivePractice win
const onUpdateDBWithPracticeResult = (_, word: Word) => {
  console.log("onUpdateDBWithPracticeResult");
  onAddWord(word);
  windowInstanceRegistry.get("passivePractice")!.getWin()!.close();
};

/**
 * listening for passive practice result & update
 */
export const initWindowListeners = () => {
  ipcMain.on("passivePracticeResult", onPassivePracticeResult);
  // if main win is closed - update by passivePractice win
  ipcMain.on("updateDBPracticeResult", onUpdateDBWithPracticeResult);
};
