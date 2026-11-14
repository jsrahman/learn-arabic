"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Volume2,
  Sparkles,
  ArrowRight,
  Filter,
  Layers,
  Music,
  Check,
  ChevronRight,
} from "lucide-react";
import { ARABIC_ALPHABET, ArabicLetter } from "@/data/alphabet";
import { SHORT_SURAHS, Surah, Verse } from "@/data/surahs";
import { AudioButton } from "@/components/AudioButton";
import { useThemeContext } from "@/components/ThemeWrapper";
import { cn } from "@/lib/utils";

type PracticeTab = "alphabet" | "harakat" | "surahs";

export default function PracticePage() {
  const { preferences, fontSizeClass } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const [activeTab, setActiveTab] = useState<PracticeTab>("alphabet");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSurah, setSelectedSurah] = useState<Surah>(SHORT_SURAHS[0]);
  const [activeVerseNum, setActiveVerseNum] = useState<number | null>(null);

  // Filter letters by category
  const filteredLetters =
    selectedCategory === "all"
      ? ARABIC_ALPHABET
      : ARABIC_ALPHABET.filter((l) => l.category === selectedCategory);

  const harakatVowels = [
    {
      name: "Fathah ( َ )",
      nameBn: "যবর",
      symbol: "َ",
      sound: "a",
      example: "بَ",
    },
    {
      name: "Kasrah ( ِ )",
      nameBn: "যের",
      symbol: "ِ",
      sound: "i",
      example: "بِ",
    },
    {
      name: "Dammah ( ُ )",
      nameBn: "পেশ",
      symbol: "ُ",
      sound: "u",
      example: "بُ",
    },
    {
      name: "Sukoon ( ْ )",
      nameBn: "জযম",
      symbol: "ْ",
      sound: "stop",
      example: "أَبْ",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Interactive Drill Ground</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            Practice Arena
          </h1>
          <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
            Revisit letters, drill vowel markings, or practice reading short
            Quran Surahs.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="p-1.5 rounded-2xl bg-sand-200 dark:bg-night-850 flex items-center gap-1 border border-sand-300 dark:border-night-700">
          <button
            type="button"
            onClick={() => setActiveTab("alphabet")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all",
              activeTab === "alphabet"
                ? "bg-emerald-800 text-gold-200 shadow-sm"
                : "text-sand-700 dark:text-sand-300 hover:text-emerald-800",
            )}
          >
            Alphabet (28)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("harakat")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all",
              activeTab === "harakat"
                ? "bg-emerald-800 text-gold-200 shadow-sm"
                : "text-sand-700 dark:text-sand-300 hover:text-emerald-800",
            )}
          >
            Harakat & Vowels
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("surahs")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all",
              activeTab === "surahs"
                ? "bg-emerald-800 text-gold-200 shadow-sm"
                : "text-sand-700 dark:text-sand-300 hover:text-emerald-800",
            )}
          >
            Quran Surahs
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: ALPHABET FLASHCARD GRID                           */}
      {/* ======================================================== */}
      {activeTab === "alphabet" && (
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-sand-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Makhraj:</span>
            </span>
            {[
              { id: "all", label: "All 28 Letters" },
              { id: "throat", label: "Throat (Halq)" },
              { id: "tongue", label: "Tongue (Lisan)" },
              { id: "lips", label: "Lips (Shafatan)" },
              { id: "empty_space", label: "Open (Jawf)" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border",
                  selectedCategory === cat.id
                    ? "bg-emerald-800 text-gold-200 border-emerald-700"
                    : "bg-sand-100 dark:bg-night-900 text-sand-700 dark:text-sand-300 border-sand-300 dark:border-night-800 hover:border-emerald-600/40",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Letter Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {filteredLetters.map((letter) => (
              <div
                key={letter.id}
                className="group rounded-2xl p-4 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card hover:shadow-card-hover hover:border-emerald-600/40 transition-all flex flex-col items-center justify-between text-center relative overflow-hidden"
              >
                <div className="my-2 select-none">
                  <span className="font-arabic text-5xl font-normal text-emerald-950 dark:text-gold-100 group-hover:scale-110 transition-transform block">
                    {letter.arabic}
                  </span>
                </div>

                <div className="space-y-0.5 my-1">
                  <h4 className="text-sm font-bold text-sand-900 dark:text-sand-100">
                    {letter.name}
                  </h4>
                  <p className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                    {letter.transliteration}
                  </p>
                </div>

                <div className="mt-3">
                  <AudioButton
                    audioUrl={letter.audioUrl}
                    arabicText={letter.name}
                    size="sm"
                    variant="primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: HARAKAT DRILL                                     */}
      {/* ======================================================== */}
      {activeTab === "harakat" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {harakatVowels.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800 shadow-card text-center space-y-2"
              >
                <span className="font-arabic text-4xl text-emerald-800 dark:text-gold-200 block">
                  {v.example}
                </span>
                <h3 className="text-base font-bold text-sand-900 dark:text-sand-100">
                  {v.name}
                </h3>
                <p className="text-xs text-sand-500">Bangla: {v.nameBn}</p>
                <AudioButton
                  arabicText={v.example}
                  size="sm"
                  variant="gold"
                  label="Listen"
                />
              </div>
            ))}
          </div>

          {/* Letter x Harakat Matrix Table */}
          <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-card overflow-x-auto">
            <h3 className="text-lg font-bold text-sand-950 dark:text-sand-50 mb-4">
              Vowel Drills (First 8 Letters)
            </h3>
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-sand-300 dark:border-night-800 text-xs font-bold text-sand-600 dark:text-sand-400">
                  <th className="py-3 px-4 text-left">Letter</th>
                  <th className="py-3 px-4">Fathah ( َ )</th>
                  <th className="py-3 px-4">Kasrah ( ِ )</th>
                  <th className="py-3 px-4">Dammah ( ُ )</th>
                  <th className="py-3 px-4">Sukoon ( ْ )</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200 dark:divide-night-800">
                {ARABIC_ALPHABET.slice(0, 8).map((letter) => (
                  <tr
                    key={letter.id}
                    className="hover:bg-sand-50/60 dark:hover:bg-night-950/60"
                  >
                    <td className="py-3 px-4 text-left font-bold text-sm text-sand-900 dark:text-sand-100">
                      {letter.name} ({letter.arabic})
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-arabic text-3xl text-emerald-900 dark:text-gold-200">
                          {letter.arabic}َ
                        </span>
                        <AudioButton
                          arabicText={`${letter.arabic}َ`}
                          size="sm"
                          variant="subtle"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-arabic text-3xl text-emerald-900 dark:text-gold-200">
                          {letter.arabic}ِ
                        </span>
                        <AudioButton
                          arabicText={`${letter.arabic}ِ`}
                          size="sm"
                          variant="subtle"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-arabic text-3xl text-emerald-900 dark:text-gold-200">
                          {letter.arabic}ُ
                        </span>
                        <AudioButton
                          arabicText={`${letter.arabic}ُ`}
                          size="sm"
                          variant="subtle"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-arabic text-3xl text-emerald-900 dark:text-gold-200">
                          أَ{letter.arabic}ْ
                        </span>
                        <AudioButton
                          arabicText={`أَ${letter.arabic}ْ`}
                          size="sm"
                          variant="subtle"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: QURAN SURAH RECITATION PRACTICE                   */}
      {/* ======================================================== */}
      {activeTab === "surahs" && (
        <div className="space-y-6">
          {/* Surah Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {SHORT_SURAHS.map((surah) => (
              <button
                key={surah.number}
                type="button"
                onClick={() => setSelectedSurah(surah)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-2",
                  selectedSurah.number === surah.number
                    ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
                    : "bg-sand-100 dark:bg-night-900 text-sand-800 dark:text-sand-300 border-sand-300 dark:border-night-800",
                )}
              >
                <span className="font-arabic text-base">
                  {surah.nameArabic}
                </span>
                <span>{surah.nameTransliterated}</span>
              </button>
            ))}
          </div>

          {/* Surah Header Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Surah #{selectedSurah.number} • {selectedSurah.revelationType}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-sand-950 dark:text-sand-50">
                {selectedSurah.nameTransliterated} — {selectedSurah.nameEn}
              </h2>
              <p className="text-xs text-sand-500 mt-1">
                {selectedSurah.versesCount} Verses •{" "}
                {isBangla ? selectedSurah.nameBn : selectedSurah.meaningEn}
              </p>
            </div>

            <span className="font-arabic text-4xl text-emerald-900 dark:text-gold-200">
              {selectedSurah.nameArabic}
            </span>
          </div>

          {/* Verse-by-Verse List */}
          <div className="space-y-4">
            {selectedSurah.verses.map((verse) => (
              <div
                key={verse.number}
                className={cn(
                  "rounded-2xl p-6 bg-sand-100/80 dark:bg-night-900/80 border transition-all duration-200 space-y-4",
                  activeVerseNum === verse.number
                    ? "border-emerald-600 ring-2 ring-emerald-500/20 bg-sand-50 dark:bg-night-950"
                    : "border-sand-200 dark:border-night-800 hover:border-sand-300",
                )}
              >
                {/* Verse Header & Audio */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-800 text-gold-300 flex items-center justify-center text-xs font-bold">
                      {verse.number}
                    </span>
                    {verse.tajweedRule && (
                      <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Tajweed: {verse.tajweedRule}
                      </span>
                    )}
                  </div>

                  <AudioButton
                    audioUrl={verse.audioUrl}
                    arabicText={verse.arabic}
                    size="sm"
                    variant="gold"
                    label="Recite"
                  />
                </div>

                {/* Arabic Quranic Verse Text */}
                <div className="text-right py-2 select-none" dir="rtl">
                  <span className="font-arabic text-3xl sm:text-4xl text-emerald-950 dark:text-gold-100 leading-loose">
                    {verse.arabic} ﴿{verse.number}﴾
                  </span>
                </div>

                {/* Transliteration & Translation */}
                <div className="pt-2 border-t border-sand-200 dark:border-night-800 space-y-1 text-xs">
                  {preferences.showTransliteration && (
                    <p className="font-mono text-emerald-800 dark:text-emerald-400 font-medium">
                      {verse.transliteration}
                    </p>
                  )}
                  <p className="text-sand-700 dark:text-sand-300">
                    {isBangla ? verse.translationBn : verse.translationEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
