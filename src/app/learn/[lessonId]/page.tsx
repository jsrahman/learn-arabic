"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Volume2,
  Award,
  Sparkles,
  HelpCircle,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import { LESSONS } from "@/data/lessons";
import { AudioButton } from "@/components/AudioButton";
import { useThemeContext } from "@/components/ThemeWrapper";
import { markLessonCompleted } from "@/lib/storage";
import { triggerConfetti } from "@/components/ConfettiTrigger";
import { audioService } from "@/lib/audioService";
import { cn } from "@/lib/utils";

export default function LessonViewPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = (params?.lessonId as string) || "l1-1";

  const lesson = LESSONS[lessonId] || LESSONS["l1-1"];
  const { preferences, refreshProgress, fontSizeClass } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false);

  const slide = lesson.slides[currentSlideIndex];
  const isLastSlide = currentSlideIndex === lesson.slides.length - 1;
  const progressPercent = Math.round(((currentSlideIndex + 1) / lesson.slides.length) * 100);

  const handleNextSlide = () => {
    setSelectedAnswer(null);
    if (!isLastSlide) {
      setCurrentSlideIndex((prev) => prev + 1);
    } else {
      // Mark lesson completed
      markLessonCompleted(lesson.id, lesson.levelId, 50);
      refreshProgress();
      triggerConfetti();
      setIsCompletedModalOpen(true);
    }
  };

  const handlePrevSlide = () => {
    setSelectedAnswer(null);
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    if (slide.checkQuestion) {
      if (index === slide.checkQuestion.correctIndex) {
        audioService.playSuccessSound();
      } else {
        audioService.playErrorSound();
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header: Back to path & Progress bar */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/path"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand-600 dark:text-sand-400 hover:text-emerald-700 dark:hover:text-emerald-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit to Learning Path</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Level {lesson.levelId} • Lesson {lesson.lessonNumber}
          </span>
        </div>
      </div>

      {/* Progress within Lesson */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-medium text-sand-600 dark:text-sand-400">
          <span>
            Step {currentSlideIndex + 1} of {lesson.slides.length}: {slide.title}
          </span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Slide Card Container */}
      <div className="rounded-3xl p-6 sm:p-10 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-8">
        {/* Slide Title & Badge */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-sand-950 dark:text-sand-50 tracking-tight">
              {isBangla ? slide.titleBangla : slide.title}
            </h1>
            <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-1 font-medium">
              {lesson.title}
            </p>
          </div>

          {slide.ruleBadge && (
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/25">
              {slide.ruleBadge}
            </span>
          )}
        </div>

        {/* Hero Arabic Typography Focus Box */}
        <div className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200/80 dark:border-night-850 shadow-inner text-center">
          <div className="my-2 select-none">
            <span
              className={cn(
                "font-arabic font-normal text-emerald-950 dark:text-gold-100 tracking-wider",
                fontSizeClass
              )}
              dir="rtl"
            >
              {slide.arabic}
            </span>
          </div>

          {preferences.showTransliteration && slide.transliteration && (
            <p className="text-base font-mono font-semibold text-emerald-700 dark:text-emerald-400 mt-3">
              {slide.transliteration}
            </p>
          )}

          {/* Audio Replay Button */}
          <div className="mt-5">
            <AudioButton
              arabicText={slide.audioPrompt || slide.arabic}
              size="lg"
              variant="gold"
              label="Listen Pronunciation"
            />
          </div>
        </div>

        {/* Lesson Explanation */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-sand-50/80 dark:bg-night-950/80 border border-sand-200 dark:border-night-800 space-y-2">
            <p className="text-sm sm:text-base text-sand-800 dark:text-sand-200 leading-relaxed">
              {isBangla ? slide.explanationBangla : slide.explanation}
            </p>

            {slide.makhrajInfo && (
              <div className="pt-2 border-t border-sand-200 dark:border-night-800 text-xs text-sand-600 dark:text-sand-400">
                <span className="font-bold text-emerald-700 dark:text-emerald-400">Makhraj: </span>
                {slide.makhrajInfo}
              </div>
            )}
          </div>

          {/* Form Examples (if any) */}
          {slide.formExamples && slide.formExamples.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sand-600 dark:text-sand-400">
                Word Examples & Shapes:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {slide.formExamples.map((ex, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800 text-center space-y-1"
                  >
                    <span className="text-[10px] text-sand-500 font-medium block">
                      {ex.label}
                    </span>
                    <span className="font-arabic text-2xl font-bold text-emerald-950 dark:text-gold-200 block">
                      {ex.text}
                    </span>
                    <span className="text-[11px] font-mono text-sand-600 dark:text-sand-400 block">
                      {ex.translit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Checkpoint Question (Immediate Reinforcement) */}
        {slide.checkQuestion && (
          <div className="mt-6 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <HelpCircle className="w-4 h-4" />
              <span>Checkpoint Question</span>
            </div>
            <p className="text-sm font-semibold text-sand-900 dark:text-sand-100">
              {slide.checkQuestion.question}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {slide.checkQuestion.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === slide.checkQuestion?.correctIndex;

                let stateClasses = "bg-sand-50 dark:bg-night-950 border-sand-300 dark:border-night-800";
                if (selectedAnswer !== null) {
                  if (isCorrect) {
                    stateClasses = "bg-emerald-500/20 border-emerald-500 text-emerald-900 dark:text-emerald-200";
                  } else if (isSelected) {
                    stateClasses = "bg-rose-500/20 border-rose-500 text-rose-900 dark:text-rose-200";
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleAnswerSelect(idx)}
                    className={cn(
                      "p-3 rounded-xl text-xs font-medium text-left border transition-all active:scale-[0.98]",
                      stateClasses
                    )}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <p className="text-xs text-sand-600 dark:text-sand-400 italic pt-1">
                {slide.checkQuestion.explanation}
              </p>
            )}
          </div>
        )}

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-sand-200 dark:border-night-800">
          <button
            type="button"
            onClick={handlePrevSlide}
            disabled={currentSlideIndex === 0}
            className={cn(
              "px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all",
              currentSlideIndex === 0
                ? "opacity-40 cursor-not-allowed border-sand-300"
                : "bg-sand-50 dark:bg-night-950 text-sand-700 dark:text-sand-200 border-sand-300 dark:border-night-700 hover:bg-sand-200 dark:hover:bg-night-800"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={handleNextSlide}
            className="px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-gold-200 shadow-md transition-all active:scale-95"
          >
            <span>{isLastSlide ? "Complete Lesson" : "Next Step"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Completion Modal */}
      {isCompletedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="max-w-md w-full rounded-3xl p-8 bg-sand-50 dark:bg-night-900 border border-gold-500/40 shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-gold-200 mx-auto flex items-center justify-center shadow-lg animate-bounce-short">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Lesson Completed!
              </span>
              <h2 className="text-2xl font-bold text-sand-950 dark:text-sand-50">
                Alhamdulillah!
              </h2>
              <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
                You have successfully completed <strong>{lesson.title}</strong>. Your reading skills
                are growing stronger every day.
              </p>
            </div>

            {/* XP Awarded */}
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>+50 Knowledge XP Earned</span>
            </div>

            {/* Actions */}
            <div className="space-y-2.5">
              <Link
                href={`/quiz/${lesson.quizId}`}
                className="w-full py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4 text-gold-300" />
                <span>Test Knowledge in Quiz</span>
              </Link>

              <Link
                href="/path"
                className="w-full py-3 px-4 rounded-xl bg-sand-200 hover:bg-sand-300 dark:bg-night-800 dark:hover:bg-night-700 text-sand-800 dark:text-sand-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Return to Learning Path</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
