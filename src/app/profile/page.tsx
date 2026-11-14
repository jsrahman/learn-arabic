"use client";

import React, { useState, useEffect } from "react";
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
  DownloadCloud,
  CheckCircle2,
  Loader2,
  Wifi,
  WifiOff,
  Smartphone,
  Download,
} from "lucide-react";
import { useThemeContext } from "@/components/ThemeWrapper";
import { usePWA } from "@/components/PWAProvider";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";
import {
  checkOfflineStatus,
  downloadAllForOffline,
  OfflineStatus,
} from "@/lib/offlineManager";

export default function ProfilePage() {
  const { preferences, updatePreferences, toggleTheme } = useThemeContext();
  const { isInstalled, promptInstall } = usePWA();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].profile;

  const [offlineStatus, setOfflineStatus] = useState<OfflineStatus>({
    isOnline: true,
    isFullyCached: false,
    cachedCount: 0,
    totalCount: 44,
    percent: 0,
  });
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadPercent, setDownloadPercent] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const update = () => {
      checkOfflineStatus().then(setOfflineStatus);
    };
    update();

    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    window.addEventListener("quranpath:offline-updated", update);

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
      window.removeEventListener("quranpath:offline-updated", update);
    };
  }, []);

  const handleDownloadOffline = async () => {
    setIsDownloading(true);
    setDownloadPercent(0);
    setDownloadSuccess(false);

    const res = await downloadAllForOffline((pct) => {
      setDownloadPercent(pct);
    });

    setIsDownloading(false);
    if (res.success) {
      setDownloadSuccess(true);
      const updated = await checkOfflineStatus();
      setOfflineStatus(updated);
    }
  };

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
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-sand-900 dark:text-sand-100">{t.audioSection}</h2>
              <p className="text-xs text-sand-500">{t.audioSubtitle}</p>
            </div>
          </div>

          <div className="space-y-4 pt-1 sm:pt-2">
            <div>
              <label className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider block mb-2">
                {t.audioSpeed}: {preferences.audioSpeed}x
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
                    onClick={() => updatePreferences({ audioSpeed: s.value })}
                    className={cn(
                      "py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all min-h-[42px] flex items-center justify-center",
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
                  {t.autoPlay}
                </span>
                <span className="text-[11px] sm:text-xs text-sand-500">
                  {t.autoPlayDesc}
                </span>
              </div>
              <button
                type="button"
                onClick={() => updatePreferences({ autoPlayAudio: !preferences.autoPlayAudio })}
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative p-0.5 shrink-0",
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
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-800/10 text-teal-700 dark:text-teal-400 flex items-center justify-center">
              <Type className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-sand-900 dark:text-sand-100">{t.typographySection}</h2>
              <p className="text-xs text-sand-500">{t.typographySubtitle}</p>
            </div>
          </div>

          <div className="space-y-4 pt-1 sm:pt-2">
            <div>
              <label className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider block mb-2">
                {t.arabicSize}
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
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
                      "py-2.5 px-2 sm:px-3 rounded-xl text-xs font-semibold border transition-all min-h-[42px] flex items-center justify-center",
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
                  {t.showTranslit}
                </span>
                <span className="text-[11px] sm:text-xs text-sand-500">
                  {t.showTranslitDesc}
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  updatePreferences({ showTransliteration: !preferences.showTransliteration })
                }
                className={cn(
                  "w-12 h-6 rounded-full transition-colors relative p-0.5 shrink-0",
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
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-800/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <Languages className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-sand-900 dark:text-sand-100">{t.languageSection}</h2>
              <p className="text-xs text-sand-500">{t.languageSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
            <button
              type="button"
              onClick={() => updatePreferences({ explanationLanguage: "bn" })}
              className={cn(
                "p-3.5 sm:p-4 rounded-2xl border text-left flex items-center justify-between transition-all min-h-[48px]",
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
                "p-3.5 sm:p-4 rounded-2xl border text-left flex items-center justify-between transition-all min-h-[48px]",
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
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-800/10 text-indigo-700 dark:text-indigo-400 flex items-center justify-center">
                {preferences.theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-sand-900 dark:text-sand-100">{t.themeSection}</h2>
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

        {/* Section 5: Offline Storage & Cache Management */}
        <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-800/10 text-teal-700 dark:text-teal-400 flex items-center justify-center">
                <DownloadCloud className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">
                  {isBangla ? "অফলাইন স্টোরেজ ও ক্যাশ" : "Offline Storage & Cache"}
                </h2>
                <p className="text-xs text-sand-500">
                  {isBangla
                    ? "ইন্টারনেট ছাড়া সম্পূর্ণ ওয়েবসাইট ব্যবহারের জন্য অফলাইন ডাটা প্রস্তুত রাখুন"
                    : "Preload and verify all 18 levels, lessons, quizzes, and audio on this device"}
                </p>
              </div>
            </div>

            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border",
                !offlineStatus.isOnline
                  ? "bg-amber-500/15 border-amber-500/30 text-amber-800 dark:text-amber-300"
                  : offlineStatus.isFullyCached || downloadSuccess
                  ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
                  : "bg-sand-200 dark:bg-night-800 text-sand-600 dark:text-sand-400 border-sand-300"
              )}
            >
              {!offlineStatus.isOnline ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-amber-600" />
                  <span>{isBangla ? "অফলাইন মোড সক্রিয়" : "Offline Mode"}</span>
                </>
              ) : offlineStatus.isFullyCached || downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isBangla ? "১০০% প্রস্তুত" : "100% Ready"}</span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-sand-500" />
                  <span>{isBangla ? "অনলাইন" : "Online"}</span>
                </>
              )}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-sand-700 dark:text-sand-300">
                {isBangla ? "ডিভাইস অফলাইন ক্যাশ স্থিতি:" : "Device Offline Storage:"}
              </span>
              <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                {offlineStatus.isFullyCached || downloadSuccess ? "100%" : `${offlineStatus.percent}%`}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-300"
                style={{
                  width: `${isDownloading ? downloadPercent : offlineStatus.isFullyCached || downloadSuccess ? 100 : offlineStatus.percent}%`,
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-sand-600 dark:text-sand-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isBangla ? "১৮টি লেভেল ও ৭২টি পাঠ" : "18 Levels & 72 Lessons"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isBangla ? "৬৩০টি যাচাই প্রশ্ন" : "630 Quiz Questions"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isBangla ? "৩০টি আরবি হরফের অডিও" : "30 Alphabet Audio Files"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isBangla ? "অফলাইন স্ট্রিক ও এক্সপি" : "Offline Streaks & XP"}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
            {isBangla
              ? "একবার ডাউনলোড বা ব্রাউজ করা হলে, কোনো ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ডাটা) ছাড়াই আপনি সম্পূর্ণ কুরআনপাঠ ব্রাউজ করতে পারবেন এবং পাঠ্যক্রমের প্রতিটি অধ্যায় পড়তে ও শুনতে পারবেন।"
              : "Once cached, QuranPath functions without an active internet connection. All lessons, quizzes, native alphabet audio, and local streaks remain fully accessible."}
          </p>

          <button
            type="button"
            onClick={handleDownloadOffline}
            disabled={isDownloading}
            className={cn(
              "w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95",
              offlineStatus.isFullyCached || downloadSuccess
                ? "bg-sand-200 dark:bg-night-800 text-sand-800 dark:text-sand-200 hover:bg-sand-300"
                : "bg-gradient-to-r from-emerald-800 to-teal-800 text-gold-200 hover:from-emerald-700 hover:to-teal-700"
            )}
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-gold-300" />
                <span>
                  {isBangla
                    ? `অফলাইন ডাটা সেভ হচ্ছে... (${downloadPercent}%)`
                    : `Caching to device... (${downloadPercent}%)`}
                </span>
              </>
            ) : offlineStatus.isFullyCached || downloadSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>
                  {isBangla
                    ? "সম্পূর্ণ ওয়েবসাইট অফলাইনে প্রস্তুত (পুনরায় ক্যাশ করুন)"
                    : "Fully Cached Offline (Update Cache)"}
                </span>
              </>
            ) : (
              <>
                <DownloadCloud className="w-4 h-4 text-gold-300" />
                <span>
                  {isBangla
                    ? "এক ক্লিকে সম্পূর্ণ সাইট অফলাইনে সেভ করুন"
                    : "Download Entire App For 100% Offline Use"}
                </span>
              </>
            )}
          </button>
        </div>

        {/* Section 6: App Installation */}
        <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">
                  {isBangla ? "কুরআনপাঠ ওয়েব অ্যাপ ইনস্টল" : "Install QuranPath App"}
                </h2>
                <p className="text-xs text-sand-500">
                  {isBangla
                    ? "আপনার কম্পিউটার বা মোবাইলে স্বতন্ত্র অ্যাপ হিসেবে যুক্ত করুন"
                    : "Add to home screen or desktop for a standalone app experience"}
                </p>
              </div>
            </div>

            {isInstalled && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isBangla ? "ইনস্টল করা হয়েছে" : "Installed"}</span>
              </span>
            )}
          </div>

          <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
            {isBangla
              ? "কুরআনপাঠ একটি পূর্ণাঙ্গ প্রগ্রেসিভ ওয়েব অ্যাপ (PWA)। ক্রোম বা এজ ব্রাউজারের অ্যাড্রেস বারের ওপরের ইনস্টল আইকন [⊕] অথবা নিচের বাটনে চাপ দিয়ে যেকোনো ডিভাইসে ইনস্টল করতে পারেন।"
              : "QuranPath is an installable Progressive Web App (PWA). You can install it on your PC, Mac, Android, or iOS device with full offline support and instant loading."}
          </p>

          {!isInstalled && (
            <button
              type="button"
              onClick={promptInstall}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-750 hover:to-teal-750 text-gold-200 shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-gold-300" />
              <span>
                {isBangla ? "ডিভাইসে অ্যাপ ইনস্টল করুন" : "Install App to Device"}
              </span>
            </button>
          )}
        </div>

        {/* Section 7: Local Privacy Guarantee */}
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
