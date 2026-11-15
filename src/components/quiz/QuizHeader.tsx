import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toBanglaNumber } from "@/utils";

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
        className="inline-flex items-center gap-2 px-3 py-2 -ml-2 rounded-xl text-xs font-semibold text-sand-700 dark:text-sand-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-sand-200/60 dark:hover:bg-night-800 border border-transparent hover:border-sand-300 dark:hover:border-night-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 min-h-[44px] min-w-[44px]"
      >
        <ArrowLeft className="w-4 h-4 shrink-0" />
        <span>{exitQuizLabel}</span>
      </Link>

      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
          {isBangla ? `লেভেল ${toBanglaNumber(levelId)}` : `Level ${String(levelId).padStart(2, "0")}`}
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-sand-700 dark:text-sand-300">
          {isBangla ? "প্রশ্ন" : "Question"} {isBangla ? toBanglaNumber(currentIndex + 1) : currentIndex + 1} {isBangla ? "/" : "of"} {isBangla ? toBanglaNumber(totalQuestions) : totalQuestions}
        </span>
      </div>
    </div>
  );
};
