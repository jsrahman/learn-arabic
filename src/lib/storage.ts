export interface UserProgress {
  completedLessons: string[]; // lesson ids e.g. "l1-1", "l1-2"
  unlockedLevels: number[]; // [1, 2, 3, 4, 5, 6]
  quizScores: Record<string, number>; // quizId -> score percentage e.g. {"q1": 100}
  masteredLetters: string[]; // letter ids or symbols
  streakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  totalMinutesPracticed: number;
  xpPoints: number;
}

export interface UserPreferences {
  theme: "light" | "dark";
  audioSpeed: number; // 0.75, 1.0, 1.25
  autoPlayAudio: boolean;
  showTransliteration: boolean;
  arabicFontSize: "normal" | "large" | "xlarge";
  explanationLanguage: "en" | "bn"; // English or Bangla
}

const STORAGE_PROGRESS_KEY = "quranpath_user_progress_v1";
const STORAGE_PREFS_KEY = "quranpath_user_prefs_v1";

export const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  unlockedLevels: [1],
  quizScores: {},
  masteredLetters: [],
  streakDays: 0,
  lastActiveDate: "",
  totalMinutesPracticed: 0,
  xpPoints: 0,
};

export const DEFAULT_PREFERENCES: UserPreferences = {
  theme: "light",
  audioSpeed: 1.0,
  autoPlayAudio: true,
  showTransliteration: true,
  arabicFontSize: "large",
  explanationLanguage: "en",
};

export function getLocalDateString(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getYesterdayDateString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return getLocalDateString(d);
}

export function calculateUpdatedStreak(
  lastActiveDate: string,
  currentStreak: number
): { streak: number; lastActiveDate: string } {
  const today = getLocalDateString();

  // If already recorded active today, maintain current streak
  if (lastActiveDate === today) {
    return { streak: Math.max(1, currentStreak || 1), lastActiveDate: today };
  }

  const yesterday = getYesterdayDateString();

  if (lastActiveDate === yesterday) {
    // Active on consecutive days: increment streak
    return { streak: (currentStreak || 0) + 1, lastActiveDate: today };
  }

  // First day ever or broken streak (missed yesterday)
  return { streak: 1, lastActiveDate: today };
}

export function getStoredProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_PROGRESS_KEY);
    if (!raw) {
      saveStoredProgress(DEFAULT_PROGRESS);
      return DEFAULT_PROGRESS;
    }
    const parsed = JSON.parse(raw);
    const progress: UserProgress = { ...DEFAULT_PROGRESS, ...parsed };

    // Validate streak continuity: if streak > 0 but lastActiveDate is expired (older than yesterday),
    // the streak has lapsed and resets to 0 until the user practices again today.
    if (progress.streakDays > 0 && progress.lastActiveDate) {
      const today = getLocalDateString();
      const yesterday = getYesterdayDateString();
      if (progress.lastActiveDate !== today && progress.lastActiveDate !== yesterday) {
        progress.streakDays = 0;
      }
    } else if (!progress.lastActiveDate) {
      progress.streakDays = 0;
    }

    return progress;
  } catch (e) {
    console.error("Failed to read progress from localStorage", e);
    return DEFAULT_PROGRESS;
  }
}

export function saveStoredProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress to localStorage", e);
  }
}

export function resetStoredProgress(): UserProgress {
  saveStoredProgress(DEFAULT_PROGRESS);
  return DEFAULT_PROGRESS;
}

export function recordDailyActivity(minutesToAdd = 2, xpToAdd = 5): UserProgress {
  const current = getStoredProgress();
  const { streak, lastActiveDate } = calculateUpdatedStreak(current.lastActiveDate, current.streakDays);

  const updated: UserProgress = {
    ...current,
    streakDays: streak,
    lastActiveDate,
    totalMinutesPracticed: current.totalMinutesPracticed + minutesToAdd,
    xpPoints: current.xpPoints + xpToAdd,
  };

  saveStoredProgress(updated);
  return updated;
}

export function markLessonCompleted(lessonId: string, levelNum: number, earnedXp = 50): UserProgress {
  const current = getStoredProgress();
  const completed = new Set(current.completedLessons);
  const isNew = !completed.has(lessonId);
  completed.add(lessonId);

  const { streak, lastActiveDate } = calculateUpdatedStreak(current.lastActiveDate, current.streakDays);

  // Level unlock logic
  const unlocked = new Set(current.unlockedLevels);
  if (levelNum < 18) {
    const completedInThisLevel = Array.from(completed).filter((id) => id.startsWith(`l${levelNum}-`)).length;
    if (completedInThisLevel >= 3) {
      unlocked.add(levelNum + 1);
    }
  }

  const updated: UserProgress = {
    ...current,
    completedLessons: Array.from(completed),
    unlockedLevels: Array.from(unlocked),
    xpPoints: current.xpPoints + (isNew ? earnedXp : 10),
    streakDays: streak,
    lastActiveDate,
    totalMinutesPracticed: current.totalMinutesPracticed + 5,
  };

  saveStoredProgress(updated);
  return updated;
}

export function saveQuizScore(quizId: string, scorePercent: number, earnedXp = 100): UserProgress {
  const current = getStoredProgress();
  const existingBest = current.quizScores[quizId] || 0;
  const bestScore = Math.max(existingBest, scorePercent);

  // If passed (>= 70%), unlock the next level
  const unlocked = new Set(current.unlockedLevels);
  const match = quizId.match(/^q(\d+)$/);
  if (match && scorePercent >= 70) {
    const qLevel = parseInt(match[1], 10);
    if (qLevel < 18) {
      unlocked.add(qLevel + 1);
    }
  }

  const { streak, lastActiveDate } = calculateUpdatedStreak(current.lastActiveDate, current.streakDays);

  const updated: UserProgress = {
    ...current,
    streakDays: streak,
    lastActiveDate,
    totalMinutesPracticed: current.totalMinutesPracticed + 3,
    unlockedLevels: Array.from(unlocked),
    quizScores: {
      ...current.quizScores,
      [quizId]: bestScore,
    },
    xpPoints: current.xpPoints + (scorePercent >= 70 ? earnedXp : 25),
  };

  saveStoredProgress(updated);
  return updated;
}

export function getStoredPreferences(): UserPreferences {
  if (typeof window === "undefined") return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(STORAGE_PREFS_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    return { ...DEFAULT_PREFERENCES, ...JSON.parse(raw) };
  } catch (e) {
    return DEFAULT_PREFERENCES;
  }
}

export function saveStoredPreferences(prefs: UserPreferences): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_PREFS_KEY, JSON.stringify(prefs));
  } catch (e) {
    console.error("Failed to save preferences", e);
  }
}

