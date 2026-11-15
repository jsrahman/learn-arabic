import React from "react";
import { CheckCircle2, WifiOff, Sparkles, Laptop } from "lucide-react";

interface PWABenefitsProps {
  isBangla: boolean;
}

export const PWABenefits: React.FC<PWABenefitsProps> = ({ isBangla }) => {
  return (
    <div className="p-4 rounded-2xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850 space-y-2">
      <span className="text-[11px] font-bold uppercase tracking-wider text-sand-500 block">
        {isBangla ? "অ্যাপটির বিশেষ সুবিধাসমূহ:" : "Key App Benefits:"}
      </span>
      <div className="grid grid-cols-2 gap-2 text-xs text-sand-700 dark:text-sand-300">
        <div className="flex items-center gap-1.5">
          <WifiOff className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{isBangla ? "১০০% অফলাইনে চলে" : "100% Offline"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{isBangla ? "হোম স্ক্রিনে আইকন" : "Home Screen Icon"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{isBangla ? "ফুলস্ক্রিন অভিজ্ঞতা" : "Fullscreen Window"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Laptop className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{isBangla ? "জিরো ডাটা ট্র্যাকিং" : "Zero Tracking"}</span>
        </div>
      </div>
    </div>
  );
};
