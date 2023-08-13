import { type BrowserWindow } from 'electron';

export class Window {
  private win: BrowserWindow | undefined;
  private isClosed = true;

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
  }

  getIsClosed() {
    return this.isClosed;
  }
}
