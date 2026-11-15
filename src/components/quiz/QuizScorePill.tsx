"use client";

import React from "react";
import { cn, toBanglaNumber } from "@/utils";

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
  isBangla?: boolean;
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
  isBangla = true,
}) => {
  return (
    <div className="p-3 sm:p-4 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800 grid grid-cols-3 divide-x divide-sand-200 dark:divide-night-800 text-center shadow-sm">
      <div className="px-1 min-w-0 flex flex-col justify-center">
        <div className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-sand-600 dark:text-sand-400 leading-tight break-words">
          {yourScoreLabel}
        </div>
        <div className="text-lg sm:text-2xl font-extrabold text-emerald-950 dark:text-gold-200 mt-0.5 tracking-tight truncate">
          {isBangla ? toBanglaNumber(scorePercent) : scorePercent}%
        </div>
      </div>
      <div className="px-1 min-w-0 flex flex-col justify-center">
        <div className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-sand-600 dark:text-sand-400 leading-tight break-words">
          {accuracyLabel}
        </div>
        <div className="text-lg sm:text-2xl font-extrabold text-emerald-700 dark:text-emerald-400 mt-0.5 tracking-tight truncate">
          {isBangla ? toBanglaNumber(correctCount) : correctCount}/{isBangla ? toBanglaNumber(totalQuestions) : totalQuestions}
        </div>
      </div>
      <div className="px-1 min-w-0 flex flex-col justify-center">
        <div className="text-[10px] xs:text-[11px] sm:text-xs font-medium text-sand-600 dark:text-sand-400 leading-tight break-words">
          {statusLabel}
        </div>
        <div
          className={cn(
            "text-[11px] sm:text-xs font-bold mt-1 leading-tight break-words",
            passed
              ? "text-emerald-700 dark:text-emerald-400"
              : "text-amber-700 dark:text-amber-400"
          )}
        >
          {passed ? passedText : failedText}
        </div>
      </div>
    </div>
  );
};
