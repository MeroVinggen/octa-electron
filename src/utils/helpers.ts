import { join, resolve } from 'path';

export const WEEK_DAY_BY_INDEX = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
} as const;

export const toMilliseconds = ({ h = 0, m = 0, s = 0 }: { h?: number, m?: number, s?: number; }) => (h * 3600 + m * 60 + s) * 1000;

export const ROOT_PATH = resolve('./');

export const buildPathFromRoot = (...paths: string[]) => join(ROOT_PATH, ...paths);

export const createDebounce = (callback: (...params: unknown[]) => unknown, timeout: number) => {
  let timerID: NodeJS.Timeout;
  return (...params: unknown[]) => {
    clearTimeout(timerID);
    timerID = setTimeout(callback, timeout, ...params);
  };
};
