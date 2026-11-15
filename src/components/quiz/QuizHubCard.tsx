"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LEARNING_LEVELS } from "@/data/levels";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { cn, toBanglaNumber } from "@/utils";
import type { Quiz, UserProgress } from "@/types";

interface QuizHubCardProps {
  quiz: Quiz;
  progress: UserProgress;
  isBangla: boolean;
  passText: string;
  launchQuizText: string;
  retakeQuizText: string;
}

export const QuizHubCard: React.FC<QuizHubCardProps> = ({
  quiz,
  progress,
  isBangla,
  passText,
  launchQuizText,
  retakeQuizText,
}) => {
  const level = LEARNING_LEVELS.find((l) => l.number === quiz.levelId) || LEARNING_LEVELS[0];
  const isUnlocked = progress.unlockedLevels.includes(quiz.levelId);
  const bestScore = progress.quizScores[quiz.id] ?? null;
  const isPassed = bestScore !== null && bestScore >= quiz.passingScore;

  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 overflow-hidden group backdrop-blur-md",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:transition-opacity before:duration-300",
        isUnlocked
          ? "bg-sand-50/95 dark:bg-night-900/90 border-sand-300/80 dark:border-night-750/70 shadow-card hover:shadow-card-hover hover:border-emerald-600/50 dark:hover:border-gold-500/40 hover:-translate-y-0.5 before:bg-gradient-to-r before:from-transparent before:via-emerald-500/40 dark:before:via-gold-400/30 before:to-transparent"
          : "bg-sand-100/40 dark:bg-night-950/50 border-sand-200/60 dark:border-night-850/50 opacity-65 before:bg-transparent"
      )}
    >
      {/* Soft atmospheric background glow */}
      {isUnlocked && (
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-amber-500/10 via-emerald-500/5 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
              {isBangla ? `লেভেল ${toBanglaNumber(quiz.levelId)}` : `Level ${String(quiz.levelId).padStart(2, "0")}`}
            </span>

            <DifficultyBadge difficulty={level.difficulty} isBangla={isBangla} />
          </div>

          {bestScore !== null && (
            <span
              className={cn(
                "text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border",
                isPassed
                  ? "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30"
                  : "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30"
              )}
            >
              {isBangla ? toBanglaNumber(bestScore) : bestScore}%
            </span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-snug mb-1 group-hover:text-emerald-900 dark:group-hover:text-gold-200 transition-colors">
          {isBangla ? quiz.titleBangla || quiz.title : quiz.title}
        </h3>
        <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed mb-4 line-clamp-2">
          {isBangla ? quiz.descriptionBangla || quiz.description : quiz.description}
        </p>

        <div className="flex items-center gap-3 text-xs text-sand-600 dark:text-sand-400 mb-6 font-mono pt-3 border-t border-sand-200/70 dark:border-night-800/70">
          <span className="font-semibold text-sand-800 dark:text-sand-200">
            {isBangla ? toBanglaNumber(quiz.questions.length) : quiz.questions.length} {isBangla ? "টি প্রশ্ন" : "Questions"}
          </span>
          <span>•</span>
          <span>{passText} {isBangla ? toBanglaNumber(quiz.passingScore) : quiz.passingScore}%</span>
          <span>•</span>
          <span className="text-amber-700 dark:text-gold-400 font-bold">+{isBangla ? toBanglaNumber(100) : 100} {isBangla ? "এক্সপি" : "XP"}</span>
        </div>
      </div>

      <div className="relative z-10 pt-2">
        {isUnlocked ? (
          <Link
            href={`/quiz/${quiz.id}`}
            className="w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-750 hover:to-teal-750 text-gold-100 shadow-sm transition-all duration-200 active:scale-[0.98] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-night-900"
          >
            <span>{bestScore !== null ? retakeQuizText : launchQuizText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <div className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-sand-200/70 dark:bg-night-800/70 text-sand-700 dark:text-sand-300 border border-sand-300/80 dark:border-night-700/80 cursor-not-allowed min-h-[44px] select-none">
            <span>{isBangla ? `প্রথমে লেভেল ${toBanglaNumber(quiz.levelId)} সম্পন্ন করুন` : `Unlock Level ${quiz.levelId} First`}</span>
          </div>
        )}
      </div>
    </div>
  );
};
