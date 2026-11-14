"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  UserPreferences,
  UserProgress,
  DEFAULT_PREFERENCES,
  DEFAULT_PROGRESS,
  getStoredPreferences,
  getStoredProgress,
  saveStoredPreferences,
  saveStoredProgress,
} from "@/lib/storage";

interface ThemeContextType {
  preferences: UserPreferences;
  progress: UserProgress;
  updatePreferences: (partial: Partial<UserPreferences>) => void;
  updateProgress: (newProgress: UserProgress) => void;
  refreshProgress: () => void;
  toggleTheme: () => void;
  fontSizeClass: string;
}

const ThemeContext = createContext<ThemeContextType>({
  preferences: DEFAULT_PREFERENCES,
  progress: DEFAULT_PROGRESS,
  updatePreferences: () => {},
  updateProgress: () => {},
  refreshProgress: () => {},
  toggleTheme: () => {},
  fontSizeClass: "text-4xl md:text-5xl",
});

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const p = getStoredPreferences();
    const prog = getStoredProgress();
    setPreferences(p);
    setProgress(prog);
    setMounted(true);

    if (p.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const updatePreferences = (partial: Partial<UserPreferences>) => {
    const updated = { ...preferences, ...partial };
    setPreferences(updated);
    saveStoredPreferences(updated);

    if (updated.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    updatePreferences({ theme: preferences.theme === "dark" ? "light" : "dark" });
  };

  const updateProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    saveStoredProgress(newProgress);
  };

  const refreshProgress = () => {
    setProgress(getStoredProgress());
  };

  const fontSizeClass =
    preferences.arabicFontSize === "xlarge"
      ? "text-6xl md:text-7xl leading-loose"
      : preferences.arabicFontSize === "large"
      ? "text-5xl md:text-6xl leading-relaxed"
      : "text-3xl md:text-4xl leading-normal";

  // Prevent hydration mismatch while mounting
  return (
    <ThemeContext.Provider
      value={{
        preferences,
        progress,
        updatePreferences,
        updateProgress,
        refreshProgress,
        toggleTheme,
        fontSizeClass,
      }}
    >
      <div className={preferences.theme === "dark" ? "dark" : ""}>
        <div className="min-h-screen bg-sand-50 dark:bg-night-950 text-sand-900 dark:text-sand-100 font-sans transition-colors duration-300">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

