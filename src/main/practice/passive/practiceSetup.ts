import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { WEEK_DAY_BY_INDEX, toMilliseconds } from '../../../utils/helpers';
import { desktopDBObserver } from '../../DB/desktopDBObserver';
import { PracticeSettings, TimeFrame, WEEK_DAYS_SHORTS_TYPE } from '../../DB/interface';
import { getAppSettingsData } from '../../DB/utils';
import { createPassivePracticeWindow } from './windowCreation';

let currentPassivePracticeDataSnapshot: string;
let actualTimeFrames: TimeFrame[];
let currentTimeFrame: TimeFrame;
let soundNotification: boolean;
let interval: number;
let passivePracticeTimeFrameTimerId: NodeJS.Timeout;
let passivePracticeIntervalTimerId: NodeJS.Timeout;

export const getCurrentPassivePracticeDataSnapshot = () => currentPassivePracticeDataSnapshot;

export const stopCurrentPassivePracticeTimers = () => {
  console.log("stopCurrentPassivePracticeTimers");
  clearTimeout(passivePracticeTimeFrameTimerId);
  clearTimeout(passivePracticeIntervalTimerId);
};

const reInitPassivePractice = () => {
  console.log("reInitPassivePractice");
  stopCurrentPassivePracticeTimers();
  setupPassivePractice();
};

export const setupPassivePractice = async () => {
  console.log("setupPassivePractice");
  const passivePracticeData = (await getAppSettingsData()).practice.passive;
  currentPassivePracticeDataSnapshot = passivePracticeData;

  if (!passivePracticeData.enabled) {
    console.log("passivePracticeData not enabled, exit");
    return;
  }

  const currentDate = new Date();
  const currentDayKey = WEEK_DAY_BY_INDEX[(currentDate).getDay()];
  const currentDayHasPassivePractice = currentDayKey in passivePracticeData.daySettings;

  // no current day key in passive practice settings
  if (!currentDayHasPassivePractice) {
    console.log("currentDay has no PassivePractice, exit");
    return;
  }

  soundNotification = passivePracticeData.soundNotification;
  const currentInterval = getActualTimeFrames(passivePracticeData, currentDayKey, currentDate);

  // if days settings are enabled, but no timeFrames added
  if (actualTimeFrames.length === 0) {
    console.log("no actualTimeFrames, exit");
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

  console.log("actualTimeFrames", actualTimeFrames);

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
  console.log("initPassivePracticeTimeFrameTimer");

  // next time frame to start
  currentTimeFrame = actualTimeFrames.shift()!;
  console.log("currentTimeFrame:", currentTimeFrame);
  const leftTimeToNextTimeFrameInMS = getTimeToNextTimeFrame();
  passivePracticeTimeFrameTimerId = setTimeout(onPassivePracticeIntervalTick, leftTimeToNextTimeFrameInMS);
  console.log("set setTimeout for next frame:", leftTimeToNextTimeFrameInMS);
};

const setNextPassivePracticeTimeFrameTimer = () => {
  console.log("setNextPassivePracticeTimeFrameTimer");
  if (actualTimeFrames.length === 0) {
    console.log("no actualTimeFrames left, finish");
    return;
  }

  // next time frame to start
  currentTimeFrame = actualTimeFrames.shift()!;
  console.log("currentTimeFrame:", currentTimeFrame);
  const leftTimeToNextTimeFrameInMS = getTimeToNextTimeFrame();
  passivePracticeTimeFrameTimerId = setTimeout(setPassivePracticeTimeout, leftTimeToNextTimeFrameInMS);
  console.log("set setTimeout for next frame:", leftTimeToNextTimeFrameInMS);
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
  console.log("set setTimeout for next interval:", interval);
  passivePracticeIntervalTimerId = setTimeout(onPassivePracticeIntervalTick, interval);
};

const onPassivePracticeIntervalTick = () => {
  console.log('onPassivePracticeIntervalTick');
  callPassivePractice();
  afterCallPassivePractice();
};

const callPassivePractice = () => {
  if (windowInstanceRegistry.get("passivePractice")?.getIsClosed()) {
    console.log("call passive practice window");
    createPassivePracticeWindow();
  }
};

const afterCallPassivePractice = () => {
  console.log("afterCallPassivePractice");
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
