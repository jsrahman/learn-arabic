/**
 * QuranPath — Centralized Type Definitions
 * 
 * All core domain entities, curriculum structures, quiz models,
 * user progress states, and UI prop contracts are defined here.
 */

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
  connectsAfter: boolean; // false for the 6 non-connecting letters (ا د ذ ر ز ও)
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
