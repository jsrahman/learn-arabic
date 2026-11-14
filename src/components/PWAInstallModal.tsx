"use client";

import React from "react";
import { Share, PlusSquare, X, Smartphone } from "lucide-react";
import { usePWA } from "./PWAProvider";
import { useThemeContext } from "./ThemeWrapper";

export function PWAInstallModal() {
  const { showIOSPrompt, setShowIOSPrompt } = usePWA();
  const { preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  if (!showIOSPrompt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-sm w-full rounded-3xl p-6 sm:p-7 bg-sand-50 dark:bg-night-900 border border-emerald-500/30 shadow-2xl space-y-5">
        <button
          type="button"
          onClick={() => setShowIOSPrompt(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full text-sand-500 hover:text-sand-800 dark:hover:text-sand-200 hover:bg-sand-200/60 dark:hover:bg-night-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 text-gold-300 flex items-center justify-center font-bold text-xl shadow-md shrink-0">
            <Smartphone className="w-6 h-6 text-gold-300" />
          </div>
          <div>
            <h3 className="text-base font-bold text-sand-950 dark:text-sand-50">
              {isBangla ? "হোম স্ক্রিনে অ্যাপ সেভ করুন" : "Add QuranPath to Home Screen"}
            </h3>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              {isBangla ? "মোবাইলে অ্যাপের মতো ব্যবহার করুন" : "Install as standalone app on iOS"}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2 text-xs text-sand-700 dark:text-sand-300">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850">
            <div className="p-1 rounded bg-sand-200 dark:bg-night-800 text-emerald-600 shrink-0 mt-0.5">
              <Share className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-sand-900 dark:text-sand-100">
                {isBangla ? "১. শেয়ার বাটনে চাপ দিন" : "1. Tap the Share button"}
              </strong>
              <span>
                {isBangla
                  ? "সাফারি ব্রাউজারের নিচে থাকা শেয়ার আইকনে [↑] ট্যাপ করুন।"
                  : "Tap the Share icon [↑] at the bottom bar of Safari."}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850">
            <div className="p-1 rounded bg-sand-200 dark:bg-night-800 text-emerald-600 shrink-0 mt-0.5">
              <PlusSquare className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-sand-900 dark:text-sand-100">
                {isBangla ? "২. 'Add to Home Screen' বেছে নিন" : "2. Select 'Add to Home Screen'"}
              </strong>
              <span>
                {isBangla
                  ? "মেনু স্ক্রল করে 'Add to Home Screen' নির্বাচন করুন।"
                  : "Scroll down and select 'Add to Home Screen' (+)."}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowIOSPrompt(false)}
          className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-800 hover:bg-emerald-750 text-gold-200 shadow-sm transition-all"
        >
          {isBangla ? "বুঝেছি" : "Got it"}
        </button>
      </div>
    </div>
  );
}
