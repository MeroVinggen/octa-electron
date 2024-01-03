import { electronAPI } from '@electron-toolkit/preload';
import { contextBridge } from 'electron';

if (process.contextIsolated) {
  contextBridge.exposeInMainWorld('electron', electronAPI);
} else {
  window.electron = electronAPI;
}

/* -------------------------------- app reset ------------------------------- */

if (import.meta.env.DEV) {

  function dropWebAppDB() {
    const request = indexedDB.deleteDatabase("AppDB");

    request.onsuccess = () => {
      electronAPI.ipcRenderer.send("onAppExit");
    };

    request.onerror = () => {
      electronAPI.ipcRenderer.send("onAppExit");
    };
  }

  import.meta.env.PRELOAD_VITE_DROP_WEB_DB && dropWebAppDB();

}
