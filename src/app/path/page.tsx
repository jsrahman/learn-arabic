"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  Lock,
  Play,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  Flame,
} from "lucide-react";
import { LEARNING_LEVELS } from "@/data/levels";
import { LESSONS } from "@/data/lessons";
import { useThemeContext } from "@/components/ThemeWrapper";
import { cn } from "@/lib/utils";

export default function LearningPathPage() {
  const { progress, preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const totalLessons = LEARNING_LEVELS.reduce((sum, l) => sum + l.lessonsCount, 0);
  const completedLessonsCount = progress.completedLessons.length;
  const overallPercent = Math.min(
    100,
    Math.round((completedLessonsCount / totalLessons) * 100)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
            <Compass className="w-4 h-4" />
            <span>Structured Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            Learning Path
          </h1>
          <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
            Your step-by-step roadmap to reading the Holy Quran with clarity and Tajweed.
          </p>
        </div>

        {/* Overall Completion Card */}
        <div className="p-4 rounded-2xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800 flex items-center gap-4 shadow-sm w-full md:w-auto">
          <div className="w-12 h-12 rounded-xl bg-emerald-800 text-gold-300 flex items-center justify-center font-bold text-base shadow-sm">
            {overallPercent}%
          </div>
          <div>
            <div className="text-xs font-medium text-sand-600 dark:text-sand-400">Overall Mastery</div>
            <div className="text-sm font-bold text-sand-900 dark:text-sand-100">
              {completedLessonsCount} of {totalLessons} Lessons
            </div>
          </div>
        </div>
      </div>

      {/* Visual Roadmap Stepper */}
      <div className="space-y-8 relative">
        {LEARNING_LEVELS.map((level, idx) => {
          const isUnlocked = progress.unlockedLevels.includes(level.number);
          const levelLessons = Object.values(LESSONS).filter((l) => l.levelId === level.number);
          const completedInThisLevel = progress.completedLessons.filter((id) =>
            id.startsWith(`l${level.number}-`)
          ).length;
          const isFinished = completedInThisLevel >= level.lessonsCount;

          return (
            <div
              key={level.id}
              id={`level-${level.number}`}
              className={cn(
                "relative rounded-3xl p-6 sm:p-8 border transition-all duration-200",
                isUnlocked
                  ? "bg-sand-100/70 dark:bg-night-900/80 border-sand-300 dark:border-night-700 shadow-card"
                  : "bg-sand-100/30 dark:bg-night-950/40 border-sand-200 dark:border-night-850 opacity-70"
              )}
            >
              {/* Level Banner */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-sand-200 dark:border-night-800">
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl border shadow-md",
                      isFinished
                        ? "bg-emerald-600 text-gold-100 border-emerald-500"
                        : isUnlocked
                        ? "bg-gradient-to-br from-emerald-800 to-teal-900 text-gold-300 border-gold-500/30"
                        : "bg-sand-200 dark:bg-night-850 text-sand-400 border-sand-300"
                    )}
                  >
                    {isFinished ? <CheckCircle2 className="w-8 h-8" /> : `0${level.number}`}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        Level {level.number}
                      </span>
                      {isFinished && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                          Mastered
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-sand-950 dark:text-sand-50 tracking-tight">
                      {level.title}
                    </h2>
                    <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                      {isBangla ? level.subtitleBangla : level.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="font-arabic text-3xl text-emerald-900/60 dark:text-gold-300/60 select-none">
                    {level.titleArabic}
                  </span>
                  <span className="text-xs text-sand-500 mt-1">
                    ~{level.estimatedMinutes} minutes • {level.lessonsCount} lessons
                  </span>
                </div>
              </div>

              {/* Description & Objectives */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                <div className="md:col-span-7">
                  <p className="text-sm text-sand-700 dark:text-sand-300 leading-relaxed mb-4">
                    {isBangla ? level.descriptionBangla : level.description}
                  </p>
                  <div className="space-y-1.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-sand-600 dark:text-sand-400">
                      Learning Objectives:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-sand-600 dark:text-sand-400">
                      {(isBangla ? level.objectivesBangla : level.objectives).map((obj, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Lessons in this level */}
                <div className="md:col-span-5 rounded-2xl bg-sand-50 dark:bg-night-950 p-4 border border-sand-200 dark:border-night-800 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sand-600 dark:text-sand-400 block mb-2">
                    Lessons in Level {level.number}
                  </span>

                  {levelLessons.length > 0 ? (
                    levelLessons.map((lesson) => {
                      const isLessonDone = progress.completedLessons.includes(lesson.id);
                      return (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800"
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                                isLessonDone
                                  ? "bg-emerald-600 text-gold-100"
                                  : "bg-sand-300 text-sand-700 dark:bg-night-800 dark:text-sand-400"
                              )}
                            >
                              {isLessonDone ? "✓" : lesson.lessonNumber}
                            </span>
                            <span className="text-xs font-semibold text-sand-900 dark:text-sand-200">
                              {lesson.title}
                            </span>
                          </div>

                          {isUnlocked ? (
                            <Link
                              href={`/learn/${lesson.id}`}
                              className="text-xs px-2.5 py-1 rounded-lg bg-emerald-800 text-gold-200 hover:bg-emerald-700 font-medium"
                            >
                              {isLessonDone ? "Review" : "Start"}
                            </Link>
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-sand-400" />
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-3 text-xs text-sand-500 italic">
                      Structured exercises and guided drills available upon unlocking.
                    </div>
                  )}

                  {/* Level Quiz Link */}
                  {isUnlocked && (
                    <div className="pt-2">
                      <Link
                        href={`/quiz/q${level.number}`}
                        className="w-full py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/20 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>Take Level {level.number} Quiz</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
