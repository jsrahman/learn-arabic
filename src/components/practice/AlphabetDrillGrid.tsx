import React from "react";
import { Filter } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";
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
  return (
    <div className="space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-sand-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          <span>{filterLabel}</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border min-h-[44px]",
              selectedCategory === cat.id
                ? "bg-emerald-800 text-gold-200 border-emerald-700"
                : "bg-sand-100 dark:bg-night-900 text-sand-700 dark:text-sand-300 border-sand-300 dark:border-night-800 hover:border-emerald-600/40"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Letter Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4" dir="rtl">
        {letters.map((letter) => (
          <div
            key={letter.id}
            className="group rounded-2xl p-3 sm:p-4 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card hover:shadow-card-hover hover:border-emerald-600/40 transition-all flex flex-col items-center justify-between text-center relative overflow-hidden"
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
                {isBangla ? letter.nameBangla || letter.name : letter.name}
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
        ))}
      </div>
    </div>
  );
};
