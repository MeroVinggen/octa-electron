import { existsSync } from 'fs';
import { unlink } from 'fs/promises';
import { join, resolve } from 'path';

export const resetApp = async () => {
  await Promise.all([
    () => new Promise(async (res) => {
      await (existsSync(join(resolve("./"), "appConfig.json")) && unlink(join(resolve("./"), "appConfig.json")));
      res(null);
    }),
    await import("./resetAppDB"),
    await import("./resetErrorLogs"),
  ]).catch((err) => console.log(err));

  console.log("App data resetted");
};
