import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface QuizHeaderProps {
  levelId: number;
  currentIndex: number;
  totalQuestions: number;
  exitQuizLabel: string;
  isBangla?: boolean;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({
  levelId,
  currentIndex,
  totalQuestions,
  exitQuizLabel,
  isBangla = true,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link
        href="/quiz"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand-600 dark:text-sand-400 hover:text-emerald-700 dark:hover:text-emerald-300 min-h-[44px]"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{exitQuizLabel}</span>
      </Link>

      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
          {isBangla ? `লেভেল ${levelId}` : `Level ${String(levelId).padStart(2, "0")}`}
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-sand-700 dark:text-sand-300">
          {isBangla ? "প্রশ্ন" : "Question"} {currentIndex + 1} {isBangla ? "/" : "of"} {totalQuestions}
        </span>
      </div>
    </div>
  );
};
