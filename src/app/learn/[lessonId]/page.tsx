"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useLessonViewer } from "@/hooks/useLessonViewer";
import { LessonHeader } from "@/components/lesson/LessonHeader";
import { LessonSlideCard } from "@/components/lesson/LessonSlideCard";
import { LessonCompletedModal } from "@/components/lesson/LessonCompletedModal";

export default function LessonViewerPage() {
  const params = useParams();
  const lessonId = (params?.lessonId as string) || "l1-1";

  const {
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
  } = useLessonViewer(lessonId);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <LessonHeader
        levelId={lesson.levelId}
        lessonNumber={lesson.lessonNumber}
        currentSlideIndex={currentSlideIndex}
        totalSlides={lesson.slides.length}
        slideTitle={isBangla ? slide.titleBangla || slide.title : slide.title}
        progressPercent={progressPercent}
        isBangla={isBangla}
      />

      <LessonSlideCard
        slide={slide}
        lessonTitle={isBangla ? lesson.titleBangla || lesson.title : lesson.title}
        isBangla={isBangla}
        fontSizeClass={fontSizeClass}
        showTransliteration={preferences.showTransliteration}
        slideAudioUrl={slideAudioUrl}
        matchedLetter={matchedLetter}
        selectedAnswer={selectedAnswer}
        currentSlideIndex={currentSlideIndex}
        isLastSlide={isLastSlide}
        onAnswerSelect={handleAnswerSelect}
        onNextSlide={handleNextSlide}
        onPrevSlide={handlePrevSlide}
      />

      <LessonCompletedModal
        isOpen={isCompletedModalOpen}
        lesson={lesson}
        isBangla={isBangla}
        onClose={handleCloseModal}
      />
    </div>
  );
}
