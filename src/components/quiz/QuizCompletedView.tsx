"use client";

import React from "react";
import Link from "next/link";
import { Award, RotateCcw, ArrowRight } from "lucide-react";
import { cn, toBanglaNumber } from "@/utils";
import { QuizScorePill } from "./QuizScorePill";
import type { Quiz, QuestionResult } from "@/types";

interface QuizCompletedViewProps {
  quiz: Quiz;
  passed: boolean;
  finalPercent: number;
  correctCount: number;
  totalQuestions: number;
  results: Record<number, QuestionResult>;
  onRestart: () => void;
  isBangla?: boolean;
  t: {
    assessmentCompleted: string;
    excellentMastery: string;
    keepPracticing: string;
    yourScore: string;
    accuracy: string;
    status: string;
    statusPassed: string;
    statusNeedsRetry: string;
    questionSummary: string;
    returnToPath: string;
  };
}

export const QuizCompletedView: React.FC<QuizCompletedViewProps> = ({
  quiz,
  passed,
  finalPercent,
  correctCount,
  totalQuestions,
  results,
  onRestart,
  isBangla = true,
  t,
}) => {
  return (
    <div className="max-w-xl mx-auto px-3 sm:px-4 py-8 sm:py-16 text-center space-y-6">
      <div className="rounded-3xl p-5 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
        <div
          className={cn(
            "w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto flex items-center justify-center shadow-lg animate-bounce-short",
            passed
              ? "bg-gradient-to-tr from-emerald-600 to-teal-500 text-gold-100"
              : "bg-amber-500/20 text-amber-600 border border-amber-500/30"
          )}
        >
          {passed ? <Award className="w-10 h-10 sm:w-12 sm:h-12" /> : <RotateCcw className="w-9 h-9 sm:w-10 sm:h-10" />}
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {isBangla ? `লেভেল ${toBanglaNumber(quiz.levelId)} ${t.assessmentCompleted}` : `Level ${quiz.levelId} ${t.assessmentCompleted}`}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-sand-950 dark:text-sand-50">
            {passed ? t.excellentMastery : t.keepPracticing}
          </h1>
          <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400 max-w-lg mx-auto">
            {passed
              ? isBangla
                ? `মাশাআল্লাহ! আপনি ${toBanglaNumber(totalQuestions)}টি কঠিন প্রশ্নের পরীক্ষায় ${toBanglaNumber(finalPercent)}% স্কোর নিয়ে সফলভাবে উত্তীর্ণ হয়েছেন। পরবর্তী লেভেল উন্মুক্ত হয়েছে!`
                : `Masha'Allah! You passed the ${totalQuestions}-question test with ${finalPercent}%. The next level has been unlocked!`
              : isBangla
                ? `আপনি পেয়েছেন ${toBanglaNumber(finalPercent)}%। পরবর্তী লেভেল আনলক করতে ন্যূনতম ${toBanglaNumber(quiz.passingScore)}% প্রয়োজন। নিয়মগুলো আবার পড়ে চেষ্টা করুন!`
                : `You scored ${finalPercent}%. You need ${quiz.passingScore}% to unlock the next level. Review the rules and retry!`}
          </p>
        </div>

        {/* Score Pill */}
        <QuizScorePill
          scorePercent={finalPercent}
          correctCount={correctCount}
          totalQuestions={totalQuestions}
          passed={passed}
          yourScoreLabel={t.yourScore}
          accuracyLabel={t.accuracy}
          statusLabel={t.status}
          passedText={t.statusPassed}
          failedText={t.statusNeedsRetry}
          isBangla={isBangla}
        />

        {/* Results Summary Grid */}
        <div className="pt-2">
          <div className="text-xs font-semibold text-sand-700 dark:text-sand-300 mb-2 text-left">
            {t.questionSummary}
          </div>
          <div className="grid grid-cols-7 sm:grid-cols-10 gap-1.5 p-3 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800">
            {quiz.questions.map((_, i) => {
              const res = results[i];
              return (
                <div
                  key={i}
                  className={cn(
                    "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[10px] sm:text-xs font-bold border",
                    res?.isCorrect
                      ? "bg-emerald-500 text-white border-emerald-600"
                      : "bg-rose-500 text-white border-rose-600"
                  )}
                >
                  {isBangla ? toBanglaNumber(i + 1) : i + 1}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={onRestart}
            className="w-full py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isBangla ? `লেভেল ${toBanglaNumber(quiz.levelId)} কুইজ পুনরায় দিন` : `Retake Level ${quiz.levelId} Quiz`}</span>
          </button>

          {passed && quiz.levelId < 18 && (
            <Link
              href={`/quiz/q${quiz.levelId + 1}`}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-sand-50 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>{isBangla ? `পরবর্তী লেভেল ${toBanglaNumber(quiz.levelId + 1)} কুইজে যান` : `Advance to Level ${quiz.levelId + 1} Quiz`}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          <Link
            href="/path"
            className="w-full py-3 px-4 rounded-xl bg-sand-200 hover:bg-sand-300 dark:bg-night-800 dark:hover:bg-night-700 text-sand-800 dark:text-sand-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <span>{t.returnToPath}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
