import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { createMainWindow } from './windowCreation';

/**
 * creating new main window if it's closed 
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

export const closeMainWindow = () => {
  windowInstanceRegistry.get("main")!.close();
};

export const minimizeMainWindow = () => {
  windowInstanceRegistry.get("main")!.getWin()!.minimize();
};

export const maximizeMainWindow = () => {
  windowInstanceRegistry.get("main")!.getWin()!.maximize();
};

export const unmaximizeMainWindow = () => {
  windowInstanceRegistry.get("main")!.getWin()!.unmaximize();
};

export const onWindowMaximize = () => {
  windowInstanceRegistry.get("main")!.getWin()!.webContents.send("setMaximizeStateStoreValue", "unmaximize");
};

export const onWindowUnmaximize = () => {
  windowInstanceRegistry.get("main")!.getWin()!.webContents.send("setMaximizeStateStoreValue", "maximize");
};
