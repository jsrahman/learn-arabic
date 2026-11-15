import React from "react";
import { DownloadCloud, CheckCircle2, X, Loader2, ShieldCheck } from "lucide-react";
import { cn } from "@/utils";
import type { OfflineStatus } from "@/lib/offlineManager";

interface OfflineModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: OfflineStatus;
  downloadSuccess: boolean;
  isDownloading: boolean;
  downloadPercent: number;
  onStartDownload: () => void;
  isBangla: boolean;
}

export const OfflineModal: React.FC<OfflineModalProps> = ({
  isOpen,
  onClose,
  status,
  downloadSuccess,
  isDownloading,
  downloadPercent,
  onStartDownload,
  isBangla,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="max-w-md w-full rounded-3xl p-6 sm:p-8 bg-sand-50 dark:bg-night-900 border border-sand-300 dark:border-night-700 shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close offline modal"
          className="absolute top-4 right-4 p-2 text-sand-500 hover:text-sand-900 dark:hover:text-sand-100 rounded-xl hover:bg-sand-100 dark:hover:bg-night-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-md shrink-0",
              status.isFullyCached || downloadSuccess
                ? "bg-gradient-to-br from-emerald-800 to-teal-900 text-gold-300"
                : "bg-sand-200 dark:bg-night-800 text-emerald-600"
            )}
          >
            {status.isFullyCached || downloadSuccess ? (
              <CheckCircle2 className="w-6 h-6 text-gold-300" />
            ) : (
              <DownloadCloud className="w-6 h-6 text-emerald-600" />
            )}
          </div>
          <div>
            <h3 className="text-base font-bold text-sand-950 dark:text-sand-50">
              {isBangla
                ? "১০০% অফলাইন অ্যাক্সেস ম্যানেজার"
                : "100% Offline Access Manager"}
            </h3>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              {status.isFullyCached || downloadSuccess
                ? isBangla
                  ? "ইন্টারনেট ছাড়াও সবকিছু চলবে"
                  : "Ready to use without any internet connection"
                : isBangla
                ? "এক ক্লিকে সমস্ত পাঠ সংরক্ষণ করুন"
                : "Save all lessons & audio to this device"}
            </p>
          </div>
        </div>

        {/* Status Breakdown Box */}
        <div className="p-4 rounded-2xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-sand-700 dark:text-sand-300">
              {isBangla ? "ডিভাইস স্টোরেজ স্থিতি:" : "Device Offline Storage:"}
            </span>
            <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">
              {status.isFullyCached || downloadSuccess ? "100%" : `${status.percent}%`}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 rounded-full bg-sand-200 dark:bg-night-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-300"
              style={{
                width: `${isDownloading ? downloadPercent : status.isFullyCached ? 100 : status.percent}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-sand-600 dark:text-sand-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isBangla ? "১৮টি লেভেল ও ৭২টি পাঠ" : "18 Levels & 72 Lessons"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isBangla ? "৬৩০টি কুইজ প্রশ্ন" : "630 Quiz Questions"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isBangla ? "৩০টি আরবি হরফের অডিও" : "30 Alphabet Audio Files"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isBangla ? "অফলাইন প্রোগ্রেস ও স্ট্রিক" : "Offline Streaks & XP"}</span>
            </div>
          </div>
        </div>

        {/* Explanation Note */}
        <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
          {isBangla
            ? "একবার ডাউনলোড সম্পন্ন হলে, ওয়াইফাই বা মোবাইল ডাটা সম্পূর্ণ বন্ধ থাকলেও আপনি অ্যাপ খুলে যেকোনো পাঠ শিখতে পারবেন, কুইজ দিতে পারবেন এবং সঠিক উচ্চারণ শুনতে পারবেন।"
            : "Once cached, you can turn off Wi-Fi or cellular data completely. You will still be able to practice lessons, take quizzes, hear pronunciations, and track your streaks."}
        </p>

        {/* Download Button */}
        <div className="space-y-2 pt-1">
          <button
            type="button"
            onClick={onStartDownload}
            disabled={isDownloading}
            className={cn(
              "w-full min-h-[44px] py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95",
              status.isFullyCached || downloadSuccess
                ? "bg-sand-200 dark:bg-night-800 text-sand-800 dark:text-sand-200 hover:bg-sand-300"
                : "bg-gradient-to-r from-emerald-800 to-teal-800 text-gold-200 hover:from-emerald-700 hover:to-teal-700"
            )}
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-gold-300" />
                <span>
                  {isBangla
                    ? `ডাউনলোড হচ্ছে... (${downloadPercent}%)`
                    : `Caching to device... (${downloadPercent}%)`}
                </span>
              </>
            ) : status.isFullyCached || downloadSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>
                  {isBangla
                    ? "সম্পূর্ণ সাইট অফলাইনে সংরক্ষিত (পুনরায় ডাউনলোড)"
                    : "Fully Cached Offline (Re-download)"}
                </span>
              </>
            ) : (
              <>
                <DownloadCloud className="w-4 h-4 text-gold-300" />
                <span>
                  {isBangla
                    ? "সব পাঠ ও অডিও অফলাইনে সংরক্ষণ করুন"
                    : "Download Everything for Offline Use"}
                </span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full min-h-[44px] py-2.5 px-4 rounded-xl text-xs font-semibold text-sand-500 hover:text-sand-800 dark:hover:text-sand-200 transition-colors flex items-center justify-center"
          >
            {isBangla ? "বন্ধ করুন" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};
