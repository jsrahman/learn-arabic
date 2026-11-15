"use client";

import React from "react";
import Link from "next/link";
import { Lock, CheckCircle2, ArrowRight, Play, BookOpen, Clock, Sparkles } from "lucide-react";
import type { LevelCardProps } from "@/types";
import { useThemeContext } from "@/components/ThemeWrapper";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { cn, toBanglaNumber } from "@/utils";

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

  // Objective preview
  const objectivePreview = isBangla
    ? level.objectivesBangla?.[0] || level.descriptionBangla
    : level.objectives?.[0] || level.description;

  return (
    <div
      className={cn(
        "relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between overflow-hidden group backdrop-blur-sm",
        "before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:transition-all before:duration-500",
        isUnlocked
          ? "bg-gradient-to-b from-white/95 via-sand-50/90 to-sand-100/70 dark:from-[#0f242d]/95 dark:via-[#0c1d24]/90 dark:to-[#08151a]/95 border-sand-300/90 dark:border-white/10 hover:border-emerald-600/50 dark:hover:border-gold-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 before:bg-gradient-to-r before:from-transparent before:via-emerald-500/70 dark:before:via-gold-400/80 before:to-transparent"
          : "bg-sand-100/50 dark:bg-[#071318]/60 border-sand-200/60 dark:border-white/5 opacity-75 before:bg-transparent"
      )}
    >
      {/* Subtle Islamic Geometric Rosette Ambient Watermark */}
      <div className="absolute -top-10 -right-10 w-40 h-40 pointer-events-none opacity-[0.035] dark:opacity-[0.06] group-hover:opacity-[0.07] dark:group-hover:opacity-[0.12] transition-opacity duration-500">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-emerald-950 dark:text-gold-300">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="currentColor" strokeWidth="1" />
          <polygon points="50,15 85,50 50,85 15,50" stroke="currentColor" strokeWidth="1" fill="none" />
          <polygon points="25,25 75,25 75,75 25,75" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Ambient background glow on hover */}
      {isUnlocked && (
        <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-emerald-500/5 dark:bg-gold-500/5 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
      )}

      <div className="relative z-10">
        {/* Top Header: Level Badge, Tier Pill & Calligraphic Arabic Script */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            {/* Illuminated Level Number Emblem */}
            <div
              className={cn(
                "relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-mono text-xs sm:text-sm font-black border transition-all duration-200 shadow-sm shrink-0",
                isCompleted
                  ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/25 text-emerald-700 dark:text-emerald-300 border-emerald-500/40 shadow-emerald-500/10"
                  : isUnlocked
                  ? "bg-gradient-to-br from-emerald-800/15 via-emerald-700/10 to-gold-500/10 text-emerald-950 dark:text-gold-200 border-emerald-700/30 dark:border-gold-500/30"
                  : "bg-sand-200/70 dark:bg-white/5 text-sand-400 dark:text-sand-500 border-sand-300/50 dark:border-white/5"
              )}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-gold-300" />
              ) : (
                <span>{String(level.number).padStart(2, "0")}</span>
              )}
            </div>

            {/* Tier & Difficulty Meta */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sand-500 dark:text-sand-400">
                {isBangla ? level.tierBangla || level.tier : level.tier}
              </span>
              <DifficultyBadge difficulty={level.difficulty} isBangla={isBangla} />
            </div>
          </div>

          {/* Clean Calligraphic Arabic Title inside illuminated pill */}
          <div className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-sand-200/50 dark:bg-gold-500/10 border border-sand-300/60 dark:border-gold-400/20 backdrop-blur-sm group-hover:border-emerald-600/30 dark:group-hover:border-gold-400/40 transition-colors shrink-0">
            <span
              className="font-arabic text-xl sm:text-2xl font-normal text-emerald-950 dark:text-gold-300 shrink-0 select-none leading-relaxed block"
              dir="rtl"
            >
              {level.titleArabic}
            </span>
          </div>
        </div>

        {/* Primary Title */}
        <h3 className="text-base sm:text-lg font-bold text-sand-950 dark:text-sand-50 tracking-tight leading-snug group-hover:text-emerald-800 dark:group-hover:text-gold-200 transition-colors mb-1.5">
          {isBangla ? level.titleBangla || level.title : level.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-sand-600 dark:text-sand-300/90 leading-relaxed mb-3 line-clamp-2">
          {isBangla ? level.subtitleBangla : level.subtitle}
        </p>

        {/* Objective Preview Chip */}
        {objectivePreview && (
          <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sand-200/60 dark:bg-white/[0.04] border border-sand-300/50 dark:border-white/5 text-[11px] text-sand-700 dark:text-sand-300 line-clamp-1 max-w-full">
            <Sparkles className="w-3 h-3 text-gold-600 dark:text-gold-400 shrink-0" />
            <span className="truncate">{objectivePreview}</span>
          </div>
        )}
      </div>

      {/* Footer Area: Micro-stats, Progress, and CTA */}
      <div className="relative z-10 mt-auto pt-3.5 border-t border-sand-200/80 dark:border-white/10 space-y-3">
        {/* Meta Strip: Lessons, Time, and Status */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-sand-600 dark:text-sand-400">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              {isBangla ? toBanglaNumber(level.lessonsCount) : level.lessonsCount} {isBangla ? "টি পাঠ" : "lessons"}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              ~{isBangla ? toBanglaNumber(level.estimatedMinutes) : level.estimatedMinutes}{isBangla ? " মি." : "m"}
            </span>
          </div>

          {isCompleted ? (
            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-gold-300 bg-emerald-500/10 dark:bg-gold-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 dark:border-gold-500/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-gold-300" />
              {isBangla ? "সম্পন্ন" : "Done"}
            </span>
          ) : isUnlocked ? (
            <span className="font-mono text-[11px] font-bold text-sand-700 dark:text-sand-300 bg-sand-200/70 dark:bg-white/10 px-2 py-0.5 rounded-full">
              {isBangla ? toBanglaNumber(progressPercent) : progressPercent}%
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[11px] font-medium text-sand-400 dark:text-sand-500">
              <Lock className="w-3 h-3" />
              {isBangla ? "লক করা" : "Locked"}
            </span>
          )}
        </div>

        {/* Sleek Gradient Progress Track (only when in-progress) */}
        {isInProgress && (
          <div className="w-full h-1.5 rounded-full bg-sand-200/90 dark:bg-white/10 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 via-teal-500 to-gold-400 dark:from-emerald-400 dark:via-teal-300 dark:to-gold-300 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        {/* Clean Interactive Action Button */}
        {isUnlocked ? (
          <Link
            href={`/learn/l${level.number}-1`}
            className={cn(
              "w-full min-h-[44px] py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-emerald-500",
              isCompleted
                ? "bg-sand-200/80 hover:bg-sand-300 dark:bg-white/10 dark:hover:bg-white/15 text-emerald-950 dark:text-sand-100 border border-sand-300/80 dark:border-white/15 shadow-sm"
                : "bg-gradient-to-r from-emerald-800 via-emerald-750 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-gold-100 dark:from-emerald-600 dark:via-emerald-500 dark:to-teal-600 dark:hover:from-emerald-500 dark:hover:to-teal-500 dark:text-white shadow-md hover:shadow-emerald-900/20"
            )}
          >
            {isCompleted ? (
              <>
                <span>{isBangla ? `লেভেল ${toBanglaNumber(level.number)} রিভিউ` : `Review Level ${level.number}`}</span>
                <ArrowRight className="w-3.5 h-3.5 text-sand-500 dark:text-sand-400 group-hover:translate-x-0.5 transition-transform" />
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-current text-gold-300 dark:text-gold-200" />
                <span>
                  {isInProgress
                    ? isBangla ? "পড়া চালিয়ে যান" : "Continue Learning"
                    : isBangla ? `লেভেল ${toBanglaNumber(level.number)} শুরু` : `Start Level ${level.number}`}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </Link>
        ) : (
          <div className="w-full min-h-[44px] py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 bg-sand-200/40 dark:bg-white/[0.04] text-sand-400 dark:text-sand-400 border border-sand-200/60 dark:border-white/5 cursor-not-allowed">
            <Lock className="w-3 h-3 text-sand-400 dark:text-sand-400" />
            <span className="font-medium">
              {isBangla
                ? `লেভেল ${toBanglaNumber(level.number - 1)} শেষ হলে খুলবে`
                : `Unlocks after Level ${level.number - 1}`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
