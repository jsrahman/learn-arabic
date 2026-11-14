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
  completedLessons: ["l1-1"],
  unlockedLevels: [1, 2],
  quizScores: {},
  masteredLetters: ["alif", "baa"],
  streakDays: 3,
  lastActiveDate: new Date().toISOString().split("T")[0],
  totalMinutesPracticed: 24,
  xpPoints: 180,
};

export const DEFAULT_PREFERENCES: UserPreferences = {
  theme: "light",
  audioSpeed: 1.0,
  autoPlayAudio: true,
  showTransliteration: true,
  arabicFontSize: "large",
  explanationLanguage: "en",
};

export function getStoredProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_PROGRESS_KEY);
    if (!raw) {
      saveStoredProgress(DEFAULT_PROGRESS);
      return DEFAULT_PROGRESS;
    }
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
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

export function markLessonCompleted(lessonId: string, levelNum: number, earnedXp = 50): UserProgress {
  const current = getStoredProgress();
  const completed = new Set(current.completedLessons);
  const isNew = !completed.has(lessonId);
  completed.add(lessonId);

  // Update streak if today
  const today = new Date().toISOString().split("T")[0];
  let streak = current.streakDays;
  if (current.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    if (current.lastActiveDate === yesterday) {
      streak += 1;
    } else if (current.lastActiveDate === "") {
      streak = 1;
    }
  }

  // Level unlock logic
  const unlocked = new Set(current.unlockedLevels);
  if (levelNum < 6 && completed.size >= levelNum * 3) {
    unlocked.add(levelNum + 1);
  }

  const updated: UserProgress = {
    ...current,
    completedLessons: Array.from(completed),
    unlockedLevels: Array.from(unlocked),
    xpPoints: current.xpPoints + (isNew ? earnedXp : 10),
    streakDays: streak,
    lastActiveDate: today,
    totalMinutesPracticed: current.totalMinutesPracticed + 5,
  };

  saveStoredProgress(updated);
  return updated;
}

export function saveQuizScore(quizId: string, scorePercent: number, earnedXp = 100): UserProgress {
  const current = getStoredProgress();
  const existingBest = current.quizScores[quizId] || 0;
  const bestScore = Math.max(existingBest, scorePercent);

  const updated: UserProgress = {
    ...current,
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

