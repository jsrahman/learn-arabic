"use client";

import { useState, useEffect, useCallback } from "react";
import {
  checkOfflineStatus,
  downloadAllForOffline,
  initAutoOfflineCaching,
  ALL_OFFLINE_TARGETS,
  OfflineStatus,
} from "@/lib/offlineManager";
import { useThemeContext } from "@/components/ThemeWrapper";

export function useOfflineStatus() {
  const { preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const [status, setStatus] = useState<OfflineStatus>({
    isOnline: true,
    isFullyCached: false,
    cachedCount: 0,
    totalCount: ALL_OFFLINE_TARGETS.length,
    percent: 0,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadPercent, setDownloadPercent] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showAutoToast, setShowAutoToast] = useState(false);

  useEffect(() => {
    const update = () => {
      checkOfflineStatus().then(setStatus);
    };

    update();

    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    window.addEventListener("quranpath:offline-updated", update);

    const timer = setTimeout(update, 3000);

    const cleanupAutoCache = initAutoOfflineCaching(() => {
      update();
      setShowAutoToast(true);
      setTimeout(() => setShowAutoToast(false), 8000);
    });

    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
      window.removeEventListener("quranpath:offline-updated", update);
      clearTimeout(timer);
      cleanupAutoCache();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const handleStartDownload = useCallback(async () => {
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
      setStatus(updated);
    }
  }, []);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleDismissToast = useCallback(() => setShowAutoToast(false), []);

  return {
    isBangla,
    status,
    isOpen,
    isDownloading,
    downloadPercent,
    downloadSuccess,
    showAutoToast,
    handleStartDownload,
    handleOpen,
    handleClose,
    handleDismissToast,
  };
}
