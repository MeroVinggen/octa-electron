import { writeFile } from 'fs/promises';
import { join, resolve } from 'path';

export const resetErrorLogs = async () => {
  await Promise.all([
    writeFile(join(resolve("./"), "errorLogs", "ipcMainErrs.txt"), ""),
    writeFile(join(resolve("./"), "errorLogs", "mainWinErrs.txt"), ""),
    writeFile(join(resolve("./"), "errorLogs", "passivePracticeWinErr.txt"), ""),
    writeFile(join(resolve("./"), "errorLogs", "activePracticeWinErr.txt"), ""),
    writeFile(join(resolve("./"), "errorLogs", "trayWinErr.txt"), ""),
    writeFile(join(resolve("./"), "errorLogs", "errorWinErr.txt"), ""),
  ]).catch((err) => console.log(err));

  console.log("Error logs cleared");
};
