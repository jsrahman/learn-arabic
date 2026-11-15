"use client";

import React from "react";
import Link from "next/link";
import { Target, Play, ArrowRight } from "lucide-react";
import { toBanglaNumber } from "@/utils";
import type { LearningLevel, HomeTranslations } from "@/types";

interface HomeActiveStageSpotlightProps {
  t: HomeTranslations;
  activeLevel: LearningLevel;
  activeLevelCompletedCount: number;
  activeLevelPercent: number;
  isBangla: boolean;
}

export const HomeActiveStageSpotlight: React.FC<HomeActiveStageSpotlightProps> = ({
  t,
  activeLevel,
  activeLevelCompletedCount,
  activeLevelPercent,
  isBangla,
}) => {
  const displayLevelNumber = isBangla ? toBanglaNumber(activeLevel.number) : activeLevel.number;
  const displayCompletedCount = isBangla ? toBanglaNumber(activeLevelCompletedCount) : activeLevelCompletedCount;
  const displayLessonsCount = isBangla ? toBanglaNumber(activeLevel.lessonsCount) : activeLevel.lessonsCount;
  const displayPercent = isBangla ? toBanglaNumber(activeLevelPercent) : activeLevelPercent;
  const displayEstimated = isBangla ? toBanglaNumber(activeLevel.estimatedMinutes) : activeLevel.estimatedMinutes;

  return (
    <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-sand-50 border border-gold-500/30 shadow-2xl overflow-hidden group">
      {/* Atmospheric background glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-500/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Kinetic Calligraphy Watermark */}
      <div
        className="font-arabic text-7xl sm:text-9xl absolute -right-6 -bottom-6 text-gold-300/[0.06] pointer-events-none select-none group-hover:scale-105 transition-transform duration-700"
        dir="rtl"
        aria-hidden="true"
      >
        {activeLevel.titleArabic}
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.activeStage}
            </span>
            <span className="px-3 py-1 rounded-full bg-sand-200/10 border border-sand-200/20 text-sand-200 text-xs font-medium">
              {isBangla ? (activeLevel.tierBangla || activeLevel.tier) : activeLevel.tier} • {t.levelOf} {displayLevelNumber} / {isBangla ? toBanglaNumber(18) : "18"}
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-gold-100 tracking-tight flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span>{t.levelOf} {displayLevelNumber}: {isBangla ? activeLevel.titleBangla || activeLevel.title : activeLevel.title}</span>
              <span className="font-arabic text-lg sm:text-2xl font-normal text-gold-300/80" dir="rtl">
                {activeLevel.titleArabic}
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-sand-200/90 mt-1 font-medium">
              {isBangla ? activeLevel.subtitleBangla : activeLevel.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-sand-300/80 mt-2 leading-relaxed max-w-2xl">
              {isBangla ? activeLevel.descriptionBangla : activeLevel.description}
            </p>
          </div>

          {/* Goal Chip */}
          {(isBangla ? activeLevel.objectivesBangla?.[0] : activeLevel.objectives?.[0]) && (
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-xs text-sand-200">
              <Target className="w-4 h-4 text-gold-400 shrink-0" />
              <span>
                <strong className="text-gold-200 mr-1">{t.stageGoal}</strong>
                {isBangla ? activeLevel.objectivesBangla[0] : activeLevel.objectives[0]}
              </span>
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href={`/learn/l${activeLevel.number}-1`}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-night-950 font-extrabold text-sm shadow-lg shadow-gold-500/20 transition-all duration-200 active:scale-95 group/btn min-h-[44px]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>
                {activeLevelPercent > 0
                  ? `${t.resumeLevel} ${displayLevelNumber}`
                  : `${t.startLevel} ${displayLevelNumber}`}
              </span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Gauge & Metrics */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
          <div className="p-6 rounded-3xl bg-sand-50/5 border border-sand-50/10 backdrop-blur-md text-center w-full max-w-xs space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300 block">
              {t.levelMasteryGauge}
            </span>

            {/* Circular Gauge Readout */}
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="stroke-sand-50/10"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="stroke-gold-400 transition-all duration-700 ease-out"
                  strokeWidth="8"
                  strokeDasharray={251.2}
                  strokeDashoffset={251.2 - (251.2 * activeLevelPercent) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-mono text-2xl font-extrabold text-gold-200">
                  {displayPercent}%
                </span>
                <span className="text-[9px] uppercase tracking-wider text-sand-300">
                  {t.mastered}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-sand-50/10">
              <div className="p-2 rounded-xl bg-sand-50/5">
                <span className="text-[10px] text-sand-400 block">{t.lessons}</span>
                <span className="font-mono font-bold text-sand-100">
                  {displayCompletedCount}/{displayLessonsCount}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-sand-50/5">
                <span className="text-[10px] text-sand-400 block">{t.estimated}</span>
                <span className="font-mono font-bold text-sand-100">
                  ~{displayEstimated}{isBangla ? "মি." : "m"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
