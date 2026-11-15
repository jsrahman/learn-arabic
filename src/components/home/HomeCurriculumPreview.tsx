"use client";

import React from "react";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import { LevelCard } from "@/components/LevelCard";
import { cn } from "@/utils";
import type { LearningLevel, UserProgress, HomeTierFilter, HomeTranslations } from "@/types";

interface HomeCurriculumPreviewProps {
  t: HomeTranslations;
  tierFilters: HomeTierFilter[];
  selectedTier: string;
  onSelectTier: (tierId: string) => void;
  filteredLevels: LearningLevel[];
  progress: UserProgress;
}

export const HomeCurriculumPreview: React.FC<HomeCurriculumPreviewProps> = ({
  t,
  tierFilters,
  selectedTier,
  onSelectTier,
  filteredLevels,
  progress,
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{t.curriculumArch}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
          {t.curriculumTitle}
        </h2>
        <p className="text-sm sm:text-base text-sand-600 dark:text-sand-400 max-w-2xl mx-auto leading-relaxed">
          {t.curriculumSubtitle}
        </p>
      </div>

      {/* Interactive Tier Navigation Pill Strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {tierFilters.map((tf) => {
          const isActive = selectedTier === tf.id;
          return (
            <button
              key={tf.id}
              type="button"
              onClick={() => onSelectTier(tf.id)}
              className={cn(
                "px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 flex items-center gap-2 border active:scale-95 min-h-[44px]",
                isActive
                  ? "bg-emerald-800 text-gold-200 border-gold-500/40 shadow-md ring-2 ring-gold-400/30"
                  : "bg-sand-100 dark:bg-night-900 text-sand-700 dark:text-sand-300 border-sand-300/60 dark:border-night-800 hover:bg-sand-200 dark:hover:bg-night-850"
              )}
            >
              <span>{tf.label}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-mono",
                  isActive
                    ? "bg-gold-500/20 text-gold-300"
                    : "bg-sand-200 dark:bg-night-800 text-sand-500 dark:text-sand-400"
                )}
              >
                {tf.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* The Grid of Level Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLevels.map((level) => {
          const isUnlocked = progress.unlockedLevels.includes(level.number);
          const completedCount = progress.completedLessons.filter((id) =>
            id.startsWith(`l${level.number}-`)
          ).length;

          return (
            <LevelCard
              key={level.id}
              level={level}
              isUnlocked={isUnlocked}
              completedLessonsInLevel={completedCount}
            />
          );
        })}
      </div>

      {/* Bottom Call to Action for Full Path */}
      <div className="text-center pt-4">
        <Link
          href="/path"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-sand-200/80 hover:bg-sand-300 dark:bg-night-850 dark:hover:bg-night-800 border border-sand-300 dark:border-night-700 text-emerald-950 dark:text-gold-200 font-bold text-xs transition-colors min-h-[44px]"
        >
          <span>{t.exploreRoadmap}</span>
          <ArrowRight className="w-4 h-4 text-emerald-700 dark:text-gold-400" />
        </Link>
      </div>
    </section>
  );
};
