"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { ARABIC_ALPHABET, ArabicLetter } from "@/data/alphabet";
import { SHORT_SURAHS, Surah } from "@/data/surahs";
import { useThemeContext } from "@/components/ThemeWrapper";
import { translations } from "@/lib/translations";

export type PracticeTab = "alphabet" | "harakat" | "surahs";

export interface HarakatVowel {
  name: string;
  nameBn: string;
  symbol: string;
  sound: string;
  example: string;
}

export const HARAKAT_VOWELS: HarakatVowel[] = [
  {
    name: "Fathah ( َ )",
    nameBn: "যবর ( َ )",
    symbol: "َ",
    sound: "a",
    example: "بَ",
  },
  {
    name: "Kasrah ( ِ )",
    nameBn: "যের ( ِ )",
    symbol: "ِ",
    sound: "i",
    example: "بِ",
  },
  {
    name: "Dammah ( ُ )",
    nameBn: "পেশ ( ُ )",
    symbol: "ُ",
    sound: "u",
    example: "بُ",
  },
  {
    name: "Sukoon ( ْ )",
    nameBn: "জযম/সুকূন ( ْ )",
    symbol: "ْ",
    sound: "stop",
    example: "أَبْ",
  },
];

export function usePracticeDrill() {
  const { preferences, refreshProgress, fontSizeClass } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].practice;

  const [activeTab, setActiveTab] = useState<PracticeTab>("alphabet");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSurah, setSelectedSurah] = useState<Surah>(SHORT_SURAHS[0]);
  const [activeVerseNum, setActiveVerseNum] = useState<number | null>(null);

  const filteredLetters = useMemo(() => {
    return selectedCategory === "all"
      ? ARABIC_ALPHABET
      : ARABIC_ALPHABET.filter((l) => l.category === selectedCategory);
  }, [selectedCategory]);

  const handleSelectTab = useCallback((tab: PracticeTab) => {
    setActiveTab(tab);
  }, []);

  const handleSelectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleSelectSurah = useCallback((surah: Surah) => {
    setSelectedSurah(surah);
    setActiveVerseNum(null);
  }, []);

  const handleToggleVerse = useCallback((verseNum: number) => {
    setActiveVerseNum((prev) => (prev === verseNum ? null : verseNum));
  }, []);

  return {
    isBangla,
    preferences,
    fontSizeClass,
    t,
    activeTab,
    selectedCategory,
    selectedSurah,
    activeVerseNum,
    filteredLetters,
    harakatVowels: HARAKAT_VOWELS,
    handleSelectTab,
    handleSelectCategory,
    handleSelectSurah,
    handleToggleVerse,
  };
}
