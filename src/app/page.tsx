"use client";

import React from "react";
import { useHomePlayground } from "@/hooks/useHomePlayground";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";
import { HomeProblemSolution } from "@/components/home/HomeProblemSolution";
import { HomePillars } from "@/components/home/HomePillars";
import { HomeAlphabetPlayground } from "@/components/home/HomeAlphabetPlayground";
import { HomeActiveStageSpotlight } from "@/components/home/HomeActiveStageSpotlight";
import { HomeCurriculumPreview } from "@/components/home/HomeCurriculumPreview";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomePwaShowcase } from "@/components/home/HomePwaShowcase";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";

export default function HomePage() {
  const hp = useHomePlayground();
  const { t } = hp;

  return (
    <div className="w-full bg-arabesque overflow-x-hidden">
      <HomeHero
        t={t}
        selectedLetter={hp.selectedLetter}
        isBangla={hp.isBangla}
      />

      <HomeTrustStrip metrics={hp.trustMetrics} />

      <HomeProblemSolution t={t} ctaText={t.beginLevel1} />

      <HomePillars t={t} />

      <HomeAlphabetPlayground
        t={t}
        selectedLetter={hp.selectedLetter}
        onSelectLetter={hp.handleSelectLetter}
        isBangla={hp.isBangla}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeActiveStageSpotlight
          t={t}
          activeLevel={hp.activeLevel}
          activeLevelCompletedCount={hp.activeLevelCompletedCount}
          activeLevelPercent={hp.activeLevelPercent}
          isBangla={hp.isBangla}
        />
      </div>

      <HomeCurriculumPreview
        t={t}
        tierFilters={hp.tierFilters}
        selectedTier={hp.selectedTier}
        onSelectTier={hp.handleSelectTier}
        filteredLevels={hp.filteredLevels}
        progress={hp.progress}
      />

      <HomeFaq
        faqTag={t.faqTag}
        faqTitle={t.faqTitle}
        faqSubtitle={t.faqSubtitle}
        faqItems={hp.faqItems}
        openFaqId={hp.openFaqId}
        onToggleFaq={hp.handleToggleFaq}
      />

      <HomePwaShowcase
        isInstalled={hp.isInstalled}
        onPromptInstall={hp.promptInstall}
        isBangla={hp.isBangla}
      />

      <HomeFinalCta
        finalCtaTag={t.finalCtaTag}
        finalCtaTitle={t.finalCtaTitle}
        finalCtaSubtitle={t.finalCtaSubtitle}
        finalCtaBtn={t.finalCtaBtn}
        finalCtaSecondary={t.finalCtaSecondary}
        finalCtaHadith={t.finalCtaHadith}
        finalCtaHadithSource={t.finalCtaHadithSource}
        finalCtaGuarantees={t.finalCtaGuarantees}
      />
    </div>
  );
}
