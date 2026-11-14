"use client";

import React, { useState, useEffect } from "react";
import {
  Wifi,
  WifiOff,
  DownloadCloud,
  CheckCircle2,
  X,
  Loader2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import {
  checkOfflineStatus,
  downloadAllForOffline,
  initAutoOfflineCaching,
  OfflineStatus,
} from "@/lib/offlineManager";
import { useThemeContext } from "./ThemeWrapper";
import { cn } from "@/lib/utils";

export function OfflineStatusIndicator() {
  const { preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const [status, setStatus] = useState<OfflineStatus>({
    isOnline: true,
    isFullyCached: false,
    cachedCount: 0,
    totalCount: 44,
    percent: 0,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadPercent, setDownloadPercent] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showAutoToast, setShowAutoToast] = useState(false);

  useEffect(() => {
    // Initial check
    const update = () => {
      checkOfflineStatus().then(setStatus);
    };

    update();

    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    window.addEventListener("quranpath:offline-updated", update);

    // Warm-up cache check after 3 seconds
    const timer = setTimeout(update, 3000);

    // Automatically trigger 100% offline caching 25 seconds after the website is fully loaded
    const cleanupAutoCache = initAutoOfflineCaching(() => {
      update();
      setShowAutoToast(true);
      setTimeout(() => setShowAutoToast(false), 8000);
    });

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
      window.removeEventListener("quranpath:offline-updated", update);
      clearTimeout(timer);
      cleanupAutoCache();
    };
  }, []);

  const handleStartDownload = async () => {
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
      setStatus(updated);
    }
  };

  return (
    <>
      {/* Header Pill / Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        title={
          !status.isOnline
            ? isBangla ? "অফলাইন মোড সক্রিয়" : "Offline mode active"
            : status.isFullyCached
            ? isBangla ? "১০০% অফলাইনে প্রস্তুত" : "100% Offline Ready"
            : isBangla ? "অফলাইন ডাউনলোড করুন" : "Download for offline"
        }
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all active:scale-95",
          !status.isOnline
            ? "bg-amber-500/15 border-amber-500/30 text-amber-800 dark:text-amber-300"
            : status.isFullyCached
            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20"
            : "bg-sand-200/50 dark:bg-night-850 border-sand-300 dark:border-night-700 text-sand-600 dark:text-sand-400 hover:border-emerald-600/40"
        )}
      >
        {!status.isOnline ? (
          <>
            <WifiOff className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="hidden sm:inline">
              {isBangla ? "অফলাইন মোড" : "Offline Mode"}
            </span>
          </>
        ) : status.isFullyCached ? (
          <>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline">
              {isBangla ? "অফলাইন রেডি" : "Offline Ready"}
            </span>
          </>
        ) : (
          <>
            <DownloadCloud className="w-3.5 h-3.5 text-sand-500 dark:text-sand-400" />
            <span className="hidden sm:inline">
              {isBangla ? "অফলাইন সেভ" : "Save Offline"}
            </span>
          </>
        )}
      </button>

      {/* Offline Caching Manager Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full rounded-3xl p-6 sm:p-8 bg-sand-50 dark:bg-night-900 border border-emerald-500/30 shadow-2xl space-y-6">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-sand-500 hover:text-sand-800 dark:hover:text-sand-200 hover:bg-sand-200/60 dark:hover:bg-night-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Icon */}
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-md shrink-0",
                  status.isFullyCached || downloadSuccess
                    ? "bg-gradient-to-br from-emerald-800 to-teal-900 text-gold-300"
                    : "bg-sand-200 dark:bg-night-800 text-emerald-600"
                )}
              >
                {status.isFullyCached || downloadSuccess ? (
                  <CheckCircle2 className="w-6 h-6 text-gold-300" />
                ) : (
                  <DownloadCloud className="w-6 h-6 text-emerald-600" />
                )}
              </div>
              <div>
                <h3 className="text-base font-bold text-sand-950 dark:text-sand-50">
                  {isBangla
                    ? "১০০% অফলাইন অ্যাক্সেস ম্যানেজার"
                    : "100% Offline Access Manager"}
                </h3>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  {status.isFullyCached || downloadSuccess
                    ? isBangla
                      ? "ইন্টারনেট ছাড়াও সবকিছু চলবে"
                      : "Ready to use without any internet connection"
                    : isBangla
                    ? "এক ক্লিকে সমস্ত পাঠ সংরক্ষণ করুন"
                    : "Save all lessons & audio to this device"}
                </p>
              </div>
            </div>

            {/* Status Breakdown Box */}
            <div className="p-4 rounded-2xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-sand-700 dark:text-sand-300">
                  {isBangla ? "ডিভাইস স্টোরেজ স্থিতি:" : "Device Offline Storage:"}
                </span>
                <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                  {status.isFullyCached || downloadSuccess ? "100%" : `${status.percent}%`}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${isDownloading ? downloadPercent : status.isFullyCached ? 100 : status.percent}%`,
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-sand-600 dark:text-sand-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isBangla ? "১৮টি লেভেল ও ৭২টি পাঠ" : "18 Levels & 72 Lessons"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isBangla ? "৬৩০টি কুইজ প্রশ্ন" : "630 Quiz Questions"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isBangla ? "৩০টি আরবি হরফের অডিও" : "30 Alphabet Audio Files"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isBangla ? "অফলাইন প্রোগ্রেস ও স্ট্রিক" : "Offline Streaks & XP"}</span>
                </div>
              </div>
            </div>

            {/* Explanation Note */}
            <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
              {isBangla
                ? "একবার ডাউনলোড সম্পন্ন হলে, ওয়াইফাই বা মোবাইল ডাটা সম্পূর্ণ বন্ধ থাকলেও আপনি অ্যাপ খুলে যেকোনো পাঠ শিখতে পারবেন, কুইজ দিতে পারবেন এবং সঠিক উচ্চারণ শুনতে পারবেন।"
                : "Once cached, you can turn off Wi-Fi or cellular data completely. You will still be able to practice lessons, take quizzes, hear pronunciations, and track your streaks."}
            </p>

            {/* Download Button */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={handleStartDownload}
                disabled={isDownloading}
                className={cn(
                  "w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95",
                  status.isFullyCached || downloadSuccess
                    ? "bg-sand-200 dark:bg-night-800 text-sand-800 dark:text-sand-200 hover:bg-sand-300"
                    : "bg-gradient-to-r from-emerald-800 to-teal-800 text-gold-200 hover:from-emerald-700 hover:to-teal-700"
                )}
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-gold-300" />
                    <span>
                      {isBangla
                        ? `ডাউনলোড হচ্ছে... (${downloadPercent}%)`
                        : `Caching to device... (${downloadPercent}%)`}
                    </span>
                  </>
                ) : status.isFullyCached || downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>
                      {isBangla
                        ? "সম্পূর্ণ সাইট অফলাইনে সংরক্ষিত (পুনরায় ডাউনলোড)"
                        : "Fully Cached Offline (Re-download)"}
                    </span>
                  </>
                ) : (
                  <>
                    <DownloadCloud className="w-4 h-4 text-gold-300" />
                    <span>
                      {isBangla
                        ? "সব পাঠ ও অডিও অফলাইনে সংরক্ষণ করুন"
                        : "Download Everything for Offline Use"}
                    </span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-sand-500 hover:text-sand-800 dark:hover:text-sand-200 transition-colors"
              >
                {isBangla ? "বন্ধ করুন" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Automatic Background Cache Toast (Triggered +25s after website load) */}
      {showAutoToast && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] rounded-2xl p-4 bg-emerald-950/95 backdrop-blur-md text-gold-100 border border-gold-500/40 shadow-2xl flex items-start gap-3 animate-fade-in">
          <div className="w-8 h-8 rounded-xl bg-gold-500/20 text-gold-300 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5 text-gold-300" />
          </div>
          <div className="flex-1 text-xs space-y-0.5 text-left">
            <strong className="block font-bold text-sand-50">
              {isBangla ? "স্বয়ংক্রিয় অফলাইন মোড সক্রিয়!" : "Automatic Offline Cache Ready!"}
            </strong>
            <p className="text-sand-200 leading-relaxed text-[11px]">
              {isBangla
                ? "১৮টি লেভেল, ৭২টি পাঠ ও আরবি হরফের অডিও আপনার ডিভাইসে সংরক্ষিত হয়েছে। ইন্টারনেট ছাড়াও সবকিছু পড়তে ও শুনতে পারবেন।"
                : "All 18 levels, 72 lessons, and alphabet audio have been automatically cached to your device for offline use."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAutoToast(false)}
            className="text-sand-400 hover:text-sand-100 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
