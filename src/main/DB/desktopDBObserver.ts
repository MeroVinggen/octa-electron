import { PubSub } from '../../utils/PubSub';

/**
 * broadcast desktop DB (ipcMain) changes (after applying)
 */
export const desktopDBObserver = new PubSub();
