"use client";

import React, { useState } from "react";
import { cn, toBanglaNumber } from "@/utils";
import { Layers, ChevronDown, ChevronUp } from "lucide-react";
import type { QuestionResult } from "@/types";

interface QuizNavigatorProps {
  totalQuestions: number;
  currentIndex: number;
  results: Record<number, QuestionResult>;
  onSelectQuestion: (index: number) => void;
  paletteTitle?: string;
  correctLabel?: string;
  answeredLabel?: string;
  isBangla?: boolean;
}

export const QuizNavigator: React.FC<QuizNavigatorProps> = ({
  totalQuestions,
  currentIndex,
  results,
  onSelectQuestion,
  paletteTitle = "প্রশ্ন প্যালেট",
  correctLabel = "সঠিক",
  answeredLabel = "উত্তর দেওয়া হয়েছে",
  isBangla = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const answeredCount = Object.keys(results).length;
  const correctCount = Object.values(results).filter((r) => r.isCorrect).length;

  return (
    <div className="rounded-2xl p-2.5 sm:p-3 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 space-y-2">
      {/* Header bar - Clickable Accordion Trigger on mobile (min-h-[44px]) */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="w-full flex items-center justify-between min-h-[44px] px-2 sm:px-1 rounded-xl text-xs sm:text-[11px] font-semibold text-sand-700 dark:text-sand-300 hover:text-emerald-700 dark:hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors"
        aria-expanded={isExpanded}
        aria-label={`${paletteTitle} accordion toggle`}
      >
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
          <span className="font-bold text-sand-900 dark:text-sand-100">{paletteTitle}</span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-sand-200 dark:bg-night-800 text-sand-700 dark:text-sand-300">
            Q{isBangla ? toBanglaNumber(currentIndex + 1) : currentIndex + 1}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right text-[11px] sm:text-xs">
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              {isBangla ? toBanglaNumber(correctCount) : correctCount} {correctLabel}
            </span>
            <span className="text-sand-400 dark:text-sand-600 mx-1.5">•</span>
            <span className="text-sand-600 dark:text-sand-400 font-medium">
              {isBangla ? toBanglaNumber(answeredCount) : answeredCount}/{isBangla ? toBanglaNumber(totalQuestions) : totalQuestions} {answeredLabel}
            </span>
          </div>

          <div className="sm:hidden w-8 h-8 rounded-lg flex items-center justify-center bg-sand-200/60 dark:bg-night-800 text-sand-700 dark:text-sand-300">
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Question Palette Buttons: Collapsible on mobile, standard grid on sm+ */}
      <div className={cn(
        "pt-2 border-t border-sand-200/80 dark:border-night-800/80",
        isExpanded ? "block" : "hidden sm:block"
      )}>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-start">
          {Array.from({ length: totalQuestions }).map((_, i) => {
            const res = results[i];
            const isCurrent = i === currentIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => onSelectQuestion(i)}
                className={cn(
                  "w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-1 active:scale-95",
                  isCurrent && "ring-2 ring-gold-400 dark:ring-gold-400 font-extrabold scale-105 z-10",
                  res === undefined
                    ? isCurrent
                      ? "bg-sand-200 dark:bg-night-800 text-sand-950 dark:text-sand-50 border-sand-400 dark:border-night-600 shadow-sm"
                      : "bg-sand-50 dark:bg-night-950 text-sand-700 dark:text-sand-300 border-sand-300 dark:border-night-800 hover:bg-sand-200 dark:hover:bg-night-800"
                    : res.isCorrect
                    ? "bg-emerald-600 dark:bg-emerald-700 text-white border-emerald-700 shadow-sm"
                    : "bg-rose-600 dark:bg-rose-700 text-white border-rose-700 shadow-sm"
                )}
                aria-label={`${isBangla ? "প্রশ্ন" : "Question"} ${isBangla ? toBanglaNumber(i + 1) : i + 1}`}
              >
                {isBangla ? toBanglaNumber(i + 1) : i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
