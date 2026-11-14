"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Award,
  Volume2,
  HelpCircle,
} from "lucide-react";
import { QUIZZES, QuizQuestion } from "@/data/quizzes";
import { AudioButton } from "@/components/AudioButton";
import { useThemeContext } from "@/components/ThemeWrapper";
import { saveQuizScore } from "@/lib/storage";
import { triggerConfetti } from "@/components/ConfettiTrigger";
import { audioService } from "@/lib/audioService";
import { cn } from "@/lib/utils";

export default function QuizArenaPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = (params?.quizId as string) || "q1";
  const quiz = QUIZZES[quizId] || QUIZZES["q1"];

  const { preferences, refreshProgress, fontSizeClass } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question: QuizQuestion = quiz.questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / quiz.questions.length) * 100);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    setSelectedAnswer(idx);
    setIsAnswered(true);

    const isCorrect = idx === question.correctIndex;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      audioService.playSuccessSound();
    } else {
      audioService.playErrorSound();
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Finish quiz
      const finalScorePercent = Math.round(((correctCount + (selectedAnswer === question.correctIndex ? 0 : 0)) / quiz.questions.length) * 100);
      const passed = finalScorePercent >= quiz.passingScore;

      saveQuizScore(quiz.id, finalScorePercent, passed ? 100 : 25);
      refreshProgress();

      if (passed) {
        triggerConfetti();
      }

      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setQuizFinished(false);
  };

  // Final Results Screen
  if (quizFinished) {
    const finalPercent = Math.round((correctCount / quiz.questions.length) * 100);
    const passed = finalPercent >= quiz.passingScore;

    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="rounded-3xl p-8 sm:p-10 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
          <div
            className={cn(
              "w-24 h-24 rounded-full mx-auto flex items-center justify-center shadow-lg animate-bounce-short",
              passed
                ? "bg-gradient-to-tr from-emerald-600 to-teal-500 text-gold-100"
                : "bg-amber-500/20 text-amber-600 border border-amber-500/30"
            )}
          >
            {passed ? <Award className="w-12 h-12" /> : <RotateCcw className="w-10 h-10" />}
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Quiz Completed
            </span>
            <h1 className="text-3xl font-extrabold text-sand-950 dark:text-sand-50">
              {passed ? "Excellent Achievement!" : "Keep Practicing!"}
            </h1>
            <p className="text-sm text-sand-600 dark:text-sand-400">
              {passed
                ? "Masha'Allah! You demonstrated great accuracy in this assessment."
                : "Review the lesson materials and try again to achieve mastery."}
            </p>
          </div>

          {/* Score Pill */}
          <div className="p-4 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800 flex items-center justify-around">
            <div>
              <div className="text-xs text-sand-500">Your Score</div>
              <div className="text-2xl font-bold text-emerald-950 dark:text-sand-50">
                {finalPercent}%
              </div>
            </div>
            <div className="h-8 w-px bg-sand-300 dark:bg-night-800" />
            <div>
              <div className="text-xs text-sand-500">Correct</div>
              <div className="text-2xl font-bold text-emerald-600">
                {correctCount} / {quiz.questions.length}
              </div>
            </div>
            <div className="h-8 w-px bg-sand-300 dark:bg-night-800" />
            <div>
              <div className="text-xs text-sand-500">Status</div>
              <div
                className={cn(
                  "text-sm font-bold mt-1",
                  passed ? "text-emerald-600" : "text-amber-600"
                )}
              >
                {passed ? "PASSED" : "NEEDS PRACTICE"}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={handleRestartQuiz}
              className="w-full py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake This Quiz</span>
            </button>

            <Link
              href="/path"
              className="w-full py-3 px-4 rounded-xl bg-sand-200 hover:bg-sand-300 dark:bg-night-800 dark:hover:bg-night-700 text-sand-800 dark:text-sand-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Return to Learning Path</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/quiz"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand-600 dark:text-sand-400 hover:text-emerald-700 dark:hover:text-emerald-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Quiz</span>
        </Link>

        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
          Question {currentIndex + 1} of {quiz.questions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Question Card */}
      <div className="rounded-3xl p-6 sm:p-10 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
        {/* Question Title */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-sand-950 dark:text-sand-50 tracking-tight">
            {isBangla ? question.questionBangla : question.question}
          </h2>
        </div>

        {/* Optional Arabic Display Box or Audio Trigger */}
        {(question.promptText || question.audioPrompt) && (
          <div className="p-8 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200/80 dark:border-night-850 shadow-inner flex flex-col items-center justify-center gap-4 text-center">
            {question.promptText && (
              <span
                className={cn(
                  "font-arabic font-normal text-emerald-950 dark:text-gold-100 select-none",
                  fontSizeClass
                )}
                dir="rtl"
              >
                {question.promptText}
              </span>
            )}

            {(question.audioPrompt || question.audioUrl) && (
              <AudioButton
                audioUrl={question.audioUrl}
                arabicText={question.audioPrompt}
                size="lg"
                variant="gold"
                label="Click to Listen"
              />
            )}
          </div>
        )}

        {/* Answer Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {question.options.map((opt, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = idx === question.correctIndex;

            let buttonClass =
              "bg-sand-50 dark:bg-night-950 border-sand-300 dark:border-night-800 text-sand-800 dark:text-sand-200 hover:border-emerald-600/40";

            if (isAnswered) {
              if (isCorrect) {
                buttonClass =
                  "bg-emerald-500/20 border-emerald-500 text-emerald-950 dark:text-emerald-200 ring-2 ring-emerald-500";
              } else if (isSelected) {
                buttonClass =
                  "bg-rose-500/20 border-rose-500 text-rose-950 dark:text-rose-200 ring-2 ring-rose-500";
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={cn(
                  "p-4 rounded-2xl text-sm font-semibold text-left border flex items-center justify-between gap-3 transition-all duration-150 active:scale-[0.98]",
                  buttonClass
                )}
              >
                <span>{opt}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback / Explanation Box */}
        {isAnswered && (
          <div className="p-4 rounded-2xl bg-sand-50/90 dark:bg-night-950/90 border border-sand-200 dark:border-night-800 space-y-2 animate-fade-in">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Explanation</span>
            </div>
            <p className="text-xs sm:text-sm text-sand-700 dark:text-sand-300 leading-relaxed">
              {isBangla ? question.explanationBangla : question.explanation}
            </p>
          </div>
        )}

        {/* Footer Next Button */}
        {isAnswered && (
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={handleNextQuestion}
              className="px-7 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <span>{currentIndex < quiz.questions.length - 1 ? "Next Question" : "View Results"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

