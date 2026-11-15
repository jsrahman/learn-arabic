"use client";

import { useState, useMemo, useCallback } from "react";
import { LEARNING_LEVELS } from "@/data/levels";
import { ARABIC_ALPHABET, ArabicLetter } from "@/data/alphabet";
import { useThemeContext } from "@/components/ThemeWrapper";
import { usePWA } from "@/components/PWAProvider";
import { translations } from "@/lib/translations";

export interface HomeTierFilter {
  id: string;
  label: string;
  count: number;
}

export function useHomePlayground() {
  const { progress, preferences } = useThemeContext();
  const { isInstalled, promptInstall } = usePWA();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].home;

  const [selectedLetter, setSelectedLetter] = useState<ArabicLetter>(ARABIC_ALPHABET[1]); // Bā'
  const [selectedTier, setSelectedTier] = useState<string>("all");

  const tierFilters: HomeTierFilter[] = useMemo(
    () => [
      { id: "all", label: t.tierFilterAll, count: 18 },
      { id: "Foundations", label: t.tierFilter1, count: 4 },
      { id: "Vowels & Orthography", label: t.tierFilter2, count: 4 },
      { id: "Core Tajweed", label: t.tierFilter3, count: 5 },
      { id: "Quranic Mastery", label: t.tierFilter4, count: 5 },
    ],
    [t]
  );

  const filteredLevels = useMemo(() => {
    return selectedTier === "all"
      ? LEARNING_LEVELS
      : LEARNING_LEVELS.filter((l) => l.tier === selectedTier);
  }, [selectedTier]);

  const activeLevel = useMemo(() => {
    return (
      LEARNING_LEVELS.find((lvl) => {
        const isUnlocked = progress.unlockedLevels.includes(lvl.number);
        const completedCount = progress.completedLessons.filter((id) =>
          id.startsWith(`l${lvl.number}-`)
        ).length;
        return isUnlocked && completedCount < lvl.lessonsCount;
      }) || LEARNING_LEVELS[0]
    );
  }, [progress.unlockedLevels, progress.completedLessons]);

  const activeLevelCompletedCount = progress.completedLessons.filter((id) =>
    id.startsWith(`l${activeLevel.number}-`)
  ).length;

  const activeLevelPercent = Math.min(
    100,
    Math.round((activeLevelCompletedCount / activeLevel.lessonsCount) * 100)
  );

  const handleSelectLetter = useCallback((letter: ArabicLetter) => {
    setSelectedLetter(letter);
  }, []);

  const handleSelectTier = useCallback((tierId: string) => {
    setSelectedTier(tierId);
  }, []);

  return {
    progress,
    preferences,
    isBangla,
    t,
    isInstalled,
    promptInstall,
    selectedLetter,
    selectedTier,
    tierFilters,
    filteredLevels,
    activeLevel,
    activeLevelCompletedCount,
    activeLevelPercent,
    handleSelectLetter,
    handleSelectTier,
  };
}
