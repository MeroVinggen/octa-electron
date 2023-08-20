import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { createMainWindow } from './windowCreation';

/**
 * creating new main window instance if it's closed 
 * or focus if it's opened
 */
export const openMainWindow = () => {
  const mainWinInstance = windowInstanceRegistry.get("main")!;

  if (mainWinInstance.getIsClosed()) {
    createMainWindow();
  } else {
    if (mainWinInstance.getWin()!.isMinimized()) {
      mainWinInstance.getWin()!.restore();
    }
    mainWinInstance.getWin()!.focus();
  }
};
