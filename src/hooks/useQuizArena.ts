"use client";

import { useState, useEffect, useCallback } from "react";
import { QUIZZES, QuizQuestion } from "@/data/quizzes";
import { LEARNING_LEVELS } from "@/data/levels";
import { useThemeContext } from "@/components/ThemeWrapper";
import { saveQuizScore } from "@/lib/storage";
import { triggerConfetti } from "@/components/ConfettiTrigger";
import { audioService } from "@/lib/audioService";
import type { QuestionResult, Quiz } from "@/types";

export function useQuizArena(quizId: string) {
  const quiz: Quiz = QUIZZES[quizId] || QUIZZES["q1"];
  const levelInfo = LEARNING_LEVELS.find((l) => l.number === quiz.levelId);
  const { preferences, refreshProgress, fontSizeClass } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<number, QuestionResult>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setResults({});
    setQuizFinished(false);
  }, [quizId]);

  const totalQuestions = quiz.questions.length;
  const question: QuizQuestion = quiz.questions[currentIndex];
  const currentResult = results[currentIndex];
  const isAnswered = currentResult !== undefined;

  const answeredCount = Object.keys(results).length;
  const correctCount = Object.values(results).filter((r) => r.isCorrect).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const finalPercent = Math.round((correctCount / totalQuestions) * 100);
  const passed = finalPercent >= quiz.passingScore;

  const handleSelectOption = useCallback(
    (idx: number) => {
      if (isAnswered) return;

      const isCorrect = idx === question.correctIndex;
      setResults((prev) => ({
        ...prev,
        [currentIndex]: {
          selectedIndex: idx,
          isCorrect,
        },
      }));

      if (isCorrect) {
        audioService.playSuccessSound();
      } else {
        audioService.playErrorSound();
      }
    },
    [isAnswered, question?.correctIndex, currentIndex]
  );

  const handleNextQuestion = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const finalScore = Math.round((correctCount / totalQuestions) * 100);
      const isPass = finalScore >= quiz.passingScore;

      saveQuizScore(quiz.id, finalScore, isPass ? 100 : 25);
      refreshProgress();

      if (isPass) {
        triggerConfetti();
      }

      setQuizFinished(true);
    }
  }, [currentIndex, totalQuestions, correctCount, quiz.passingScore, quiz.id, refreshProgress]);

  const handleJumpToQuestion = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleRestartQuiz = useCallback(() => {
    setCurrentIndex(0);
    setResults({});
    setQuizFinished(false);
  }, []);

  return {
    quiz,
    levelInfo,
    isBangla,
    fontSizeClass,
    currentIndex,
    totalQuestions,
    question,
    currentResult,
    results,
    isAnswered,
    answeredCount,
    correctCount,
    progressPercent,
    finalPercent,
    passed,
    quizFinished,
    handleSelectOption,
    handleNextQuestion,
    handleJumpToQuestion,
    handleRestartQuiz,
  };
}
