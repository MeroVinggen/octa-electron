import { Config, JsonDB } from 'node-json-db';

export const desktopDB = new JsonDB(new Config("AppDB", true, true));
