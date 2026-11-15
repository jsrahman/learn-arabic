"use client";

import { useState, useMemo, useCallback } from "react";
import { LEARNING_LEVELS } from "@/data/levels";
import { ARABIC_ALPHABET, ArabicLetter } from "@/data/alphabet";
import { useThemeContext } from "@/components/ThemeWrapper";
import { usePWA } from "@/components/PWAProvider";
import { translations } from "@/lib/translations";
import { toBanglaNumber } from "@/utils";
import type {
  HomeTierFilter,
  HomeTestimonialItem,
  HomeFaqItem,
  HomeTrustMetric,
} from "@/types";

export type { HomeTierFilter } from "@/types";

export function useHomePlayground() {
  const { progress, preferences } = useThemeContext();
  const { isInstalled, promptInstall } = usePWA();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].home;

  const [selectedLetter, setSelectedLetter] = useState<ArabicLetter>(ARABIC_ALPHABET[1]); // Bā'
  const [selectedTier, setSelectedTier] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<number | null>(1); // Open first FAQ by default

  const trustMetrics: HomeTrustMetric[] = useMemo(
    () => [
      {
        value: isBangla ? toBanglaNumber(18) : "18",
        label: t.trustLevelsLabel,
        desc: t.trustLevelsDesc,
      },
      {
        value: isBangla ? toBanglaNumber(630) : "630",
        label: t.trustQuizzesLabel,
        desc: t.trustQuizzesDesc,
      },
      {
        value: isBangla ? toBanglaNumber(28) : "28",
        label: t.trustLettersLabel,
        desc: t.trustLettersDesc,
      },
      {
        value: "100%",
        label: t.trustFreeLabel,
        desc: t.trustFreeDesc,
      },
    ],
    [t, isBangla]
  );

  const testimonials: HomeTestimonialItem[] = useMemo(
    () => [
      {
        id: "test-1",
        quote: t.testimonial1Quote,
        name: t.testimonial1Author,
        role: t.testimonial1Role,
        rating: 5,
        badge: t.testimonial1Badge,
      },
      {
        id: "test-2",
        quote: t.testimonial2Quote,
        name: t.testimonial2Author,
        role: t.testimonial2Role,
        rating: 5,
        badge: t.testimonial2Badge,
      },
      {
        id: "test-3",
        quote: t.testimonial3Quote,
        name: t.testimonial3Author,
        role: t.testimonial3Role,
        rating: 5,
        badge: t.testimonial3Badge,
      },
    ],
    [t]
  );

  const faqItems: HomeFaqItem[] = useMemo(
    () => [
      { id: 1, question: t.faq1Q, answer: t.faq1A },
      { id: 2, question: t.faq2Q, answer: t.faq2A },
      { id: 3, question: t.faq3Q, answer: t.faq3A },
      { id: 4, question: t.faq4Q, answer: t.faq4A },
      { id: 5, question: t.faq5Q, answer: t.faq5A },
    ],
    [t]
  );

  const tierFilters: HomeTierFilter[] = useMemo(
    () => [
      { id: "all", label: t.tierFilterAll, count: 18 },
      { id: "Foundations", label: t.tierFilter1, count: 4 },
      { id: "Vowels & Orthography", label: t.tierFilter2, count: 4 },
      { id: "Core Tajweed", label: t.tierFilter3, count: 5 },
      { id: "Quranic Mastery", label: t.tierFilter4, count: 5 },
    ],
    [t]
  );

  const filteredLevels = useMemo(() => {
    return selectedTier === "all"
      ? LEARNING_LEVELS
      : LEARNING_LEVELS.filter((l) => l.tier === selectedTier);
  }, [selectedTier]);

  const activeLevel = useMemo(() => {
    return (
      LEARNING_LEVELS.find((lvl) => {
        const isUnlocked = progress.unlockedLevels.includes(lvl.number);
        const completedCount = progress.completedLessons.filter((id) =>
          id.startsWith(`l${lvl.number}-`)
        ).length;
        return isUnlocked && completedCount < lvl.lessonsCount;
      }) || LEARNING_LEVELS[0]
    );
  }, [progress.unlockedLevels, progress.completedLessons]);

  const activeLevelCompletedCount = progress.completedLessons.filter((id) =>
    id.startsWith(`l${activeLevel.number}-`)
  ).length;

  const activeLevelPercent = Math.min(
    100,
    Math.round((activeLevelCompletedCount / activeLevel.lessonsCount) * 100)
  );

  const handleSelectLetter = useCallback((letter: ArabicLetter) => {
    setSelectedLetter(letter);
  }, []);

  const handleSelectTier = useCallback((tierId: string) => {
    setSelectedTier(tierId);
  }, []);

  const handleToggleFaq = useCallback((id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  }, []);

  return {
    progress,
    preferences,
    isBangla,
    t,
    isInstalled,
    promptInstall,
    selectedLetter,
    selectedTier,
    tierFilters,
    filteredLevels,
    activeLevel,
    activeLevelCompletedCount,
    activeLevelPercent,
    trustMetrics,
    testimonials,
    faqItems,
    openFaqId,
    handleSelectLetter,
    handleSelectTier,
    handleToggleFaq,
  };
}
