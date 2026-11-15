"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Volume2, CheckCircle2 } from "lucide-react";

interface HomeHeroProps {
  spiritualRibbon: string;
  headlineStart: string;
  headlineHighlight: string;
  headlineEnd: string;
  subtitle: string;
  ctaStart: string;
  ctaPractice: string;
  highlight1: string;
  highlight2: string;
  highlight3: string;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  spiritualRibbon,
  headlineStart,
  headlineHighlight,
  headlineEnd,
  subtitle,
  ctaStart,
  ctaPractice,
  highlight1,
  highlight2,
  highlight3,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Soft emerald & gold atmospheric background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-gold-500/10 dark:bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-3xl mx-auto space-y-6">
        {/* Spiritual Opening Ribbon */}
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 py-2 px-3 sm:px-4 rounded-2xl sm:rounded-full bg-sand-200/80 dark:bg-night-850/80 border border-gold-500/30 text-sand-800 dark:text-gold-300 text-xs font-medium shadow-subtle backdrop-blur-sm max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-arabic text-base sm:text-lg leading-relaxed text-gold-600 dark:text-gold-400" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </span>
          <span className="text-sand-400 dark:text-sand-600 hidden sm:inline">•</span>
          <span>{spiritualRibbon}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-[1.18]">
          {headlineStart}{" "}
          <span className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700 dark:from-emerald-400 dark:via-teal-300 dark:to-gold-300 bg-clip-text text-transparent">
            {headlineHighlight}
          </span>{" "}
          {headlineEnd}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-sand-700 dark:text-sand-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Call to Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/path"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-750 hover:to-teal-750 text-gold-100 font-bold text-base shadow-lg shadow-emerald-900/25 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group min-h-[44px]"
          >
            <span>{ctaStart}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/practice"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sand-100 dark:bg-night-850 hover:bg-sand-200 dark:hover:bg-night-800 text-emerald-950 dark:text-sand-100 font-semibold text-base border border-sand-300 dark:border-night-700 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 min-h-[44px]"
          >
            <Volume2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>{ctaPractice}</span>
          </Link>
        </div>

        {/* Highlights ribbon */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-sand-600 dark:text-sand-400 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {highlight1}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {highlight2}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {highlight3}
          </span>
        </div>
      </div>
    </section>
  );
};
