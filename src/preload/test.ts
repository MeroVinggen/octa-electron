import { appDBObserver } from '../main/DB/appDBObserver.js';
import { initDesktopDBListeners } from '../main/DB/appDBObserverListeners.js';
import { Observer } from '../utils/Observer.js';

initDesktopDBListeners();

declare global {
  interface Window {
    appDBObserver: Observer;
  }
}

window.appDBObserver = appDBObserver;


/*
    - commits
    
      - utils to setup practice timers
      - utils to read from json db 
        - for passive practice
        - for app auto-launch & minimize start
      - passive practice win
      - active practice reminder win
    
    - check everything works
    - rename appdb to desktopAPpDB
    - rename appDBObserver
    - remove interface & it's import

    - setup auto-launch
    - add err handle & sending err msg to window to show

    - app icon
    - remove unnecessary code (main/index.ts)

    - figure out why app is building into 2 js files & 2 css files

    - split web build into chunks for each page? (to improve load speed)

    - performance test on father's PC
*/
