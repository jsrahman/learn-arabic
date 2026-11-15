import React from "react";
import { Type } from "lucide-react";
import { cn } from "@/utils";
import type { UserPreferences } from "@/types";

interface TypographySettingsCardProps {
  preferences: UserPreferences;
  onUpdatePreferences: (updates: Partial<UserPreferences>) => void;
  typographySectionText: string;
  typographySubtitleText: string;
  arabicSizeText: string;
  sizeNormalText: string;
  sizeLargeText: string;
  sizeXLargeText: string;
  showTranslitText: string;
  showTranslitDescText: string;
}

export const TypographySettingsCard: React.FC<TypographySettingsCardProps> = ({
  preferences,
  onUpdatePreferences,
  typographySectionText,
  typographySubtitleText,
  arabicSizeText,
  sizeNormalText,
  sizeLargeText,
  sizeXLargeText,
  showTranslitText,
  showTranslitDescText,
}) => {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-teal-800/10 text-teal-700 dark:text-teal-400 flex items-center justify-center">
          <Type className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-sand-900 dark:text-sand-100">
            {typographySectionText}
          </h2>
          <p className="text-xs text-sand-500">{typographySubtitleText}</p>
        </div>
      </div>

      <div className="space-y-4 pt-1 sm:pt-2">
        <div>
          <label className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider block mb-2">
            {arabicSizeText}
          </label>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { value: "normal", label: sizeNormalText },
              { value: "large", label: sizeLargeText },
              { value: "xlarge", label: sizeXLargeText },
            ].map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() =>
                  onUpdatePreferences({ arabicFontSize: s.value as "normal" | "large" | "xlarge" })
                }
                className={cn(
                  "py-2.5 px-2 sm:px-3 rounded-xl text-xs font-semibold border transition-all min-h-[44px] flex items-center justify-center",
                  preferences.arabicFontSize === s.value
                    ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
                    : "bg-sand-50 dark:bg-night-950 text-sand-800 dark:text-sand-200 border-sand-300 dark:border-night-800 hover:border-emerald-600/40"
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850 gap-3">
          <div>
            <span className="text-xs sm:text-sm font-semibold text-sand-900 dark:text-sand-100 block">
              {showTranslitText}
            </span>
            <span className="text-[11px] sm:text-xs text-sand-500">
              {showTranslitDescText}
            </span>
          </div>
          <button
            type="button"
            aria-label={showTranslitText}
            onClick={() =>
              onUpdatePreferences({ showTransliteration: !preferences.showTransliteration })
            }
            className={cn(
              "w-12 h-6 rounded-full transition-colors relative p-0.5 shrink-0 min-h-[44px] flex items-center",
              preferences.showTransliteration ? "bg-emerald-600" : "bg-sand-300 dark:bg-night-800"
            )}
          >
            <div
              className={cn(
                "w-5 h-5 rounded-full bg-sand-50 shadow-md transition-transform",
                preferences.showTransliteration ? "translate-x-6" : "translate-x-0"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
