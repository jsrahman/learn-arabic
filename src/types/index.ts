/**
 * QuranPath — Centralized Type Definitions
 * 
 * All core domain entities, curriculum structures, quiz models,
 * user progress states, contexts, and UI prop contracts are defined here.
 */

import type React from "react";

// ============================================================================
// 1. ALPHABET & PHONETICS (MAKHRAJ)
// ============================================================================

export type MakhrajCategory = "throat" | "tongue" | "lips" | "empty_space" | "nasal";

export interface LetterForms {
  isolated: string;
  initial: string;
  medial: string;
  final: string;
}

export interface ArabicLetter {
  id: string;
  arabic: string;
  name: string;
  nameBangla: string;
  transliteration: string;
  audioUrl: string;
  makhraj: string; // Articulation point description
  makhrajBangla: string;
  forms: LetterForms;
  connectsAfter: boolean; // false for the 6 non-connecting letters (ا د ذ ر ز و)
  category: MakhrajCategory;
  exampleWord: string;
  exampleTranslit: string;
  exampleTranslation: string;
}

// ============================================================================
// 2. CURRICULUM LEVELS & TIERS
// ============================================================================

export type TierType = "Foundations" | "Vowels & Orthography" | "Core Tajweed" | "Quranic Mastery";
export type DifficultyType = "Foundational" | "Fundamental" | "Intermediate" | "Advanced" | "Mastery";

export interface LearningLevel {
  id: number;
  slug: string;
  number: number;
  title: string;
  titleBangla?: string;
  titleArabic: string;
  subtitle: string;
  subtitleBangla: string;
  description: string;
  descriptionBangla: string;
  color: string;
  accentColor: string;
  lessonsCount: number;
  estimatedMinutes: number;
  objectives: string[];
  objectivesBangla: string[];
  tier?: TierType;
  tierNumber?: 1 | 2 | 3 | 4;
  tierBangla?: string;
  difficulty?: DifficultyType;
}

// ============================================================================
// 3. LESSONS & INTERACTIVE SLIDES
// ============================================================================

export interface CheckpointQuestion {
  question: string;
  questionBangla?: string;
  options: string[];
  optionsBangla?: string[];
  correctIndex: number;
  explanation: string;
  explanationBangla?: string;
}

export interface FormExample {
  label: string;
  text: string;
  translit: string;
}

export interface LessonSlide {
  id: string;
  arabic: string;
  transliteration?: string;
  audioPrompt?: string;
  audioUrl?: string;
  title: string;
  titleBangla: string;
  explanation: string;
  explanationBangla: string;
  makhrajInfo?: string;
  ruleBadge?: string;
  formExamples?: FormExample[];
  checkQuestion?: CheckpointQuestion;
}

export interface Lesson {
  id: string;
  levelId: number;
  lessonNumber: number;
  slug: string;
  title: string;
  titleBangla: string;
  description: string;
  descriptionBangla: string;
  slides: LessonSlide[];
  quizId: string;
}

// ============================================================================
// 4. ASSESSMENT & QUIZZES
// ============================================================================

export type QuestionType = "multiple_choice" | "audio_match" | "form_match" | "word_builder";

export interface QuizQuestion {
  id: string;
  type?: QuestionType;
  question: string;
  questionBangla: string;
  promptText?: string; // Arabic display prompt with Tashkeel
  audioPrompt?: string; // Audio or Arabic text to pronounce
  audioUrl?: string;
  options: string[]; // 4 options
  correctIndex: number;
  explanation: string;
  explanationBangla: string;
  ruleTag?: string;
  scrambledLetters?: string[]; // for word_builder
  targetWord?: string;
}

export interface Quiz {
  id: string;
  levelId: number;
  title: string;
  titleBangla: string;
  description: string;
  descriptionBangla: string;
  passingScore: number; // percentage, standard 70%
  questions: QuizQuestion[];
}

export interface QuestionResult {
  selectedIndex: number;
  isCorrect: boolean;
}

// ============================================================================
// 5. QURANIC SURAHS & RECITATION
// ============================================================================

export interface Verse {
  number: number;
  arabic: string;
  transliteration: string;
  translationEn: string;
  translationBn: string;
  tajweedRule?: string;
  tajweedRuleBn?: string;
  audioUrl?: string;
}

export interface Surah {
  number: number;
  nameArabic: string;
  nameTransliterated: string;
  nameEn: string;
  nameBn: string;
  meaningEn: string;
  meaningBn: string;
  versesCount: number;
  revelationType: "Meccan" | "Medinan";
  verses: Verse[];
}

// ============================================================================
// 6. USER PROGRESS & PREFERENCES (STORAGE)
// ============================================================================

export interface UserProgress {
  completedLessons: string[]; // e.g. ["l1-1", "l1-2"]
  unlockedLevels: number[]; // e.g. [1, 2, 3]
  quizScores: Record<string, number>; // quizId -> percentage e.g. {"q1": 100}
  masteredLetters: string[];
  streakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  totalMinutesPracticed: number;
  xpPoints: number;
}

export type ThemeMode = "light" | "dark";
export type LanguageCode = "bn" | "en";
export type FontSizeScale = "normal" | "large" | "xlarge";

export interface UserPreferences {
  theme: ThemeMode;
  audioSpeed: number; // 0.75, 1.0, 1.25
  autoPlayAudio: boolean;
  showTransliteration: boolean;
  arabicFontSize: FontSizeScale;
  explanationLanguage: LanguageCode;
}

// ============================================================================
// 7. CONTEXTS, PWA & OFFLINE INFRASTRUCTURE
// ============================================================================

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export type PlatformType = "desktop" | "android" | "ios" | "unknown";

export interface PWAContextType {
  isInstallable: boolean;
  isInstalled: boolean;
  hasNativePrompt: boolean;
  platform: PlatformType;
  promptInstall: () => Promise<boolean | void>;
  isIOS: boolean;
  isAndroid: boolean;
  isDesktop: boolean;
  showInstallModal: boolean;
  setShowInstallModal: (val: boolean) => void;
  showIOSPrompt: boolean;
  setShowIOSPrompt: (val: boolean) => void;
}

export interface ThemeContextType {
  preferences: UserPreferences;
  progress: UserProgress;
  mounted?: boolean;
  updatePreferences: (partial: Partial<UserPreferences>) => void;
  updateProgress: (newProgress: UserProgress) => void;
  refreshProgress: () => void;
  toggleTheme: () => void;
  fontSizeClass: string;
}

export interface OfflineStatus {
  isOnline: boolean;
  isFullyCached: boolean;
  cachedCount: number;
  totalCount: number;
  percent: number;
}

export type OfflineDownloadState = "cached" | "downloading" | "not-cached" | "error";

// ============================================================================
// 8. PRACTICE, PROGRESS & NAVIGATION DOMAIN TYPES
// ============================================================================

export type PracticeTab =
  | "alphabet"
  | "harakat"
  | "surahs"
  | "all"
  | "tanween"
  | "sukoon"
  | "shaddah"
  | "madd"
  | "special";

export type LevelStatus = "completed" | "current" | "locked";

export type ArabicFontSize = FontSizeScale;

export interface DailyActivity {
  minutesToAdd: number;
  xpToAdd: number;
  date?: string;
}

export interface StreakUpdateResult {
  streak: number;
  lastActiveDate: string;
}

export interface ConfettiOptions {
  count?: number;
  playAudio?: boolean;
  originY?: number;
  colors?: string[];
  particleCount?: number;
  angle?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  ticks?: number;
  origin?: { x?: number; y?: number };
  shapes?: string[];
  scalar?: number;
  zIndex?: number;
  disableForReducedMotion?: boolean;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

// ============================================================================
// 9. UI COMPONENT PROPS
// ============================================================================

export interface ArabicDisplayProps {
  arabic: string;
  transliteration?: string;
  name?: string;
  nameBangla?: string;
  makhraj?: string;
  audioPrompt?: string;
  audioUrl?: string;
  className?: string;
  badge?: string;
  interactive?: boolean;
}

export interface AudioButtonProps {
  arabicText?: string;
  audioUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  variant?: "primary" | "secondary" | "subtle" | "gold";
}

export interface DifficultyBadgeProps {
  difficulty?: DifficultyType | string;
  isBangla?: boolean;
  className?: string;
}

export interface LevelCardProps {
  level: LearningLevel;
  isUnlocked: boolean;
  completedLessonsInLevel: number;
}

export interface RuleBadgeProps {
  badge?: string;
  isBangla?: boolean;
  className?: string;
}

export interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  iconBgColor?: string;
  className?: string;
}

export interface QuizNavigatorProps {
  totalQuestions: number;
  currentIndex: number;
  results: Record<number, QuestionResult>;
  onSelectQuestion: (index: number) => void;
  paletteTitle?: string;
  correctLabel?: string;
  answeredLabel?: string;
}

export interface TierFilter {
  id: string;
  tier?: string;
  label: string;
}

export interface QuizScorePillProps {
  scorePercent: number;
  correctCount: number;
  totalQuestions: number;
  passed: boolean;
  yourScoreLabel?: string;
  accuracyLabel?: string;
  statusLabel?: string;
  passedText?: string;
  failedText?: string;
}
