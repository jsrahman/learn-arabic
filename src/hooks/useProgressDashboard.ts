"use client";

import { useState, useMemo, useCallback } from "react";
import { LEARNING_LEVELS } from "@/data/levels";
import { useThemeContext } from "@/components/ThemeWrapper";
import { resetStoredProgress } from "@/lib/storage";
import { translations } from "@/lib/translations";

export function useProgressDashboard() {
  const { progress, refreshProgress, preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].progress;

  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  const totalLessons = useMemo(
    () => LEARNING_LEVELS.reduce((sum, l) => sum + l.lessonsCount, 0),
    []
  );

  const completedCount = progress.completedLessons.length;
  const completionPercent = Math.min(
    100,
    Math.round((completedCount / totalLessons) * 100)
  );

  const handleOpenResetConfirm = useCallback(() => {
    setResetConfirmOpen(true);
  }, []);

  const handleCloseResetConfirm = useCallback(() => {
    setResetConfirmOpen(false);
  }, []);

  const handleConfirmReset = useCallback(() => {
    resetStoredProgress();
    refreshProgress();
    setResetConfirmOpen(false);
  }, [refreshProgress]);

  return {
    progress,
    isBangla,
    t,
    resetConfirmOpen,
    totalLessons,
    completedCount,
    completionPercent,
    handleOpenResetConfirm,
    handleCloseResetConfirm,
    handleConfirmReset,
  };
}
