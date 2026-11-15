"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, BookX, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import type { HomeTranslations } from "@/types";

interface HomeProblemSolutionProps {
  t: HomeTranslations;
  ctaText: string;
}

export const HomeProblemSolution: React.FC<HomeProblemSolutionProps> = ({
  t,
  ctaText,
}) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
          <AlertCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
          <span>{t.painTag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-tight">
          {t.painTitle}
        </h2>
        <p className="text-sm sm:text-base text-sand-600 dark:text-sand-400 max-w-2xl mx-auto leading-relaxed">
          {t.painSubtitle}
        </p>
      </div>

      {/* The 3 Pain Point Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pain 1 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-sand-100/70 dark:bg-night-900/70 border border-rose-500/20 shadow-sm space-y-3 relative overflow-hidden group hover:border-rose-500/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-sand-950 dark:text-sand-50">
            {t.pain1Title}
          </h3>
          <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400 leading-relaxed">
            {t.pain1Desc}
          </p>
        </div>

        {/* Pain 2 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-sand-100/70 dark:bg-night-900/70 border border-rose-500/20 shadow-sm space-y-3 relative overflow-hidden group hover:border-rose-500/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
            <BookX className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-sand-950 dark:text-sand-50">
            {t.pain2Title}
          </h3>
          <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400 leading-relaxed">
            {t.pain2Desc}
          </p>
        </div>

        {/* Pain 3 */}
        <div className="p-6 sm:p-7 rounded-3xl bg-sand-100/70 dark:bg-night-900/70 border border-rose-500/20 shadow-sm space-y-3 relative overflow-hidden group hover:border-rose-500/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-sand-950 dark:text-sand-50">
            {t.pain3Title}
          </h3>
          <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400 leading-relaxed">
            {t.pain3Desc}
          </p>
        </div>
      </div>

      {/* The Solution Transition Banner */}
      <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-sand-50 border border-gold-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-gold-300 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>The Proven Solution</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gold-100 tracking-tight">
            {t.solutionHeading}
          </h3>
          <p className="text-xs sm:text-sm text-sand-200/90 max-w-2xl leading-relaxed">
            {t.solutionSubheading}
          </p>
        </div>

        <Link
          href="/path"
          className="shrink-0 px-7 py-3.5 rounded-2xl bg-gold-500 hover:bg-gold-400 text-night-950 font-extrabold text-sm shadow-lg flex items-center gap-2 transition-transform active:scale-95 min-h-[44px]"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
