"use client";

import { useState, useEffect, useCallback } from "react";
import { useThemeContext } from "@/components/ThemeWrapper";
import { usePWA } from "@/components/PWAProvider";
import { translations } from "@/lib/translations";
import {
  checkOfflineStatus,
  downloadAllForOffline,
  OfflineStatus,
} from "@/lib/offlineManager";

export function useProfileSettings() {
  const { preferences, updatePreferences, toggleTheme } = useThemeContext();
  const { isInstalled, promptInstall } = usePWA();
  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"].profile;

  const [offlineStatus, setOfflineStatus] = useState<OfflineStatus>({
    isOnline: true,
    isFullyCached: false,
    cachedCount: 0,
    totalCount: 44,
    percent: 0,
  });
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadPercent, setDownloadPercent] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const update = () => {
      checkOfflineStatus().then(setOfflineStatus);
    };
    update();

    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    window.addEventListener("quranpath:offline-updated", update);

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
      window.removeEventListener("quranpath:offline-updated", update);
    };
  }, []);

  const handleDownloadOffline = useCallback(async () => {
    setIsDownloading(true);
    setDownloadPercent(0);
    setDownloadSuccess(false);

    const res = await downloadAllForOffline((pct) => {
      setDownloadPercent(pct);
    });

    setIsDownloading(false);
    if (res.success) {
      setDownloadSuccess(true);
      const updated = await checkOfflineStatus();
      setOfflineStatus(updated);
    }
  }, []);

  return {
    preferences,
    updatePreferences,
    toggleTheme,
    isInstalled,
    promptInstall,
    isBangla,
    t,
    offlineStatus,
    isDownloading,
    downloadPercent,
    downloadSuccess,
    handleDownloadOffline,
  };
}
