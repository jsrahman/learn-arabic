import React from "react";
import { Smartphone, CheckCircle2, Download } from "lucide-react";

interface AppInstallCardProps {
  isInstalled: boolean;
  onPromptInstall: () => void;
  isBangla: boolean;
}

export const AppInstallCard: React.FC<AppInstallCardProps> = ({
  isInstalled,
  onPromptInstall,
  isBangla,
}) => {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card space-y-4 sm:space-y-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-800/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-sand-900 dark:text-sand-100">
              {isBangla ? "কুরআনপাঠ ওয়েব অ্যাপ ইনস্টল" : "Install QuranPath App"}
            </h2>
            <p className="text-xs text-sand-500">
              {isBangla
                ? "আপনার কম্পিউটার বা মোবাইলে স্বতন্ত্র অ্যাপ হিসেবে যুক্ত করুন"
                : "Add to home screen or desktop for a standalone app experience"}
            </p>
          </div>
        </div>

        {isInstalled && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isBangla ? "ইনস্টল করা হয়েছে" : "Installed"}</span>
          </span>
        )}
      </div>

      <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
        {isBangla
          ? "কুরআনপাঠ একটি পূর্ণাঙ্গ প্রগ্রেসিভ ওয়েব অ্যাপ (PWA)। ক্রোম বা এজ ব্রাউজারের অ্যাড্রেস বারের ওপরের ইনস্টল আইকন [⊕] অথবা নিচের বাটনে চাপ দিয়ে যেকোনো ডিভাইসে ইনস্টল করতে পারেন।"
          : "QuranPath is an installable Progressive Web App (PWA). You can install it on your PC, Mac, Android, or iOS device with full offline support and instant loading."}
      </p>

      {!isInstalled && (
        <button
          type="button"
          onClick={onPromptInstall}
          className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-750 hover:to-teal-750 text-gold-200 shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 min-h-[44px]"
        >
          <Download className="w-4 h-4 text-gold-300" />
          <span>
            {isBangla ? "ডিভাইসে অ্যাপ ইনস্টল করুন" : "Install App to Device"}
          </span>
        </button>
      )}
    </div>
  );
};
