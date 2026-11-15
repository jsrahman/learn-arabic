"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Volume2, CheckCircle2, Star, ShieldCheck, Sparkles } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";
import type { ArabicLetter, HomeTranslations } from "@/types";

interface HomeHeroProps {
  t: HomeTranslations;
  selectedLetter: ArabicLetter;
  isBangla: boolean;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  t,
  selectedLetter,
  isBangla,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Atmospheric background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-gold-500/10 dark:bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Core Value Proposition & Primary Conversion Call to Action */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          {/* Spiritual Opening Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 py-2 px-3 sm:px-4 rounded-2xl sm:rounded-full bg-sand-200/80 dark:bg-night-850/80 border border-gold-500/30 text-sand-800 dark:text-gold-300 text-xs font-medium shadow-subtle backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-arabic text-base sm:text-lg leading-relaxed text-gold-600 dark:text-gold-400" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <span className="text-sand-400 dark:text-sand-600 hidden sm:inline">•</span>
            <span>{t.spiritualRibbon}</span>
          </div>

          {/* Benefit-Driven Primary Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-[1.16]">
            {t.headlineStart}{" "}
            <span className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700 dark:from-emerald-400 dark:via-teal-300 dark:to-gold-300 bg-clip-text text-transparent">
              {t.headlineHighlight}
            </span>{" "}
            {t.headlineEnd}
          </h1>

          {/* Subheadline addressing key objections */}
          <p className="text-base sm:text-lg text-sand-700 dark:text-sand-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Social Proof #1: Rating and Learner Count above the fold */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <div className="flex items-center gap-1 text-gold-500 dark:text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-sand-800 dark:text-sand-200">
              {t.heroRatingText}
            </span>
            <span className="hidden sm:inline text-sand-400 dark:text-night-600">•</span>
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {t.heroFreeBadge}
            </span>
          </div>

          {/* Primary High-Contrast Call to Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/path"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-750 to-teal-800 hover:from-emerald-700 hover:to-teal-750 text-gold-100 font-extrabold text-base shadow-xl shadow-emerald-950/25 border border-gold-500/30 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group min-h-[44px]"
            >
              <span>{t.ctaStart}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#playground"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sand-100 dark:bg-night-850 hover:bg-sand-200 dark:hover:bg-night-800 text-emerald-950 dark:text-sand-100 font-semibold text-base border border-sand-300 dark:border-night-700 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 min-h-[44px]"
            >
              <Volume2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>{t.ctaPractice}</span>
            </a>
          </div>

          {/* Core Guarantees Ribbon */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-sand-600 dark:text-sand-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              {t.highlight1}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              {t.highlight2}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              {t.highlight3}
            </span>
          </div>
        </div>

        {/* Right Column: Hero Visual — Interactive Product Proof Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-sand-50 border border-gold-500/30 shadow-2xl relative overflow-hidden group">
            {/* Ambient card glows */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Top Card Badge */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold border border-gold-500/30">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>{t.heroVisualTitle}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.heroTajweedVerified}</span>
              </span>
            </div>

            {/* Center: Arabic Calligraphy Hero Showcase */}
            <div className="flex flex-col items-center justify-center text-center py-4 relative z-10">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-emerald-800 to-teal-900 border border-gold-500/40 flex items-center justify-center shadow-inner mb-4 group-hover:scale-105 transition-transform duration-300">
                <span className="font-arabic text-7xl sm:text-8xl text-gold-300 select-none leading-none" dir="rtl">
                  {selectedLetter.arabic}
                </span>
              </div>

              <div className="mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gold-100">
                  {isBangla
                    ? `${selectedLetter.nameBangla} (${selectedLetter.arabic})`
                    : `${selectedLetter.name} (${selectedLetter.transliteration})`}
                </h3>
                <p className="text-xs text-sand-300/80 mt-0.5">
                  {t.heroVisualSubtitle}
                </p>
              </div>

              {/* Native Audio Trigger */}
              <div className="w-full flex justify-center py-1">
                <AudioButton
                  audioUrl={selectedLetter.audioUrl}
                  arabicText={selectedLetter.name}
                  size="lg"
                  variant="gold"
                  label={isBangla ? `${selectedLetter.nameBangla} এর মাখরাজ শুনুন` : `Listen to ${selectedLetter.name}`}
                />
              </div>
            </div>

            {/* Bottom Makhraj Explainer */}
            <div className="mt-4 p-3.5 rounded-2xl bg-sand-50/10 border border-sand-50/15 backdrop-blur-sm relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 block mb-1">
                {t.heroVisualMakhraj}
              </span>
              <p className="text-xs text-sand-200 leading-relaxed">
                {isBangla ? selectedLetter.makhrajBangla : selectedLetter.makhraj}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
