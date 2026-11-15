import React from "react";
import { Filter } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";
import { audioService } from "@/lib/audioService";
import { cn } from "@/utils";
import type { ArabicLetter } from "@/types";

interface AlphabetDrillGridProps {
  letters: ArabicLetter[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  isBangla: boolean;
  filterLabel: string;
  categories: { id: string; label: string }[];
  listenLabel: string;
}

export const AlphabetDrillGrid: React.FC<AlphabetDrillGridProps> = ({
  letters,
  selectedCategory,
  onSelectCategory,
  isBangla,
  filterLabel,
  categories,
  listenLabel,
}) => {
  const handlePlayLetter = (letter: ArabicLetter) => {
    if (letter.audioUrl) {
      audioService.playRecitation(letter.audioUrl, undefined, 1.0, letter.name);
    } else if (letter.name) {
      audioService.speakArabic(letter.name, 0.9);
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-sand-700 dark:text-sand-300 mr-2 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
          <span>{filterLabel}</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              "px-3.5 py-2 rounded-full text-xs font-semibold transition-all border min-h-[44px] inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-1 active:scale-95",
              selectedCategory === cat.id
                ? "bg-emerald-800 dark:bg-emerald-700 text-gold-200 dark:text-gold-100 border-emerald-700 shadow-sm"
                : "bg-sand-100 dark:bg-night-900 text-sand-700 dark:text-sand-200 border-sand-300 dark:border-night-750 hover:border-emerald-600/50 hover:bg-sand-200/50 dark:hover:bg-night-800"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Letter Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4" dir="rtl">
        {letters.map((letter) => {
          const letterDisplayName = isBangla ? letter.nameBangla || letter.name : letter.name;
          return (
            <div
              key={letter.id}
              role="button"
              tabIndex={0}
              aria-label={`${letterDisplayName} - ${letter.transliteration}`}
              onClick={() => handlePlayLetter(letter)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handlePlayLetter(letter);
                }
              }}
              className="group cursor-pointer rounded-2xl p-3 sm:p-4 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card hover:shadow-card-hover hover:border-emerald-600/50 dark:hover:border-emerald-500/40 transition-all flex flex-col items-center justify-between text-center relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-night-900 active:scale-[0.98] min-h-[160px]"
            >
              <div className="my-2 select-none" dir="rtl">
                <span
                  className="font-arabic text-4xl sm:text-5xl font-normal text-emerald-950 dark:text-gold-100 group-hover:scale-110 transition-transform block"
                  dir="rtl"
                >
                  {letter.arabic}
                </span>
              </div>

              <div className="space-y-0.5 my-1">
                <h4 className="text-xs sm:text-sm font-bold text-sand-900 dark:text-sand-100">
                  {letterDisplayName}
                </h4>
                <p className="text-[10px] sm:text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                  {letter.transliteration}
                </p>
              </div>

              <div className="mt-2 sm:mt-3 w-full flex justify-center">
                <AudioButton
                  audioUrl={letter.audioUrl}
                  arabicText={letter.name}
                  size="sm"
                  variant="primary"
                  label={listenLabel}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
