import { writeFile } from 'fs/promises';
import { join, resolve } from 'path';

(async () => {
  await Promise.all([
    writeFile(join(resolve("./"), "errorLogs", "ipcMainErrs.txt"), ""),
    writeFile(join(resolve("./"), "errorLogs", "mainWinErrs.txt"), ""),
    writeFile(join(resolve("./"), "errorLogs", "passivePracticeWinErr.txt"), ""),
  ]).catch((err) => console.log(err));

  console.log("Error logs cleared");
})();
