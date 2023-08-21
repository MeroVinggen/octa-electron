import { Config, JsonDB } from 'node-json-db';
import { join } from 'path';
import { ROOT_PATH } from '../../utils/helpers';

export const desktopDB = new JsonDB(
  new Config(join(ROOT_PATH, "DB/DesktopDB"), true, true)
);
