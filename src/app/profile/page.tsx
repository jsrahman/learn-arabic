"use client";

import React from "react";
import { useProfileSettings } from "@/hooks/useProfileSettings";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { AudioSettingsCard } from "@/components/profile/AudioSettingsCard";
import { TypographySettingsCard } from "@/components/profile/TypographySettingsCard";
import { LanguageSettingsCard } from "@/components/profile/LanguageSettingsCard";
import { ThemeSettingsCard } from "@/components/profile/ThemeSettingsCard";
import { OfflineCacheCard } from "@/components/profile/OfflineCacheCard";
import { AppInstallCard } from "@/components/profile/AppInstallCard";
import { PrivacyNotice } from "@/components/profile/PrivacyNotice";

export default function ProfilePage() {
  const {
    preferences,
    updatePreferences,
    isInstalled,
    promptInstall,
    isBangla,
    t,
    offlineStatus,
    isDownloading,
    downloadPercent,
    downloadSuccess,
    handleDownloadOffline,
  } = useProfileSettings();

  return (
    <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 sm:space-y-8">
      <ProfileHeader isBangla={isBangla} title={t.title} subtitle={t.subtitle} />

      <div className="space-y-6">
        <AudioSettingsCard
          preferences={preferences}
          onUpdatePreferences={updatePreferences}
          isBangla={isBangla}
          audioSectionText={t.audioSection}
          audioSubtitleText={t.audioSubtitle}
          audioSpeedText={t.audioSpeed}
          autoPlayText={t.autoPlay}
          autoPlayDescText={t.autoPlayDesc}
        />

        <TypographySettingsCard
          preferences={preferences}
          onUpdatePreferences={updatePreferences}
          typographySectionText={t.typographySection}
          typographySubtitleText={t.typographySubtitle}
          arabicSizeText={t.arabicSize}
          sizeNormalText={t.sizeNormal}
          sizeLargeText={t.sizeLarge}
          sizeXLargeText={t.sizeXLarge}
          showTranslitText={t.showTranslit}
          showTranslitDescText={t.showTranslitDesc}
        />

        <LanguageSettingsCard
          currentLanguage={preferences.explanationLanguage}
          onSelectLanguage={(lang) => updatePreferences({ explanationLanguage: lang })}
          languageSectionText={t.languageSection}
          languageSubtitleText={t.languageSubtitle}
          langBanglaText={t.langBangla}
          langBanglaDescText={t.langBanglaDesc}
          langEnglishText={t.langEnglish}
          langEnglishDescText={t.langEnglishDesc}
        />

        <ThemeSettingsCard
          currentTheme={preferences.theme}
          onSelectTheme={(theme) => updatePreferences({ theme })}
          themeSectionText={t.themeSection}
          themeSubtitleText={t.themeSubtitle}
          themeLightText={t.themeLight}
          themeDarkText={t.themeDark}
        />

        <OfflineCacheCard
          offlineStatus={offlineStatus}
          isDownloading={isDownloading}
          downloadPercent={downloadPercent}
          downloadSuccess={downloadSuccess}
          onDownloadOffline={handleDownloadOffline}
          isBangla={isBangla}
        />

        <AppInstallCard isInstalled={isInstalled} onPromptInstall={promptInstall} isBangla={isBangla} />

        <PrivacyNotice isBangla={isBangla} />
      </div>
    </div>
  );
}
