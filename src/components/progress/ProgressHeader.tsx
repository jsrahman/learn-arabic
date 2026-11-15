"use client";

import React from "react";
import { BarChart2, RotateCcw } from "lucide-react";

interface ProgressHeaderProps {
  analyticsTag: string;
  title: string;
  subtitle: string;
  resetProgressText: string;
  onOpenResetConfirm: () => void;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  analyticsTag,
  title,
  subtitle,
  resetProgressText,
  onOpenResetConfirm,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
          <BarChart2 className="w-4 h-4" />
          <span>{analyticsTag}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
          {subtitle}
        </p>
      </div>

      <button
        type="button"
        onClick={onOpenResetConfirm}
        className="text-xs font-semibold px-4 py-2.5 rounded-xl text-sand-600 dark:text-sand-400 hover:text-rose-600 dark:hover:text-rose-400 border border-sand-300 dark:border-night-700 hover:border-rose-400 dark:hover:border-rose-500/50 flex items-center justify-center gap-2 transition-colors min-h-[44px] min-w-[44px] active:scale-95"
      >
        <RotateCcw className="w-4 h-4 shrink-0" />
        <span>{resetProgressText}</span>
      </button>
    </div>
  );
};
