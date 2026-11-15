"use client";

import { useState, useEffect, useCallback } from "react";
import { LESSONS } from "@/data/lessons";
import { ARABIC_ALPHABET } from "@/data/alphabet";
import { useThemeContext } from "@/components/ThemeWrapper";
import { markLessonCompleted, recordDailyActivity } from "@/lib/storage";
import { triggerConfetti } from "@/components/ConfettiTrigger";
import { audioService } from "@/lib/audioService";
import type { Lesson, LessonSlide } from "@/types";

export function useLessonViewer(lessonId: string) {
  const lesson: Lesson = LESSONS[lessonId] || LESSONS["l1-1"];
  const { preferences, refreshProgress, fontSizeClass } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false);

  useEffect(() => {
    recordDailyActivity(1, 5);
    refreshProgress();
  }, [lessonId, refreshProgress]);

  const slide: LessonSlide = lesson.slides[currentSlideIndex];
  const isLastSlide = currentSlideIndex === lesson.slides.length - 1;
  const progressPercent = Math.round(((currentSlideIndex + 1) / lesson.slides.length) * 100);

  const matchedLetter = ARABIC_ALPHABET.find(
    (l) => l.arabic === slide.arabic || l.name.toLowerCase() === slide.arabic.toLowerCase()
  );
  const slideAudioUrl = slide.audioUrl || matchedLetter?.audioUrl;

  const handleNextSlide = useCallback(() => {
    setSelectedAnswer(null);
    if (!isLastSlide) {
      setCurrentSlideIndex((prev) => prev + 1);
    } else {
      markLessonCompleted(lesson.id, lesson.levelId, 50);
      refreshProgress();
      triggerConfetti();
      setIsCompletedModalOpen(true);
    }
  }, [isLastSlide, lesson.id, lesson.levelId, refreshProgress]);

  const handlePrevSlide = useCallback(() => {
    setSelectedAnswer(null);
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const handleAnswerSelect = useCallback(
    (index: number) => {
      if (selectedAnswer !== null) return;
      setSelectedAnswer(index);
      if (slide.checkQuestion) {
        if (index === slide.checkQuestion.correctIndex) {
          audioService.playSuccessSound();
        } else {
          audioService.playErrorSound();
        }
      }
    },
    [selectedAnswer, slide.checkQuestion]
  );

  const handleCloseModal = useCallback(() => {
    setIsCompletedModalOpen(false);
  }, []);

  return {
    lesson,
    slide,
    isBangla,
    fontSizeClass,
    preferences,
    currentSlideIndex,
    isLastSlide,
    progressPercent,
    matchedLetter,
    slideAudioUrl,
    selectedAnswer,
    isCompletedModalOpen,
    handleNextSlide,
    handlePrevSlide,
    handleAnswerSelect,
    handleCloseModal,
  };
}
