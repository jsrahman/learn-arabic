"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Volume2,
  Award,
  Flame,
  ShieldCheck,
  Star,
  Play,
  Heart,
  Target,
  Layers,
} from "lucide-react";
import { LEARNING_LEVELS } from "@/data/levels";
import { ARABIC_ALPHABET } from "@/data/alphabet";
import { AudioButton } from "@/components/AudioButton";
import { LevelCard } from "@/components/LevelCard";
import { useThemeContext } from "@/components/ThemeWrapper";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const { progress, preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].home;

  const [selectedLetter, setSelectedLetter] = useState(ARABIC_ALPHABET[1]); // Bā'
  const [selectedTier, setSelectedTier] = useState<string>("all");

  const tierFilters = [
    { id: "all", label: t.tierFilterAll, count: 18 },
    { id: "Foundations", label: t.tierFilter1, count: 4 },
    { id: "Vowels & Orthography", label: t.tierFilter2, count: 4 },
    { id: "Core Tajweed", label: t.tierFilter3, count: 5 },
    { id: "Quranic Mastery", label: t.tierFilter4, count: 5 },
  ];

  const filteredLevels =
    selectedTier === "all"
      ? LEARNING_LEVELS
      : LEARNING_LEVELS.filter((l) => l.tier === selectedTier);

  // Active / recommended level for spotlight hero
  const activeLevel =
    LEARNING_LEVELS.find((lvl) => {
      const isUnlocked = progress.unlockedLevels.includes(lvl.number);
      const completedCount = progress.completedLessons.filter((id) =>
        id.startsWith(`l${lvl.number}-`),
      ).length;
      return isUnlocked && completedCount < lvl.lessonsCount;
    }) || LEARNING_LEVELS[0];

  const activeLevelCompletedCount = progress.completedLessons.filter((id) =>
    id.startsWith(`l${activeLevel.number}-`),
  ).length;

  const activeLevelPercent = Math.min(
    100,
    Math.round((activeLevelCompletedCount / activeLevel.lessonsCount) * 100),
  );

  return (
    <div className="w-full bg-arabesque">
      {/* ======================================================== */}
      {/* HERO SECTION                                             */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Soft emerald & gold atmospheric background gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-gold-500/10 dark:bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative text-center max-w-3xl mx-auto space-y-6">
          {/* Spiritual Opening Ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-200/80 dark:bg-night-850/80 border border-gold-500/30 text-sand-800 dark:text-gold-300 text-xs font-medium shadow-subtle backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-arabic text-sm text-gold-600 dark:text-gold-400" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <span className="text-sand-400 dark:text-sand-600">•</span>
            <span>{t.spiritualRibbon}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-[1.15]">
            {t.headlineStart}{" "}
            <span className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700 dark:from-emerald-400 dark:via-teal-300 dark:to-gold-300 bg-clip-text text-transparent">
              {t.headlineHighlight}
            </span>{" "}
            {t.headlineEnd}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-sand-700 dark:text-sand-300 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/path"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-750 hover:to-teal-750 text-gold-100 font-bold text-base shadow-lg shadow-emerald-900/25 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group"
            >
              <span>{t.ctaStart}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/practice"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sand-100 dark:bg-night-850 hover:bg-sand-200 dark:hover:bg-night-800 text-emerald-950 dark:text-sand-100 font-semibold text-base border border-sand-300 dark:border-night-700 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
            >
              <Volume2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>{t.ctaPractice}</span>
            </Link>
          </div>

          {/* Highlights ribbon */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-sand-600 dark:text-sand-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {t.highlight1}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {t.highlight2}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {t.highlight3}
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* INTERACTIVE ALPHABET PLAYGROUND SPOTLIGHT                 */}
      {/* ======================================================== */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-6 sm:p-10 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                {t.playgroundTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-sand-950 dark:text-sand-50 tracking-tight">
                {t.playgroundTitle}
              </h2>
              <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
                {t.playgroundSubtitle}
              </p>
            </div>

            <Link
              href="/practice"
              className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sand-200/60 dark:bg-night-800 border border-sand-300 dark:border-night-700"
            >
              <span>{t.openFullGrid}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Active Letter Feature Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-sand-50 dark:bg-night-950 rounded-2xl p-6 sm:p-8 border border-sand-200/80 dark:border-night-850 shadow-inner">
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-emerald-800 to-teal-900 border border-gold-500/30 flex items-center justify-center shadow-lg mb-4">
                <span className="font-arabic text-7xl text-gold-300 select-none">
                  {selectedLetter.arabic}
                </span>
              </div>
              <AudioButton
                audioUrl={selectedLetter.audioUrl}
                arabicText={selectedLetter.name}
                size="lg"
                variant="gold"
                label={isBangla ? `${selectedLetter.nameBangla} এর উচ্চারণ শুনুন` : `Listen to ${selectedLetter.name}`}
              />
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-2xl font-bold text-sand-900 dark:text-sand-100">
                  {selectedLetter.name} ({selectedLetter.nameBangla})
                </h3>
                <span className="text-sm font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {t.sound}: {selectedLetter.transliteration}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800 space-y-2">
                <p className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider">
                  {t.makhrajLabel}
                </p>
                <p className="text-sm text-sand-800 dark:text-sand-200 leading-relaxed">
                  {isBangla ? selectedLetter.makhrajBangla : selectedLetter.makhraj}
                </p>
                {!isBangla && (
                  <p className="text-xs text-sand-600 dark:text-sand-400 italic">
                    {selectedLetter.makhrajBangla}
                  </p>
                )}
              </div>

              {/* 4 Forms Mini-Preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-sand-600 dark:text-sand-400 uppercase tracking-wider">
                    {t.formsHeader}
                  </p>
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                    بداية ← وسط ← نهاية
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center" dir="rtl">
                  <div className="p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                    <span className="text-[10px] text-sand-500 block mb-1">
                      {t.formBeginning}
                    </span>
                    <span className="font-arabic text-2xl text-emerald-950 dark:text-gold-200" dir="rtl">
                      {selectedLetter.forms.initial}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                    <span className="text-[10px] text-sand-500 block mb-1">
                      {t.formMiddle}
                    </span>
                    <span className="font-arabic text-2xl text-emerald-950 dark:text-gold-200" dir="rtl">
                      {selectedLetter.forms.medial}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                    <span className="text-[10px] text-sand-500 block mb-1">
                      {t.formEnding}
                    </span>
                    <span className="font-arabic text-2xl text-emerald-950 dark:text-gold-200" dir="rtl">
                      {selectedLetter.forms.final}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                    <span className="text-[10px] text-sand-500 block mb-1">
                      {t.formIsolated}
                    </span>
                    <span className="font-arabic text-2xl text-emerald-950 dark:text-gold-200" dir="rtl">
                      {selectedLetter.forms.isolated}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Select Letter Tiles */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center" dir="rtl">
            {ARABIC_ALPHABET.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedLetter(item)}
                dir="rtl"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl font-arabic text-xl sm:text-2xl flex items-center justify-center transition-all ${
                  selectedLetter.id === item.id
                    ? "bg-emerald-800 text-gold-200 scale-110 shadow-md ring-2 ring-gold-400"
                    : "bg-sand-50 dark:bg-night-850 hover:bg-sand-200 dark:hover:bg-night-800 text-sand-800 dark:text-sand-200 border border-sand-200 dark:border-night-750"
                }`}
              >
                {item.arabic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 18-LEVEL LEARNING ROADMAP PREVIEW                        */}
      {/* ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{t.curriculumArch}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            {t.curriculumTitle}
          </h2>
          <p className="text-sm sm:text-base text-sand-600 dark:text-sand-400 max-w-2xl mx-auto leading-relaxed">
            {t.curriculumSubtitle}
          </p>
        </div>

        {/* 2026 Trend: Bento Hero Spotlight — Active Stage Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-sand-50 border border-gold-500/30 shadow-2xl overflow-hidden group">
          {/* Atmospheric background glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-500/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Kinetic Calligraphy Watermark */}
          <div
            className="font-arabic text-8xl sm:text-9xl absolute -right-6 -bottom-6 text-gold-300/[0.06] pointer-events-none select-none group-hover:scale-105 transition-transform duration-700"
            dir="rtl"
            aria-hidden="true"
          >
            {activeLevel.titleArabic}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {t.activeStage}
                </span>
                <span className="px-3 py-1 rounded-full bg-sand-200/10 border border-sand-200/20 text-sand-200 text-xs font-medium">
                  {isBangla ? (activeLevel.tierBangla || activeLevel.tier) : activeLevel.tier} • {t.levelOf} {activeLevel.number} / 18
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gold-100 tracking-tight flex flex-wrap items-baseline gap-3">
                  <span>{t.levelOf} {activeLevel.number}: {isBangla ? activeLevel.titleBangla || activeLevel.title : activeLevel.title}</span>
                  <span className="font-arabic text-xl sm:text-2xl font-normal text-gold-300/80" dir="rtl">
                    {activeLevel.titleArabic}
                  </span>
                </h3>
                <p className="text-sm text-sand-200/90 mt-1 font-medium">
                  {isBangla ? activeLevel.subtitleBangla : activeLevel.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-sand-300/80 mt-2 leading-relaxed max-w-2xl">
                  {isBangla ? activeLevel.descriptionBangla : activeLevel.description}
                </p>
              </div>

              {/* Goal Chip */}
              {(isBangla ? activeLevel.objectivesBangla?.[0] : activeLevel.objectives?.[0]) && (
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-xs text-sand-200">
                  <Target className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>
                    <strong className="text-gold-200 mr-1">{t.stageGoal}</strong>
                    {isBangla ? activeLevel.objectivesBangla[0] : activeLevel.objectives[0]}
                  </span>
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href={`/learn/l${activeLevel.number}-1`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-night-950 font-extrabold text-sm shadow-lg shadow-gold-500/20 transition-all duration-200 active:scale-95 group/btn"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>
                    {activeLevelPercent > 0
                      ? `${t.resumeLevel} ${activeLevel.number}`
                      : `${t.startLevel} ${activeLevel.number}`}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Gauge & Metrics */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
              <div className="p-6 rounded-3xl bg-sand-50/5 border border-sand-50/10 backdrop-blur-md text-center w-full max-w-xs space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300 block">
                  {t.levelMasteryGauge}
                </span>

                {/* Circular Gauge Readout */}
                <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-sand-50/10"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-gold-400 transition-all duration-700 ease-out"
                      strokeWidth="8"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * activeLevelPercent) / 100}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-mono text-2xl font-extrabold text-gold-200">
                      {activeLevelPercent}%
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-sand-300">
                      {t.mastered}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-sand-50/10">
                  <div className="p-2 rounded-xl bg-sand-50/5">
                    <span className="text-[10px] text-sand-400 block">{t.lessons}</span>
                    <span className="font-mono font-bold text-sand-100">
                      {activeLevelCompletedCount}/{activeLevel.lessonsCount}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-sand-50/5">
                    <span className="text-[10px] text-sand-400 block">{t.estimated}</span>
                    <span className="font-mono font-bold text-sand-100">
                      ~{activeLevel.estimatedMinutes}{isBangla ? "মি." : "m"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2026 Trend: Interactive Tier Navigation Pill Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {tierFilters.map((tf) => {
            const isActive = selectedTier === tf.id;
            return (
              <button
                key={tf.id}
                type="button"
                onClick={() => setSelectedTier(tf.id)}
                className={cn(
                  "px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-200 flex items-center gap-2 border active:scale-95",
                  isActive
                    ? "bg-emerald-800 text-gold-200 border-gold-500/40 shadow-md ring-2 ring-gold-400/30"
                    : "bg-sand-100 dark:bg-night-900 text-sand-700 dark:text-sand-300 border-sand-300/60 dark:border-night-800 hover:bg-sand-200 dark:hover:bg-night-850"
                )}
              >
                <span>{tf.label}</span>
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-full font-mono",
                    isActive
                      ? "bg-gold-500/20 text-gold-300"
                      : "bg-sand-200 dark:bg-night-800 text-sand-500 dark:text-sand-400"
                  )}
                >
                  {tf.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* The Grid of Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLevels.map((level) => {
            const isUnlocked = progress.unlockedLevels.includes(level.number);
            const completedCount = progress.completedLessons.filter((id) =>
              id.startsWith(`l${level.number}-`),
            ).length;

            return (
              <LevelCard
                key={level.id}
                level={level}
                isUnlocked={isUnlocked}
                completedLessonsInLevel={completedCount}
              />
            );
          })}
        </div>

        {/* Bottom Call to Action for Full Path */}
        <div className="text-center pt-4">
          <Link
            href="/path"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-sand-200/80 hover:bg-sand-300 dark:bg-night-850 dark:hover:bg-night-800 border border-sand-300 dark:border-night-700 text-emerald-950 dark:text-gold-200 font-bold text-xs transition-colors"
          >
            <span>{t.exploreRoadmap}</span>
            <ArrowRight className="w-4 h-4 text-emerald-700 dark:text-gold-400" />
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* BENTO PEDAGOGY / VALUE PILLARS                           */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-sand-50 border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              {t.whyUs}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-gold-100">
              {t.pillarsTitle}
            </h2>
            <p className="text-sm text-sand-200 mt-2 leading-relaxed">
              {t.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-gold-200">
                {t.pillar1Title}
              </h3>
              <p className="text-xs text-sand-200 leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-gold-200">
                {t.pillar2Title}
              </h3>
              <p className="text-xs text-sand-200 leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-gold-200">
                {t.pillar3Title}
              </h3>
              <p className="text-xs text-sand-200 leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/path"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-night-950 font-bold text-sm shadow-lg transition-transform active:scale-95"
            >
              <span>{t.beginLevel1}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
