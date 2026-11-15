"use client";

import React, { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import { usePWA, PlatformType } from "./PWAProvider";
import { useThemeContext } from "./ThemeWrapper";
import { PWAInstructions } from "@/components/pwa/PWAInstructions";
import { PWABenefits } from "@/components/pwa/PWABenefits";

export function PWAInstallModal() {
  const {
    showInstallModal,
    setShowInstallModal,
    hasNativePrompt,
    promptInstall,
    platform: initialPlatform,
  } = usePWA();
  const { preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const [activeTab, setActiveTab] = useState<PlatformType>("desktop");

  useEffect(() => {
    if (initialPlatform) {
      setActiveTab(initialPlatform);
    }
  }, [initialPlatform, showInstallModal]);

  useEffect(() => {
    if (showInstallModal) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [showInstallModal]);

  if (!showInstallModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-lg w-full rounded-3xl p-6 sm:p-8 bg-sand-50 dark:bg-night-900 border border-emerald-500/30 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={() => setShowInstallModal(false)}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-sand-500 hover:text-sand-800 dark:hover:text-sand-200 hover:bg-sand-200/60 dark:hover:bg-night-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-gold-300 flex items-center justify-center font-bold text-2xl shadow-lg border border-gold-500/30 shrink-0">
            <span className="font-arabic">ق</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-sand-950 dark:text-sand-50 tracking-tight">
                {isBangla ? "কুরআনপাঠ অ্যাপ ইনস্টল করুন" : "Install QuranPath App"}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                PWA
              </span>
            </div>
            <p className="text-xs text-sand-600 dark:text-sand-400 mt-0.5">
              {isBangla
                ? "ডেস্কটপ, অ্যান্ড্রয়েড বা আইফোনে স্বতন্ত্র অ্যাপ হিসেবে ব্যবহার করুন"
                : "Install QuranPath on your device for instant offline access"}
            </p>
          </div>
        </div>

        {/* Native One-Click Install Button */}
        {hasNativePrompt && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-800/15 to-teal-800/15 border border-emerald-600/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                {isBangla ? "এক ক্লিকে সরাসরি ইনস্টল" : "One-Click Quick Install"}
              </span>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                {isBangla ? "ব্রাউজার সমর্থিত" : "Browser Ready"}
              </span>
            </div>
            <button
              type="button"
              onClick={promptInstall}
              className="w-full min-h-[44px] py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-750 hover:to-teal-750 text-gold-100 shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-gold-300" />
              <span>
                {isBangla ? "এখনই ইনস্টল করুন (সুপারিশকৃত)" : "Install Now (Instant)"}
              </span>
            </button>
          </div>
        )}

        {/* Step-by-Step Platform Instructions */}
        <PWAInstructions
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          isBangla={isBangla}
        />

        {/* Key Benefits */}
        <PWABenefits isBangla={isBangla} />
      </div>
    </div>
  );
}
