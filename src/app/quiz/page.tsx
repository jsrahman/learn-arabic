"use client";

import React from "react";
import { useQuizHub } from "@/hooks/useQuizHub";
import { QuizHubHeader } from "@/components/quiz/QuizHubHeader";
import { TierFilterBar } from "@/components/path/TierFilterBar";
import { QuizHubCard } from "@/components/quiz/QuizHubCard";

export default function QuizHubPage() {
  const {
    progress,
    isBangla,
    t,
    selectedTier,
    tierFilters,
    filteredQuizzes,
    handleSelectTier,
  } = useQuizHub();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <QuizHubHeader
        quizTagText={t.quizTag}
        quizHubTitleText={t.quizHubTitle}
        quizHubSubtitleText={t.quizHubSubtitle}
        launchLevel1Text={t.launchLevel1}
      />

      <TierFilterBar
        filters={tierFilters}
        selectedTier={selectedTier}
        onSelectTier={handleSelectTier}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <QuizHubCard
            key={quiz.id}
            quiz={quiz}
            progress={progress}
            isBangla={isBangla}
            passText={t.pass}
            launchQuizText={t.launchQuiz}
            retakeQuizText={t.retakeQuiz}
          />
        ))}
      </div>
    </div>
  );
}
