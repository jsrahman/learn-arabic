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
} from "lucide-react";
import { LEARNING_LEVELS } from "@/data/levels";
import { ARABIC_ALPHABET } from "@/data/alphabet";
import { AudioButton } from "@/components/AudioButton";
import { LevelCard } from "@/components/LevelCard";
import { useThemeContext } from "@/components/ThemeWrapper";

export default function HomePage() {
  const { progress } = useThemeContext();
  const [selectedLetter, setSelectedLetter] = useState(ARABIC_ALPHABET[1]); // Bā'

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
            <span className="font-arabic text-sm text-gold-600 dark:text-gold-400">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
            <span className="text-sand-400 dark:text-sand-600">•</span>
            <span>Noorani Qaida Method</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-[1.15]">
            Learn to Read the{" "}
            <span className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700 dark:from-emerald-400 dark:via-teal-300 dark:to-gold-300 bg-clip-text text-transparent">
              Holy Quran
            </span>{" "}
            from Scratch.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-sand-700 dark:text-sand-300 max-w-2xl mx-auto leading-relaxed">
            Take the step-by-step journey from single Arabic letters to reading full verses with
            authentic Tajweed. Built with interactive quizzes, native audio pronunciation, and structured
            lessons designed for complete beginners.
          </p>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/path"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-gold-100 font-bold text-base shadow-lg shadow-emerald-900/25 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group"
            >
              <span>Start Learning Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/practice"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sand-100 dark:bg-night-850 hover:bg-sand-200 dark:hover:bg-night-800 text-emerald-950 dark:text-sand-100 font-semibold text-base border border-sand-300 dark:border-night-700 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
            >
              <Volume2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Pronunciation Drill</span>
            </Link>
          </div>

          {/* Highlights ribbon */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-sand-600 dark:text-sand-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              6 Progressive Levels
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              All 28 Arabic Letters & Makharij
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% Free & Offline-Ready
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
                Interactive Touchpoint
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-sand-950 dark:text-sand-50 tracking-tight">
                Arabic Letter Pronunciation Playground
              </h2>
              <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
                Tap any letter below to hear authentic pronunciation and discover its forms.
              </p>
            </div>

            <Link
              href="/practice"
              className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sand-200/60 dark:bg-night-800 border border-sand-300 dark:border-night-700"
            >
              <span>Open Full Alphabet Grid</span>
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
                arabicText={selectedLetter.name}
                size="lg"
                variant="gold"
                label={`Listen to ${selectedLetter.name}`}
              />
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-2xl font-bold text-sand-900 dark:text-sand-100">
                  {selectedLetter.name} ({selectedLetter.nameBangla})
                </h3>
                <span className="text-sm font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Sound: {selectedLetter.transliteration}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800 space-y-2">
                <p className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider">
                  Makhraj (Articulation Point):
                </p>
                <p className="text-sm text-sand-800 dark:text-sand-200 leading-relaxed">
                  {selectedLetter.makhraj}
                </p>
                <p className="text-xs text-sand-600 dark:text-sand-400 italic">
                  {selectedLetter.makhrajBangla}
                </p>
              </div>

              {/* 4 Forms Mini-Preview */}
              <div>
                <p className="text-xs font-bold text-sand-600 dark:text-sand-400 mb-2 uppercase tracking-wider">
                  Positional Forms in Words:
                </p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                    <span className="text-[10px] text-sand-500 block mb-1">Isolated</span>
                    <span className="font-arabic text-2xl text-emerald-950 dark:text-gold-200">{selectedLetter.forms.isolated}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                    <span className="text-[10px] text-sand-500 block mb-1">Beginning</span>
                    <span className="font-arabic text-2xl text-emerald-950 dark:text-gold-200">{selectedLetter.forms.initial}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                    <span className="text-[10px] text-sand-500 block mb-1">Middle</span>
                    <span className="font-arabic text-2xl text-emerald-950 dark:text-gold-200">{selectedLetter.forms.medial}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                    <span className="text-[10px] text-sand-500 block mb-1">Ending</span>
                    <span className="font-arabic text-2xl text-emerald-950 dark:text-gold-200">{selectedLetter.forms.final}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Select Letter Tiles */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {ARABIC_ALPHABET.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedLetter(item)}
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
      {/* 6-LEVEL LEARNING ROADMAP PREVIEW                         */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Curriculum Path
          </span>
          <h2 className="text-3xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight mt-1">
            The 6 Progressive Levels
          </h2>
          <p className="text-sm text-sand-600 dark:text-sand-400 mt-2">
            Each level builds upon the previous one with crystal clarity, ensuring you never feel overwhelmed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_LEVELS.map((level) => {
            const isUnlocked = progress.unlockedLevels.includes(level.number);
            const completedCount = progress.completedLessons.filter((id) =>
              id.startsWith(`l${level.number}-`)
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
      </section>

      {/* ======================================================== */}
      {/* BENTO PEDAGOGY / VALUE PILLARS                           */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-sand-50 border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Why QuranPath Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-gold-100">
              A Guided Path Honoring Authentic Quranic Pedagogy
            </h2>
            <p className="text-sm text-sand-200 mt-2 leading-relaxed">
              We combined time-tested classical Noorani Qaida methods with modern interactive learning
              technology to give you certainty and joy in reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-gold-200">Authentic Audio Everywhere</h3>
              <p className="text-xs text-sand-200 leading-relaxed">
                Never guess how a letter sounds. Hear crisp Arabic articulation for every letter,
                vowel combination, and Quranic verse on demand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-gold-200">Interactive Quiz Feedback</h3>
              <p className="text-xs text-sand-200 leading-relaxed">
                Reinforce what you learn with multiple-choice, audio-matching, and word-builder
                exercises that explain mistakes gently and clearly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-gold-200">Daily Habit & Streaks</h3>
              <p className="text-xs text-sand-200 leading-relaxed">
                Just 5 to 10 minutes a day is all you need. Track your consistency with streak
                counters, milestones, and celebration rewards.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/path"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-night-950 font-bold text-sm shadow-lg transition-transform active:scale-95"
            >
              <span>Begin With Level 1: Alphabet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
