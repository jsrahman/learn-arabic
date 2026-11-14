"use client";

import React, { useState } from "react";
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
  Layers,
  GraduationCap,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { LEARNING_LEVELS } from "@/data/levels";
import { LESSONS } from "@/data/lessons";
import { useThemeContext } from "@/components/ThemeWrapper";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export default function LearningPathPage() {
  const { progress, preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].path;

  const [selectedTier, setSelectedTier] = useState<string>("all");

  const tierFilters = [
    { id: "all", label: t.tierAll },
    { id: "tier-1", tier: "Foundations", label: t.tier1 },
    { id: "tier-2", tier: "Vowels & Orthography", label: t.tier2 },
    { id: "tier-3", tier: "Core Tajweed", label: t.tier3 },
    { id: "tier-4", tier: "Quranic Mastery", label: t.tier4 },
  ];

  const totalLessons = LEARNING_LEVELS.reduce((sum, l) => sum + l.lessonsCount, 0);
  const completedLessonsCount = progress.completedLessons.length;
  const overallPercent = Math.min(
    100,
    Math.round((completedLessonsCount / totalLessons) * 100)
  );

  const filteredLevels = LEARNING_LEVELS.filter((level) => {
    if (selectedTier === "all") return true;
    if (selectedTier === "tier-1") return level.tier === "Foundations";
    if (selectedTier === "tier-2") return level.tier === "Vowels & Orthography";
    if (selectedTier === "tier-3") return level.tier === "Core Tajweed";
    if (selectedTier === "tier-4") return level.tier === "Quranic Mastery";
    return true;
  });

  const getDifficultyLabel = (diff?: string) => {
    if (!diff) return "";
    if (!isBangla) return diff;
    if (diff === "Foundational" || diff === "Fundamental") return t.difficultyFoundational;
    if (diff === "Intermediate") return t.difficultyIntermediate;
    if (diff === "Advanced") return t.difficultyAdvanced;
    if (diff === "Mastery") return t.difficultyMastery;
    return diff;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
            <Compass className="w-4 h-4" />
            <span>{t.roadmapTag}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            {t.title}
          </h1>
          <p className="text-sm text-sand-600 dark:text-sand-400 mt-1 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Overall Completion Card */}
        <div className="p-4 rounded-2xl bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 flex items-center gap-4 shadow-sm w-full md:w-auto backdrop-blur-sm">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 text-gold-300 flex flex-col items-center justify-center font-bold text-base shadow-sm shrink-0">
            <span>{overallPercent}%</span>
            <span className="text-[9px] uppercase tracking-wider font-medium text-emerald-300">{t.done}</span>
          </div>
          <div>
            <div className="text-xs font-medium text-sand-600 dark:text-sand-400">{t.totalProgress}</div>
            <div className="text-sm font-bold text-sand-900 dark:text-sand-100">
              {completedLessonsCount} / {totalLessons} {t.lessonsCompleted}
            </div>
            <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
              {t.statSummary}
            </div>
          </div>
        </div>
      </div>

      {/* Tier Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tierFilters.map((filter) => {
          const isActive = selectedTier === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setSelectedTier(filter.id)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-2 border",
                isActive
                  ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
                  : "bg-sand-100 dark:bg-night-900 text-sand-700 dark:text-sand-300 border-sand-200 dark:border-night-800 hover:bg-sand-200 dark:hover:bg-night-850"
              )}
            >
              {filter.tier && (
                <span
                  className={cn(
                    "w-2 h-2 rounded-full",
                    filter.tier === "Foundations" && "bg-emerald-400",
                    filter.tier === "Vowels & Orthography" && "bg-blue-400",
                    filter.tier === "Core Tajweed" && "bg-amber-400",
                    filter.tier === "Quranic Mastery" && "bg-purple-400"
                  )}
                />
              )}
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>

      {/* Visual Roadmap Stepper */}
      <div className="space-y-8 relative">
        {filteredLevels.map((level) => {
          const isUnlocked = progress.unlockedLevels.includes(level.number);
          const levelLessons = Object.values(LESSONS).filter((l) => l.levelId === level.number);
          const completedInThisLevel = progress.completedLessons.filter((id) =>
            id.startsWith(`l${level.number}-`)
          ).length;
          const isFinished = completedInThisLevel >= level.lessonsCount;
          const quizScore = progress.quizScores[`q${level.number}`];
          const hasPassedQuiz = quizScore !== undefined && quizScore >= 70;

          return (
            <div
              key={level.id}
              id={`level-${level.number}`}
              className={cn(
                "relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border transition-all duration-300 backdrop-blur-md overflow-hidden",
                "before:absolute before:inset-x-0 before:top-0 before:h-px before:transition-opacity before:duration-300",
                isUnlocked
                  ? "bg-sand-50/95 dark:bg-night-900/90 border-sand-300/80 dark:border-night-750/70 shadow-card hover:shadow-card-hover before:bg-gradient-to-r before:from-transparent before:via-emerald-500/40 dark:before:via-gold-400/30 before:to-transparent"
                  : "bg-sand-100/40 dark:bg-night-950/50 border-sand-200/60 dark:border-night-850/50 opacity-70 before:bg-transparent"
              )}
            >
              {/* Soft decorative glow */}
              {isUnlocked && (
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-400/10 dark:via-gold-500/5 rounded-full blur-3xl pointer-events-none" />
              )}

              {/* Level Banner */}
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-sand-200/80 dark:border-night-800/80">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div
                    className={cn(
                      "w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl border shadow-md shrink-0 transition-transform duration-300",
                      isFinished
                        ? "bg-gradient-to-br from-emerald-600 to-teal-700 text-gold-100 border-emerald-400/50"
                        : isUnlocked
                        ? "bg-gradient-to-br from-emerald-855 via-emerald-800 to-teal-900 text-gold-300 border-gold-500/30"
                        : "bg-sand-200/70 dark:bg-night-850/70 text-sand-500 dark:text-sand-600 border-sand-300/60"
                    )}
                  >
                    {isFinished ? (
                      <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-gold-200" />
                    ) : (
                      <span className="font-mono">{String(level.number).padStart(2, "0")}</span>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                        {isBangla ? `লেভেল ${level.number}` : `Level ${level.number}`}
                      </span>
                      {level.tier && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-sand-200/80 dark:bg-night-800 text-sand-700 dark:text-sand-300">
                          {isBangla ? (level.tierBangla || level.tier) : level.tier}
                        </span>
                      )}
                      {level.difficulty && (
                        <span
                          className={cn(
                            "text-[10px] font-semibold px-2 py-0.5 rounded-full border flex items-center gap-1",
                            (level.difficulty === "Foundational" || level.difficulty === "Fundamental") && "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
                            level.difficulty === "Intermediate" && "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
                            level.difficulty === "Advanced" && "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
                            level.difficulty === "Mastery" && "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20"
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
                          <span>{getDifficultyLabel(level.difficulty)}</span>
                        </span>
                      )}
                      {hasPassedQuiz && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{t.quizPassed} ({quizScore}%)</span>
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-snug">
                      {isBangla ? level.titleBangla || level.title : level.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300/90">
                      {isBangla ? level.subtitleBangla : level.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right flex flex-row sm:flex-col items-center sm:items-end justify-between w-full md:w-auto" dir="rtl">
                  <span className="font-arabic text-2xl sm:text-4xl text-emerald-900/50 dark:text-gold-300/40 select-none" dir="rtl">
                    {level.titleArabic}
                  </span>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-sand-500 mt-1 font-mono">
                    <span>~{level.estimatedMinutes} {t.mins}</span>
                    <span>•</span>
                    <span>{level.lessonsCount} {isBangla ? "টি পাঠ" : "lessons"}</span>
                    <span>•</span>
                    <span>35 {t.questions}</span>
                  </div>
                </div>
              </div>

              {/* Description & Objectives */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                <div className="md:col-span-7">
                  <p className="text-xs sm:text-sm text-sand-700 dark:text-sand-300 leading-relaxed mb-4">
                    {isBangla ? level.descriptionBangla : level.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-sand-600 dark:text-sand-400">
                      {t.learningObjectives}
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
                <div className="md:col-span-5 rounded-2xl bg-sand-100/60 dark:bg-night-950/70 p-4 border border-sand-200/80 dark:border-night-800/80 space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sand-600 dark:text-sand-400 block">
                      {t.lessonsInLevel} {level.number}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      {completedInThisLevel}/{level.lessonsCount} {t.done}
                    </span>
                  </div>

                  {levelLessons.length > 0 ? (
                    levelLessons.map((lesson) => {
                      const isLessonDone = progress.completedLessons.includes(lesson.id);
                      return (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-sand-50 dark:bg-night-900 border border-sand-200 dark:border-night-800 transition-colors"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <span
                              className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 font-mono",
                                isLessonDone
                                  ? "bg-emerald-600 text-gold-100"
                                  : "bg-sand-300 text-sand-700 dark:bg-night-800 dark:text-sand-400"
                              )}
                            >
                              {isLessonDone ? "✓" : lesson.lessonNumber}
                            </span>
                            <span className="text-xs font-semibold text-sand-900 dark:text-sand-200 truncate">
                              {isBangla ? lesson.titleBangla || lesson.title : lesson.title}
                            </span>
                          </div>

                          {isUnlocked ? (
                            <Link
                              href={`/learn/${lesson.id}`}
                              className="text-xs px-2.5 py-1 rounded-lg bg-emerald-800 text-gold-200 hover:bg-emerald-700 font-medium shrink-0 transition-all active:scale-95"
                            >
                              {isLessonDone ? t.review : t.start}
                            </Link>
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-sand-400 shrink-0" />
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-3 text-xs text-sand-500 italic">
                      {isBangla
                        ? "এই লেভেলটি উন্মুক্ত হলে বিস্তারিত অনুশীলন ও পাঠ উপলব্ধ হবে।"
                        : "Structured exercises and guided drills available upon unlocking."}
                    </div>
                  )}

                  {/* Level Quiz Link */}
                  {isUnlocked && (
                    <div className="pt-2">
                      <Link
                        href={`/quiz/q${level.number}`}
                        className={cn(
                          "w-full py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-all duration-150 active:scale-[0.98]",
                          hasPassedQuiz
                            ? "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/25"
                            : "bg-gradient-to-r from-amber-500/15 via-gold-500/15 to-amber-500/15 hover:from-amber-500/25 hover:to-amber-500/25 text-amber-900 dark:text-amber-200 border-amber-500/30"
                        )}
                      >
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-500" />
                          <span>
                            {isBangla ? `লেভেল ${level.number} ${t.masteryQuiz}` : `Level ${level.number} ${t.masteryQuiz}`}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-sand-200/80 dark:bg-night-800">
                          {quizScore !== undefined ? `${quizScore}%` : isBangla ? "৩৫টি প্রশ্ন" : "35 Questions"}
                        </span>
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
