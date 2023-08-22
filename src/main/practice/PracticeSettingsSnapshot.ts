import { PracticeSettings } from '../DB/interface';

export class PracticeSettingsSnapshot {
  snapshot!: string;

  getSnapshot() {
    return this.snapshot;
  }

  setSnapshot(settings: PracticeSettings) {
    this.snapshot = JSON.stringify(settings);
  }
}
