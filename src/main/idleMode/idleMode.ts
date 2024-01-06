import { app } from "electron";
import type { IdleMode } from "../DB/interface";
import { getIdleMode, updateIdleMode } from "../DB/utils";
import { activePractice } from "../practice/active/main";
import { passivePractice } from "../practice/passive/main";
// import { onIdleModeCountdownStart } from "../tray/utils";

let updateIdleModeSettingsDataCache: IdleMode = {
  isEnabled: false,
  timerStart: 0,
  timerValue: null
};

let idleModeTimerID: NodeJS.Timeout;
let idleModeIsEnabled: IdleMode["isEnabled"] = false;
let idleModeTimerStart: IdleMode["timerStart"] = 0;
let idleModeTimerValue: IdleMode["timerValue"] = null;

/**
 * @returns `[isEnabled, timerStart, timerValue]`
*/
export const getCurrentIdleModeData = () => {
  recalcCurrentIdleModeData();
  return [
    idleModeIsEnabled,
    idleModeTimerStart,
    idleModeTimerValue
  ];
};

export const onUpdateIdleModeState = (
  idleModeState: IdleMode["isEnabled"],
) => {

  // prevent processing for tray window stores initializing
  if (idleModeIsEnabled === idleModeState) { return; }

  idleModeIsEnabled = idleModeState;

  if (idleModeIsEnabled) {
    idleModeTimerValue = null;
    setPracticesToIdle();
    updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue);
  } else {
    stopIdleModeTimer();
    onIdleModeDisabled();
  }
};

export const onUpdateIdleModeTimerData = (
  idleModeTimer: IdleMode["timerValue"],
) => {
  idleModeTimerValue = idleModeTimer;

  stopIdleModeTimer();

  if (idleModeTimerValue === null) {
    idleModeTimerStart = 0;
    // onIdleModeCountdownStart(idleModeTimerStart, idleModeTimerValue);
    updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue);
    return;
  }

  idleModeTimerStart = Date.now();

  // onIdleModeCountdownStart(idleModeTimerStart, idleModeTimerValue);
  startIdleModeTimer();
  updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue);
};

/**
 * updating idle mode data before sending by `getCurrentIdleModeData`
 */
const recalcCurrentIdleModeData = () => {
  if (!idleModeIsEnabled || idleModeTimerValue === null) { return; }

  const idleModeTimerStartCurrent = Date.now();
  idleModeTimerValue = Math.floor(idleModeTimerValue! - ((idleModeTimerStartCurrent - idleModeTimerStart) / 1000));
  idleModeTimerStart = idleModeTimerStartCurrent;

  if (idleModeTimerValue <= 0) {
    onIdleModeDisabled();
  } else {
    updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue);
  }
};

const setPracticesToIdle = () => {
  activePractice.stopCurrentTimers();
  activePractice.closePracticeWindow();
  passivePractice.stopCurrentTimers();
  passivePractice.closePracticeWindow();
};

const startIdleModeTimer = () => {
  idleModeTimerID = setTimeout(onIdleModeDisabled, idleModeTimerValue! * 1000);
};

const stopIdleModeTimer = () => {
  clearTimeout(idleModeTimerID);
};

const onIdleModeDisabled = () => {
  idleModeIsEnabled = false;
  idleModeTimerStart = 0;
  idleModeTimerValue = null;
  setupPractice();
  updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue);
};

const setupPractice = () => {
  activePractice.setup();
  passivePractice.setup();
};

export const initIdleModeAppListeners = () => {
  app.on("before-quit", onAppQuit);
};

const onAppQuit = () => {
  updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue);
};

export const initIdleMode = async () => {
  const idleModeSettings = await getIdleMode();

  idleModeIsEnabled = idleModeSettings.isEnabled;
  idleModeTimerValue = idleModeSettings.timerValue;

  if (!idleModeIsEnabled) {
    setupPractice();
    return;
  }

  // if idle mode is enabled & timer is infinity
  if (idleModeSettings.timerValue === null) { return; }

  idleModeTimerStart = Date.now();
  idleModeTimerValue = Math.floor(idleModeSettings.timerValue! - ((idleModeTimerStart - idleModeSettings.timerStart) / 1000));

  if (idleModeTimerValue <= 0) {
    onIdleModeDisabled();
  } else {
    startIdleModeTimer();
    updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue);
  }
};

const updateIdleModeDBData = (isEnabled: IdleMode["isEnabled"], timerStart: IdleMode["timerStart"], timerValue: IdleMode["timerValue"]) => {
  updateIdleModeSettingsDataCache.isEnabled = isEnabled;
  updateIdleModeSettingsDataCache.timerStart = timerStart;
  updateIdleModeSettingsDataCache.timerValue = timerValue;
  updateIdleMode(updateIdleModeSettingsDataCache);
};
