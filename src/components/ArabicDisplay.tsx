"use client";

import React from "react";
import { AudioButton } from "@/components/AudioButton";
import { useThemeContext } from "@/components/ThemeWrapper";
import { cn } from "@/utils";

interface ArabicDisplayProps {
  arabic: string;
  transliteration?: string;
  name?: string;
  nameBangla?: string;
  makhraj?: string;
  audioPrompt?: string;
  audioUrl?: string;
  className?: string;
  badge?: string;
  interactive?: boolean;
}

export const ArabicDisplay: React.FC<ArabicDisplayProps> = ({
  arabic,
  transliteration,
  name,
  nameBangla,
  makhraj,
  audioPrompt,
  audioUrl,
  className,
  badge,
  interactive = true,
}) => {
  const { preferences, fontSizeClass } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card text-center transition-all duration-300",
        interactive && "hover:shadow-card-hover hover:border-emerald-600/30",
        className
      )}
    >
      {badge && (
        <span className="absolute top-4 right-4 text-[11px] font-semibold tracking-normal uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
          {badge}
        </span>
      )}

      {/* Primary Arabic Letter / Word */}
      <div className="my-4 py-2 flex items-center justify-center select-none">
        <span
          className={cn(
            "font-arabic font-normal tracking-normal text-emerald-950 dark:text-gold-100",
            fontSizeClass
          )}
          dir="rtl"
        >
          {arabic}
        </span>
      </div>

      {/* Transliteration & Names */}
      <div className="space-y-1.5 mt-2">
        {name && (
          <h3 className="text-lg font-bold text-sand-900 dark:text-sand-100 tracking-tight">
            {name}{" "}
            {nameBangla && (
              <span className="text-sm font-normal text-sand-600 dark:text-sand-400">
                ({nameBangla})
              </span>
            )}
          </h3>
        )}

        {preferences.showTransliteration && transliteration && (
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 font-mono">
            {transliteration}
          </p>
        )}

        {makhraj && (
          <p className="text-xs text-sand-600 dark:text-sand-400 max-w-sm mx-auto pt-1 leading-relaxed">
            <span className="font-semibold text-sand-800 dark:text-sand-300">
              {isBangla ? "মাখরাজ: " : "Makhraj: "}
            </span>
            {makhraj}
          </p>
        )}
      </div>

      {/* Audio Button */}
      <div className="mt-5">
        <AudioButton
          arabicText={audioPrompt || arabic}
          audioUrl={audioUrl}
          size="md"
          variant="primary"
          label={isBangla ? "উচ্চারণ শুনুন" : "Listen"}
        />
      </div>
    </div>
  );
};

