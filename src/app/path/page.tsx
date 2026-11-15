"use client";

import React from "react";
import { usePathRoadmap } from "@/hooks/usePathRoadmap";
import { PathHeader } from "@/components/path/PathHeader";
import { TierFilterBar } from "@/components/path/TierFilterBar";
import { PathLevelCard } from "@/components/path/PathLevelCard";

export default function LearningPathPage() {
  const {
    progress,
    isBangla,
    t,
    selectedTier,
    tierFilters,
    totalLessons,
    completedLessonsCount,
    overallPercent,
    filteredLevels,
    handleSelectTier,
  } = usePathRoadmap();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PathHeader
        roadmapTag={t.roadmapTag}
        title={t.title}
        subtitle={t.subtitle}
        overallPercent={overallPercent}
        doneText={t.done}
        totalProgressText={t.totalProgress}
        completedLessonsCount={completedLessonsCount}
        totalLessons={totalLessons}
        lessonsCompletedText={t.lessonsCompleted}
        statSummaryText={t.statSummary}
      />

      <TierFilterBar
        filters={tierFilters}
        selectedTier={selectedTier}
        onSelectTier={handleSelectTier}
      />

      <div className="space-y-8 relative">
        {filteredLevels.map((level) => (
          <PathLevelCard
            key={level.id}
            level={level}
            progress={progress}
            isBangla={isBangla}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}
