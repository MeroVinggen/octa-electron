export type Year = string;

export type Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export type MonthData = {
  totalWordsAmount: number;
  addedWordsAmount: number;
  deletedWordsAmount: number;
  wordTotalPracticeAmount: number;
  wordOriginPracticeAmount: number;
  wordTranslationPracticeAmount: number;
  averagePracticeSuccess: number;
  successfulPracticeCount: number;
  unsuccessfulPracticeCount: number;
};

export type Word = {
  id: string;
  learnSuccess: number;  
  practiceCount: number;
  successfulPracticeCount: number;
  variants: string[];  
  translations: string[];
  description: string;
}

export type YearData = Record<Month[number], MonthData> & { year: Year; };

export type SectionLastWordId = Word["id"] | null;
export type PracticeTarget = "original" | "translation";
export type PracticeType = "random" | "worst" | "section";
export type SectionSize = number;

export type SettingsStore = {
  sectionLastWordId: SectionLastWordId;
  sectionSize: SectionSize;
  practiceTarget: PracticeTarget;
  practiceType: PracticeType;
};

export type TimeFrame = {
  from: string;
  to: string;
};

export type PracticeData = {
  enabled: boolean;
  interval: string;
  timeFrames: TimeFrame[];
};

export type WEEK_DAYS_SHORTS_TYPE = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export type PracticeStoreValueKeys = WEEK_DAYS_SHORTS_TYPE | "general";

export type PracticeDaySettings = Partial<Record<WEEK_DAYS_SHORTS_TYPE, PracticeData | undefined>> & { general: Omit<PracticeData, "enabled">; };

export type PracticeSettings = {
  enabled: boolean;
  soundNotification: boolean;
  daySettings: PracticeDaySettings;
};

export type BasicSettings = {
  startWithSystem: boolean;
  openAppWindowAtStart: boolean;
};

export type AppSettings = {
  basic: BasicSettings;
  practice: {
    passive: PracticeSettings;
    active: PracticeSettings;
  };
};
