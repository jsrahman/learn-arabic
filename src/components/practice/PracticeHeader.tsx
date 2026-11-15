import React from "react";
import { BookOpen } from "lucide-react";
import { cn } from "@/utils";
import type { PracticeTab } from "@/hooks/usePracticeDrill";

interface PracticeHeaderProps {
  activeTab: PracticeTab;
  onSelectTab: (tab: PracticeTab) => void;
  drillGroundText: string;
  title: string;
  subtitle: string;
  tabAlphabetText: string;
  tabHarakatText: string;
  tabSurahsText: string;
}

export const PracticeHeader: React.FC<PracticeHeaderProps> = ({
  activeTab,
  onSelectTab,
  drillGroundText,
  title,
  subtitle,
  tabAlphabetText,
  tabHarakatText,
  tabSurahsText,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
          <BookOpen className="w-4 h-4" />
          <span>{drillGroundText}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400 mt-1">
          {subtitle}
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="w-full sm:w-auto overflow-x-auto p-1.5 rounded-2xl bg-sand-200 dark:bg-night-850 flex items-center gap-1 border border-sand-300 dark:border-night-700">
        <button
          type="button"
          onClick={() => onSelectTab("alphabet")}
          className={cn(
            "flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center",
            activeTab === "alphabet"
              ? "bg-emerald-800 text-gold-200 shadow-sm"
              : "text-sand-700 dark:text-sand-300 hover:text-emerald-800"
          )}
        >
          {tabAlphabetText}
        </button>
        <button
          type="button"
          onClick={() => onSelectTab("harakat")}
          className={cn(
            "flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center",
            activeTab === "harakat"
              ? "bg-emerald-800 text-gold-200 shadow-sm"
              : "text-sand-700 dark:text-sand-300 hover:text-emerald-800"
          )}
        >
          {tabHarakatText}
        </button>
        <button
          type="button"
          onClick={() => onSelectTab("surahs")}
          className={cn(
            "flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center",
            activeTab === "surahs"
              ? "bg-emerald-800 text-gold-200 shadow-sm"
              : "text-sand-700 dark:text-sand-300 hover:text-emerald-800"
          )}
        >
          {tabSurahsText}
        </button>
      </div>
    </div>
  );
};
