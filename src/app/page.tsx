"use client";

import React from "react";
import { useHomePlayground } from "@/hooks/useHomePlayground";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeAlphabetPlayground } from "@/components/home/HomeAlphabetPlayground";
import { HomeActiveStageSpotlight } from "@/components/home/HomeActiveStageSpotlight";
import { HomeCurriculumPreview } from "@/components/home/HomeCurriculumPreview";
import { HomePillars } from "@/components/home/HomePillars";
import { HomePwaShowcase } from "@/components/home/HomePwaShowcase";

export default function HomePage() {
  const {
    progress,
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
    handleSelectLetter,
    handleSelectTier,
  } = useHomePlayground();

  return (
    <div className="w-full bg-arabesque">
      <HomeHero
        spiritualRibbon={t.spiritualRibbon}
        headlineStart={t.headlineStart}
        headlineHighlight={t.headlineHighlight}
        headlineEnd={t.headlineEnd}
        subtitle={t.subtitle}
        ctaStart={t.ctaStart}
        ctaPractice={t.ctaPractice}
        highlight1={t.highlight1}
        highlight2={t.highlight2}
        highlight3={t.highlight3}
      />

      <HomeAlphabetPlayground
        selectedLetter={selectedLetter}
        onSelectLetter={handleSelectLetter}
        isBangla={isBangla}
        playgroundTag={t.playgroundTag}
        playgroundTitle={t.playgroundTitle}
        playgroundSubtitle={t.playgroundSubtitle}
        openFullGridText={t.openFullGrid}
        soundLabel={t.sound}
        makhrajLabel={t.makhrajLabel}
        formsHeader={t.formsHeader}
        formBeginning={t.formBeginning}
        formMiddle={t.formMiddle}
        formEnding={t.formEnding}
        formIsolated={t.formIsolated}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeActiveStageSpotlight
          activeLevel={activeLevel}
          activeLevelCompletedCount={activeLevelCompletedCount}
          activeLevelPercent={activeLevelPercent}
          isBangla={isBangla}
          activeStageText={t.activeStage}
          levelOfText={t.levelOf}
          stageGoalText={t.stageGoal}
          resumeLevelText={t.resumeLevel}
          startLevelText={t.startLevel}
          levelMasteryGaugeText={t.levelMasteryGauge}
          masteredText={t.mastered}
          lessonsText={t.lessons}
          estimatedText={t.estimated}
        />
      </div>

      <HomeCurriculumPreview
        curriculumArchText={t.curriculumArch}
        curriculumTitleText={t.curriculumTitle}
        curriculumSubtitleText={t.curriculumSubtitle}
        tierFilters={tierFilters}
        selectedTier={selectedTier}
        onSelectTier={handleSelectTier}
        filteredLevels={filteredLevels}
        progress={progress}
        exploreRoadmapText={t.exploreRoadmap}
      />

      <HomePillars
        whyUsText={t.whyUs}
        pillarsTitleText={t.pillarsTitle}
        pillarsSubtitleText={t.pillarsSubtitle}
        pillar1TitleText={t.pillar1Title}
        pillar1DescText={t.pillar1Desc}
        pillar2TitleText={t.pillar2Title}
        pillar2DescText={t.pillar2Desc}
        pillar3TitleText={t.pillar3Title}
        pillar3DescText={t.pillar3Desc}
        beginLevel1Text={t.beginLevel1}
      />

      <HomePwaShowcase
        isInstalled={isInstalled}
        onPromptInstall={promptInstall}
        isBangla={isBangla}
      />
    </div>
  );
}
