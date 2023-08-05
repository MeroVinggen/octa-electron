import { Config, JsonDB } from 'node-json-db';

export const appdb = new JsonDB(new Config("AppDB", true, true));
