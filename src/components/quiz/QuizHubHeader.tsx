"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Zap } from "lucide-react";

interface QuizHubHeaderProps {
  quizTagText: string;
  quizHubTitleText: string;
  quizHubSubtitleText: string;
  launchLevel1Text: string;
}

export const QuizHubHeader: React.FC<QuizHubHeaderProps> = ({
  quizTagText,
  quizHubTitleText,
  quizHubSubtitleText,
  launchLevel1Text,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
          <Sparkles className="w-4 h-4" />
          <span>{quizTagText}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
          {quizHubTitleText}
        </h1>
        <p className="text-sm text-sand-600 dark:text-sand-400 mt-1 max-w-2xl">
          {quizHubSubtitleText}
        </p>
      </div>

      <Link
        href="/quiz/q1"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-sand-50 font-bold text-xs shadow-md transition-all active:scale-95 shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-night-900"
      >
        <Zap className="w-4 h-4 fill-current" />
        <span>{launchLevel1Text}</span>
      </Link>
    </div>
  );
};
