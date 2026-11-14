import { Lesson } from "./types";
import { tier1Lessons } from "./tier1";
import { tier2Lessons } from "./tier2";
import { tier3Lessons } from "./tier3";
import { tier4Lessons } from "./tier4";
import { tier5Lessons } from "./tier5";

export * from "./types";
export * from "./tier1";
export * from "./tier2";
export * from "./tier3";
export * from "./tier4";
export * from "./tier5";

export const LESSONS: Record<string, Lesson> = {
  ...tier1Lessons,
  ...tier2Lessons,
  ...tier3Lessons,
  ...tier4Lessons,
  ...tier5Lessons,
};
