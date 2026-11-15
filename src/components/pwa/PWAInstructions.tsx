import React from "react";
import { Share, PlusSquare, Laptop, Smartphone } from "lucide-react";
import { cn } from "@/utils";
import type { PlatformType } from "@/components/PWAProvider";

interface PWAInstructionsProps {
  activeTab: PlatformType;
  onSelectTab: (tab: PlatformType) => void;
  isBangla: boolean;
}

export const PWAInstructions: React.FC<PWAInstructionsProps> = ({
  activeTab,
  onSelectTab,
  isBangla,
}) => {
  return (
    <div className="space-y-4">
      {/* Platform Selection Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-sand-200/70 dark:bg-night-800 border border-sand-300/80 dark:border-night-700 text-xs font-semibold">
        <button
          type="button"
          onClick={() => onSelectTab("desktop")}
          className={cn(
            "min-h-[44px] py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all",
            activeTab === "desktop"
              ? "bg-emerald-800 text-gold-200 shadow-sm"
              : "text-sand-700 dark:text-sand-300 hover:text-emerald-800"
          )}
        >
          <Laptop className="w-3.5 h-3.5" />
          <span>{isBangla ? "পিসি / ম্যাক" : "PC / Mac"}</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectTab("android")}
          className={cn(
            "min-h-[44px] py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all",
            activeTab === "android"
              ? "bg-emerald-800 text-gold-200 shadow-sm"
              : "text-sand-700 dark:text-sand-300 hover:text-emerald-800"
          )}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>{isBangla ? "অ্যান্ড্রয়েড" : "Android"}</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectTab("ios")}
          className={cn(
            "min-h-[44px] py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all",
            activeTab === "ios"
              ? "bg-emerald-800 text-gold-200 shadow-sm"
              : "text-sand-700 dark:text-sand-300 hover:text-emerald-800"
          )}
        >
          <Share className="w-3.5 h-3.5" />
          <span>{isBangla ? "আইফোন" : "iPhone/ iOS"}</span>
        </button>
      </div>

      {/* Tab 1: PC / Mac Instructions */}
      {activeTab === "desktop" && (
        <div className="space-y-3 text-xs text-sand-700 dark:text-sand-300 animate-fade-in">
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850">
            <div className="p-2 rounded-xl bg-sand-200 dark:bg-night-800 text-emerald-600 shrink-0 font-bold">
              ১
            </div>
            <div>
              <strong className="block text-sand-900 dark:text-sand-100 font-semibold mb-0.5">
                {isBangla
                  ? "অ্যাড্রেস বারের 'Install' আইকনে [⊕] ক্লিক করুন"
                  : "Click the Install Icon [⊕] in Address Bar"}
              </strong>
              <span>
                {isBangla
                  ? "গুগল ক্রোম বা মাইক্রোসফট এজের ওপরের ইউআরএল বারের ডানপাশে [⊕] (Install QuranPath) আইকন দেখতে পাবেন।"
                  : "Look at the top-right of your browser address bar for the [⊕] install icon (or click Menu ⋮ > 'Save and share' > 'Install QuranPath')."}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850">
            <div className="p-2 rounded-xl bg-sand-200 dark:bg-night-800 text-emerald-600 shrink-0 font-bold">
              ২
            </div>
            <div>
              <strong className="block text-sand-900 dark:text-sand-100 font-semibold mb-0.5">
                {isBangla
                  ? "পপআপে 'Install' নিশ্চিত করুন"
                  : "Confirm 'Install' in Dialog"}
              </strong>
              <span>
                {isBangla
                  ? "'Install' বাটনে ক্লিক করলে কুরআনপাঠ সম্পূর্ণ ব্রাউজার ট্যাব ছাড়া একটি দ্রুতগতির ডেস্কটপ উইন্ডো হিসেবে চালু হবে।"
                  : "Click Install. QuranPath will launch in its own standalone window on your desktop with zero distractions."}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Android Instructions */}
      {activeTab === "android" && (
        <div className="space-y-3 text-xs text-sand-700 dark:text-sand-300 animate-fade-in">
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850">
            <div className="p-2 rounded-xl bg-sand-200 dark:bg-night-800 text-emerald-600 shrink-0 font-bold">
              ১
            </div>
            <div>
              <strong className="block text-sand-900 dark:text-sand-100 font-semibold mb-0.5">
                {isBangla
                  ? "ক্রোম ব্রাউজারের মেনু [⋮] বাটনে ট্যাপ করুন"
                  : "Tap Browser Menu [⋮]"}
              </strong>
              <span>
                {isBangla
                  ? "স্ক্রিনের ওপরের ডানদিকের তিনটি ডট [⋮] মেনু আইকনে ট্যাপ করুন।"
                  : "Tap the three vertical dots [⋮] in the top right corner of Chrome or Samsung Internet."}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850">
            <div className="p-2 rounded-xl bg-sand-200 dark:bg-night-800 text-emerald-600 shrink-0 font-bold">
              ২
            </div>
            <div>
              <strong className="block text-sand-900 dark:text-sand-100 font-semibold mb-0.5">
                {isBangla
                  ? "'Install app' বা 'Add to Home screen' নির্বাচন করুন"
                  : "Select 'Install app' or 'Add to Home screen'"}
              </strong>
              <span>
                {isBangla
                  ? "মেনু তালিকায় 'Install app' (অথবা 'Add to Home screen') অপশনে ট্যাপ করলেই এটি আপনার মোবাইলে অ্যাপ হিসেবে ইনস্টল হয়ে যাবে।"
                  : "Select 'Install app'. QuranPath will be installed directly to your phone's app list with native offline capability."}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: iOS Safari Instructions */}
      {activeTab === "ios" && (
        <div className="space-y-3 text-xs text-sand-700 dark:text-sand-300 animate-fade-in">
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850">
            <div className="p-2 rounded-xl bg-sand-200 dark:bg-night-800 text-emerald-600 shrink-0">
              <Share className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-sand-900 dark:text-sand-100 font-semibold mb-0.5">
                {isBangla
                  ? "১. সাফারির শেয়ার বাটনে চাপ দিন"
                  : "1. Tap the Share Button in Safari"}
              </strong>
              <span>
                {isBangla
                  ? "সাফারি ব্রাউজারের নিচের টুলবারের মাঝখানের শেয়ার আইকনটিতে [↑] চাপ দিন।"
                  : "Tap the Share icon [↑] at the bottom toolbar in Apple Safari."}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sand-100 dark:bg-night-950 border border-sand-200 dark:border-night-850">
            <div className="p-2 rounded-xl bg-sand-200 dark:bg-night-800 text-emerald-600 shrink-0">
              <PlusSquare className="w-4 h-4" />
            </div>
            <div>
              <strong className="block text-sand-900 dark:text-sand-100 font-semibold mb-0.5">
                {isBangla
                  ? "২. 'Add to Home Screen' নির্বাচন করুন"
                  : "2. Select 'Add to Home Screen'"}
              </strong>
              <span>
                {isBangla
                  ? "তালিকাটি নিচে স্ক্রোল করে '+' চিহ্নের 'Add to Home Screen' চাপুন এবং ওপরে 'Add' চাপুন।"
                  : "Scroll down and tap 'Add to Home Screen', then tap 'Add' in the top right."}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
