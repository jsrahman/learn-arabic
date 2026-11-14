"use client";

import React from "react";
import "./globals.css";
import { AlertOctagon, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="bn">
      <body className="bg-sand-50 dark:bg-night-950 text-sand-900 dark:text-sand-100 min-h-screen flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-sand-100 dark:bg-night-900 border border-sand-300 dark:border-night-800 shadow-xl">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
            <AlertOctagon className="w-10 h-10 text-rose-600" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
              সিস্টেম ত্রুটি • System Error
            </span>
            <h1 className="text-2xl font-extrabold text-sand-950 dark:text-sand-50">
              অ্যাপ্লিকেশনটি লোড করা সম্ভব হয়নি
            </h1>
            <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400">
              একটি অভ্যন্তরীণ ত্রুটি ঘটেছে। পুনরায় চেষ্টা করুন বা পেইজটি রিলোড দিন।
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-800 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-emerald-700 min-h-[44px]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>পুনরায় চেষ্টা করুন</span>
            </button>
            <button
              type="button"
              onClick={() => window.location.assign("/")}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sand-200 text-sand-800 font-semibold text-xs flex items-center justify-center border border-sand-300 min-h-[44px]"
            >
              <span>হোমপেজে ফিরে যান</span>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
