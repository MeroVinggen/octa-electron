import { writeFile } from 'fs/promises';
import { buildPathFromRoot } from '../../utils/helpers';
import { existsSync } from 'fs';

const APP_CONFIG = {
  firstLaunch: false
};

export const createAppConfig = () => {
  writeFile(buildPathFromRoot("appConfig.json"), JSON.stringify(APP_CONFIG));
};

export const checkAppFirstLaunch = () => existsSync(buildPathFromRoot("appConfig.json")) ? false : true;
