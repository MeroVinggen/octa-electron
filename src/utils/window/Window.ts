import { type BrowserWindow } from 'electron';

export class Window {
  private win: BrowserWindow | undefined;
  private isClosed = true;

  /**
   * using once on next "ready-to-show" event
   * after which cll is cleared
   */
  private nextDidFinishLoadListeners: Function[] = [];

  getWin() {
    return this.win;
  }

  setWin(win: BrowserWindow) {
    this.win = win;
  }

  nullify() {
    this.win = undefined;
  }

  /**
   * close window if open
   */
  close() {
    if (this.isClosed) {
      return;
    }

    this.win!.close();
    this.onClose();
  }

  onClose() {
    this.isClosed = true;
    this.nullify();
  }

  onOpen() {
    this.isClosed = false;
    this.nextDidFinishLoadListeners = [];
  }

  getIsClosed() {
    return this.isClosed;
  }

  /**
   * using once on next "ready-to-show" event
   * after which cll is cleared
   */
  addNextDidFinishLoadListeners(callback: Function) {
    this.nextDidFinishLoadListeners.push(callback);
  }

  getNextDidFinishLoadListeners() {
    return this.nextDidFinishLoadListeners;
  }
}
