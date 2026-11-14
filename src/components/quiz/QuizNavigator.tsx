import React from "react";
import { cn } from "@/utils";
import { Layers } from "lucide-react";
import type { QuestionResult } from "@/types";

interface QuizNavigatorProps {
  totalQuestions: number;
  currentIndex: number;
  results: Record<number, QuestionResult>;
  onSelectQuestion: (index: number) => void;
  paletteTitle?: string;
  correctLabel?: string;
  answeredLabel?: string;
}

export const QuizNavigator: React.FC<QuizNavigatorProps> = ({
  totalQuestions,
  currentIndex,
  results,
  onSelectQuestion,
  paletteTitle = "প্রশ্ন প্যালেট",
  correctLabel = "সঠিক",
  answeredLabel = "উত্তর দেওয়া হয়েছে",
}) => {
  const answeredCount = Object.keys(results).length;
  const correctCount = Object.values(results).filter((r) => r.isCorrect).length;

  return (
    <div className="rounded-2xl p-3 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 space-y-2">
      <div className="flex items-center justify-between text-[11px] font-semibold text-sand-600 dark:text-sand-400">
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          <span>{paletteTitle}</span>
        </div>
        <div>
          <span className="text-emerald-600 font-bold">
            {correctCount} {correctLabel}
          </span>
          <span className="text-sand-400 mx-1.5">•</span>
          <span>
            {answeredCount}/{totalQuestions} {answeredLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-start">
        {Array.from({ length: totalQuestions }).map((_, i) => {
          const res = results[i];
          const isCurrent = i === currentIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onSelectQuestion(i)}
              className={cn(
                "w-7 h-7 rounded-lg text-[10px] font-bold border transition-all flex items-center justify-center shrink-0",
                isCurrent && "ring-2 ring-gold-400 font-extrabold scale-110 z-10",
                res === undefined
                  ? isCurrent
                    ? "bg-sand-200 dark:bg-night-800 text-sand-900 dark:text-sand-100 border-sand-400 dark:border-night-600"
                    : "bg-sand-50 dark:bg-night-950 text-sand-600 dark:text-sand-400 border-sand-200 dark:border-night-850 hover:bg-sand-200 dark:hover:bg-night-800"
                  : res.isCorrect
                  ? "bg-emerald-600 text-white border-emerald-700"
                  : "bg-rose-600 text-white border-rose-700"
              )}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};
