"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  BookOpen,
  Sparkles,
  BarChart2,
  Settings,
  Flame,
  Moon,
  Sun,
  Menu,
  X,
  Award,
  Languages,
  Download,
  Smartphone,
} from "lucide-react";
import { useThemeContext } from "@/components/ThemeWrapper";
import { usePWA } from "@/components/PWAProvider";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();
  const { preferences, progress, toggleTheme, updatePreferences } = useThemeContext();
  const { isInstallable, isInstalled, promptInstall } = usePWA();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBangla = preferences.explanationLanguage === "bn";
  const t = translations[isBangla ? "bn" : "en"];

  const toggleLanguage = () => {
    updatePreferences({ explanationLanguage: isBangla ? "en" : "bn" });
  };

  const navLinks = [
    { href: "/path", label: t.nav.path, icon: Compass },
    { href: "/practice", label: t.nav.practice, icon: BookOpen },
    { href: "/quiz", label: t.nav.quiz, icon: Sparkles },
    { href: "/progress", label: t.nav.progress, icon: BarChart2 },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-sand-50/90 dark:bg-night-950/90 border-b border-sand-200/80 dark:border-night-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 border border-gold-500/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
            <span className="font-arabic text-xl font-bold text-gold-300">ق</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xl tracking-tight text-emerald-950 dark:text-sand-100 font-sans">
                Quran<span className="text-emerald-600 dark:text-emerald-400">Path</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-gold-500/15 text-gold-700 dark:text-gold-400 border border-gold-500/20">
                {isBangla ? "কায়দা" : "Qaida"}
              </span>
            </div>
            <p className="text-[10px] text-sand-600 dark:text-sand-400 font-arabic -mt-0.5" dir="rtl">
              طَرِيقُ الْقُرْآنِ
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-emerald-800 text-gold-200 shadow-sm dark:bg-emerald-700 dark:text-gold-100"
                    : "text-sand-700 dark:text-sand-300 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-sand-200/50 dark:hover:bg-night-850"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-gold-300" : "text-emerald-600 dark:text-emerald-400")} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Status Badges & Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Streak Indicator */}
          <Link
            href="/progress"
            title={
              progress.streakDays > 0
                ? `${progress.streakDays} ${t.nav.streakTooltip}`
                : isBangla
                ? "০ দিনের স্ট্রিক — শুরু করতে আজ একটি পাঠ সম্পন্ন করুন!"
                : "0 Day Streak — Complete a lesson or quiz today to start!"
            }
            className={cn(
              "flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold transition-colors",
              progress.streakDays > 0
                ? "bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 hover:bg-amber-500/20"
                : "bg-sand-200/50 dark:bg-night-850 border border-sand-300 dark:border-night-700 text-sand-500 dark:text-sand-400 hover:bg-sand-200"
            )}
          >
            <Flame
              className={cn(
                "w-4 h-4",
                progress.streakDays > 0
                  ? "text-amber-500 fill-amber-500 animate-bounce-short"
                  : "text-sand-400 dark:text-sand-500"
              )}
            />
            <span>{progress.streakDays}{t.nav.streakDays}</span>
          </Link>

          {/* XP Badge */}
          <div
            title={`${progress.xpPoints} ${t.nav.xpBadge}`}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold"
          >
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{progress.xpPoints} {t.nav.xpBadge}</span>
          </div>

          {/* PWA Install Button (Chrome desktop & mobile) */}
          {isInstallable && (
            <button
              type="button"
              onClick={promptInstall}
              title={t.pwa.installDesc}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-gold-200 text-xs font-bold border border-gold-500/30 shadow-sm transition-all active:scale-95 animate-fade-in"
            >
              <Download className="w-3.5 h-3.5 text-gold-300 animate-bounce-short" />
              <span className="hidden sm:inline">{t.nav.installApp}</span>
              <span className="sm:hidden">{isBangla ? "অ্যাপ" : "App"}</span>
            </button>
          )}

          {/* Language Switcher Button (Instant EN <-> বাং Toggle) */}
          <button
            type="button"
            onClick={toggleLanguage}
            title={isBangla ? "Switch website to English" : "ওয়েবসাইট বাংলায় দেখুন"}
            className={cn(
              "px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1 active:scale-95",
              isBangla
                ? "bg-emerald-800 text-gold-200 border-gold-500/40 shadow-sm"
                : "bg-sand-200/60 dark:bg-night-850 text-sand-800 dark:text-sand-200 border-sand-300 dark:border-night-700 hover:border-emerald-600/50"
            )}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{isBangla ? "বাং" : "EN"}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="p-2 rounded-xl text-sand-700 dark:text-sand-300 hover:bg-sand-200/60 dark:hover:bg-night-850 transition-colors border border-transparent hover:border-sand-300 dark:hover:border-night-700"
          >
            {preferences.theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-800" />
            )}
          </button>

          {/* Profile / Settings link */}
          <Link
            href="/profile"
            aria-label="User preferences and settings"
            className={cn(
              "p-2 rounded-xl transition-colors border",
              pathname === "/profile"
                ? "bg-emerald-800 text-gold-200 border-emerald-700"
                : "text-sand-700 dark:text-sand-300 hover:bg-sand-200/60 dark:hover:bg-night-850 border-transparent hover:border-sand-300 dark:hover:border-night-700"
            )}
          >
            <Settings className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-xl text-sand-800 dark:text-sand-200 hover:bg-sand-200/60 dark:hover:bg-night-850"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-sand-200 dark:border-night-800 bg-sand-50 dark:bg-night-950 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-emerald-800 text-gold-200 dark:bg-emerald-700 dark:text-gold-100"
                    : "text-sand-700 dark:text-sand-300 hover:bg-sand-200/50 dark:hover:bg-night-850"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-gold-300" : "text-emerald-600 dark:text-emerald-400")} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {/* Mobile Install App Button */}
          {isInstallable && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                promptInstall();
              }}
              className="w-full flex items-center justify-center gap-2 p-3 mt-2 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-800 text-gold-200 text-xs font-bold border border-gold-500/30 shadow-sm"
            >
              <Download className="w-4 h-4 text-gold-300" />
              <span>{t.nav.installAppLong}</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
