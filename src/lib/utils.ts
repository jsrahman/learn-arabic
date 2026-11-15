import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { FontSizeScale, LevelStatus } from "@/types";
import {
  calculateProgressPercentage,
  calculateCircularProgressOffset,
  calculateCircumference,
  countCompletedLessonsInLevel,
  calculateLevelProgress,
} from "./progressUtils";

// Re-export progress utilities for backward compatibility
export {
  calculateProgressPercentage,
  calculateCircularProgressOffset,
  calculateCircumference,
  countCompletedLessonsInLevel,
  calculateLevelProgress,
};
export const calculateProgress = calculateProgressPercentage;

/**
 * Merges Tailwind classes cleanly with clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Converts Western digits (0-9) to Eastern Bangla numerals.
 */
export function toBanglaNumber(value: number | string): string {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(value).replace(/\d/g, (d) => banglaDigits[Number(d)]);
}

/**
 * Formats seconds into a mm:ss timestamp string.
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

/**
 * Formats duration in minutes with appropriate language suffix.
 */
export function formatMinutes(minutes: number, isBangla = true): string {
  return isBangla ? `${toBanglaNumber(minutes)} মিনিট` : `${minutes} mins`;
}

/**
 * Localized difficulty badge labels.
 */
export function getDifficultyLabel(difficulty?: string, isBangla = true): string {
  if (!difficulty) return "";
  switch (difficulty) {
    case "Foundational":
    case "Fundamental":
      return isBangla ? "মৌলিক স্তর" : "Foundational";
    case "Intermediate":
      return isBangla ? "মধ্যবর্তী স্তর" : "Intermediate";
    case "Advanced":
      return isBangla ? "উচ্চতর স্তর" : "Advanced";
    case "Mastery":
      return isBangla ? "পূর্ণ দক্ষতা" : "Mastery";
    default:
      return difficulty;
  }
}

/**
 * Localized Tajweed rule badges.
 */
export function getRuleBadgeLabel(badge?: string, isBangla = true): string {
  if (!badge) return "";
  if (!isBangla) return badge;

  const map: Record<string, string> = {
    "makhraj": "মাখরাজ",
    "harakat": "হরকত",
    "tanween": "তানভীন",
    "sukoon": "সুকূন / জযম",
    "shaddah": "তাশদীদ",
    "madd": "মাদ্দের নিয়ম",
    "qalqalah": "কলকলাহ",
    "ghunnah": "গুন্নাহ",
    "idgham": "ইদগাম",
    "ikhfa": "ইখফা",
    "iqlab": "ইকলাব",
    "izhar": "ইযহার",
    "waqf": "ওয়াক্‌ফ (থামা)",
    "Imālah Kubrā": "ইমালাহ কুবরা",
    "Tashīl": "তাসহীল",
    "Madd al-Farq": "মাদ্দে ফারক্ব",
    "Ishmām": "ইশমাম",
    "Ikhtilās": "ইখতিলাস",
    "Rawm al-Waqf": "রউম আল-ওয়াকফ",
    "Naql": "নাক্বল",
    "Sīn Inscription": "সীন অঙ্কন",
    "Ṣād Inscription": "সোয়াদ অঙ্কন",
    "Saktah": "সাকতাহ",
    "7 Alifs": "৭টি আলিফ",
    "Tafkheem/Tarqeeq": "তাফখীম / তারক্বীক্ব",
    "Mastery Integration": "মাস্টারি অনুশীলন",
    "Waqf Science": "ওয়াকফ বিজ্ঞান",
    "Sajdah Tilāwah": "সিজদায়ে তিলাওয়াত",
    "Khatm Sunnah": "খতমের সুন্নাহ",
    "Al-Ḥall wal-Murtaḥal": "আল-হাল্লু ওয়াল মুরতাহাল",
  };

  return map[badge] || map[badge.toLowerCase()] || badge;
}

/**
 * Localized Tier label formatter.
 */
export function getTierLabel(tier?: string, isBangla = true): string {
  if (!tier) return "";
  switch (tier) {
    case "Foundations":
      return isBangla ? "বুনিয়াদ ও হরফ" : "Foundations";
    case "Vowels & Orthography":
      return isBangla ? "হরকত ও লিখনরীতি" : "Vowels & Orthography";
    case "Core Tajweed":
      return isBangla ? "তাজবীদের মূল নিয়ম" : "Core Tajweed";
    case "Quranic Mastery":
      return isBangla ? "কুরআনিক তিলাওয়াত" : "Quranic Mastery";
    default:
      return tier;
  }
}

/**
 * Localized multiple choice question option labels (Bangla lettering or A, B, C, D).
 */
export function getOptionLabel(index: number, isBangla = true): string {
  if (isBangla) {
    const bnLetters = ["ক", "খ", "গ", "ঘ", "ঙ", "চ"];
    return bnLetters[index] || String(index + 1);
  }
  return String.fromCharCode(65 + index); // A, B, C, D
}

/**
 * Format ISO local date string YYYY-MM-DD.
 */
export function getLocalDateString(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Maps Arabic font size preference setting to responsive Tailwind CSS utility classes.
 */
export function getArabicFontSizeClass(size?: FontSizeScale | string): string {
  switch (size) {
    case "xlarge":
      return "text-4xl sm:text-5xl md:text-6xl leading-[2.1]";
    case "large":
      return "text-3xl sm:text-4xl md:text-5xl leading-[2]";
    case "normal":
    default:
      return "text-2xl sm:text-3xl md:text-4xl leading-[1.9]";
  }
}

/**
 * Determines whether a learning level is completed, currently active/available, or locked.
 *
 * @param levelId The level number/ID to check
 * @param completedLevels Array of completed level IDs
 * @param unlockedLevels Optional array of explicitly unlocked level IDs
 * @returns Status string: 'completed' | 'current' | 'locked'
 */
export function calculateLevelStatus(
  levelId: number,
  completedLevels: number[],
  unlockedLevels?: number[]
): LevelStatus {
  if (completedLevels.includes(levelId)) {
    return "completed";
  }
  if (unlockedLevels) {
    return unlockedLevels.includes(levelId) ? "current" : "locked";
  }
  if (levelId === 1 || completedLevels.includes(levelId - 1)) {
    return "current";
  }
  return "locked";
}
