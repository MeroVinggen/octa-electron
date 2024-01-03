import { exec } from "child_process";
import { unlink, writeFile } from "fs/promises";
import { join, resolve } from "path";
import { resetAppConfigJSON } from "./resetAppConfigJSON";

export const resetWebAppDB = async () => {
  await Promise.all([
    writeFile(join(resolve("./"), ".env"), "PRELOAD_VITE_DROP_WEB_DB = 1"),
    resetAppConfigJSON(),
    new Promise((res) => {
      exec(`cd ${resolve("./")} && pnpm dev`, res);
    })
      .then(resetAppConfigJSON) // after pnpm dev should again delete the config file),
      .then(() => unlink(join(resolve("./"), ".env")))
      .catch((err) => console.log(err))
  ]);

  console.log("App webDB reset");
};
