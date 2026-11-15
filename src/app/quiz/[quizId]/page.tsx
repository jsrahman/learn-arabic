"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useQuizArena } from "@/hooks/useQuizArena";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuizNavigator } from "@/components/quiz/QuizNavigator";
import { QuizQuestionCard } from "@/components/quiz/QuizQuestionCard";
import { QuizCompletedView } from "@/components/quiz/QuizCompletedView";
import { translations } from "@/lib/translations";

export default function QuizArenaPage() {
  const params = useParams();
  const quizId = (params?.quizId as string) || "q1";

  const {
    quiz,
    isBangla,
    fontSizeClass,
    currentIndex,
    totalQuestions,
    question,
    currentResult,
    results,
    isAnswered,
    correctCount,
    progressPercent,
    finalPercent,
    passed,
    quizFinished,
    handleSelectOption,
    handleNextQuestion,
    handleJumpToQuestion,
    handleRestartQuiz,
  } = useQuizArena(quizId);

  const t = translations[isBangla ? "bn" : "en"].quiz;

  if (quizFinished) {
    return (
      <QuizCompletedView
        quiz={quiz}
        passed={passed}
        finalPercent={finalPercent}
        correctCount={correctCount}
        totalQuestions={totalQuestions}
        results={results}
        onRestart={handleRestartQuiz}
        isBangla={isBangla}
        t={t}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <QuizHeader
        levelId={quiz.levelId}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        exitQuizLabel={t.exitQuiz}
        isBangla={isBangla}
      />

      <QuizNavigator
        totalQuestions={totalQuestions}
        currentIndex={currentIndex}
        results={results}
        onSelectQuestion={handleJumpToQuestion}
        paletteTitle={t.paletteTitle}
        correctLabel={t.correct}
        answeredLabel={t.answered}
        isBangla={isBangla}
      />

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <QuizQuestionCard
        question={question}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        currentResult={currentResult}
        isAnswered={isAnswered}
        fontSizeClass={fontSizeClass}
        isBangla={isBangla}
        onSelectOption={handleSelectOption}
        onNextQuestion={handleNextQuestion}
        t={t}
      />
    </div>
  );
}
