"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Award,
  Volume2,
  HelpCircle,
  Layers,
  Check,
} from "lucide-react";
import { QUIZZES, QuizQuestion } from "@/data/quizzes";
import { LEARNING_LEVELS } from "@/data/levels";
import { AudioButton } from "@/components/AudioButton";
import { useThemeContext } from "@/components/ThemeWrapper";
import { saveQuizScore, recordDailyActivity } from "@/lib/storage";
import { triggerConfetti } from "@/components/ConfettiTrigger";
import { audioService } from "@/lib/audioService";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface QuestionResult {
  selectedIndex: number;
  isCorrect: boolean;
}

export default function QuizArenaPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = (params?.quizId as string) || "q1";
  const quiz = QUIZZES[quizId] || QUIZZES["q1"];
  const levelInfo = LEARNING_LEVELS.find((l) => l.number === quiz.levelId);

  const { preferences, refreshProgress, fontSizeClass } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].quiz;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<number, QuestionResult>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    // Record daily learning activity as soon as the learner enters any quiz
    recordDailyActivity(1, 5);
    refreshProgress();
  }, [quizId]);

  const totalQuestions = quiz.questions.length;
  const question: QuizQuestion = quiz.questions[currentIndex];
  const currentResult = results[currentIndex];
  const isAnswered = currentResult !== undefined;

  const answeredCount = Object.keys(results).length;
  const correctCount = Object.values(results).filter((r) => r.isCorrect).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    const isCorrect = idx === question.correctIndex;
    setResults((prev) => ({
      ...prev,
      [currentIndex]: {
        selectedIndex: idx,
        isCorrect,
      },
    }));

    if (isCorrect) {
      audioService.playSuccessSound();
    } else {
      audioService.playErrorSound();
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Quiz complete
      const finalScorePercent = Math.round((correctCount / totalQuestions) * 100);
      const passed = finalScorePercent >= quiz.passingScore;

      saveQuizScore(quiz.id, finalScorePercent, passed ? 100 : 25);
      refreshProgress();

      if (passed) {
        triggerConfetti();
      }

      setQuizFinished(true);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentIndex(index);
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setResults({});
    setQuizFinished(false);
  };

  // Final Results Screen
  if (quizFinished) {
    const finalPercent = Math.round((correctCount / totalQuestions) * 100);
    const passed = finalPercent >= quiz.passingScore;

    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="rounded-3xl p-8 sm:p-10 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
          <div
            className={cn(
              "w-24 h-24 rounded-full mx-auto flex items-center justify-center shadow-lg animate-bounce-short",
              passed
                ? "bg-gradient-to-tr from-emerald-600 to-teal-500 text-gold-100"
                : "bg-amber-500/20 text-amber-600 border border-amber-500/30"
            )}
          >
            {passed ? <Award className="w-12 h-12" /> : <RotateCcw className="w-10 h-10" />}
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              {isBangla ? `লেভেল ${quiz.levelId} ${t.assessmentCompleted}` : `Level ${quiz.levelId} ${t.assessmentCompleted}`}
            </span>
            <h1 className="text-3xl font-extrabold text-sand-950 dark:text-sand-50">
              {passed ? t.excellentMastery : t.keepPracticing}
            </h1>
            <p className="text-sm text-sand-600 dark:text-sand-400">
              {passed
                ? isBangla
                  ? `মাশাআল্লাহ! আপনি ৩৫টি কঠিন প্রশ্নের পরীক্ষায় ${finalPercent}% স্কোর নিয়ে সফলভাবে উত্তীর্ণ হয়েছেন। পরবর্তী লেভেল উন্মুক্ত হয়েছে!`
                  : `Masha'Allah! You passed the 35-question rigorous test with ${finalPercent}%. The next level has been unlocked!`
                : isBangla
                  ? `আপনি পেয়েছেন ${finalPercent}%। পরবর্তী লেভেল আনলক করতে ন্যূনতম ${quiz.passingScore}% প্রয়োজন। নিয়মগুলো আবার পড়ে চেষ্টা করুন!`
                  : `You scored ${finalPercent}%. You need ${quiz.passingScore}% to unlock the next level. Review the rules and retry!`}
            </p>
          </div>

          {/* Score Pill */}
          <div className="p-3 sm:p-4 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800 grid grid-cols-3 divide-x divide-sand-200 dark:divide-night-800 text-center">
            <div className="px-1">
              <div className="text-[11px] sm:text-xs text-sand-500">{t.yourScore}</div>
              <div className="text-xl sm:text-2xl font-bold text-emerald-950 dark:text-sand-50 mt-0.5">
                {finalPercent}%
              </div>
            </div>
            <div className="px-1">
              <div className="text-[11px] sm:text-xs text-sand-500">{t.accuracy}</div>
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mt-0.5">
                {correctCount}/{totalQuestions}
              </div>
            </div>
            <div className="px-1">
              <div className="text-[11px] sm:text-xs text-sand-500">{t.status}</div>
              <div
                className={cn(
                  "text-xs sm:text-sm font-bold mt-1",
                  passed ? "text-emerald-600" : "text-amber-600"
                )}
              >
                {passed ? t.statusPassed : t.statusNeedsRetry}
              </div>
            </div>
          </div>

          {/* Results Summary Grid */}
          <div className="pt-2">
            <div className="text-xs font-semibold text-sand-600 dark:text-sand-400 mb-2 text-left">
              {t.questionSummary}
            </div>
            <div className="grid grid-cols-7 sm:grid-cols-10 gap-1.5 p-3 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800">
              {quiz.questions.map((_, i) => {
                const res = results[i];
                return (
                  <div
                    key={i}
                    className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold border",
                      res?.isCorrect
                        ? "bg-emerald-500 text-white border-emerald-600"
                        : "bg-rose-500 text-white border-rose-600"
                    )}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={handleRestartQuiz}
              className="w-full py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isBangla ? `লেভেল ${quiz.levelId} কুইজ পুনরায় দিন` : `Retake Level ${quiz.levelId} Quiz`}</span>
            </button>

            {passed && quiz.levelId < 18 && (
              <Link
                href={`/quiz/q${quiz.levelId + 1}`}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-sand-50 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>{isBangla ? `পরবর্তী লেভেল ${quiz.levelId + 1} কুইজে যান` : `Advance to Level ${quiz.levelId + 1} Quiz`}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <Link
              href="/path"
              className="w-full py-3 px-4 rounded-xl bg-sand-200 hover:bg-sand-300 dark:bg-night-800 dark:hover:bg-night-700 text-sand-800 dark:text-sand-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>{t.returnToPath}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/quiz"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand-600 dark:text-sand-400 hover:text-emerald-700 dark:hover:text-emerald-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.exitQuiz}</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
            {isBangla ? `লেভেল ${quiz.levelId}` : `Level ${String(quiz.levelId).padStart(2, "0")}`}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-sand-700 dark:text-sand-300">
            {t.question} {currentIndex + 1} {t.of} {totalQuestions}
          </span>
        </div>
      </div>

      {/* 35 Question Navigator Grid */}
      <div className="rounded-2xl p-3 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-semibold text-sand-600 dark:text-sand-400">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.paletteTitle}</span>
          </div>
          <div>
            <span className="text-emerald-600 font-bold">{correctCount} {t.correct}</span>
            <span className="text-sand-400 mx-1.5">•</span>
            <span>{answeredCount}/{totalQuestions} {t.answered}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 justify-start">
          {quiz.questions.map((_, i) => {
            const res = results[i];
            const isCurrent = i === currentIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleJumpToQuestion(i)}
                className={cn(
                  "w-7 h-7 rounded-lg text-[10px] font-bold border transition-all flex items-center justify-center shrink-0",
                  isCurrent && "ring-2 ring-gold-400 font-extrabold scale-110 z-10",
                  res === undefined
                    ? isCurrent
                      ? "bg-sand-200 dark:bg-night-800 text-sand-900 dark:text-sand-100 border-sand-400 dark:border-night-600"
                      : "bg-sand-50 dark:bg-night-950 text-sand-600 dark:text-sand-400 border-sand-200 dark:border-night-850 hover:bg-sand-200 dark:hover:bg-night-800"
                    : res.isCorrect
                    ? "bg-emerald-600 text-white border-emerald-700"
                    : "bg-rose-600 text-white border-rose-700"
                )}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Question Card */}
      <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
        {/* Question Title */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Q{currentIndex + 1} {t.of} {totalQuestions}
            </span>
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-sand-950 dark:text-sand-50 tracking-tight leading-snug">
            {isBangla ? question.questionBangla || question.question : question.question}
          </h2>
        </div>

        {/* Optional Arabic Display Box or Audio Trigger */}
        {(question.promptText || question.audioPrompt) && (
          <div className="p-4 sm:p-8 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200/80 dark:border-night-850 shadow-inner flex flex-col items-center justify-center gap-3 sm:gap-4 text-center">
            {question.promptText && (
              <span
                className={cn(
                  "font-arabic font-normal text-emerald-950 dark:text-gold-100 select-none",
                  fontSizeClass
                )}
                dir="rtl"
              >
                {question.promptText}
              </span>
            )}

            {(question.audioPrompt || question.audioUrl) && (
              <AudioButton
                audioUrl={question.audioUrl}
                arabicText={question.audioPrompt}
                size="lg"
                variant="gold"
                label={t.clickToListen}
              />
            )}
          </div>
        )}

        {/* Answer Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
          {question.options.map((opt, idx) => {
            const isSelected = currentResult?.selectedIndex === idx;
            const isCorrect = idx === question.correctIndex;

            let buttonClass =
              "bg-sand-50 dark:bg-night-950 border-sand-300 dark:border-night-800 text-sand-800 dark:text-sand-200 hover:border-emerald-600/40";

            if (isAnswered) {
              if (isCorrect) {
                buttonClass =
                  "bg-emerald-500/20 border-emerald-500 text-emerald-950 dark:text-emerald-200 ring-2 ring-emerald-500";
              } else if (isSelected) {
                buttonClass =
                  "bg-rose-500/20 border-rose-500 text-rose-950 dark:text-rose-200 ring-2 ring-rose-500";
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={cn(
                  "p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-left border flex items-center justify-between gap-2.5 sm:gap-3 transition-all duration-150 active:scale-[0.98] min-h-[48px]",
                  buttonClass
                )}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="w-6 h-6 rounded-lg bg-sand-200 dark:bg-night-800 text-sand-700 dark:text-sand-300 text-xs flex items-center justify-center shrink-0 font-bold font-mono">
                    {isBangla ? ["ক", "খ", "গ", "ঘ"][idx] || String(idx + 1) : String.fromCharCode(65 + idx)}
                  </span>
                  <span dir="auto" className="leading-snug">{opt}</span>
                </div>
                {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback / Explanation Box */}
        {isAnswered && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-sand-50/90 dark:bg-night-950/90 border border-sand-200 dark:border-night-800 space-y-1.5 sm:space-y-2 animate-fade-in">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{t.explanationRule}</span>
            </div>
            <p className="text-xs sm:text-sm text-sand-700 dark:text-sand-300 leading-relaxed">
              {isBangla ? question.explanationBangla || question.explanation : question.explanation}
            </p>
          </div>
        )}

        {/* Footer Next Button */}
        {isAnswered && (
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-sand-500 order-2 sm:order-1">
              {currentIndex + 1} {t.of} {totalQuestions} {t.answered}
            </span>
            <button
              type="button"
              onClick={handleNextQuestion}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 order-1 sm:order-2 min-h-[44px]"
            >
              <span>{currentIndex < totalQuestions - 1 ? t.nextQuestion : t.completeViewScore}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
