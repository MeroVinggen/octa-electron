import { existsSync } from "fs";
import { unlink } from "fs/promises";
import { join, resolve } from "path";

export const resetAppConfigJSON = async () => {
  await(existsSync(join(resolve("./"), "appConfig.json")) && unlink(join(resolve("./"), "appConfig.json")));
}
