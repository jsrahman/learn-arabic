"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
import { useThemeContext } from "@/components/ThemeWrapper";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { preferences } = useThemeContext();
  const isBangla = preferences?.explanationLanguage !== "en";
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Log unexpected runtime error
    console.error("Runtime application error:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Visual Error Badge */}
        <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
          <div className="absolute inset-0 bg-rose-500/15 dark:bg-rose-400/10 rounded-full blur-2xl" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-sand-100 dark:bg-night-900 border border-rose-300 dark:border-rose-900/60 shadow-card flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-rose-600 dark:text-rose-400 animate-pulse" />
          </div>
        </div>

        {/* Text Heading */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
            {isBangla ? "একটি অপ্রত্যাশিত সমস্যা দেখা দিয়েছে" : "Something Went Wrong"}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            {isBangla ? "পৃষ্ঠাটি লোড করতে সমস্যা হয়েছে" : "Application Error"}
          </h1>
          <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400 leading-relaxed max-w-sm mx-auto">
            {isBangla
              ? "সাময়িক কারিগরি ত্রুটির কারণে এই পেজটি সঠিকভাবে রেন্ডার করা যায়নি। অনুগ্রহ করে পুনরায় চেষ্টা করুন অথবা হোমপেজে ফিরে যান।"
              : "An unexpected error occurred while rendering this page. You can try refreshing or returning to the home screen."}
          </p>
        </div>

        {/* Spiritual Note */}
        <div className="p-3 sm:p-4 rounded-2xl bg-sand-100/70 dark:bg-night-900/70 border border-sand-200 dark:border-night-800/80">
          <span className="font-arabic text-lg text-emerald-900 dark:text-gold-300 block mb-1" dir="rtl">
            فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
          </span>
          <span className="text-[11px] text-sand-500 italic block">
            {isBangla
              ? "‘নিশ্চয়ই কষ্টের সাথেই স্বস্তি রয়েছে।’ (সূরা আল-ইনশিরাহ)"
              : "'For indeed, with hardship comes ease.' (Surah Al-Inshirah)"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isBangla ? "আবার চেষ্টা করুন" : "Try Again"}</span>
          </button>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sand-200 hover:bg-sand-300 dark:bg-night-850 dark:hover:bg-night-800 text-sand-800 dark:text-sand-200 font-semibold text-xs flex items-center justify-center gap-2 border border-sand-300 dark:border-night-700 transition-colors min-h-[44px]"
          >
            <RefreshCw className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{isBangla ? "রিলোড দিন" : "Reload"}</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sand-100 hover:bg-sand-200 dark:bg-night-900 dark:hover:bg-night-800 text-sand-700 dark:text-sand-300 font-semibold text-xs flex items-center justify-center gap-2 border border-sand-300 dark:border-night-700 transition-colors min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>{isBangla ? "হোমপেজ" : "Home"}</span>
          </Link>
        </div>

        {/* Optional Error Details for Debugging */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="text-[11px] text-sand-500 hover:text-sand-700 dark:hover:text-sand-300 inline-flex items-center gap-1 transition-colors"
          >
            <span>{isBangla ? "কারিগরি তথ্য" : "Technical Details"}</span>
            {showDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {showDetails && (
            <div className="mt-2 p-3 rounded-xl bg-sand-200/60 dark:bg-night-950 text-left text-[11px] font-mono text-sand-800 dark:text-sand-300 border border-sand-300 dark:border-night-800 overflow-x-auto max-h-36">
              <p className="font-bold text-rose-600 dark:text-rose-400 mb-1">
                {error.name}: {error.message}
              </p>
              {error.digest && (
                <p className="text-sand-500 text-[10px]">Digest: {error.digest}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
