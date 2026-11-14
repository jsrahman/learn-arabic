"use client";

import React from "react";
import Link from "next/link";
import { Lock, CheckCircle2, ArrowRight, Play, BookOpen, Clock } from "lucide-react";
import { LearningLevel } from "@/data/levels";
import { useThemeContext } from "@/components/ThemeWrapper";
import { cn } from "@/lib/utils";

interface LevelCardProps {
  level: LearningLevel;
  isUnlocked: boolean;
  completedLessonsInLevel: number;
}

export const LevelCard: React.FC<LevelCardProps> = ({
  level,
  isUnlocked,
  completedLessonsInLevel,
}) => {
  const { preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const progressPercent = Math.min(
    100,
    Math.round((completedLessonsInLevel / level.lessonsCount) * 100)
  );
  const isCompleted = progressPercent === 100;
  const isInProgress = isUnlocked && progressPercent > 0 && !isCompleted;

  return (
    <div
      className={cn(
        "relative rounded-2xl p-5 sm:p-6 border transition-all duration-200 flex flex-col justify-between overflow-hidden group",
        "before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:transition-opacity before:duration-300",
        isUnlocked
          ? "bg-sand-50 dark:bg-[#0c1d24] border-sand-300/90 dark:border-white/10 hover:border-emerald-600/60 dark:hover:border-gold-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1 before:bg-gradient-to-r before:from-transparent before:via-emerald-500/50 dark:before:via-gold-400/50 before:to-transparent"
          : "bg-sand-100/60 dark:bg-[#071318]/70 border-sand-200/60 dark:border-white/5 opacity-70 before:bg-transparent"
      )}
    >
      <div>
        {/* Top Header: Level Identifier & Arabic Script */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "font-mono text-xs font-bold px-2 py-0.5 rounded-lg border",
                isCompleted
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
                  : isUnlocked
                  ? "bg-emerald-800/10 text-emerald-800 dark:bg-gold-500/15 dark:text-gold-300 border-emerald-800/20 dark:border-gold-500/30"
                  : "bg-sand-200 dark:bg-white/5 text-sand-500 dark:text-sand-400 border-sand-300/60 dark:border-white/5"
              )}
            >
              {String(level.number).padStart(2, "0")}
            </span>
            <span className="text-[11px] font-semibold text-sand-500 dark:text-sand-400">
              {isBangla ? level.tierBangla || level.tier : level.tier}
            </span>
          </div>

          {/* Clean Calligraphic Arabic Title */}
          <span
            className="font-arabic text-xl sm:text-2xl font-normal text-emerald-900/70 dark:text-gold-300/80 shrink-0 select-none"
            dir="rtl"
          >
            {level.titleArabic}
          </span>
        </div>

        {/* Primary Title: Full width, clean typography without breaking */}
        <h3 className="text-base sm:text-lg font-bold text-sand-950 dark:text-sand-50 tracking-tight leading-snug group-hover:text-emerald-800 dark:group-hover:text-gold-200 transition-colors mb-1.5">
          {isBangla ? level.titleBangla || level.title : level.title}
        </h3>

        {/* Concise Description: 2 lines maximum */}
        <p className="text-xs text-sand-600 dark:text-sand-300/90 leading-relaxed mb-4 line-clamp-2">
          {isBangla ? level.subtitleBangla : level.subtitle}
        </p>
      </div>

      {/* Footer Area: Micro-stats, Progress, and CTA */}
      <div className="mt-auto pt-3.5 border-t border-sand-200/80 dark:border-white/10 space-y-3">
        {/* Meta Strip: Lessons, Time, and Status */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-sand-600 dark:text-sand-400">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              {level.lessonsCount} {isBangla ? "টি পাঠ" : "lessons"}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              ~{level.estimatedMinutes}{isBangla ? "মি." : "m"}
            </span>
          </div>

          {isCompleted ? (
            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-gold-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {isBangla ? "সম্পন্ন" : "Done"}
            </span>
          ) : isUnlocked ? (
            <span className="font-mono text-[11px] font-semibold text-sand-700 dark:text-sand-300">
              {progressPercent}%
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[11px] text-sand-400 dark:text-sand-500">
              <Lock className="w-3 h-3" />
              {isBangla ? "লক করা" : "Locked"}
            </span>
          )}
        </div>

        {/* Slim Progress Track (only when in-progress) */}
        {isInProgress && (
          <div className="w-full h-1.5 rounded-full bg-sand-200/80 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 to-gold-400 dark:from-emerald-400 dark:to-gold-300 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        {/* Clean Interactive Action Button */}
        {isUnlocked ? (
          <Link
            href={`/learn/l${level.number}-1`}
            className={cn(
              "w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-150 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-emerald-500",
              isCompleted
                ? "bg-sand-200/70 hover:bg-sand-300/80 dark:bg-white/5 dark:hover:bg-white/10 text-emerald-950 dark:text-sand-100 border border-sand-300/70 dark:border-white/10"
                : "bg-emerald-800 hover:bg-emerald-750 text-gold-200 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:text-white shadow-sm"
            )}
          >
            {isCompleted ? (
              <>
                <span>{isBangla ? `লেভেল ${level.number} রিভিউ` : `Review Level ${level.number}`}</span>
                <ArrowRight className="w-3.5 h-3.5 text-sand-500 dark:text-sand-400 group-hover:translate-x-0.5 transition-transform" />
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-current text-gold-300 dark:text-gold-200" />
                <span>
                  {isInProgress
                    ? isBangla ? "পড়া চালিয়ে যান" : "Continue Learning"
                    : isBangla ? `লেভেল ${level.number} শুরু` : `Start Level ${level.number}`}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </Link>
        ) : (
          <div className="w-full py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 bg-sand-200/40 dark:bg-white/[0.04] text-sand-400 dark:text-sand-400 border border-sand-200/60 dark:border-white/5 cursor-not-allowed">
            <Lock className="w-3 h-3 text-sand-400 dark:text-sand-400" />
            <span className="font-medium">
              {isBangla ? `লেভেল ${level.number - 1} শেষ হলে খুলবে` : `Unlocks after Level ${level.number - 1}`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
