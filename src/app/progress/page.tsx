"use client";

import React from "react";
import { useProgressDashboard } from "@/hooks/useProgressDashboard";
import { ProgressHeader } from "@/components/progress/ProgressHeader";
import { ProgressStatGrid } from "@/components/progress/ProgressStatGrid";
import { LevelBreakdownCard } from "@/components/progress/LevelBreakdownCard";
import { MasteredLettersGallery } from "@/components/progress/MasteredLettersGallery";
import { ResetProgressModal } from "@/components/progress/ResetProgressModal";

export default function ProgressPage() {
  const {
    progress,
    isBangla,
    t,
    resetConfirmOpen,
    totalLessons,
    completedCount,
    handleOpenResetConfirm,
    handleCloseResetConfirm,
    handleConfirmReset,
  } = useProgressDashboard();

  return (
    <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-10">
      <ProgressHeader
        analyticsTag={t.analyticsTag}
        title={t.title}
        subtitle={t.subtitle}
        resetProgressText={t.resetProgress}
        onOpenResetConfirm={handleOpenResetConfirm}
      />

      <ProgressStatGrid
        progress={progress}
        completedCount={completedCount}
        totalLessons={totalLessons}
        isBangla={isBangla}
        t={t}
      />

      <LevelBreakdownCard
        progress={progress}
        isBangla={isBangla}
        breakdownTitle={t.breakdownTitle}
        masteryText={t.mastery}
        quizScoreText={t.quizScore}
        notAttemptedText={t.notAttempted}
      />

      <MasteredLettersGallery
        isBangla={isBangla}
        galleryTitle={t.galleryTitle}
        gallerySubtitle={t.gallerySubtitle}
        availableText={t.available}
      />

      <ResetProgressModal
        isOpen={resetConfirmOpen}
        onClose={handleCloseResetConfirm}
        onConfirm={handleConfirmReset}
        title={t.resetModalTitle}
        description={t.resetModalDesc}
        cancelText={t.cancel}
        confirmText={t.confirmReset}
      />
    </div>
  );
}
