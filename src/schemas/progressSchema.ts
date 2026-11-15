/**
 * QuranPath — Progress Runtime Validation Schemas & Type Guards
 *
 * Provides defensive runtime validation and type guards for user progress,
 * storage persistence, streak tracking, and daily activity metrics.
 */

import type { UserProgress, DailyActivity } from "@/types";

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

/**
 * Type guard for UserProgress.
 * Returns true only if data strictly satisfies the UserProgress contract.
 */
export function isUserProgress(data: unknown): data is UserProgress {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return false;
  }

  const p = data as Record<string, unknown>;

  const hasValidCompletedLessons =
    Array.isArray(p.completedLessons) &&
    p.completedLessons.every((item) => typeof item === "string");

  const hasValidUnlockedLevels =
    Array.isArray(p.unlockedLevels) &&
    p.unlockedLevels.length > 0 &&
    p.unlockedLevels.includes(1) &&
    p.unlockedLevels.every((item) => typeof item === "number" && Number.isFinite(item) && item >= 1);

  const hasValidQuizScores =
    typeof p.quizScores === "object" &&
    p.quizScores !== null &&
    !Array.isArray(p.quizScores) &&
    Object.values(p.quizScores as Record<string, unknown>).every(
      (val) => typeof val === "number" && Number.isFinite(val) && val >= 0 && val <= 100
    );

  const hasValidMasteredLetters =
    Array.isArray(p.masteredLetters) &&
    p.masteredLetters.every((item) => typeof item === "string");

  const hasValidStreak =
    typeof p.streakDays === "number" &&
    Number.isFinite(p.streakDays) &&
    p.streakDays >= 0 &&
    Number.isInteger(p.streakDays);

  const hasValidLastActiveDate = typeof p.lastActiveDate === "string";

  const hasValidMinutes =
    typeof p.totalMinutesPracticed === "number" &&
    Number.isFinite(p.totalMinutesPracticed) &&
    p.totalMinutesPracticed >= 0;

  const hasValidXp =
    typeof p.xpPoints === "number" &&
    Number.isFinite(p.xpPoints) &&
    p.xpPoints >= 0;

  return (
    hasValidCompletedLessons &&
    hasValidUnlockedLevels &&
    hasValidQuizScores &&
    hasValidMasteredLetters &&
    hasValidStreak &&
    hasValidLastActiveDate &&
    hasValidMinutes &&
    hasValidXp
  );
}

/**
 * Defensive validator that guarantees a safe, normalized UserProgress object
 * even with partial, corrupted, or missing localStorage inputs.
 *
 * Invariants enforced:
 * - Level 1 is always unlocked.
 * - Negative counters or NaNs are reset to 0.
 * - Arrays are sanitized and deduplicated.
 * - Quiz scores are clamped to [0, 100].
 */
export function validateUserProgress(data: unknown): UserProgress {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return {
      completedLessons: [...DEFAULT_PROGRESS.completedLessons],
      unlockedLevels: [...DEFAULT_PROGRESS.unlockedLevels],
      quizScores: { ...DEFAULT_PROGRESS.quizScores },
      masteredLetters: [...DEFAULT_PROGRESS.masteredLetters],
      streakDays: DEFAULT_PROGRESS.streakDays,
      lastActiveDate: DEFAULT_PROGRESS.lastActiveDate,
      totalMinutesPracticed: DEFAULT_PROGRESS.totalMinutesPracticed,
      xpPoints: DEFAULT_PROGRESS.xpPoints,
    };
  }

  const raw = data as Record<string, unknown>;

  // completedLessons: sanitize string array and deduplicate
  const completedLessons = Array.isArray(raw.completedLessons)
    ? Array.from(new Set(raw.completedLessons.filter((item): item is string => typeof item === "string")))
    : [...DEFAULT_PROGRESS.completedLessons];

  // unlockedLevels: must always include Level 1 and be positive integers
  let unlockedLevels = Array.isArray(raw.unlockedLevels)
    ? raw.unlockedLevels
        .filter((item): item is number => typeof item === "number" && Number.isFinite(item) && item >= 1)
        .map((n) => Math.floor(n))
    : [...DEFAULT_PROGRESS.unlockedLevels];

  if (!unlockedLevels.includes(1)) {
    unlockedLevels = [1, ...unlockedLevels];
  }
  // Deduplicate and sort
  unlockedLevels = Array.from(new Set(unlockedLevels)).sort((a, b) => a - b);

  // quizScores: sanitize record with numeric values clamped to [0, 100]
  const quizScores: Record<string, number> = {};
  if (raw.quizScores && typeof raw.quizScores === "object" && !Array.isArray(raw.quizScores)) {
    for (const [key, value] of Object.entries(raw.quizScores as Record<string, unknown>)) {
      if (typeof key === "string" && typeof value === "number" && Number.isFinite(value)) {
        quizScores[key] = Math.max(0, Math.min(100, Math.round(value)));
      }
    }
  }

  // masteredLetters: sanitize string array and deduplicate
  const masteredLetters = Array.isArray(raw.masteredLetters)
    ? Array.from(new Set(raw.masteredLetters.filter((item): item is string => typeof item === "string")))
    : [...DEFAULT_PROGRESS.masteredLetters];

  // lastActiveDate: YYYY-MM-DD or empty string
  const lastActiveDate =
    typeof raw.lastActiveDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.lastActiveDate)
      ? raw.lastActiveDate
      : "";

  // streakDays: integer >= 0 (if lastActiveDate is empty, streak is 0)
  let streakDays = 0;
  if (
    lastActiveDate &&
    typeof raw.streakDays === "number" &&
    Number.isFinite(raw.streakDays) &&
    raw.streakDays >= 0
  ) {
    streakDays = Math.floor(raw.streakDays);
  }

  // totalMinutesPracticed: integer >= 0
  const totalMinutesPracticed =
    typeof raw.totalMinutesPracticed === "number" &&
    Number.isFinite(raw.totalMinutesPracticed) &&
    raw.totalMinutesPracticed >= 0
      ? Math.floor(raw.totalMinutesPracticed)
      : 0;

  // xpPoints: integer >= 0
  const xpPoints =
    typeof raw.xpPoints === "number" && Number.isFinite(raw.xpPoints) && raw.xpPoints >= 0
      ? Math.floor(raw.xpPoints)
      : 0;

  return {
    completedLessons,
    unlockedLevels,
    quizScores,
    masteredLetters,
    streakDays,
    lastActiveDate,
    totalMinutesPracticed,
    xpPoints,
  };
}

/**
 * Type guard for DailyActivity
 */
export function isDailyActivity(data: unknown): data is DailyActivity {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.minutesToAdd === "number" &&
    Number.isFinite(d.minutesToAdd) &&
    d.minutesToAdd >= 0 &&
    typeof d.xpToAdd === "number" &&
    Number.isFinite(d.xpToAdd) &&
    d.xpToAdd >= 0 &&
    (d.date === undefined || (typeof d.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d.date)))
  );
}

/**
 * Defensive validator for DailyActivity parameters
 */
export function validateDailyActivity(data: unknown): DailyActivity {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return { minutesToAdd: 2, xpToAdd: 5 };
  }
  const raw = data as Record<string, unknown>;
  const minutesToAdd =
    typeof raw.minutesToAdd === "number" && Number.isFinite(raw.minutesToAdd) && raw.minutesToAdd >= 0
      ? Math.min(1440, Math.floor(raw.minutesToAdd))
      : 2;
  const xpToAdd =
    typeof raw.xpToAdd === "number" && Number.isFinite(raw.xpToAdd) && raw.xpToAdd >= 0
      ? Math.min(10000, Math.floor(raw.xpToAdd))
      : 5;
  const date =
    typeof raw.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(raw.date) ? raw.date : undefined;

  return { minutesToAdd, xpToAdd, ...(date ? { date } : {}) };
}
