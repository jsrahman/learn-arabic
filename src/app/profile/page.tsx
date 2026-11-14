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
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const { preferences, updatePreferences, toggleTheme } = useThemeContext();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="pb-6 border-b border-sand-200 dark:border-night-800">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
          <Settings className="w-4 h-4" />
          <span>Learner Preferences</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
          Settings & Preferences
        </h1>
        <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
          Customize your audio speeds, Arabic font sizes, and explanation language.
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
              <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">Audio Pronunciation</h2>
              <p className="text-xs text-sand-500">Configure speech rate and playback</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider block mb-2">
                Pronunciation Speed: {preferences.audioSpeed}x
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 0.75, label: "0.75x (Slow & Clear)" },
                  { value: 1.0, label: "1.0x (Natural)" },
                  { value: 1.25, label: "1.25x (Brisk)" },
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
                  Autoplay Pronunciation
                </span>
                <span className="text-xs text-sand-500">
                  Play the letter audio automatically when entering a lesson step.
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
              <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">Typography & Sizing</h2>
              <p className="text-xs text-sand-500">Ensure Arabic vowel marks and diacritics are comfortable to read</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider block mb-2">
                Arabic Letter Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "normal", label: "Normal" },
                  { value: "large", label: "Large (Recommended)" },
                  { value: "xlarge", label: "Extra Large" },
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
                  Show English Transliteration
                </span>
                <span className="text-xs text-sand-500">
                  Display phonetic spelling (e.g. &apos;Alif&apos;, &apos;Ba&apos;) under Arabic script.
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
              <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">Explanation Language</h2>
              <p className="text-xs text-sand-500">Choose the language used for lesson descriptions and rules</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              type="button"
              onClick={() => updatePreferences({ explanationLanguage: "en" })}
              className={cn(
                "p-4 rounded-2xl border text-left flex items-center justify-between transition-all",
                preferences.explanationLanguage === "en"
                  ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
                  : "bg-sand-50 dark:bg-night-950 text-sand-800 dark:text-sand-200 border-sand-300 dark:border-night-800"
              )}
            >
              <div>
                <span className="text-sm font-bold block">English</span>
                <span className="text-xs opacity-80">Default global explanations</span>
              </div>
              {preferences.explanationLanguage === "en" && <Check className="w-5 h-5 text-gold-300" />}
            </button>

            <button
              type="button"
              onClick={() => updatePreferences({ explanationLanguage: "bn" })}
              className={cn(
                "p-4 rounded-2xl border text-left flex items-center justify-between transition-all",
                preferences.explanationLanguage === "bn"
                  ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
                  : "bg-sand-50 dark:bg-night-950 text-sand-800 dark:text-sand-200 border-sand-300 dark:border-night-800"
              )}
            >
              <div>
                <span className="text-sm font-bold block">বাংলা (Bangla)</span>
                <span className="text-xs opacity-80">বাংলায় পাঠ ও নিয়ম ব্যাখ্যা</span>
              </div>
              {preferences.explanationLanguage === "bn" && <Check className="w-5 h-5 text-gold-300" />}
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
                <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">Color Theme</h2>
                <p className="text-xs text-sand-500">Switch between Warm Parchment and Deep Night</p>
              </div>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-sand-200 dark:bg-night-800 border border-sand-300 dark:border-night-700 text-sand-800 dark:text-sand-200 hover:bg-sand-300 transition-colors"
            >
              Switch to {preferences.theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

