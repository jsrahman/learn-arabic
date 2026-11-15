"use client";

import React from "react";
import { AudioButton } from "@/components/AudioButton";
import { SHORT_SURAHS, Surah } from "@/data/surahs";
import { cn, toBanglaNumber } from "@/utils";

interface SurahPracticeViewProps {
  selectedSurah: Surah;
  activeVerseNum: number | null;
  onSelectSurah: (surah: Surah) => void;
  onSelectVerse?: (verseNum: number) => void;
  isBangla: boolean;
  showTransliteration: boolean;
  fontSizeClass?: string;
  surahPrefixText: string;
  meccanText: string;
  medinanText: string;
  listenLabel: string;
}

export const SurahPracticeView: React.FC<SurahPracticeViewProps> = ({
  selectedSurah,
  activeVerseNum,
  onSelectSurah,
  onSelectVerse,
  isBangla,
  showTransliteration,
  fontSizeClass,
  surahPrefixText,
  meccanText,
  medinanText,
  listenLabel,
}) => {
  return (
    <div className="space-y-6">
      {/* Surah Selector Pills */}
      <div className="flex flex-wrap gap-2">
        {SHORT_SURAHS.map((surah) => (
          <button
            key={surah.number}
            type="button"
            onClick={() => onSelectSurah(surah)}
            className={cn(
              "px-4 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-night-900 active:scale-95",
              selectedSurah.number === surah.number
                ? "bg-emerald-800 dark:bg-emerald-700 text-gold-200 dark:text-gold-100 border-emerald-700 shadow-sm"
                : "bg-sand-100 dark:bg-night-900 text-sand-800 dark:text-sand-300 border-sand-300 dark:border-night-800 hover:border-emerald-600/40 hover:bg-sand-200/50 dark:hover:bg-night-850"
            )}
          >
            <span className="font-arabic text-base">
              {surah.nameArabic}
            </span>
            <span>{isBangla ? surah.nameBn : surah.nameTransliterated}</span>
          </button>
        ))}
      </div>

      {/* Surah Header Card */}
      <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              {surahPrefixText}{isBangla ? toBanglaNumber(selectedSurah.number) : selectedSurah.number} • {selectedSurah.revelationType === "Meccan" ? meccanText : medinanText}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-sand-950 dark:text-sand-50">
            {isBangla ? selectedSurah.nameBn : `${selectedSurah.nameTransliterated} — ${selectedSurah.nameEn}`}
          </h2>
          <p className="text-xs text-sand-600 dark:text-sand-400 mt-1">
            {isBangla ? toBanglaNumber(selectedSurah.versesCount) : selectedSurah.versesCount} {isBangla ? "টি আয়াত" : "Verses"} •{" "}
            {isBangla ? selectedSurah.meaningBn : selectedSurah.meaningEn}
          </p>
        </div>

        <span className="font-arabic text-3xl sm:text-4xl text-emerald-900 dark:text-gold-200">
          {selectedSurah.nameArabic}
        </span>
      </div>

      {/* Verse-by-Verse List */}
      <div className="space-y-3 sm:space-y-4">
        {selectedSurah.verses.map((verse) => {
          const isActive = activeVerseNum === verse.number;
          return (
            <div
              key={verse.number}
              role="button"
              tabIndex={0}
              onClick={() => onSelectVerse?.(verse.number)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectVerse?.(verse.number);
                }
              }}
              className={cn(
                "cursor-pointer rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-all duration-200 space-y-3 sm:space-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-night-900",
                isActive
                  ? "border-emerald-600 ring-2 ring-emerald-500/30 bg-emerald-50/60 dark:bg-emerald-950/20 shadow-md"
                  : "border-sand-200 dark:border-night-800 hover:border-emerald-600/40 bg-sand-100/80 dark:bg-night-900/80"
              )}
            >
              {/* Verse Header & Audio */}
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-800 text-gold-300 flex items-center justify-center text-xs font-bold font-mono shrink-0">
                    {isBangla ? toBanglaNumber(verse.number) : verse.number}
                  </span>
                  {verse.tajweedRule && (
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      {isBangla ? "তাজবীদ:" : "Tajweed:"} {isBangla ? verse.tajweedRuleBn || verse.tajweedRule : verse.tajweedRule}
                    </span>
                  )}
                </div>

                <div
                  onClickCapture={() => onSelectVerse?.(verse.number)}
                >
                  <AudioButton
                    audioUrl={verse.audioUrl}
                    arabicText={verse.arabic}
                    size="sm"
                    variant="gold"
                    label={listenLabel}
                  />
                </div>
              </div>

              {/* Arabic Quranic Verse Text */}
              <div className="text-right py-1 sm:py-2 select-none" dir="rtl">
                <span
                  className={cn(
                    "font-arabic text-emerald-950 dark:text-gold-100 leading-loose block break-words",
                    fontSizeClass || "text-2xl sm:text-3xl md:text-4xl"
                  )}
                >
                  {verse.arabic} ﴿{isBangla ? toBanglaNumber(verse.number) : verse.number}﴾
                </span>
              </div>

              {/* Transliteration & Translation */}
              <div className="pt-2 border-t border-sand-200 dark:border-night-800 space-y-1 text-xs">
                {showTransliteration && (
                  <p className="font-mono text-emerald-800 dark:text-emerald-400 font-medium">
                    {verse.transliteration}
                  </p>
                )}
                <p className="text-sand-700 dark:text-sand-300">
                  {isBangla ? verse.translationBn : verse.translationEn}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
