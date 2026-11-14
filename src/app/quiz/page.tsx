"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Award, ArrowRight, CheckCircle2, Clock, Zap, BookOpen } from "lucide-react";
import { QUIZZES } from "@/data/quizzes";
import { LEARNING_LEVELS } from "@/data/levels";
import { useThemeContext } from "@/components/ThemeWrapper";
import { translations } from "@/lib/translations";
import { cn } from "@/utils";
import { DifficultyBadge } from "@/components/DifficultyBadge";

export default function QuizHubPage() {
  const { progress, preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].quiz;
  const pathT = translations[isBangla ? "bn" : "en"].path;

  const [selectedTier, setSelectedTier] = useState<string>("all");

  const tierFilters = [
    { id: "all", label: pathT.tierAll },
    { id: "tier-1", tier: "Foundations", label: pathT.tier1 },
    { id: "tier-2", tier: "Vowels & Orthography", label: pathT.tier2 },
    { id: "tier-3", tier: "Core Tajweed", label: pathT.tier3 },
    { id: "tier-4", tier: "Quranic Mastery", label: pathT.tier4 },
  ];

  const quizList = Object.values(QUIZZES);

  const filteredQuizzes = quizList.filter((quiz) => {
    const level = LEARNING_LEVELS.find((l) => l.number === quiz.levelId);
    if (!level) return true;
    if (selectedTier === "all") return true;
    if (selectedTier === "tier-1") return level.tier === "Foundations";
    if (selectedTier === "tier-2") return level.tier === "Vowels & Orthography";
    if (selectedTier === "tier-3") return level.tier === "Core Tajweed";
    if (selectedTier === "tier-4") return level.tier === "Quranic Mastery";
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>{t.quizTag}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            {t.quizHubTitle}
          </h1>
          <p className="text-sm text-sand-600 dark:text-sand-400 mt-1 max-w-2xl">
            {t.quizHubSubtitle}
          </p>
        </div>

        {/* Rapid Test Button */}
        <Link
          href="/quiz/q1"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-sand-50 font-bold text-xs shadow-md transition-all active:scale-95 shrink-0"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>{t.launchLevel1}</span>
        </Link>
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

      {/* Grid of Quizzes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => {
          const level = LEARNING_LEVELS.find((l) => l.number === quiz.levelId) || LEARNING_LEVELS[0];
          const isUnlocked = progress.unlockedLevels.includes(quiz.levelId);
          const bestScore = progress.quizScores[quiz.id] ?? null;
          const isPassed = bestScore !== null && bestScore >= quiz.passingScore;

          return (
            <div
              key={quiz.id}
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
                      {isBangla ? `লেভেল ${quiz.levelId}` : `Level ${String(quiz.levelId).padStart(2, "0")}`}
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
                      {bestScore}%
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-snug mb-1 group-hover:text-emerald-900 dark:group-hover:text-gold-200 transition-colors">
                  {isBangla ? quiz.titleBangla || quiz.title : quiz.title}
                </h3>
                <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed mb-4 line-clamp-2">
                  {isBangla ? quiz.descriptionBangla || quiz.description : quiz.description}
                </p>

                <div className="flex items-center gap-3 text-xs text-sand-500 mb-6 font-mono pt-3 border-t border-sand-200/70 dark:border-night-800/70">
                  <span className="font-semibold text-sand-800 dark:text-sand-200">
                    {quiz.questions.length} {isBangla ? "টি প্রশ্ন" : "Questions"}
                  </span>
                  <span>•</span>
                  <span>{t.pass} {quiz.passingScore}%</span>
                  <span>•</span>
                  <span className="text-gold-600 dark:text-gold-400 font-bold">+100 {isBangla ? "এক্সপি" : "XP"}</span>
                </div>
              </div>

              <div className="relative z-10 pt-2">
                {isUnlocked ? (
                  <Link
                    href={`/quiz/${quiz.id}`}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-750 hover:to-teal-750 text-gold-100 shadow-sm transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>{bestScore !== null ? t.retakeQuiz : t.launchQuiz}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ) : (
                  <div className="w-full py-2.5 px-4 rounded-xl font-medium text-xs flex items-center justify-center gap-2 bg-sand-200/40 dark:bg-night-850/40 text-sand-500 dark:text-sand-500 border border-sand-200/50 dark:border-night-800/50 cursor-not-allowed">
                    <span>{isBangla ? `প্রথমে লেভেল ${quiz.levelId} সম্পন্ন করুন` : `Unlock Level ${quiz.levelId} First`}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
