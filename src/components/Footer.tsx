"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Download, Smartphone } from "lucide-react";
import { useThemeContext } from "@/components/ThemeWrapper";
import { usePWA } from "@/components/PWAProvider";
import { OfflineStatusIndicator } from "@/components/OfflineStatusIndicator";
import { translations } from "@/lib/translations";

export const Footer = () => {
  const { preferences } = useThemeContext();
  const { isInstallable, promptInstall } = usePWA();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].footer;

  return (
    <footer className="mt-20 border-t border-sand-200 dark:border-night-800 bg-sand-100/60 dark:bg-night-900/60 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hadith Banner */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-teal-950 text-sand-50 border border-gold-500/30 text-center shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
          <p className="font-arabic text-2xl md:text-3xl font-medium text-gold-300 mb-2 leading-relaxed" dir="rtl">
            «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
          </p>
          <p className="text-sm text-sand-200 italic max-w-2xl mx-auto">
            {t.hadith}
          </p>
          <p className="text-xs text-gold-400/80 mt-1 font-mono">{t.hadithSource}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 border border-gold-500/30 flex items-center justify-center">
                <span className="font-arabic text-base text-gold-300 font-bold">ق</span>
              </div>
              <span className="font-bold text-lg text-emerald-950 dark:text-sand-100 font-sans">
                Quran<span className="text-emerald-600 dark:text-emerald-400">Path</span>
              </span>
            </div>
            <p className="text-xs text-sand-600 dark:text-sand-400 max-w-md leading-relaxed">
              {t.brandDesc}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.privacyNotice}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sand-900 dark:text-sand-200 mb-3">
              {t.curriculumTitle}
            </h4>
            {/* Link touch target standard: min-h-[44px] flex items-center (supercedes legacy block py-2 for full >= 44px compliance) */}
            <ul className="space-y-1 text-xs text-sand-600 dark:text-sand-400">
              <li>
                <Link href="/path#level-1" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {isBangla ? "লেভেল ১: আরবি বর্ণমালা" : "Level 1: Arabic Alphabet"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-2" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {isBangla ? "লেভেল ২: মাখারিজুল হুরুফ" : "Level 2: Makharij al-Huruf"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-3" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {isBangla ? "লেভেল ৩: অক্ষরের রূপান্তর" : "Level 3: Letter Forms"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-4" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {isBangla ? "লেভেল ৪: হরকত ও সুকূন" : "Level 4: Harakat & Sukoon"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-5" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {isBangla ? "লেভেল ৫: তানবীন ও ওয়াকফ" : "Level 5: Tanween & Waqf"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-6" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {isBangla ? "লেভেল ৬: তাশদীদ ও গুন্নাহ" : "Level 6: Shaddah & Ghunnah"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice & Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sand-900 dark:text-sand-200 mb-3">
              {t.toolsTitle}
            </h4>
            <ul className="space-y-1 text-xs text-sand-600 dark:text-sand-400">
              <li>
                <Link href="/practice" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {t.letterDrill}
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {t.quizzes}
                </Link>
              </li>
              <li>
                <Link href="/progress" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {t.progressStats}
                </Link>
              </li>
              <li>
                <Link href="/path" className="min-h-[44px] flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {isBangla ? "১৮টি লেভেলের পূর্ণাঙ্গ রোডম্যাপ" : "Full 18-Level Roadmap"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* PWA App Install & Offline Storage Control Bar */}
        <div className="mb-10 p-5 rounded-2xl bg-sand-200/50 dark:bg-night-850/60 border border-sand-300/80 dark:border-night-750 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 text-gold-300 flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              <span className="font-arabic">ق</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-sand-900 dark:text-sand-100">
                {isBangla ? "কুরআনপাঠ অফলাইন ও অ্যাপ সুবিধা" : "QuranPath App & Offline Access"}
              </h4>
              <p className="text-xs text-sand-600 dark:text-sand-400">
                {isBangla
                  ? "ইন্টারনেট ছাড়াও সম্পূর্ণ অফলাইনে ১৮টি লেভেল পড়ুন অথবা ডিভাইসে অ্যাপ হিসেবে সেভ করুন।"
                  : "Access all 18 levels completely offline or install as a standalone app on your device."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 flex-wrap justify-center">
            {/* Install App Button */}
            {isInstallable && (
              <button
                type="button"
                onClick={promptInstall}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-750 hover:to-teal-750 text-gold-200 text-xs font-bold border border-gold-500/30 shadow-sm transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-gold-300 animate-bounce-short" />
                <span>{isBangla ? "অ্যাপ ইনস্টল করুন" : "Install App"}</span>
              </button>
            )}

            {/* Offline Cache Indicator & Manager */}
            <OfflineStatusIndicator />
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-sand-200 dark:border-night-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-500">
          <p>© {new Date().getFullYear()} QuranPath. {t.rights}</p>
          <p className="font-arabic text-sm text-emerald-800 dark:text-emerald-400" dir="rtl">
            رَبِّ زِدْنِي عِلْمًا
          </p>
        </div>
      </div>
    </footer>
  );
};
