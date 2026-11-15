"use client";

import React from "react";
import { usePracticeDrill } from "@/hooks/usePracticeDrill";
import { PracticeHeader } from "@/components/practice/PracticeHeader";
import { AlphabetDrillGrid } from "@/components/practice/AlphabetDrillGrid";
import { HarakatDrillTable } from "@/components/practice/HarakatDrillTable";
import { SurahPracticeView } from "@/components/practice/SurahPracticeView";

export default function PracticePage() {
  const {
    isBangla,
    preferences,
    t,
    activeTab,
    selectedCategory,
    selectedSurah,
    activeVerseNum,
    filteredLetters,
    harakatVowels,
    handleSelectTab,
    handleSelectCategory,
    handleSelectSurah,
  } = usePracticeDrill();

  const categories = [
    { id: "all", label: t.filterAll },
    { id: "throat", label: t.filterThroat },
    { id: "tongue", label: t.filterTongue },
    { id: "lips", label: t.filterLips },
    { id: "empty_space", label: t.filterEmpty },
  ];

  const tableHeaders = {
    letter: t.tableLetter,
    fathah: t.tableFathah,
    kasrah: t.tableKasrah,
    dammah: t.tableDammah,
    sukoon: t.tableSukoon,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PracticeHeader
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        drillGroundText={t.drillGround}
        title={t.title}
        subtitle={t.subtitle}
        tabAlphabetText={t.tabAlphabet}
        tabHarakatText={t.tabHarakat}
        tabSurahsText={t.tabSurahs}
      />

      {activeTab === "alphabet" && (
        <AlphabetDrillGrid
          letters={filteredLetters}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          isBangla={isBangla}
          filterLabel={t.filterMakhraj}
          categories={categories}
          listenLabel={t.listen}
        />
      )}

      {activeTab === "harakat" && (
        <HarakatDrillTable
          vowels={harakatVowels}
          isBangla={isBangla}
          listenLabel={t.listen}
          vowelDrillsTitle={t.vowelDrillsTitle}
          tableHeaders={tableHeaders}
        />
      )}

      {activeTab === "surahs" && (
        <SurahPracticeView
          selectedSurah={selectedSurah}
          activeVerseNum={activeVerseNum}
          onSelectSurah={handleSelectSurah}
          isBangla={isBangla}
          showTransliteration={preferences.showTransliteration}
          surahPrefixText={t.surahPrefix}
          meccanText={t.meccan}
          medinanText={t.medinan}
          listenLabel={t.listen}
        />
      )}
    </div>
  );
}
