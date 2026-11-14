import React from "react";
import { cn } from "@/utils";

interface QuizScorePillProps {
  scorePercent: number;
  correctCount: number;
  totalQuestions: number;
  passed: boolean;
  yourScoreLabel?: string;
  accuracyLabel?: string;
  statusLabel?: string;
  passedText?: string;
  failedText?: string;
}

export const QuizScorePill: React.FC<QuizScorePillProps> = ({
  scorePercent,
  correctCount,
  totalQuestions,
  passed,
  yourScoreLabel = "আপনার স্কোর",
  accuracyLabel = "সঠিক উত্তর",
  statusLabel = "ফলাফল",
  passedText = "উত্তীর্ণ",
  failedText = "পুনরায় চেষ্টা প্রয়োজন",
}) => {
  return (
    <div className="p-3 sm:p-4 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800 grid grid-cols-3 divide-x divide-sand-200 dark:divide-night-800 text-center">
      <div className="px-1">
        <div className="text-[11px] sm:text-xs text-sand-500">{yourScoreLabel}</div>
        <div className="text-xl sm:text-2xl font-bold text-emerald-950 dark:text-sand-50 mt-0.5">
          {scorePercent}%
        </div>
      </div>
      <div className="px-1">
        <div className="text-[11px] sm:text-xs text-sand-500">{accuracyLabel}</div>
        <div className="text-xl sm:text-2xl font-bold text-emerald-600 mt-0.5">
          {correctCount}/{totalQuestions}
        </div>
      </div>
      <div className="px-1">
        <div className="text-[11px] sm:text-xs text-sand-500">{statusLabel}</div>
        <div
          className={cn(
            "text-xs sm:text-sm font-bold mt-1",
            passed ? "text-emerald-600" : "text-amber-600"
          )}
        >
          {passed ? passedText : failedText}
        </div>
      </div>
    </div>
  );
};
