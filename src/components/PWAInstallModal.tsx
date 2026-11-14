"use client";

import React, { useState, useEffect } from "react";
import {
  Share,
  PlusSquare,
  X,
  Smartphone,
  Monitor,
  Download,
  CheckCircle2,
  WifiOff,
  Sparkles,
  ExternalLink,
  Laptop,
} from "lucide-react";
import { usePWA, PlatformType } from "./PWAProvider";
import { useThemeContext } from "./ThemeWrapper";
import { cn } from "@/lib/utils";

export function PWAInstallModal() {
  const {
    showInstallModal,
    setShowInstallModal,
    hasNativePrompt,
    promptInstall,
    platform: initialPlatform,
  } = usePWA();
  const { preferences } = useThemeContext();
  const isBangla = preferences.explanationLanguage === "bn";

  const [activeTab, setActiveTab] = useState<PlatformType>("desktop");

  useEffect(() => {
    if (initialPlatform) {
      setActiveTab(initialPlatform);
    }
  }, [initialPlatform, showInstallModal]);

  if (!showInstallModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-lg w-full rounded-3xl p-6 sm:p-8 bg-sand-50 dark:bg-night-900 border border-emerald-500/30 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={() => setShowInstallModal(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full text-sand-500 hover:text-sand-800 dark:hover:text-sand-200 hover:bg-sand-200/60 dark:hover:bg-night-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 text-gold-300 flex items-center justify-center font-bold text-2xl shadow-lg border border-gold-500/30 shrink-0">
            <span className="font-arabic">ق</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-sand-950 dark:text-sand-50 tracking-tight">
                {isBangla ? "কুরআনপাঠ অ্যাপ ইনস্টল করুন" : "Install QuranPath App"}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                PWA
              </span>
            </div>
            <p className="text-xs text-sand-600 dark:text-sand-400 mt-0.5">
              {isBangla
                ? "ডেস্কটপ, অ্যান্ড্রয়েড বা আইফোনে স্বতন্ত্র অ্যাপ হিসেবে ব্যবহার করুন"
                : "Install QuranPath on your device for instant offline access"}
            </p>
          </div>
        </div>

        {/* Native One-Click Install Button (When available in Chrome / Edge) */}
        {hasNativePrompt && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-800/15 to-teal-800/15 border border-emerald-600/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                {isBangla ? "এক ক্লিকে সরাসরি ইনস্টল" : "One-Click Quick Install"}
              </span>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                {isBangla ? "ব্রাউজার সমর্থিত" : "Browser Ready"}
              </span>
            </div>
            <button
              type="button"
              onClick={promptInstall}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-gold-200 shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Download className="w-4 h-4 text-gold-300 animate-bounce-short" />
              <span>
                {isBangla ? "ডিভাইসে অ্যাপ ইনস্টল করুন" : "Install App to Device"}
              </span>
            </button>
          </div>
        )}

        {/* Platform Selection Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-sand-200/70 dark:bg-night-800 border border-sand-300/80 dark:border-night-700 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("desktop")}
            className={cn(
              "py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all",
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
            onClick={() => setActiveTab("android")}
            className={cn(
              "py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all",
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
            onClick={() => setActiveTab("ios")}
            className={cn(
              "py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all",
              activeTab === "ios"
                ? "bg-emerald-800 text-gold-200 shadow-sm"
                : "text-sand-700 dark:text-sand-300 hover:text-emerald-800"
            )}
          >
            <Share className="w-3.5 h-3.5" />
            <span>{isBangla ? "আইফোন / সাফারি" : "iPhone / iOS"}</span>
          </button>
        </div>

        {/* Tab 1: PC / Mac Instructions (Chrome, Edge, Brave) */}
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

        {/* Tab 2: Android Instructions (Chrome, Samsung Internet) */}
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
                  {isBangla ? "১. সাফারির শেয়ার বাটনে চাপ দিন" : "1. Tap the Share button"}
                </strong>
                <span>
                  {isBangla
                    ? "আইফোনে সাফারি ব্রাউজারের নিচে থাকা শেয়ার আইকনে [↑] ট্যাপ করুন।"
                    : "Tap the Share icon [↑] at the bottom toolbar of Safari."}
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
                    ? "২. 'Add to Home Screen' বেছে নিন"
                    : "2. Select 'Add to Home Screen'"}
                </strong>
                <span>
                  {isBangla
                    ? "নিচে স্ক্রল করে 'Add to Home Screen' (+) নির্বাচন করুন এবং ওপরে 'Add' বাটনে চাপ দিন।"
                    : "Scroll down, select 'Add to Home Screen' (+), and tap 'Add' in the top right."}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Grid */}
        <div className="p-4 rounded-2xl bg-sand-100/70 dark:bg-night-950/70 border border-sand-200 dark:border-night-850 space-y-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sand-500 block">
            {isBangla ? "ইনস্টল করার সুবিধাসমূহ" : "Benefits of Installing"}
          </span>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-sand-700 dark:text-sand-300">
            <div className="flex items-center gap-1.5">
              <WifiOff className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{isBangla ? "১০০% অফলাইনে চলবে" : "100% Offline Ready"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{isBangla ? "ফুলস্ক্রিন অ্যাপ লুক" : "Fullscreen App Window"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{isBangla ? "সহজ এক-ক্লিক এক্সেস" : "Instant Home Screen Access"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{isBangla ? "লোকাল ডাটা সুরক্ষা" : "Private Local Storage"}</span>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setShowInstallModal(false)}
          className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-800 hover:bg-emerald-750 text-gold-200 shadow-sm transition-all"
        >
          {isBangla ? "বুঝেছি, ধন্যবাদ" : "Close"}
        </button>
      </div>
    </div>
  );
}
