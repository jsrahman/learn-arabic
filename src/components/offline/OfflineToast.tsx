import React from "react";
import { CheckCircle2, X } from "lucide-react";

interface OfflineToastProps {
  show: boolean;
  onDismiss: () => void;
  isBangla: boolean;
}

export const OfflineToast: React.FC<OfflineToastProps> = ({
  show,
  onDismiss,
  isBangla,
}) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] rounded-2xl p-4 bg-emerald-950/95 backdrop-blur-md text-gold-100 border border-gold-500/40 shadow-2xl flex items-start gap-3 animate-fade-in">
      <div className="w-8 h-8 rounded-xl bg-gold-500/20 text-gold-300 flex items-center justify-center shrink-0 mt-0.5">
        <CheckCircle2 className="w-5 h-5 text-gold-300" />
      </div>
      <div className="flex-1 text-xs space-y-0.5 text-left">
        <strong className="block font-bold text-sand-50">
          {isBangla ? "স্বয়ংক্রিয় অফলাইন মোড সক্রিয়!" : "Automatic Offline Cache Ready!"}
        </strong>
        <p className="text-sand-200 leading-relaxed text-[11px]">
          {isBangla
            ? "১৮টি লেভেল, ৭২টি পাঠ ও আরবি হরফের অডিও আপনার ডিভাইসে সংরক্ষিত হয়েছে। ইন্টারনেট ছাড়াও সবকিছু পড়তে ও শুনতে পারবেন।"
            : "All 18 levels, 72 lessons, and alphabet audio have been automatically cached to your device for offline use."}
        </p>
      </div>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss toast"
        className="text-sand-400 hover:text-sand-100 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
