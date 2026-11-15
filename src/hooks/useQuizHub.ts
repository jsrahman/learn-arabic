"use client";

import { useState, useMemo, useCallback } from "react";
import { QUIZZES } from "@/data/quizzes";
import { LEARNING_LEVELS } from "@/data/levels";
import { useThemeContext } from "@/components/ThemeWrapper";
import { translations } from "@/lib/translations";
import type { TierFilter } from "@/types";

export function useQuizHub() {
  const { progress, preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].quiz;
  const pathT = translations[isBangla ? "bn" : "en"].path;

  const [selectedTier, setSelectedTier] = useState<string>("all");

  const tierFilters = useMemo(
    () => [
      { id: "all", label: pathT.tierAll },
      { id: "tier-1", tier: "Foundations", label: pathT.tier1 },
      { id: "tier-2", tier: "Vowels & Orthography", label: pathT.tier2 },
      { id: "tier-3", tier: "Core Tajweed", label: pathT.tier3 },
      { id: "tier-4", tier: "Quranic Mastery", label: pathT.tier4 },
    ],
    [pathT]
  );

  const quizList = useMemo(() => Object.values(QUIZZES), []);

  const filteredQuizzes = useMemo(() => {
    return quizList.filter((quiz) => {
      const level = LEARNING_LEVELS.find((l) => l.number === quiz.levelId);
      if (!level) return true;
      if (selectedTier === "all") return true;
      if (selectedTier === "tier-1") return level.tier === "Foundations";
      if (selectedTier === "tier-2") return level.tier === "Vowels & Orthography";
      if (selectedTier === "tier-3") return level.tier === "Core Tajweed";
      if (selectedTier === "tier-4") return level.tier === "Quranic Mastery";
      return true;
    });
  }, [quizList, selectedTier]);

  const handleSelectTier = useCallback((tierId: string) => {
    setSelectedTier(tierId);
  }, []);

  return {
    progress,
    isBangla,
    t,
    selectedTier,
    tierFilters,
    filteredQuizzes,
    handleSelectTier,
  };
}
