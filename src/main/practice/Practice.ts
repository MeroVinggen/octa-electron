import { WindowNames } from '../../shared/windowRegistries/interface';
import { windowInstanceRegistry } from '../../shared/windowRegistries/windowInstanceRegistry';
import { WEEK_DAY_BY_INDEX, toMilliseconds } from '../../utils/helpers';
import { PracticeSettings, PracticeVariants, TimeFrame, WEEK_DAYS_SHORTS_TYPE } from '../DB/interface';
import { checkDictionaryIsEmpty, getAppSettingsData } from '../DB/utils';
import { PracticeSettingsSnapshot } from './PracticeSettingsSnapshot';

export class Practice {
  actualTimeFrames!: TimeFrame[];
  currentTimeFrame!: TimeFrame;
  interval!: number;
  timeFrameTimerId!: NodeJS.Timeout;
  intervalTimerId!: NodeJS.Timeout;
  windowInstanceID: WindowNames;
  settingsSnapshot: PracticeSettingsSnapshot;
  windowCreator: Function;
  practiceKey: PracticeVariants;

  constructor(
    windowInstanceID: Practice["windowInstanceID"],
    windowCreator: Practice["windowCreator"],
    practiceKey: Practice["practiceKey"]
  ) {
    this.windowInstanceID = windowInstanceID;
    this.windowCreator = windowCreator;
    this.practiceKey = practiceKey;
    this.settingsSnapshot = new PracticeSettingsSnapshot();
  }

  stopCurrentTimers = () => {
    clearTimeout(this.timeFrameTimerId);
    clearTimeout(this.intervalTimerId);
  };

  private reInit(practiceData: PracticeSettings) {
    this.stopCurrentTimers();
    windowInstanceRegistry.get(this.windowInstanceID)!.close();
    this.setup(practiceData);
  };

  async setup(practiceData?: PracticeSettings) {
    const currentPracticeData = practiceData || (await getAppSettingsData()).practice[this.practiceKey];

    this.settingsSnapshot.setSnapshot(currentPracticeData);

    if (!currentPracticeData.enabled) {
      return;
    }

    const currentDate = new Date();
    const currentDayKey = WEEK_DAY_BY_INDEX[(currentDate).getDay()];
    const currentDayHasPractice = currentDayKey in currentPracticeData.daySettings;

    // no current day key in practice settings
    if (!currentDayHasPractice) {
      return;
    }

    const currentInterval = this.getActualTimeFrames(currentPracticeData, currentDayKey, currentDate);

    // if days settings are enabled, but no timeFrames added
    if (this.actualTimeFrames.length === 0) {
      windowInstanceRegistry.get(this.windowInstanceID)!.close();
      return;
    }

    this.getIntervalTimeAsMS(currentInterval);
    this.initTimeFrameTimer();
  };

  private getActualTimeFrames(practiceSettings: PracticeSettings, currentDayKey: WEEK_DAYS_SHORTS_TYPE, currentDate: Date) {
    const currentDaySettings = practiceSettings.daySettings[currentDayKey]!;

    const daySettings = currentDaySettings.enabled
      ? currentDaySettings
      : practiceSettings.daySettings.general;

    const currentTimeInMS = toMilliseconds({ h: currentDate.getHours(), m: currentDate.getMinutes() });

    // filtering all passed timeFrames
    this.actualTimeFrames = daySettings.timeFrames.filter(({ to }) => {
      const [timeFrameHours, timeFrameMinutes] = to.split(":");
      const timeOfTimeFrameInMS = toMilliseconds({ h: Number(timeFrameHours), m: Number(timeFrameMinutes) });
      return this.checkTimeFrameIsSuitable(currentTimeInMS, timeOfTimeFrameInMS);
    });

    return daySettings.interval;
  };

  private checkTimeFrameIsSuitable(currentTimeInMS: number, timeOfTimeFrameInMS: number) {
    return currentTimeInMS <= timeOfTimeFrameInMS ? true : false;
  }

  private checkTimeFrameIsSuitableConsideringInterval(currentTimeInMS: number, timeOfTimeFrameInMS: number) {
    return currentTimeInMS <= timeOfTimeFrameInMS - this.interval ? true : false;
  }

  private getIntervalTimeAsMS(currentInterval: string) {
    const [hours, minutes] = currentInterval.split(":");
    this.interval = toMilliseconds({ h: Number(hours), m: Number(minutes) });
  };

  private initTimeFrameTimer() {
    // next time frame to start
    this.currentTimeFrame = this.actualTimeFrames.shift()!;
    const leftTimeToNextTimeFrameInMS = this.getTimeToNextTimeFrame();
    this.timeFrameTimerId = setTimeout(this.onIntervalTick, leftTimeToNextTimeFrameInMS);
  };

  private setNextTimeFrameTimer = () => {
    if (this.actualTimeFrames.length === 0) {
      return;
    }

    // next time frame to start
    this.currentTimeFrame = this.actualTimeFrames.shift()!;
    const leftTimeToNextTimeFrameInMS = this.getTimeToNextTimeFrame();
    this.timeFrameTimerId = setTimeout(this.setPracticeTimeout, leftTimeToNextTimeFrameInMS);
  };

  private getTimeToNextTimeFrame() {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentTimeInMS = toMilliseconds({ h: currentHours, m: currentMinutes });
    const [nextTimeFrameHours, nextTimeFrameMinutes] = this.currentTimeFrame.from.split(":");
    const nextTimeFrameFromTimeInMS = toMilliseconds({ h: Number(nextTimeFrameHours), m: Number(nextTimeFrameMinutes) });

    return nextTimeFrameFromTimeInMS - currentTimeInMS;
  };

  /**
  * timeout to next practice on current timeFrame by interval
  */
  private setPracticeTimeout = () => {
    this.intervalTimerId = setTimeout(this.onIntervalTick, this.interval);
  };

  private onIntervalTick = () => {
    this.callPractice();
    this.afterCallPractice();
  };

  private async callPractice() {
    const vocabularyIsEmpty = await checkDictionaryIsEmpty();

    if (vocabularyIsEmpty) {
      return;
    }

    const windowInstance = windowInstanceRegistry.get(this.windowInstanceID)!;

    if (windowInstance.getIsClosed()) {
      this.windowCreator();
    } else {
      windowInstance.getWin()!.webContents.send("intervalTick");
    }
  };

  private afterCallPractice() {
    const currentDate = new Date();
    const currentTimeInMS = toMilliseconds({ h: currentDate.getHours(), m: currentDate.getMinutes() });

    const [currentTimeFrameHours, currentTimeFrameMinutes] = this.currentTimeFrame.to.split(":");
    const timeOfTimeFrameInMS = toMilliseconds({ h: Number(currentTimeFrameHours), m: Number(currentTimeFrameMinutes) });

    const isCurrentTimeFrameSuitable = this.checkTimeFrameIsSuitableConsideringInterval(currentTimeInMS, timeOfTimeFrameInMS);

    if (isCurrentTimeFrameSuitable) {
      // set next timer for current timeFrame
      this.setPracticeTimeout();
    } else {
      // set timer to next timeFrame
      this.setNextTimeFrameTimer();
    }
  };

  updateAppSettings = async () => {
    const oldActivePracticeDataString = this.settingsSnapshot.getSnapshot();
    const newActivePracticeData = (await getAppSettingsData()).practice.active;
    const newActivePracticeDataString = JSON.stringify(newActivePracticeData);

    const isChangedActivePracticeData = newActivePracticeDataString !== oldActivePracticeDataString;

    if (isChangedActivePracticeData) {
      this.reInit(newActivePracticeData);
    }
  };
}
