import React from "react";
import Link from "next/link";
import { LEARNING_LEVELS } from "@/data/levels";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import type { UserProgress } from "@/types";

interface LevelBreakdownCardProps {
  progress: UserProgress;
  isBangla: boolean;
  breakdownTitle: string;
  masteryText: string;
  quizScoreText: string;
  notAttemptedText: string;
}

export const LevelBreakdownCard: React.FC<LevelBreakdownCardProps> = ({
  progress,
  isBangla,
  breakdownTitle,
  masteryText,
  quizScoreText,
  notAttemptedText,
}) => {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
      <h2 className="text-lg sm:text-xl font-bold text-sand-950 dark:text-sand-50">
        {breakdownTitle}
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {LEARNING_LEVELS.map((level) => {
          const completedInLevel = progress.completedLessons.filter((id) =>
            id.startsWith(`l${level.number}-`)
          ).length;
          const levelPct = Math.min(100, Math.round((completedInLevel / level.lessonsCount) * 100));
          const quizScore = progress.quizScores[`q${level.number}`] || null;

          return (
            <div
              key={level.id}
              className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-800 text-gold-300 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  {String(level.number).padStart(2, "0")}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <h3 className="text-xs sm:text-sm font-bold text-sand-900 dark:text-sand-100">
                      {isBangla ? level.titleBangla || level.title : level.title}
                    </h3>
                    <DifficultyBadge difficulty={level.difficulty} isBangla={isBangla} />
                  </div>
                  <p className="text-[11px] sm:text-xs text-sand-500 mt-0.5">
                    {completedInLevel} / {level.lessonsCount} {isBangla ? "টি পাঠ সম্পন্ন" : "lessons completed"}
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-64 space-y-1">
                <div className="flex justify-between text-[11px] sm:text-xs text-sand-500">
                  <span>{masteryText}</span>
                  <span>{levelPct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full"
                    style={{ width: `${levelPct}%` }}
                  />
                </div>
              </div>

              <div className="w-full sm:w-auto text-xs text-sand-500 flex items-center justify-between sm:justify-start gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-sand-200 dark:border-night-800">
                <div className="flex items-center gap-1">
                  <span>{quizScoreText}:</span>
                  <span className="font-bold text-sand-900 dark:text-sand-100">
                    {quizScore !== null ? `${quizScore}%` : notAttemptedText}
                  </span>
                </div>
                <Link
                  href={`/quiz/q${level.number}`}
                  className="ml-2 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:underline px-2 py-1 rounded-lg bg-emerald-500/10 min-h-[32px] flex items-center"
                >
                  {isBangla ? "কুইজ দিন" : "Quiz"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
