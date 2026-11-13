"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react";
import { QUIZZES } from "@/data/quizzes";
import { LEARNING_LEVELS } from "@/data/levels";
import { useThemeContext } from "@/components/ThemeWrapper";
import { cn } from "@/lib/utils";

export default function QuizHubPage() {
  const { progress, preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Assessment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            Skill Quizzes
          </h1>
          <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
            Validate your letter recognition, vowel understanding, and Tajweed accuracy.
          </p>
        </div>

        {/* Rapid Test Button */}
        <Link
          href="/quiz/q1"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-sand-50 font-bold text-xs shadow-md transition-all active:scale-95"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>Start Quick Quiz (Level 1)</span>
        </Link>
      </div>

      {/* Grid of Quizzes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(QUIZZES).map((quiz) => {
          const level = LEARNING_LEVELS.find((l) => l.number === quiz.levelId) || LEARNING_LEVELS[0];
          const isUnlocked = progress.unlockedLevels.includes(quiz.levelId);
          const bestScore = progress.quizScores[quiz.id] || null;
          const isPassed = bestScore !== null && bestScore >= quiz.passingScore;

          return (
            <div
              key={quiz.id}
              className={cn(
                "rounded-3xl p-6 border flex flex-col justify-between transition-all duration-200",
                isUnlocked
                  ? "bg-sand-100/90 dark:bg-night-900/90 border-sand-300 dark:border-night-700 shadow-card hover:shadow-card-hover"
                  : "bg-sand-100/40 dark:bg-night-950/40 border-sand-200 dark:border-night-800 opacity-60"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                    Level {quiz.levelId}
                  </span>

                  {bestScore !== null && (
                    <span
                      className={cn(
                        "text-[11px] font-bold px-2 py-0.5 rounded-full border",
                        isPassed
                          ? "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30"
                          : "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30"
                      )}
                    >
                      Best: {bestScore}%
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-sand-900 dark:text-sand-100 tracking-tight mb-1">
                  {isBangla ? quiz.titleBangla : quiz.title}
                </h3>
                <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed mb-4">
                  {isBangla ? quiz.descriptionBangla : quiz.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-sand-500 mb-6">
                  <span>{quiz.questions.length} Questions</span>
                  <span>Pass: {quiz.passingScore}%</span>
                </div>
              </div>

              <div>
                {isUnlocked ? (
                  <Link
                    href={`/quiz/${quiz.id}`}
                    className="w-full py-2.5 px-4 rounded-xl font-medium text-xs flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-gold-200 shadow-sm transition-all"
                  >
                    <span>{bestScore !== null ? "Retake Quiz" : "Start Quiz"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div className="w-full py-2.5 px-4 rounded-xl font-medium text-xs flex items-center justify-center gap-2 bg-sand-200/50 dark:bg-night-850/50 text-sand-400 cursor-not-allowed">
                    <span>Unlock Level {quiz.levelId} First</span>
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
