"use client";

import React from "react";
import Link from "next/link";
import { Lock, CheckCircle2, ArrowRight, Play, BookOpen, Clock, Sparkles } from "lucide-react";
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

  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between overflow-hidden group backdrop-blur-md",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:transition-opacity before:duration-300",
        isUnlocked
          ? "bg-sand-50/95 dark:bg-night-900/90 border-sand-300/80 dark:border-night-750/70 shadow-card hover:shadow-card-hover hover:border-emerald-600/50 dark:hover:border-gold-500/40 hover:-translate-y-0.5 before:bg-gradient-to-r before:from-transparent before:via-emerald-500/40 dark:before:via-gold-400/30 before:to-transparent"
          : "bg-sand-100/40 dark:bg-night-950/50 border-sand-200/70 dark:border-night-850/60 opacity-75 before:bg-transparent"
      )}
    >
      {/* Soft atmospheric background glow */}
      {isUnlocked && (
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-400/10 dark:via-gold-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
      )}

      <div className="relative z-10">
        {/* Top Header: Asymmetric Balance with Level Squircle & Arabic Calligraphy */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {/* Level Numeral Squircle Badge */}
            <div
              className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base border shadow-sm transition-all duration-300 group-hover:scale-105 shrink-0",
                isCompleted
                  ? "bg-gradient-to-br from-emerald-600 to-teal-700 text-gold-100 border-emerald-400/50 shadow-emerald-900/20"
                  : isUnlocked
                  ? "bg-gradient-to-br from-emerald-850 via-emerald-800 to-teal-900 text-gold-300 border-gold-500/30 shadow-md"
                  : "bg-sand-200/70 dark:bg-night-850/70 text-sand-500 dark:text-sand-600 border-sand-300/60 dark:border-night-800"
              )}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-6 h-6 text-gold-200" />
              ) : (
                <span className="font-mono tracking-tighter text-base">
                  {String(level.number).padStart(2, "0")}
                </span>
              )}
            </div>

            {/* Level Tag & Difficulty */}
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                  Level {level.number}
                </span>

                {level.difficulty && (
                  <span
                    className={cn(
                      "text-[9px] font-semibold px-2 py-0.5 rounded-full border flex items-center gap-1",
                      (level.difficulty === "Foundational" || level.difficulty === "Fundamental") &&
                        "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
                      level.difficulty === "Intermediate" &&
                        "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
                      level.difficulty === "Advanced" &&
                        "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
                      level.difficulty === "Mastery" &&
                        "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20"
                    )}
                  >
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        (level.difficulty === "Foundational" || level.difficulty === "Fundamental") && "bg-emerald-500",
                        level.difficulty === "Intermediate" && "bg-blue-500",
                        level.difficulty === "Advanced" && "bg-amber-500",
                        level.difficulty === "Mastery" && "bg-purple-500"
                      )}
                    />
                    <span>{level.difficulty}</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-snug group-hover:text-emerald-900 dark:group-hover:text-gold-200 transition-colors">
                {level.title}
              </h3>
            </div>
          </div>

          {/* Prominent Calligraphic Arabic Title */}
          <span
            className="font-arabic text-2xl sm:text-3xl font-normal text-emerald-900/40 dark:text-gold-400/35 select-none shrink-0 transition-opacity group-hover:opacity-80"
            dir="rtl"
          >
            {level.titleArabic}
          </span>
        </div>

        {/* Subtitle & Localized Description */}
        <p className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300/90 mb-1.5">
          {isBangla ? level.subtitleBangla : level.subtitle}
        </p>
        <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed mb-5 line-clamp-2">
          {isBangla ? level.descriptionBangla : level.description}
        </p>

        {/* Bento Micro-Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-sand-600 dark:text-sand-400 mb-5 pt-3 border-t border-sand-200/70 dark:border-night-800/70">
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-sand-700 dark:text-sand-300">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            {level.lessonsCount} Lessons
          </span>
          <span className="text-sand-300 dark:text-night-700">•</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-sand-700 dark:text-sand-300">
            <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            ~{level.estimatedMinutes}m
          </span>
          <span className="text-sand-300 dark:text-night-700">•</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-sand-700 dark:text-sand-300">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            35 Qs
          </span>
        </div>

        {/* Progress Bar (Visible when Unlocked) */}
        {isUnlocked && (
          <div className="mb-5 space-y-1.5">
            <div className="flex justify-between text-[11px] font-medium text-sand-600 dark:text-sand-400">
              <span className="text-[10px] uppercase font-bold tracking-wider text-sand-500">Mastery</span>
              <span className="font-mono font-bold text-sand-900 dark:text-sand-200">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-sand-200/80 dark:bg-night-800/80 overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Action CTA with Hover Elevation */}
      <div className="pt-3 border-t border-sand-200/80 dark:border-night-800/80 relative z-10">
        {isUnlocked ? (
          <Link
            href={`/learn/l${level.number}-1`}
            className={cn(
              "w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-[0.98]",
              isCompleted
                ? "bg-sand-200/80 hover:bg-sand-300/80 dark:bg-night-800 dark:hover:bg-night-750 text-emerald-950 dark:text-gold-200 border border-sand-300 dark:border-night-700"
                : "bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-750 hover:to-teal-750 text-gold-100 shadow-emerald-900/15 hover:shadow-md"
            )}
          >
            {isCompleted ? (
              <>
                <span>Review Level {level.number}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{progressPercent > 0 ? "Continue Learning" : "Begin Level"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </Link>
        ) : (
          <div className="w-full py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 bg-sand-200/40 dark:bg-night-850/40 text-sand-500 dark:text-sand-500 border border-sand-200/50 dark:border-night-800/50 cursor-not-allowed">
            <Lock className="w-3.5 h-3.5 text-sand-400 dark:text-sand-600" />
            <span>Complete Level {level.number - 1} to Unlock</span>
          </div>
        )}
      </div>
    </div>
  );
};
