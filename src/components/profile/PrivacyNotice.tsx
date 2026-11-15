import React from "react";
import { ShieldCheck } from "lucide-react";

interface PrivacyNoticeProps {
  isBangla: boolean;
}

export const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({ isBangla }) => {
  return (
    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
      <p className="text-xs text-emerald-900 dark:text-emerald-300">
        {isBangla
          ? "আপনার সমস্ত অগ্রগতি ও সেটিংস সম্পূর্ণ অফলাইনে আপনার ডিভাইসে স্থানীয়ভাবে সংরক্ষিত থাকে। কোনো ব্যক্তিগত তথ্য ইন্টারনেটে পাঠানো হয় না।"
          : "Your learning progress, quiz scores, and settings are stored locally on your device. We respect your complete privacy with zero tracking."}
      </p>
    </div>
  );
};
