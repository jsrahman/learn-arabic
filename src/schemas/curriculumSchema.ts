/**
 * QuranPath — Curriculum Runtime Validation Schemas & Type Guards
 *
 * Provides defensive runtime validation and type guards for learning levels,
 * lessons, interactive slides, checkpoint questions, quizzes, and surahs.
 */

import type {
  LearningLevel,
  Lesson,
  LessonSlide,
  CheckpointQuestion,
  FormExample,
  Quiz,
  QuizQuestion,
  Surah,
  Verse,
} from "@/types";

/**
 * Type guard for FormExample
 */
export function isFormExample(data: unknown): data is FormExample {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const f = data as Record<string, unknown>;
  return (
    typeof f.label === "string" &&
    typeof f.text === "string" &&
    typeof f.translit === "string"
  );
}

/**
 * Type guard for CheckpointQuestion
 */
export function isCheckpointQuestion(data: unknown): data is CheckpointQuestion {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const q = data as Record<string, unknown>;

  return (
    typeof q.question === "string" &&
    Array.isArray(q.options) &&
    q.options.length >= 2 &&
    q.options.every((opt) => typeof opt === "string") &&
    typeof q.correctIndex === "number" &&
    Number.isInteger(q.correctIndex) &&
    q.correctIndex >= 0 &&
    q.correctIndex < q.options.length &&
    typeof q.explanation === "string"
  );
}

/**
 * Type guard for LearningLevel
 */
export function isLearningLevel(data: unknown): data is LearningLevel {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const l = data as Record<string, unknown>;

  return (
    typeof l.id === "number" &&
    Number.isInteger(l.id) &&
    l.id >= 1 &&
    typeof l.slug === "string" &&
    l.slug.length > 0 &&
    typeof l.number === "number" &&
    typeof l.title === "string" &&
    typeof l.titleArabic === "string" &&
    typeof l.subtitle === "string" &&
    typeof l.subtitleBangla === "string" &&
    typeof l.description === "string" &&
    typeof l.descriptionBangla === "string" &&
    typeof l.color === "string" &&
    typeof l.accentColor === "string" &&
    typeof l.lessonsCount === "number" &&
    l.lessonsCount > 0 &&
    typeof l.estimatedMinutes === "number" &&
    l.estimatedMinutes > 0 &&
    Array.isArray(l.objectives) &&
    l.objectives.every((o) => typeof o === "string")
  );
}

export function validateCurriculumLevel(data: unknown): boolean {
  return isLearningLevel(data);
}

/**
 * Type guard for LessonSlide
 */
export function isLessonSlide(data: unknown): data is LessonSlide {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const s = data as Record<string, unknown>;

  const basicValid =
    typeof s.id === "string" &&
    typeof s.arabic === "string" &&
    typeof s.title === "string" &&
    typeof s.titleBangla === "string" &&
    typeof s.explanation === "string" &&
    typeof s.explanationBangla === "string";

  if (!basicValid) return false;

  if (s.checkQuestion !== undefined && !isCheckpointQuestion(s.checkQuestion)) {
    return false;
  }

  if (s.formExamples !== undefined) {
    if (!Array.isArray(s.formExamples) || !s.formExamples.every(isFormExample)) {
      return false;
    }
  }

  return true;
}

export function validateLessonSlide(data: unknown): boolean {
  return isLessonSlide(data);
}

/**
 * Type guard for Lesson
 */
export function isLesson(data: unknown): data is Lesson {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const l = data as Record<string, unknown>;

  return (
    typeof l.id === "string" &&
    typeof l.levelId === "number" &&
    typeof l.lessonNumber === "number" &&
    typeof l.slug === "string" &&
    typeof l.title === "string" &&
    typeof l.titleBangla === "string" &&
    typeof l.description === "string" &&
    typeof l.descriptionBangla === "string" &&
    Array.isArray(l.slides) &&
    l.slides.length > 0 &&
    l.slides.every(isLessonSlide) &&
    typeof l.quizId === "string"
  );
}

export function validateLesson(data: unknown): boolean {
  return isLesson(data);
}

/**
 * Type guard for QuizQuestion
 */
export function isQuizQuestion(data: unknown): data is QuizQuestion {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const q = data as Record<string, unknown>;

  return (
    typeof q.id === "string" &&
    typeof q.question === "string" &&
    typeof q.questionBangla === "string" &&
    Array.isArray(q.options) &&
    q.options.length >= 2 &&
    q.options.every((opt) => typeof opt === "string") &&
    typeof q.correctIndex === "number" &&
    Number.isInteger(q.correctIndex) &&
    q.correctIndex >= 0 &&
    q.correctIndex < q.options.length &&
    typeof q.explanation === "string" &&
    typeof q.explanationBangla === "string"
  );
}

export function validateQuizQuestion(data: unknown): boolean {
  return isQuizQuestion(data);
}

/**
 * Type guard for Quiz
 */
export function isQuiz(data: unknown): data is Quiz {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const q = data as Record<string, unknown>;

  return (
    typeof q.id === "string" &&
    typeof q.levelId === "number" &&
    typeof q.title === "string" &&
    typeof q.titleBangla === "string" &&
    typeof q.description === "string" &&
    typeof q.descriptionBangla === "string" &&
    typeof q.passingScore === "number" &&
    q.passingScore >= 0 &&
    q.passingScore <= 100 &&
    Array.isArray(q.questions) &&
    q.questions.length > 0 &&
    q.questions.every(isQuizQuestion)
  );
}

export function validateQuiz(data: unknown): boolean {
  return isQuiz(data);
}

/**
 * Type guard for Verse
 */
export function isVerse(data: unknown): data is Verse {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const v = data as Record<string, unknown>;

  return (
    typeof v.number === "number" &&
    Number.isInteger(v.number) &&
    v.number >= 1 &&
    typeof v.arabic === "string" &&
    typeof v.transliteration === "string" &&
    typeof v.translationEn === "string" &&
    typeof v.translationBn === "string"
  );
}

/**
 * Type guard for Surah
 */
export function isSurah(data: unknown): data is Surah {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  const s = data as Record<string, unknown>;

  return (
    typeof s.number === "number" &&
    Number.isInteger(s.number) &&
    s.number >= 1 &&
    typeof s.nameArabic === "string" &&
    typeof s.nameTransliterated === "string" &&
    typeof s.nameEn === "string" &&
    typeof s.nameBn === "string" &&
    typeof s.meaningEn === "string" &&
    typeof s.meaningBn === "string" &&
    typeof s.versesCount === "number" &&
    (s.revelationType === "Meccan" || s.revelationType === "Medinan") &&
    Array.isArray(s.verses) &&
    s.verses.length > 0 &&
    s.verses.every(isVerse)
  );
}

export function validateSurah(data: unknown): boolean {
  return isSurah(data);
}
