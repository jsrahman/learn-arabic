"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BarChart2,
  Flame,
  Award,
  BookOpen,
  Clock,
  Sparkles,
  CheckCircle2,
  RotateCcw,
  Volume2,
  AlertTriangle,
} from "lucide-react";
import { LEARNING_LEVELS } from "@/data/levels";
import { ARABIC_ALPHABET } from "@/data/alphabet";
import { AudioButton } from "@/components/AudioButton";
import { useThemeContext } from "@/components/ThemeWrapper";
import { resetStoredProgress } from "@/lib/storage";
import { translations } from "@/lib/translations";
import { cn } from "@/utils";
import { StatCard } from "@/components/StatCard";
import { DifficultyBadge } from "@/components/DifficultyBadge";

export default function ProgressPage() {
  const { progress, refreshProgress, preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].progress;

  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  const totalLessons = LEARNING_LEVELS.reduce((sum, l) => sum + l.lessonsCount, 0);
  const completedCount = progress.completedLessons.length;
  const completionPercent = Math.min(100, Math.round((completedCount / totalLessons) * 100));

  const handleResetProgress = () => {
    resetStoredProgress();
    refreshProgress();
    setResetConfirmOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
            <BarChart2 className="w-4 h-4" />
            <span>{t.analyticsTag}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            {t.title}
          </h1>
          <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
            {t.subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setResetConfirmOpen(true)}
          className="text-xs font-semibold px-4 py-2 rounded-xl text-sand-600 dark:text-sand-400 hover:text-rose-600 border border-sand-300 dark:border-night-700 hover:border-rose-400 flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetProgress}</span>
        </button>
      </div>

      {/* Top 4 Stat Bento Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <StatCard
          icon={<Flame className={cn("w-5 h-5 sm:w-6 sm:h-6", progress.streakDays > 0 && "fill-current animate-bounce-short")} />}
          label={t.dailyStreak}
          value={`${progress.streakDays} ${t.days}`}
          iconBgColor={progress.streakDays > 0 ? "bg-amber-500/15 text-amber-600 dark:text-amber-400" : "bg-sand-200/50 dark:bg-night-800 text-sand-400 dark:text-sand-500"}
        />

        <StatCard
          icon={<BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />}
          label={t.lessonsDone}
          value={`${completedCount} / ${totalLessons}`}
          iconBgColor="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
        />

        <StatCard
          icon={<Award className="w-5 h-5 sm:w-6 sm:h-6" />}
          label={t.knowledgeXP}
          value={`${progress.xpPoints} ${isBangla ? "এক্সপি" : "XP"}`}
          iconBgColor="bg-teal-500/15 text-teal-600 dark:text-teal-400"
        />

        <StatCard
          icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6" />}
          label={t.timeInvested}
          value={`${progress.totalMinutesPracticed} ${isBangla ? "মিনিট" : "Mins"}`}
          iconBgColor="bg-indigo-500/15 text-indigo-600 dark:text-indigo-400"
        />
      </div>

      {/* Level-by-Level Breakdown */}
      <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-sand-950 dark:text-sand-50">
          {t.breakdownTitle}
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
                    <span>{t.mastery}</span>
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
                    <span>{t.quizScore}:</span>
                    <span className="font-bold text-sand-900 dark:text-sand-100">
                      {quizScore !== null ? `${quizScore}%` : t.notAttempted}
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

      {/* Mastered Letters Gallery */}
      <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-card space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-sand-950 dark:text-sand-50">
              {t.galleryTitle}
            </h2>
            <p className="text-xs text-sand-500">{t.gallerySubtitle}</p>
          </div>
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            28 {t.available}
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3" dir="rtl">
          {ARABIC_ALPHABET.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800 flex flex-col items-center justify-center text-center hover:border-emerald-500/40 transition-colors"
            >
              <span className="font-arabic text-3xl text-emerald-950 dark:text-gold-200" dir="rtl">
                {item.arabic}
              </span>
              <span className="text-[10px] font-bold text-sand-700 dark:text-sand-300 mt-1">
                {isBangla ? item.nameBangla : item.name}
              </span>
              <div className="mt-2">
                <AudioButton
                  audioUrl={item.audioUrl}
                  arabicText={item.name}
                  size="sm"
                  variant="subtle"
                  label={isBangla ? "শুনুন" : "Listen"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {resetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="max-w-md w-full rounded-3xl p-8 bg-sand-50 dark:bg-night-900 border border-rose-500/30 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-600 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-sand-950 dark:text-sand-50">
                {t.resetModalTitle}
              </h2>
              <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
                {t.resetModalDesc}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setResetConfirmOpen(false)}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-sand-200 dark:bg-night-800 text-sand-800 dark:text-sand-200"
              >
                {t.cancel}
              </button>
              <button
                type="button"
                onClick={handleResetProgress}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-sand-50 shadow-md"
              >
                {t.confirmReset}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
