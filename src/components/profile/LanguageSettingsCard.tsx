import React from "react";
import { Languages, Check } from "lucide-react";
import { cn } from "@/utils";
import type { UserPreferences } from "@/types";

interface LanguageSettingsCardProps {
  currentLanguage: string;
  onSelectLanguage: (lang: "bn" | "en") => void;
  languageSectionText: string;
  languageSubtitleText: string;
  langBanglaText: string;
  langBanglaDescText: string;
  langEnglishText: string;
  langEnglishDescText: string;
}

export const LanguageSettingsCard: React.FC<LanguageSettingsCardProps> = ({
  currentLanguage,
  onSelectLanguage,
  languageSectionText,
  languageSubtitleText,
  langBanglaText,
  langBanglaDescText,
  langEnglishText,
  langEnglishDescText,
}) => {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-amber-800/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
          <Languages className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-sand-900 dark:text-sand-100">
            {languageSectionText}
          </h2>
          <p className="text-xs text-sand-500">{languageSubtitleText}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
        <button
          type="button"
          onClick={() => onSelectLanguage("bn")}
          className={cn(
            "p-3.5 sm:p-4 rounded-2xl border text-left flex items-center justify-between transition-all min-h-[48px]",
            currentLanguage === "bn"
              ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
              : "bg-sand-50 dark:bg-night-950 text-sand-800 dark:text-sand-200 border-sand-300 dark:border-night-800 hover:border-emerald-600/40"
          )}
        >
          <div>
            <span className="text-sm font-bold block">{langBanglaText}</span>
            <span className="text-xs opacity-80">{langBanglaDescText}</span>
          </div>
          {currentLanguage === "bn" && <Check className="w-5 h-5 text-gold-300 shrink-0" />}
        </button>

        <button
          type="button"
          onClick={() => onSelectLanguage("en")}
          className={cn(
            "p-3.5 sm:p-4 rounded-2xl border text-left flex items-center justify-between transition-all min-h-[48px]",
            currentLanguage === "en"
              ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
              : "bg-sand-50 dark:bg-night-950 text-sand-800 dark:text-sand-200 border-sand-300 dark:border-night-800 hover:border-emerald-600/40"
          )}
        >
          <div>
            <span className="text-sm font-bold block">{langEnglishText}</span>
            <span className="text-xs opacity-80">{langEnglishDescText}</span>
          </div>
          {currentLanguage === "en" && <Check className="w-5 h-5 text-gold-300 shrink-0" />}
        </button>
      </div>
    </div>
  );
};
