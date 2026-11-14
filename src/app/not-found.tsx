"use client";

import React from "react";
import Link from "next/link";
import { Compass, Home, BookOpen, ArrowLeft } from "lucide-react";
import { useThemeContext } from "@/components/ThemeWrapper";

export default function NotFound() {
  const { preferences } = useThemeContext();
  const isBangla = preferences?.explanationLanguage !== "en"; // Default Bangla

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Soft atmospheric background glow */}
        <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/15 dark:bg-emerald-400/10 rounded-full blur-2xl" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-sand-100 dark:bg-night-900 border border-sand-300 dark:border-night-800 shadow-card flex flex-col items-center justify-center">
            <span className="font-arabic text-3xl sm:text-4xl text-emerald-800 dark:text-gold-200" dir="rtl">
              ٤٠٤
            </span>
            <Compass className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1 animate-spin-slow" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {isBangla ? "ত্রুটি ৪০৪ • পৃষ্ঠাটি খুঁজে পাওয়া যায়নি" : "Error 404 • Page Not Found"}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            {isBangla ? "কাঙ্ক্ষিত পৃষ্ঠাটি বিদ্যমান নেই" : "Lost Your Path?"}
          </h1>
          <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400 leading-relaxed max-w-sm mx-auto">
            {isBangla
              ? "আপনি যে লিংকটি খুঁজছেন তা হয়তো সরানো হয়েছে বা ঠিকানাটি ভুল। কুরআনের নূরানী শিক্ষা যাত্রায় পুনরায় ফিরে আসুন।"
              : "The page you are looking for might have been moved or doesn't exist. Let's guide you back to your learning journey."}
          </p>
        </div>

        {/* Spiritual Note */}
        <div className="p-3 sm:p-4 rounded-2xl bg-sand-100/70 dark:bg-night-900/70 border border-sand-200 dark:border-night-800/80">
          <span className="font-arabic text-lg text-emerald-900 dark:text-gold-300 block mb-1" dir="rtl">
            اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
          </span>
          <span className="text-[11px] text-sand-500 italic block">
            {isBangla
              ? "‘আমাদের সরল ও সঠিক পথ প্রদর্শন করুন।’"
              : "'Guide us along the straight path.' (Surah Al-Fatihah)"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>{isBangla ? "হোমে ফিরে যান" : "Return to Home"}</span>
          </Link>

          <Link
            href="/path"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sand-200 hover:bg-sand-300 dark:bg-night-850 dark:hover:bg-night-800 text-sand-800 dark:text-sand-200 font-semibold text-xs flex items-center justify-center gap-2 border border-sand-300 dark:border-night-700 transition-colors min-h-[44px]"
          >
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{isBangla ? "১৮টি লেভেল দেখুন" : "View Curriculum"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
