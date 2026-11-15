"use client";

import React from "react";
import Link from "next/link";
import { Volume2, Sparkles, Flame, ShieldCheck, ArrowRight } from "lucide-react";
import type { HomeTranslations } from "@/types";

interface HomePillarsProps {
  t: HomeTranslations;
}

export const HomePillars: React.FC<HomePillarsProps> = ({ t }) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-sand-50 border border-gold-500/30 shadow-2xl relative overflow-hidden">
        {/* Atmospheric ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mb-12 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            {t.whyUs}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-1 text-gold-100">
            {t.pillarsTitle}
          </h2>
          <p className="text-sm sm:text-base text-sand-200 mt-2 leading-relaxed">
            {t.pillarsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3 hover:border-gold-500/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gold-200">
              {t.pillar1Title}
            </h3>
            <p className="text-xs text-sand-200 leading-relaxed">
              {t.pillar1Desc}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3 hover:border-gold-500/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gold-200">
              {t.pillar2Title}
            </h3>
            <p className="text-xs text-sand-200 leading-relaxed">
              {t.pillar2Desc}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3 hover:border-gold-500/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gold-200">
              {t.pillar3Title}
            </h3>
            <p className="text-xs text-sand-200 leading-relaxed">
              {t.pillar3Desc}
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3 hover:border-gold-500/40 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-emerald-400/20 text-emerald-200 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gold-200">
              {t.pillar4Title}
            </h3>
            <p className="text-xs text-sand-200 leading-relaxed">
              {t.pillar4Desc}
            </p>
          </div>
        </div>

        {/* Section Conversion Action */}
        <div className="mt-12 text-center relative z-10">
          <Link
            href="/path"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gold-500 hover:bg-gold-400 text-night-950 font-extrabold text-sm shadow-xl transition-all active:scale-95 min-h-[44px]"
          >
            <span>{t.beginLevel1}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
