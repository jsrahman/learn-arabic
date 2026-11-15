"use client";

import React from "react";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import { AudioButton } from "@/components/AudioButton";
import { RuleBadge } from "@/components/RuleBadge";
import { cn } from "@/utils";
import type { LessonSlide, ArabicLetter } from "@/types";

interface LessonSlideCardProps {
  slide: LessonSlide;
  lessonTitle: string;
  isBangla: boolean;
  fontSizeClass: string;
  showTransliteration: boolean;
  slideAudioUrl?: string;
  matchedLetter?: ArabicLetter;
  selectedAnswer: number | null;
  currentSlideIndex: number;
  isLastSlide: boolean;
  onAnswerSelect: (index: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

export const LessonSlideCard: React.FC<LessonSlideCardProps> = ({
  slide,
  lessonTitle,
  isBangla,
  fontSizeClass,
  showTransliteration,
  slideAudioUrl,
  matchedLetter,
  selectedAnswer,
  currentSlideIndex,
  isLastSlide,
  onAnswerSelect,
  onNextSlide,
  onPrevSlide,
}) => {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6 sm:space-y-8">
      {/* Slide Title & Badge */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-sand-950 dark:text-sand-50 tracking-tight">
            {isBangla ? slide.titleBangla || slide.title : slide.title}
          </h1>
          <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 mt-1 font-medium">
            {lessonTitle}
          </p>
        </div>

        <RuleBadge badge={slide.ruleBadge} isBangla={isBangla} />
      </div>

      {/* Hero Arabic Typography Focus Box */}
      <div className="flex flex-col items-center justify-center p-5 sm:p-8 md:p-12 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200/80 dark:border-night-850 shadow-inner text-center">
        <div className="my-2 select-none">
          <span
            className={cn(
              "font-arabic font-normal text-emerald-950 dark:text-gold-100",
              fontSizeClass
            )}
            dir="rtl"
          >
            {slide.arabic}
          </span>
        </div>

        {showTransliteration && slide.transliteration && (
          <p className="text-sm sm:text-base font-mono font-semibold text-emerald-700 dark:text-emerald-400 mt-2 sm:mt-3">
            {slide.transliteration}
          </p>
        )}

        {/* Audio Replay Button */}
        <div className="mt-4 sm:mt-5">
          <AudioButton
            audioUrl={slideAudioUrl}
            arabicText={slide.audioPrompt || slide.arabic}
            size="lg"
            variant="gold"
            label={isBangla ? "উচ্চারণ শুনুন" : "Listen Pronunciation"}
          />
        </div>
      </div>

      {/* Lesson Explanation */}
      <div className="space-y-4">
        <div className="p-3.5 sm:p-4 rounded-xl bg-sand-50/80 dark:bg-night-950/80 border border-sand-200 dark:border-night-800 space-y-2">
          <p className="text-xs sm:text-base text-sand-800 dark:text-sand-200 leading-relaxed">
            {isBangla ? slide.explanationBangla || slide.explanation : slide.explanation}
          </p>

          {(slide.makhrajInfo || (isBangla && matchedLetter?.makhrajBangla)) && (
            <div className="pt-2 border-t border-sand-200 dark:border-night-800 text-xs text-sand-600 dark:text-sand-400">
              <span className="font-bold text-emerald-700 dark:text-emerald-400">
                {isBangla ? "মাখরাজ: " : "Makhraj: "}
              </span>
              {isBangla ? matchedLetter?.makhrajBangla || slide.makhrajInfo : slide.makhrajInfo}
            </div>
          )}
        </div>

        {/* Form Examples (if any) */}
        {slide.formExamples && slide.formExamples.length > 0 && (
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sand-600 dark:text-sand-400">
              {isBangla ? "শব্দে বিভিন্ন রূপ ও উদাহরণ:" : "Word Examples & Shapes:"}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" dir="rtl">
              {slide.formExamples.map((ex, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800 text-center space-y-1"
                >
                  <span className="text-[10px] text-sand-500 font-medium block">
                    {isBangla
                      ? ex.label === "Initial"
                        ? "শুরুর রূপ"
                        : ex.label === "Medial"
                        ? "মাঝের রূপ"
                        : ex.label === "Final"
                        ? "শেষের রূপ"
                        : ex.label === "Isolated"
                        ? "একক রূপ"
                        : ex.label
                      : ex.label}
                  </span>
                  <span className="font-arabic text-2xl font-bold text-emerald-950 dark:text-gold-200 block" dir="rtl">
                    {ex.text}
                  </span>
                  <span className="text-[11px] font-mono text-sand-600 dark:text-sand-400 block" dir="ltr">
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
            <span>{isBangla ? "যাচাইমূলক প্রশ্ন" : "Checkpoint Question"}</span>
          </div>
          <p className="text-sm font-semibold text-sand-900 dark:text-sand-100">
            {isBangla && slide.checkQuestion.questionBangla
              ? slide.checkQuestion.questionBangla
              : slide.checkQuestion.question}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {(isBangla && slide.checkQuestion.optionsBangla
              ? slide.checkQuestion.optionsBangla
              : slide.checkQuestion.options
            ).map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === slide.checkQuestion?.correctIndex;

              let stateClasses =
                "bg-sand-50 dark:bg-night-950 border-sand-300 dark:border-night-700 text-sand-900 dark:text-sand-100 hover:border-emerald-500/60 dark:hover:border-emerald-500/60";
              if (selectedAnswer !== null) {
                if (isCorrect) {
                  stateClasses =
                    "bg-emerald-500/20 border-emerald-600 dark:border-emerald-500 text-emerald-950 dark:text-emerald-100 font-semibold cursor-not-allowed";
                } else if (isSelected) {
                  stateClasses =
                    "bg-rose-500/20 border-rose-600 dark:border-rose-500 text-rose-950 dark:text-rose-100 font-semibold cursor-not-allowed";
                } else {
                  stateClasses =
                    "bg-sand-50/50 dark:bg-night-950/50 border-sand-200 dark:border-night-800 text-sand-500 dark:text-sand-400 opacity-60 cursor-not-allowed";
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onAnswerSelect(idx)}
                  disabled={selectedAnswer !== null}
                  aria-disabled={selectedAnswer !== null ? "true" : undefined}
                  className={cn(
                    "px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-left border transition-all min-h-[44px] flex items-center",
                    selectedAnswer === null ? "active:scale-[0.98]" : "cursor-not-allowed",
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
              {isBangla && slide.checkQuestion.explanationBangla
                ? slide.checkQuestion.explanationBangla
                : slide.checkQuestion.explanation}
            </p>
          )}
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-sand-200 dark:border-night-800 gap-2">
        <button
          type="button"
          onClick={onPrevSlide}
          disabled={currentSlideIndex === 0}
          className={cn(
            "px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 sm:gap-2 border transition-all min-h-[44px]",
            currentSlideIndex === 0
              ? "opacity-40 cursor-not-allowed border-sand-300"
              : "bg-sand-50 dark:bg-night-950 text-sand-700 dark:text-sand-200 border-sand-300 dark:border-night-700 hover:bg-sand-200 dark:hover:bg-night-800"
          )}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isBangla ? "পূর্ববর্তী" : "Previous"}</span>
        </button>

        <button
          type="button"
          onClick={onNextSlide}
          className="px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 sm:gap-2 bg-emerald-800 hover:bg-emerald-700 text-gold-200 shadow-md transition-all active:scale-95 min-h-[44px]"
        >
          <span>
            {isLastSlide
              ? isBangla ? "পাঠ সম্পন্ন করুন" : "Complete Lesson"
              : isBangla ? "পরবর্তী ধাপ" : "Next Step"}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
