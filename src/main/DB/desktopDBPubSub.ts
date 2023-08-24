import { PubSub } from '../../utils/PubSub';

/**
 * broadcast desktop DB (ipcMain) changes (after applying)
 */
export const desktopDBPubSub = new PubSub();
