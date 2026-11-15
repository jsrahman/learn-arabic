import React from "react";
import { CheckCircle2, XCircle, Sparkles, ArrowRight } from "lucide-react";
import { cn, getOptionLabel } from "@/utils";
import { AudioButton } from "@/components/AudioButton";
import type { QuizQuestion, QuestionResult } from "@/types";

interface QuizQuestionCardProps {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  currentResult?: QuestionResult;
  isAnswered: boolean;
  fontSizeClass: string;
  isBangla?: boolean;
  onSelectOption: (idx: number) => void;
  onNextQuestion: () => void;
  t: {
    of: string;
    answered: string;
    clickToListen: string;
    explanationRule: string;
    nextQuestion: string;
    completeViewScore: string;
  };
}

export const QuizQuestionCard: React.FC<QuizQuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  currentResult,
  isAnswered,
  fontSizeClass,
  isBangla = true,
  onSelectOption,
  onNextQuestion,
  t,
}) => {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-5 sm:space-y-6">
      {/* Question Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Q{currentIndex + 1} {t.of} {totalQuestions}
          </span>
        </div>
        <h2 className="text-lg sm:text-2xl font-bold text-sand-950 dark:text-sand-50 tracking-tight leading-snug">
          {isBangla ? question.questionBangla || question.question : question.question}
        </h2>
      </div>

      {/* Optional Arabic Display Box or Audio Trigger */}
      {(question.promptText || question.audioPrompt) && (
        <div className="p-4 sm:p-8 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200/80 dark:border-night-850 shadow-inner flex flex-col items-center justify-center gap-3 sm:gap-4 text-center">
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
              label={t.clickToListen}
            />
          )}
        </div>
      )}

      {/* Answer Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
        {question.options.map((opt, idx) => {
          const isSelected = currentResult?.selectedIndex === idx;
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
              onClick={() => onSelectOption(idx)}
              disabled={isAnswered}
              className={cn(
                "p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-left border flex items-center justify-between gap-2.5 sm:gap-3 transition-all duration-150 active:scale-[0.98] min-h-[48px]",
                buttonClass
              )}
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-6 h-6 rounded-lg bg-sand-200 dark:bg-night-800 text-sand-700 dark:text-sand-300 text-xs flex items-center justify-center shrink-0 font-bold font-mono">
                  {getOptionLabel(idx, isBangla)}
                </span>
                <span dir="auto" className="leading-snug">
                  {opt}
                </span>
              </div>
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
        <div className="p-3.5 sm:p-4 rounded-2xl bg-sand-50/90 dark:bg-night-950/90 border border-sand-200 dark:border-night-800 space-y-1.5 sm:space-y-2 animate-fade-in">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{t.explanationRule}</span>
          </div>
          <p className="text-xs sm:text-sm text-sand-700 dark:text-sand-300 leading-relaxed">
            {isBangla ? question.explanationBangla || question.explanation : question.explanation}
          </p>
        </div>
      )}

      {/* Footer Next Button */}
      {isAnswered && (
        <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-sand-500 order-2 sm:order-1">
            {currentIndex + 1} {t.of} {totalQuestions} {t.answered}
          </span>
          <button
            type="button"
            onClick={onNextQuestion}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 order-1 sm:order-2 min-h-[44px]"
          >
            <span>{currentIndex < totalQuestions - 1 ? t.nextQuestion : t.completeViewScore}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
