import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toBanglaNumber } from "@/utils";

interface LessonHeaderProps {
  levelId: number;
  lessonNumber: number;
  currentSlideIndex: number;
  totalSlides: number;
  slideTitle: string;
  progressPercent: number;
  isBangla?: boolean;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({
  levelId,
  lessonNumber,
  currentSlideIndex,
  totalSlides,
  slideTitle,
  progressPercent,
  isBangla = true,
}) => {
  return (
    <div className="space-y-4">
      {/* Top Header: Back to path & Level pill */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/path"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand-600 dark:text-sand-400 hover:text-emerald-700 dark:hover:text-emerald-300 min-h-[44px] min-w-[44px] px-2.5 py-2.5 rounded-xl hover:bg-sand-200/60 dark:hover:bg-night-800/60 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>{isBangla ? "লার্নিং পাথে ফিরুন" : "Exit to Learning Path"}</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {isBangla
              ? `লেভেল ${toBanglaNumber(levelId)} • পাঠ ${toBanglaNumber(lessonNumber)}`
              : `Level ${levelId} • Lesson ${lessonNumber}`}
          </span>
        </div>
      </div>

      {/* Progress within Lesson */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-medium text-sand-600 dark:text-sand-400">
          <span>
            {isBangla
              ? `ধাপ ${toBanglaNumber(currentSlideIndex + 1)} / ${toBanglaNumber(totalSlides)}: ${slideTitle}`
              : `Step ${currentSlideIndex + 1} of ${totalSlides}: ${slideTitle}`}
          </span>
          <span>{isBangla ? toBanglaNumber(progressPercent) : progressPercent}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
