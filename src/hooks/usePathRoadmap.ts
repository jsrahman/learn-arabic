"use client";

import { useState, useMemo, useCallback } from "react";
import { LEARNING_LEVELS } from "@/data/levels";
import { useThemeContext } from "@/components/ThemeWrapper";
import { translations } from "@/lib/translations";
import type { LearningLevel, TierFilter } from "@/types";

export function usePathRoadmap() {
  const { progress, preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].path;

  const [selectedTier, setSelectedTier] = useState<string>("all");

  const tierFilters: TierFilter[] = useMemo(
    () => [
      { id: "all", label: t.tierAll },
      { id: "tier-1", tier: "Foundations", label: t.tier1 },
      { id: "tier-2", tier: "Vowels & Orthography", label: t.tier2 },
      { id: "tier-3", tier: "Core Tajweed", label: t.tier3 },
      { id: "tier-4", tier: "Quranic Mastery", label: t.tier4 },
    ],
    [t]
  );

  const totalLessons = useMemo(
    () => LEARNING_LEVELS.reduce((sum, l) => sum + l.lessonsCount, 0),
    []
  );

  const completedLessonsCount = progress.completedLessons.length;
  const overallPercent = Math.min(
    100,
    Math.round((completedLessonsCount / totalLessons) * 100)
  );

  const filteredLevels: LearningLevel[] = useMemo(() => {
    return LEARNING_LEVELS.filter((level) => {
      if (selectedTier === "all") return true;
      if (selectedTier === "tier-1") return level.tier === "Foundations";
      if (selectedTier === "tier-2") return level.tier === "Vowels & Orthography";
      if (selectedTier === "tier-3") return level.tier === "Core Tajweed";
      if (selectedTier === "tier-4") return level.tier === "Quranic Mastery";
      return true;
    });
  }, [selectedTier]);

  const handleSelectTier = useCallback((tierId: string) => {
    setSelectedTier(tierId);
  }, []);

  return {
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
  };
}
