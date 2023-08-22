import { PracticeSettings } from '../../DB/interface';

let currentPassivePracticeDataSnapshot: string;

export const getCurrentPassivePracticeDataSnapshot = () => currentPassivePracticeDataSnapshot;

export const updateCurrentPassivePracticeDataSnapshot = (passivePracticeData: PracticeSettings) => 
  currentPassivePracticeDataSnapshot = JSON.stringify(passivePracticeData);
