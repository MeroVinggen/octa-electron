import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { WEEK_DAY_BY_INDEX, toMilliseconds } from '../../../utils/helpers';
import { desktopDBObserver } from '../../DB/desktopDBObserver';
import { PracticeSettings, TimeFrame, WEEK_DAYS_SHORTS_TYPE } from '../../DB/interface';
import { getAppSettingsData } from '../../DB/utils';
import { createPassivePracticeWindow } from './windowCreation';

let currentPassivePracticeDataSnapshot: string;
let actualTimeFrames: TimeFrame[];
let currentTimeFrame: TimeFrame;
let interval: number;
let passivePracticeTimeFrameTimerId: NodeJS.Timeout;
let passivePracticeIntervalTimerId: NodeJS.Timeout;

export const getCurrentPassivePracticeDataSnapshot = () => currentPassivePracticeDataSnapshot;

const stopCurrentPassivePracticeTimers = () => {
  clearTimeout(passivePracticeTimeFrameTimerId);
  clearTimeout(passivePracticeIntervalTimerId);
};

const reInitPassivePractice = () => {
  stopCurrentPassivePracticeTimers();
  windowInstanceRegistry.get("passivePractice")!.close();
  setupPassivePractice();
};

export const setupPassivePractice = async () => {
  const passivePracticeData = (await getAppSettingsData()).practice.passive;
  currentPassivePracticeDataSnapshot = passivePracticeData;

  if (!passivePracticeData.enabled) {
    return;
  }

  const currentDate = new Date();
  const currentDayKey = WEEK_DAY_BY_INDEX[(currentDate).getDay()];
  const currentDayHasPassivePractice = currentDayKey in passivePracticeData.daySettings;

  // no current day key in passive practice settings
  if (!currentDayHasPassivePractice) {
    return;
  }

  const currentInterval = getActualTimeFrames(passivePracticeData, currentDayKey, currentDate);

  // if days settings are enabled, but no timeFrames added
  if (actualTimeFrames.length === 0) {
    windowInstanceRegistry.get("passivePractice")!.close();
    return;
  }

  getIntervalTimeAsMS(currentInterval);
  initPassivePracticeTimeFrameTimer();
};

const getActualTimeFrames = (passivePracticeData: PracticeSettings, currentDayKey: WEEK_DAYS_SHORTS_TYPE, currentDate: Date) => {
  const currentDaySettings = passivePracticeData.daySettings[currentDayKey]!;

  const daySettings = currentDaySettings.enabled
    ? currentDaySettings
    : passivePracticeData.daySettings.general;

  const currentTimeInMS = toMilliseconds({ h: currentDate.getHours(), m: currentDate.getMinutes() });

  // filtering all passed timeFrames
  actualTimeFrames = daySettings.timeFrames.filter(({ to }) => {
    const [timeFrameHours, timeFrameMinutes] = to.split(":");
    const timeOfTimeFrameInMS = toMilliseconds({ h: Number(timeFrameHours), m: Number(timeFrameMinutes) });
    // return checkTimeFrameIsSuitable(currentHours, currentMinutes, timeFrameHours, timeFrameMinutes);
    return checkTimeFrameIsSuitable(currentTimeInMS, timeOfTimeFrameInMS);
  });

  return daySettings.interval;
};

const checkTimeFrameIsSuitable = (currentTimeInMS: number, timeOfTimeFrameInMS: number) =>
  currentTimeInMS <= timeOfTimeFrameInMS ? true : false;

const checkTimeFrameIsSuitableConsideringInterval = (currentTimeInMS: number, timeOfTimeFrameInMS: number) =>
  currentTimeInMS <= timeOfTimeFrameInMS - interval ? true : false;

const getIntervalTimeAsMS = (currentInterval: string) => {
  const [hours, minutes] = currentInterval.split(":");
  interval = toMilliseconds({ h: Number(hours), m: Number(minutes) });
};

const initPassivePracticeTimeFrameTimer = () => {
  // next time frame to start
  currentTimeFrame = actualTimeFrames.shift()!;
  const leftTimeToNextTimeFrameInMS = getTimeToNextTimeFrame();
  passivePracticeTimeFrameTimerId = setTimeout(onPassivePracticeIntervalTick, leftTimeToNextTimeFrameInMS);
};

const setNextPassivePracticeTimeFrameTimer = () => {
  if (actualTimeFrames.length === 0) {
    return;
  }

  // next time frame to start
  currentTimeFrame = actualTimeFrames.shift()!;
  const leftTimeToNextTimeFrameInMS = getTimeToNextTimeFrame();
  passivePracticeTimeFrameTimerId = setTimeout(setPassivePracticeTimeout, leftTimeToNextTimeFrameInMS);
};

const getTimeToNextTimeFrame = () => {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentTimeInMS = toMilliseconds({ h: currentHours, m: currentMinutes });
  const [nextTimeFrameHours, nextTimeFrameMinutes] = currentTimeFrame.from.split(":");
  const nextTimeFrameFromTimeInMS = toMilliseconds({ h: Number(nextTimeFrameHours), m: Number(nextTimeFrameMinutes) });

  return nextTimeFrameFromTimeInMS - currentTimeInMS;
};

/**
 * timeout to next passive practice on current timeFrame by interval
 */
const setPassivePracticeTimeout = () => {
  passivePracticeIntervalTimerId = setTimeout(onPassivePracticeIntervalTick, interval);
};

const onPassivePracticeIntervalTick = () => {
  callPassivePractice();
  afterCallPassivePractice();
};

const callPassivePractice = () => {
  if (windowInstanceRegistry.get("passivePractice")?.getIsClosed()) {
    createPassivePracticeWindow();
  }
};

const afterCallPassivePractice = () => {
  const currentDate = new Date();
  const currentTimeInMS = toMilliseconds({ h: currentDate.getHours(), m: currentDate.getMinutes() });

  const [currentTimeFrameHours, currentTimeFrameMinutes] = currentTimeFrame.to.split(":");
  const timeOfTimeFrameInMS = toMilliseconds({ h: Number(currentTimeFrameHours), m: Number(currentTimeFrameMinutes) });

  const isCurrentTimeFrameSuitable = checkTimeFrameIsSuitableConsideringInterval(currentTimeInMS, timeOfTimeFrameInMS);

  if (isCurrentTimeFrameSuitable) {
    // set next timer for current timeFrame
    setPassivePracticeTimeout();
  } else {
    // set timer to next timeFrame
    setNextPassivePracticeTimeFrameTimer();
  }
};

/* -------------------------------------------------------------------------- */
/*                         setup desktop DB listeners                         */
/* -------------------------------------------------------------------------- */

const updateAppSettings = async () => {
  const oldPassivePracticeData = getCurrentPassivePracticeDataSnapshot();
  const newPassivePracticeData = (await getAppSettingsData()).practice.passive;

  const isChangedPassivePracticeData = newPassivePracticeData !== oldPassivePracticeData;

  if (isChangedPassivePracticeData) {
    reInitPassivePractice();
  }
};

const appDBObserverListeners = {
  updateAppSettings,
  clearAppSettings: stopCurrentPassivePracticeTimers,
} as const;

/**
 * listening desktop DB for passive practice settings update
 */
export const initPassivePracticeDesktopDBObserverListeners = () => {
  desktopDBObserver.subscribe((action) => {
    if (action in appDBObserverListeners) {
      appDBObserverListeners[action]();
    }
  });
};
