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

  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between overflow-hidden group",
        isUnlocked
          ? "bg-sand-50 dark:bg-night-900 border-sand-300 dark:border-night-700 shadow-card hover:shadow-card-hover hover:border-emerald-600/40"
          : "bg-sand-100/50 dark:bg-night-950/50 border-sand-200 dark:border-night-800 opacity-75"
      )}
    >
      {/* Decorative background glow */}
      {isUnlocked && (
        <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
      )}

      <div>
        {/* Header: Level Number & Arabic Title */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg border shadow-sm transition-transform group-hover:scale-105",
                isCompleted
                  ? "bg-emerald-600 text-gold-100 border-emerald-500"
                  : isUnlocked
                  ? "bg-gradient-to-br from-emerald-800 to-teal-900 text-gold-300 border-gold-500/30"
                  : "bg-sand-200 text-sand-500 border-sand-300 dark:bg-night-850 dark:text-sand-600 dark:border-night-800"
              )}
            >
              {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : `0${level.number}`}
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 dark:text-emerald-400">
                Level {level.number}
              </span>
              <h3 className="text-xl font-bold text-sand-900 dark:text-sand-100 tracking-tight leading-snug">
                {level.title}
              </h3>
            </div>
          </div>

          <span className="font-arabic text-2xl font-normal text-emerald-900/40 dark:text-gold-400/30 select-none">
            {level.titleArabic}
          </span>
        </div>

        {/* Subtitle & Description */}
        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300 mb-2">
          {isBangla ? level.subtitleBangla : level.subtitle}
        </p>
        <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed mb-6">
          {isBangla ? level.descriptionBangla : level.description}
        </p>

        {/* Meta badges: lessons count & estimated minutes */}
        <div className="flex items-center gap-4 text-xs text-sand-600 dark:text-sand-400 mb-5">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            {level.lessonsCount} lessons
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            ~{level.estimatedMinutes} mins
          </span>
        </div>

        {/* Progress Bar */}
        {isUnlocked && (
          <div className="mb-6 space-y-1.5">
            <div className="flex justify-between text-[11px] font-medium text-sand-600 dark:text-sand-400">
              <span>Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-2 border-t border-sand-200/80 dark:border-night-800/80">
        {isUnlocked ? (
          <Link
            href={`/learn/l${level.number}-1`}
            className="w-full py-2.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-gold-200 shadow-sm transition-all duration-150 active:scale-[0.98]"
          >
            {isCompleted ? (
              <>
                <span>Review Level</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>{progressPercent > 0 ? "Continue Learning" : "Start Level"}</span>
              </>
            )}
          </Link>
        ) : (
          <div className="w-full py-2.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 bg-sand-200/50 dark:bg-night-850/50 text-sand-500 cursor-not-allowed">
            <Lock className="w-4 h-4" />
            <span>Complete Level {level.number - 1} to Unlock</span>
          </div>
        )}
      </div>
    </div>
  );
};
