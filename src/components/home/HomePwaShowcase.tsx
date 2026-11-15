"use client";

import React from "react";
import { Sparkles, Laptop, Smartphone, WifiOff, CheckCircle2, Download } from "lucide-react";

interface HomePwaShowcaseProps {
  isInstalled: boolean;
  onPromptInstall: () => void;
  isBangla: boolean;
}

export const HomePwaShowcase: React.FC<HomePwaShowcaseProps> = ({
  isInstalled,
  onPromptInstall,
  isBangla,
}) => {
  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl p-8 sm:p-12 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                {isBangla ? "প্রগ্রেসিভ ওয়েব অ্যাপ (PWA)" : "Progressive Web App"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
              {isBangla
                ? "যেকোনো ডিভাইসে কুরআনপাঠ অ্যাপ ইনস্টল করুন"
                : "Install QuranPath App on Any Device"}
            </h2>

            <p className="text-sm text-sand-600 dark:text-sand-400 leading-relaxed">
              {isBangla
                ? "গুগল ক্রোম, মাইক্রোসফট এজ বা সাফারি ব্রাউজার থেকে সরাসরি আপনার কম্পিউটার বা মোবাইলে ইনস্টল করুন। একবার ইনস্টল করলে ইন্টারনেট ছাড়াই সম্পূর্ণ অফলাইনে সমস্ত পাঠ, কুইজ ও উচ্চারণ অনুশীলন করতে পারবেন।"
                : "Install QuranPath directly to your desktop or mobile device. Once installed, enjoy a fast, distraction-free app window that works 100% offline without internet."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 text-sand-700 dark:text-sand-300">
                <Laptop className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isBangla ? "উইন্ডোজ ও ম্যাক ওএস" : "Windows & macOS"}</span>
              </div>
              <div className="flex items-center gap-2 text-sand-700 dark:text-sand-300">
                <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isBangla ? "অ্যান্ড্রয়েড ও আইফোন" : "Android & iPhone"}</span>
              </div>
              <div className="flex items-center gap-2 text-sand-700 dark:text-sand-300">
                <WifiOff className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isBangla ? "১০০% অফলাইনে প্রস্তুত" : "100% Offline Ready"}</span>
              </div>
            </div>
          </div>

          {/* Install Action Card */}
          <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-3">
            {isInstalled ? (
              <div className="px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 flex items-center gap-3 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div className="text-left">
                  <span className="text-xs font-bold block">
                    {isBangla ? "অ্যাপ ইনস্টল সম্পন্ন" : "App Installed"}
                  </span>
                  <span className="text-[11px] opacity-80">
                    {isBangla
                      ? "ডিভাইস হোম স্ক্রিনে সংরক্ষিত"
                      : "Ready on your home screen"}
                  </span>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={onPromptInstall}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-750 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-gold-200 font-bold text-sm shadow-lg shadow-emerald-900/20 border border-gold-500/30 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group min-h-[44px]"
              >
                <Download className="w-5 h-5 text-gold-300 group-hover:-translate-y-0.5 transition-transform" />
                <span>
                  {isBangla ? "ডিভাইসে অ্যাপ ইনস্টল করুন" : "Install QuranPath App"}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
