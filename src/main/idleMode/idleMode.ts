import { app } from "electron";
import type { AppSettings, IdleModeSettings } from "../DB/interface";
import { getIdleModeData, updateIdleModeSettingsData } from "../DB/utils";
import { activePractice } from "../practice/active/main";
import { passivePractice } from "../practice/passive/main";
import { onIdleModeCountdownStart } from "../tray/utils";

let updateIdleModeSettingsDataCache: IdleModeSettings = {
  isEnabled: false,
  timerStart: 0,
  timerValue: null
};

let idleModeTimerID: NodeJS.Timeout;
let idleModeIsEnabled: AppSettings["idleMode"]["isEnabled"] = false;
let idleModeTimerStart: AppSettings["idleMode"]["timerStart"] = 0;
let idleModeTimerValue: AppSettings["idleMode"]["timerValue"] = null;

export const onUpdateIdleModeState = (
  _: Electron.IpcMainEvent,
  idleModeState: AppSettings["idleMode"]["isEnabled"],
) => {
  console.log("onUpdateIdleModeState", idleModeState);

  // prevent processing for tray window stores initializing
  if (idleModeIsEnabled === idleModeState) { return; }

  idleModeIsEnabled = idleModeState;

  if (idleModeIsEnabled) {
    setPracticesToIdle();
  } else {
    stopIdleModeTimer();
    onIdleModeDisabled();
  }

  updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue);
};

export const onUpdateIdleModeTimerData = (
  _: Electron.IpcMainEvent,
  idleModeTimer: AppSettings["idleMode"]["timerValue"],
) => {
  console.log("onUpdateIdleModeTimerData", idleModeTimer);
  idleModeTimerValue = idleModeTimer;

  stopIdleModeTimer();

  if (idleModeTimerValue === null) { 
    idleModeTimerStart = 0;
    onIdleModeCountdownStart(idleModeTimerStart, idleModeTimerValue);
    updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue)
    return; 
  }

  idleModeTimerStart = Date.now();

  onIdleModeCountdownStart(idleModeTimerStart, idleModeTimerValue);
  startIdleModeTimer();
  updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue);
};

const setPracticesToIdle = () => {
  console.log("setPracticesToIdle");
  activePractice.stopCurrentTimers();
  activePractice.closePracticeWindow();
  passivePractice.stopCurrentTimers();
  passivePractice.closePracticeWindow();
};

const startIdleModeTimer = () => {
  console.log("startIdleModeTimer");
  idleModeTimerID = setTimeout(onIdleModeDisabled, idleModeTimerValue! * 1000);
};

const stopIdleModeTimer = () => {
  clearTimeout(idleModeTimerID);
};

const onIdleModeDisabled = () => {
  console.log("onIdleModeDisabled");
  idleModeIsEnabled = false;
  idleModeTimerStart = 0;
  idleModeTimerValue = null;
  setupPractice();
};

const setupPractice = () => {
  console.log("setupPractice");
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
  console.log("initIdleMode");
  const idleModeSettings = await getIdleModeData();

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
    setupPractice();
  } else {
    startIdleModeTimer();
  }

  updateIdleModeDBData(idleModeIsEnabled, idleModeTimerStart, idleModeTimerValue)
};

const updateIdleModeDBData = (isEnabled: IdleModeSettings["isEnabled"], timerStart: IdleModeSettings["timerStart"], timerValue: IdleModeSettings["timerValue"]) => {
  updateIdleModeSettingsDataCache.isEnabled = isEnabled;
  updateIdleModeSettingsDataCache.timerStart = timerStart;
  updateIdleModeSettingsDataCache.timerValue = timerValue;
  updateIdleModeSettingsData(updateIdleModeSettingsDataCache);
}
