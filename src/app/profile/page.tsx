"use client";

import React from "react";
import {
  Settings,
  Volume2,
  Type,
  Languages,
  Moon,
  Sun,
  ShieldCheck,
  Check,
  RotateCcw,
} from "lucide-react";
import { useThemeContext } from "@/components/ThemeWrapper";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const { preferences, updatePreferences, toggleTheme } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].profile;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="pb-6 border-b border-sand-200 dark:border-night-800">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
          <Settings className="w-4 h-4" />
          <span>{isBangla ? "পছন্দসমূহ ও সেটিংস" : "Learner Preferences"}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
          {t.title}
        </h1>
        <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
          {t.subtitle}
        </p>
      </div>

      <div className="space-y-6">
        {/* Section 1: Audio Settings */}
        <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">{t.audioSection}</h2>
              <p className="text-xs text-sand-500">{t.audioSubtitle}</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider block mb-2">
                {t.audioSpeed}: {preferences.audioSpeed}x
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 0.75, label: isBangla ? "০.৭৫x (ধীর ও স্পষ্ট)" : "0.75x (Slow & Clear)" },
                  { value: 1.0, label: isBangla ? "১.০x (স্বাভাবিক)" : "1.0x (Natural)" },
                  { value: 1.25, label: isBangla ? "১.২৫x (দ্রুত)" : "1.25x (Brisk)" },
                ].map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => updatePreferences({ audioSpeed: s.value })}
                    className={cn(
                      "py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all",
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

            <div className="flex items-center justify-between p-4 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850">
              <div>
                <span className="text-sm font-semibold text-sand-900 dark:text-sand-100 block">
                  {t.autoPlay}
                </span>
                <span className="text-xs text-sand-500">
                  {t.autoPlayDesc}
                </span>
              </div>
              <button
                type="button"
                onClick={() => updatePreferences({ autoPlayAudio: !preferences.autoPlayAudio })}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative p-0.5",
                  preferences.autoPlayAudio ? "bg-emerald-600" : "bg-sand-300 dark:bg-night-800"
                )}
              >
                <div
                  className={cn(
                    "w-5 h-5 rounded-full bg-sand-50 shadow-md transition-transform",
                    preferences.autoPlayAudio ? "translate-x-6" : "translate-x-0"
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Typography & Display */}
        <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-800/10 text-teal-700 dark:text-teal-400 flex items-center justify-center">
              <Type className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">{t.typographySection}</h2>
              <p className="text-xs text-sand-500">{t.typographySubtitle}</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider block mb-2">
                {t.arabicSize}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "normal", label: t.sizeNormal },
                  { value: "large", label: t.sizeLarge },
                  { value: "xlarge", label: t.sizeXLarge },
                ].map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() =>
                      updatePreferences({ arabicFontSize: s.value as "normal" | "large" | "xlarge" })
                    }
                    className={cn(
                      "py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all",
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

            <div className="flex items-center justify-between p-4 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850">
              <div>
                <span className="text-sm font-semibold text-sand-900 dark:text-sand-100 block">
                  {t.showTranslit}
                </span>
                <span className="text-xs text-sand-500">
                  {t.showTranslitDesc}
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  updatePreferences({ showTransliteration: !preferences.showTransliteration })
                }
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative p-0.5",
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

        {/* Section 3: Explanation Language (English / Bangla) */}
        <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-800/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <Languages className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">{t.languageSection}</h2>
              <p className="text-xs text-sand-500">{t.languageSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              type="button"
              onClick={() => updatePreferences({ explanationLanguage: "bn" })}
              className={cn(
                "p-4 rounded-2xl border text-left flex items-center justify-between transition-all",
                preferences.explanationLanguage === "bn"
                  ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
                  : "bg-sand-50 dark:bg-night-950 text-sand-800 dark:text-sand-200 border-sand-300 dark:border-night-800 hover:border-emerald-600/40"
              )}
            >
              <div>
                <span className="text-sm font-bold block">{t.langBangla}</span>
                <span className="text-xs opacity-80">{t.langBanglaDesc}</span>
              </div>
              {preferences.explanationLanguage === "bn" && <Check className="w-5 h-5 text-gold-300 shrink-0" />}
            </button>

            <button
              type="button"
              onClick={() => updatePreferences({ explanationLanguage: "en" })}
              className={cn(
                "p-4 rounded-2xl border text-left flex items-center justify-between transition-all",
                preferences.explanationLanguage === "en"
                  ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
                  : "bg-sand-50 dark:bg-night-950 text-sand-800 dark:text-sand-200 border-sand-300 dark:border-night-800 hover:border-emerald-600/40"
              )}
            >
              <div>
                <span className="text-sm font-bold block">{t.langEnglish}</span>
                <span className="text-xs opacity-80">{t.langEnglishDesc}</span>
              </div>
              {preferences.explanationLanguage === "en" && <Check className="w-5 h-5 text-gold-300 shrink-0" />}
            </button>
          </div>
        </div>

        {/* Section 4: Color Theme */}
        <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-800/10 text-indigo-700 dark:text-indigo-400 flex items-center justify-center">
                {preferences.theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
              <div>
                <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">{t.themeSection}</h2>
                <p className="text-xs text-sand-500">{t.themeSubtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-2xl bg-sand-200 dark:bg-night-800 border border-sand-300 dark:border-night-700">
              <button
                type="button"
                onClick={() => updatePreferences({ theme: "light" })}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all",
                  preferences.theme === "light"
                    ? "bg-emerald-800 text-gold-200 shadow-sm"
                    : "text-sand-700 dark:text-sand-300"
                )}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{t.themeLight}</span>
              </button>
              <button
                type="button"
                onClick={() => updatePreferences({ theme: "dark" })}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all",
                  preferences.theme === "dark"
                    ? "bg-emerald-800 text-gold-200 shadow-sm"
                    : "text-sand-700 dark:text-sand-300"
                )}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>{t.themeDark}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 5: Local Privacy Guarantee */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <p className="text-xs text-emerald-900 dark:text-emerald-300">
            {isBangla
              ? "আপনার সমস্ত অগ্রগতি ও সেটিংস সম্পূর্ণ অফলাইনে আপনার ডিভাইসে স্থানীয়ভাবে সংরক্ষিত থাকে। কোনো ব্যক্তিগত তথ্য ইন্টারনেটে পাঠানো হয় না।"
              : "Your learning progress, quiz scores, and settings are stored locally on your device. We respect your complete privacy with zero tracking."}
          </p>
        </div>
      </div>
    </div>
  );
}
