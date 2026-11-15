/**
 * QuranPath — Progress & Gauge Calculation Utilities
 *
 * Centralized pure mathematical functions for calculating progress percentages,
 * SVG circular progress gauge offsets, and level completion metrics.
 */

/**
 * Calculates a clamped integer completion percentage between 0 and 100.
 *
 * @param completed Number of completed units
 * @param total Total number of units
 * @returns Integer percentage between 0 and 100 (returns 0 if total <= 0)
 */
export function calculateProgressPercentage(completed: number, total: number): number {
  if (!total || total <= 0 || !Number.isFinite(total)) return 0;
  if (!completed || completed <= 0 || !Number.isFinite(completed)) return 0;
  return Math.min(100, Math.max(0, Math.round((completed / total) * 100)));
}

/**
 * Calculates the circumference of a circle given its radius.
 *
 * @param radius Radius of the circle
 * @returns Circle circumference (2 * π * radius)
 */
export function calculateCircumference(radius: number): number {
  if (!radius || radius <= 0 || !Number.isFinite(radius)) return 0;
  return 2 * Math.PI * radius;
}

/**
 * Calculates SVG stroke-dashoffset for circular progress indicators.
 *
 * @param percentage Completion percentage (0 to 100)
 * @param radius Radius of the circular path
 * @returns Stroke dash offset clamped to the circle's circumference
 */
export function calculateCircularProgressOffset(percentage: number, radius: number): number {
  const circumference = calculateCircumference(radius);
  if (circumference <= 0) return 0;
  const safePercent = Number.isFinite(percentage) ? percentage : 0;
  const clamped = Math.min(100, Math.max(0, safePercent));
  return circumference - (circumference * clamped) / 100;
}

/**
 * Counts how many lessons in a specific level have been completed based on ID naming convention (l{levelNum}-...).
 *
 * @param completedLessons Array of completed lesson IDs (e.g., ['l1-1', 'l1-2'])
 * @param levelNumber Level number (e.g., 1)
 * @returns Number of completed lessons in that level
 */
export function countCompletedLessonsInLevel(
  completedLessons: string[],
  levelNumber: number
): number {
  if (!Array.isArray(completedLessons) || !levelNumber || levelNumber <= 0) return 0;
  const prefix = `l${levelNumber}-`;
  return completedLessons.filter((id) => typeof id === "string" && id.startsWith(prefix)).length;
}

/**
 * Calculates level completion percentage based on completed lesson IDs and total lessons configured.
 *
 * @param completedLessons Array of completed lesson IDs
 * @param levelNumber Level number
 * @param lessonsCount Total lessons configured for this level
 * @returns Integer percentage between 0 and 100
 */
export function calculateLevelProgress(
  completedLessons: string[],
  levelNumber: number,
  lessonsCount: number
): number {
  const completed = countCompletedLessonsInLevel(completedLessons, levelNumber);
  return calculateProgressPercentage(completed, lessonsCount);
}
