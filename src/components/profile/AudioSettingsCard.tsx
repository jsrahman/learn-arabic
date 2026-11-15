"use client";

import React from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/utils";
import type { UserPreferences } from "@/types";

interface AudioSettingsCardProps {
  preferences: UserPreferences;
  onUpdatePreferences: (updates: Partial<UserPreferences>) => void;
  isBangla: boolean;
  audioSectionText: string;
  audioSubtitleText: string;
  audioSpeedText: string;
  autoPlayText: string;
  autoPlayDescText: string;
}

export const AudioSettingsCard: React.FC<AudioSettingsCardProps> = ({
  preferences,
  onUpdatePreferences,
  isBangla,
  audioSectionText,
  audioSubtitleText,
  audioSpeedText,
  autoPlayText,
  autoPlayDescText,
}) => {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
          <Volume2 className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-sand-900 dark:text-sand-100">
            {audioSectionText}
          </h2>
          <p className="text-xs text-sand-500">{audioSubtitleText}</p>
        </div>
      </div>

      <div className="space-y-4 pt-1 sm:pt-2">
        <div>
          <label className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider block mb-2">
            {audioSpeedText}: {preferences.audioSpeed}x
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
            {[
              { value: 0.75, label: isBangla ? "০.৭৫x (ধীর ও স্পষ্ট)" : "0.75x (Slow & Clear)" },
              { value: 1.0, label: isBangla ? "১.০x (স্বাভাবিক)" : "1.0x (Natural)" },
              { value: 1.25, label: isBangla ? "১.২৫x (দ্রুত)" : "1.25x (Brisk)" },
            ].map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => onUpdatePreferences({ audioSpeed: s.value })}
                className={cn(
                  "py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all min-h-[44px] flex items-center justify-center active:scale-95",
                  preferences.audioSpeed === s.value
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
              {autoPlayText}
            </span>
            <span className="text-[11px] sm:text-xs text-sand-500">
              {autoPlayDescText}
            </span>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={preferences.autoPlayAudio}
            aria-label={autoPlayText}
            onClick={() => onUpdatePreferences({ autoPlayAudio: !preferences.autoPlayAudio })}
            className="min-h-[44px] min-w-[48px] inline-flex items-center justify-center p-1 rounded-full cursor-pointer focus:outline-none shrink-0"
          >
            <span
              className={cn(
                "w-12 h-6 rounded-full transition-colors relative flex items-center p-0.5 pointer-events-none",
                preferences.autoPlayAudio ? "bg-emerald-600" : "bg-sand-300 dark:bg-night-800"
              )}
            >
              <span
                className={cn(
                  "w-5 h-5 rounded-full bg-sand-50 shadow-md transition-transform",
                  preferences.autoPlayAudio ? "translate-x-6" : "translate-x-0"
                )}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
