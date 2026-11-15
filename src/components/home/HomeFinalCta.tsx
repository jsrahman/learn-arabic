"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from "lucide-react";

interface HomeFinalCtaProps {
  finalCtaTag: string;
  finalCtaTitle: string;
  finalCtaSubtitle: string;
  finalCtaBtn: string;
  finalCtaSecondary: string;
  finalCtaHadith: string;
  finalCtaHadithSource: string;
  finalCtaGuarantees: string;
}

export const HomeFinalCta: React.FC<HomeFinalCtaProps> = ({
  finalCtaTag,
  finalCtaTitle,
  finalCtaSubtitle,
  finalCtaBtn,
  finalCtaSecondary,
  finalCtaHadith,
  finalCtaHadithSource,
  finalCtaGuarantees,
}) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-sand-50 border border-gold-500/40 shadow-2xl relative overflow-hidden text-center space-y-8">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Hadith Endorsement Strip */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-sand-50/10 border border-sand-50/15 backdrop-blur-sm space-y-1">
          <p className="font-arabic text-base sm:text-lg text-gold-300" dir="rtl">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </p>
          <p className="text-xs sm:text-sm text-sand-200 italic">
            {finalCtaHadith}
          </p>
          <span className="text-[11px] text-gold-400 block font-semibold">
            {finalCtaHadithSource}
          </span>
        </div>

        {/* Main Conversion Pitch */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold border border-gold-500/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{finalCtaTag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold-100 tracking-tight leading-tight">
            {finalCtaTitle}
          </h2>

          <p className="text-sm sm:text-base text-sand-200 max-w-2xl mx-auto leading-relaxed">
            {finalCtaSubtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/path"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-night-950 font-extrabold text-base shadow-xl shadow-gold-500/25 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group min-h-[44px]"
          >
            <span>{finalCtaBtn}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/path"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sand-50/10 hover:bg-sand-50/20 text-gold-200 font-semibold text-base border border-sand-50/20 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 min-h-[44px]"
          >
            <BookOpen className="w-5 h-5 text-gold-400" />
            <span>{finalCtaSecondary}</span>
          </Link>
        </div>

        {/* Guarantees Reassurance */}
        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-sand-300 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{finalCtaGuarantees}</span>
        </div>
      </div>
    </section>
  );
};
