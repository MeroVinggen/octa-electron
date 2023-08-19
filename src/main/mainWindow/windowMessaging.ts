import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { Word } from '../DB/interface';

export const sendToMainWindowNewPassivePracticeResult = (result: boolean, word: Word, practiceTarget: "original" | "translation") => {
  windowInstanceRegistry.get("main")!.getWin()!.webContents.send("newPassivePracticeComplete", result, word.id, practiceTarget);
};
