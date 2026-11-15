import React from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/utils";

interface ThemeSettingsCardProps {
  currentTheme: string;
  onSelectTheme: (theme: "light" | "dark") => void;
  themeSectionText: string;
  themeSubtitleText: string;
  themeLightText: string;
  themeDarkText: string;
}

export const ThemeSettingsCard: React.FC<ThemeSettingsCardProps> = ({
  currentTheme,
  onSelectTheme,
  themeSectionText,
  themeSubtitleText,
  themeLightText,
  themeDarkText,
}) => {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-800/10 text-indigo-700 dark:text-indigo-400 flex items-center justify-center">
            {currentTheme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-sand-900 dark:text-sand-100">
              {themeSectionText}
            </h2>
            <p className="text-xs text-sand-500">{themeSubtitleText}</p>
          </div>
        </div>

        <div className="w-full sm:w-auto flex items-center gap-2 p-1.5 rounded-2xl bg-sand-200 dark:bg-night-800 border border-sand-300 dark:border-night-700">
          <button
            type="button"
            onClick={() => onSelectTheme("light")}
            className={cn(
              "flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all min-h-[44px] min-w-[44px] active:scale-95",
              currentTheme === "light"
                ? "bg-emerald-800 text-gold-200 shadow-sm"
                : "text-sand-700 dark:text-sand-300 hover:text-emerald-700 dark:hover:text-emerald-300"
            )}
          >
            <Sun className="w-4 h-4 shrink-0" />
            <span>{themeLightText}</span>
          </button>
          <button
            type="button"
            onClick={() => onSelectTheme("dark")}
            className={cn(
              "flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all min-h-[44px] min-w-[44px] active:scale-95",
              currentTheme === "dark"
                ? "bg-emerald-800 text-gold-200 shadow-sm"
                : "text-sand-700 dark:text-sand-300 hover:text-emerald-700 dark:hover:text-emerald-300"
            )}
          >
            <Moon className="w-4 h-4 shrink-0" />
            <span>{themeDarkText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
