import React from "react";
import { DownloadCloud, CheckCircle2, Wifi, WifiOff, Loader2 } from "lucide-react";
import { cn } from "@/utils";
import type { OfflineStatus } from "@/lib/offlineManager";

interface OfflineCacheCardProps {
  offlineStatus: OfflineStatus;
  isDownloading: boolean;
  downloadPercent: number;
  downloadSuccess: boolean;
  onDownloadOffline: () => void;
  isBangla: boolean;
}

export const OfflineCacheCard: React.FC<OfflineCacheCardProps> = ({
  offlineStatus,
  isDownloading,
  downloadPercent,
  downloadSuccess,
  onDownloadOffline,
  isBangla,
}) => {
  return (
    <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-800/10 text-teal-700 dark:text-teal-400 flex items-center justify-center">
            <DownloadCloud className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-sand-900 dark:text-sand-100">
              {isBangla ? "অফলাইন স্টোরেজ ও ক্যাশ" : "Offline Storage & Cache"}
            </h2>
            <p className="text-xs text-sand-500">
              {isBangla
                ? "ইন্টারনেট ছাড়া সম্পূর্ণ ওয়েবসাইট ব্যবহারের জন্য অফলাইন ডাটা প্রস্তুত রাখুন"
                : "Preload and verify all 18 levels, lessons, quizzes, and audio on this device"}
            </p>
          </div>
        </div>

        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border",
            !offlineStatus.isOnline
              ? "bg-amber-500/15 border-amber-500/30 text-amber-800 dark:text-amber-300"
              : offlineStatus.isFullyCached || downloadSuccess
              ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
              : "bg-sand-200 dark:bg-night-800 text-sand-600 dark:text-sand-400 border-sand-300"
          )}
        >
          {!offlineStatus.isOnline ? (
            <>
              <WifiOff className="w-3.5 h-3.5 text-amber-600" />
              <span>{isBangla ? "অফলাইন মোড সক্রিয়" : "Offline Mode"}</span>
            </>
          ) : offlineStatus.isFullyCached || downloadSuccess ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isBangla ? "১০০% প্রস্তুত" : "100% Ready"}</span>
            </>
          ) : (
            <>
              <Wifi className="w-3.5 h-3.5 text-sand-500" />
              <span>{isBangla ? "অনলাইন" : "Online"}</span>
            </>
          )}
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850 space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-sand-700 dark:text-sand-300">
            {isBangla ? "ডিভাইস অফলাইন ক্যাশ স্থিতি:" : "Device Offline Storage:"}
          </span>
          <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">
            {offlineStatus.isFullyCached || downloadSuccess ? "100%" : `${offlineStatus.percent}%`}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-300"
            style={{
              width: `${isDownloading ? downloadPercent : offlineStatus.isFullyCached || downloadSuccess ? 100 : offlineStatus.percent}%`,
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-sand-600 dark:text-sand-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBangla ? "১৮টি লেভেল ও ৭২টি পাঠ" : "18 Levels & 72 Lessons"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBangla ? "৬৩০টি যাচাই প্রশ্ন" : "630 Quiz Questions"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBangla ? "৩০টি আরবি হরফের অডিও" : "30 Alphabet Audio Files"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBangla ? "অফলাইন স্ট্রিক ও এক্সপি" : "Offline Streaks & XP"}</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
        {isBangla
          ? "একবার ডাউনলোড বা ব্রাউজ করা হলে, কোনো ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ডাটা) ছাড়াই আপনি সম্পূর্ণ কুরআনপাঠ ব্রাউজ করতে পারবেন এবং পাঠ্যক্রমের প্রতিটি অধ্যায় পড়তে ও শুনতে পারবেন।"
          : "Once cached, QuranPath functions without an active internet connection. All lessons, quizzes, native alphabet audio, and local streaks remain fully accessible."}
      </p>

      <button
        type="button"
        onClick={onDownloadOffline}
        disabled={isDownloading}
        className={cn(
          "w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 min-h-[44px]",
          offlineStatus.isFullyCached || downloadSuccess
            ? "bg-sand-200 dark:bg-night-800 text-sand-800 dark:text-sand-200 hover:bg-sand-300"
            : "bg-gradient-to-r from-emerald-800 to-teal-800 text-gold-200 hover:from-emerald-700 hover:to-teal-700"
        )}
      >
        {isDownloading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-gold-300" />
            <span>
              {isBangla
                ? `অফলাইন ডাটা সেভ হচ্ছে... (${downloadPercent}%)`
                : `Caching to device... (${downloadPercent}%)`}
            </span>
          </>
        ) : offlineStatus.isFullyCached || downloadSuccess ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>
              {isBangla
                ? "সম্পূর্ণ ওয়েবসাইট অফলাইনে প্রস্তুত (পুনরায় ক্যাশ করুন)"
                : "Fully Cached Offline (Update Cache)"}
            </span>
          </>
        ) : (
          <>
            <DownloadCloud className="w-4 h-4 text-gold-300" />
            <span>
              {isBangla
                ? "এক ক্লিকে সম্পূর্ণ সাইট অফলাইনে সেভ করুন"
                : "Download Entire App For 100% Offline Use"}
            </span>
          </>
        )}
      </button>
    </div>
  );
};
