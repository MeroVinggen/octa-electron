import { writeFile } from 'fs/promises';
import { join, resolve } from 'path';

export const resetAppDB = async () => {
  await Promise.all([
    writeFile(join(resolve("./"), "DB/DesktopDB.json"), "{}"),
  ]).catch((err) => console.log(err));

  console.log("App DB resetted");
};
