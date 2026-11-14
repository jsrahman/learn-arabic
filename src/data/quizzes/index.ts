import { Quiz } from "./types";
import { quizLevel1 } from "./level1";
import { quizLevel2 } from "./level2";
import { quizLevel3 } from "./level3";
import { quizLevel4 } from "./level4";
import { quizLevel5 } from "./level5";
import { quizLevel6 } from "./level6";
import { quizLevel7 } from "./level7";
import { quizLevel8 } from "./level8";
import { quizLevel9 } from "./level9";
import { quizLevel10 } from "./level10";
import { quizLevel11 } from "./level11";
import { quizLevel12 } from "./level12";
import { quizLevel13 } from "./level13";
import { quizLevel14 } from "./level14";
import { quizLevel15 } from "./level15";
import { quizLevel16 } from "./level16";
import { quizLevel17 } from "./level17";
import { quizLevel18 } from "./level18";

export * from "./types";

export const QUIZZES: Record<string, Quiz> = {
  q1: quizLevel1,
  q2: quizLevel2,
  q3: quizLevel3,
  q4: quizLevel4,
  q5: quizLevel5,
  q6: quizLevel6,
  q7: quizLevel7,
  q8: quizLevel8,
  q9: quizLevel9,
  q10: quizLevel10,
  q11: quizLevel11,
  q12: quizLevel12,
  q13: quizLevel13,
  q14: quizLevel14,
  q15: quizLevel15,
  q16: quizLevel16,
  q17: quizLevel17,
  q18: quizLevel18,
};
