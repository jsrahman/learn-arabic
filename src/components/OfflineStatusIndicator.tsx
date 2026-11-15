"use client";

import React from "react";
import { Wifi, WifiOff, DownloadCloud, CheckCircle2 } from "lucide-react";
import { useOfflineStatus } from "@/hooks/useOfflineStatus";
import { OfflineModal } from "@/components/offline/OfflineModal";
import { OfflineToast } from "@/components/offline/OfflineToast";
import { cn } from "@/utils";

export function OfflineStatusIndicator() {
  const {
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
  } = useOfflineStatus();

  return (
    <>
      {/* Header Pill / Trigger Button */}
      <button
        type="button"
        onClick={handleOpen}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 active:scale-95 shadow-sm min-h-[36px]",
          !status.isOnline
            ? "bg-amber-500/15 border-amber-500/30 text-amber-800 dark:text-amber-300"
            : status.isFullyCached || downloadSuccess
            ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20"
            : "bg-sand-200/70 dark:bg-night-800/80 text-sand-700 dark:text-sand-300 border-sand-300 dark:border-night-700 hover:border-emerald-500/40"
        )}
        title={
          !status.isOnline
            ? isBangla
              ? "অফলাইন মোড: সমস্ত পাঠ ডিভাইসে উপলব্ধ"
              : "Offline Mode: All lessons available on device"
            : status.isFullyCached || downloadSuccess
            ? isBangla
              ? "১০০% অফলাইনে প্রস্তুত (ইন্টারনেট ছাড়া চলবে)"
              : "100% Offline Ready"
            : isBangla
            ? "অফলাইন ডাউনলোড স্থিতি দেখতে ক্লিক করুন"
            : "Click to check offline readiness"
        }
      >
        {!status.isOnline ? (
          <>
            <WifiOff className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 animate-pulse" />
            <span className="hidden sm:inline font-bold">
              {isBangla ? "অফলাইন মোড" : "Offline Mode"}
            </span>
            <span className="sm:hidden font-bold">
              {isBangla ? "অফলাইন" : "Offline"}
            </span>
          </>
        ) : status.isFullyCached || downloadSuccess ? (
          <>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline font-bold">
              {isBangla ? "অফলাইনে প্রস্তুত" : "Offline Ready"}
            </span>
            <span className="sm:hidden font-bold">100%</span>
          </>
        ) : (
          <>
            <DownloadCloud className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline">
              {isBangla ? `অফলাইন ${status.percent}%` : `Offline ${status.percent}%`}
            </span>
            <span className="sm:hidden">{status.percent}%</span>
          </>
        )}
      </button>

      {/* Offline Management Modal */}
      <OfflineModal
        isOpen={isOpen}
        onClose={handleClose}
        status={status}
        downloadSuccess={downloadSuccess}
        isDownloading={isDownloading}
        downloadPercent={downloadPercent}
        onStartDownload={handleStartDownload}
        isBangla={isBangla}
      />

      {/* Automatic Background Cache Toast */}
      <OfflineToast
        show={showAutoToast}
        onDismiss={handleDismissToast}
        isBangla={isBangla}
      />
    </>
  );
}
