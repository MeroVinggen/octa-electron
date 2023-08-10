import { type BrowserWindow } from 'electron';

export class Window {
  private win: BrowserWindow | null;
  private isClosed = true;

  getWin() {
    return this.win;
  }

  setWin(win: BrowserWindow) {
    this.win = win;
  }

  nullify() {
    this.win = null;
  }

  onClose() {
    this.isClosed = true;
    this.nullify();
  }

  onOpen() {
    this.isClosed = false;
  }

  getIsClosed() {
    return this.isClosed;
  }
}
