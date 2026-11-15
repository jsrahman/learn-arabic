"use client";

import React from "react";
import Link from "next/link";
import { Volume2, Sparkles, Flame, ArrowRight } from "lucide-react";

interface HomePillarsProps {
  whyUsText: string;
  pillarsTitleText: string;
  pillarsSubtitleText: string;
  pillar1TitleText: string;
  pillar1DescText: string;
  pillar2TitleText: string;
  pillar2DescText: string;
  pillar3TitleText: string;
  pillar3DescText: string;
  beginLevel1Text: string;
}

export const HomePillars: React.FC<HomePillarsProps> = ({
  whyUsText,
  pillarsTitleText,
  pillarsSubtitleText,
  pillar1TitleText,
  pillar1DescText,
  pillar2TitleText,
  pillar2DescText,
  pillar3TitleText,
  pillar3DescText,
  beginLevel1Text,
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-sand-50 border border-gold-500/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            {whyUsText}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-gold-100">
            {pillarsTitleText}
          </h2>
          <p className="text-sm text-sand-200 mt-2 leading-relaxed">
            {pillarsSubtitleText}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gold-200">
              {pillar1TitleText}
            </h3>
            <p className="text-xs text-sand-200 leading-relaxed">
              {pillar1DescText}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gold-200">
              {pillar2TitleText}
            </h3>
            <p className="text-xs text-sand-200 leading-relaxed">
              {pillar2DescText}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 backdrop-blur-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-gold-200">
              {pillar3TitleText}
            </h3>
            <p className="text-xs text-sand-200 leading-relaxed">
              {pillar3DescText}
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/path"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-night-950 font-bold text-sm shadow-lg transition-transform active:scale-95 min-h-[44px]"
          >
            <span>{beginLevel1Text}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
