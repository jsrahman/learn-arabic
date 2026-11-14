"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useThemeContext } from "@/components/ThemeWrapper";
import { translations } from "@/lib/translations";

export const Footer = () => {
  const { preferences } = useThemeContext();
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
            <ul className="space-y-2 text-xs text-sand-600 dark:text-sand-400">
              <li>
                <Link href="/path#level-1" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {isBangla ? "লেভেল ১: আরবি বর্ণমালা" : "Level 1: Arabic Alphabet"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-2" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {isBangla ? "লেভেল ২: মাখারিজুল হুরুফ" : "Level 2: Makharij al-Huruf"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-3" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {isBangla ? "লেভেল ৩: অক্ষরের রূপান্তর" : "Level 3: Letter Forms"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-4" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {isBangla ? "লেভেল ৪: হরকত ও সুকূন" : "Level 4: Harakat & Sukoon"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-5" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {isBangla ? "লেভেল ৫: তানবীন ও ওয়াকফ" : "Level 5: Tanween & Waqf"}
                </Link>
              </li>
              <li>
                <Link href="/path#level-6" className="hover:text-emerald-600 dark:hover:text-emerald-400">
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
            <ul className="space-y-2 text-xs text-sand-600 dark:text-sand-400">
              <li>
                <Link href="/practice" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {t.letterDrill}
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {t.quizzes}
                </Link>
              </li>
              <li>
                <Link href="/progress" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {t.progressStats}
                </Link>
              </li>
              <li>
                <Link href="/path" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  {isBangla ? "১৮টি লেভেলের পূর্ণাঙ্গ রোডম্যাপ" : "Full 18-Level Roadmap"}
                </Link>
              </li>
            </ul>
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
