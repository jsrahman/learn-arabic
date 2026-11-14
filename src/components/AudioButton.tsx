"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { audioService } from "@/lib/audioService";
import { useThemeContext } from "@/components/ThemeWrapper";
import { cn } from "@/lib/utils";

interface AudioButtonProps {
  arabicText?: string;
  audioUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  variant?: "primary" | "secondary" | "subtle" | "gold";
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  arabicText,
  audioUrl,
  size = "md",
  className,
  label,
  variant = "primary",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { preferences } = useThemeContext();

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      audioService.stopAudio();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);

    try {
      if (audioUrl) {
        audioService.playRecitation(
          audioUrl,
          () => {
            setIsPlaying(false);
          },
          preferences.audioSpeed || 1.0,
          arabicText
        );
      } else if (arabicText) {
        await audioService.speakArabic(arabicText, preferences.audioSpeed || 0.9);
        setIsPlaying(false);
      }
    } catch (err) {
      console.warn("Audio playback error:", err);
      setIsPlaying(false);
    }
  };

  const sizeClasses = {
    sm: "w-8 h-8 text-xs gap-1.5 p-1.5",
    md: "w-11 h-11 text-sm gap-2 p-2.5",
    lg: "w-14 h-14 text-base gap-2.5 p-3.5",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-7 h-7",
  };

  const variantClasses = {
    primary:
      "bg-emerald-800 hover:bg-emerald-700 text-gold-300 dark:bg-emerald-700 dark:hover:bg-emerald-600 shadow-md hover:shadow-emerald-900/30",
    secondary:
      "bg-sand-200 hover:bg-sand-300 text-emerald-900 dark:bg-night-800 dark:hover:bg-night-700 dark:text-emerald-300 border border-sand-300 dark:border-night-700",
    subtle:
      "bg-transparent hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-600/20",
    gold:
      "bg-gold-500 hover:bg-gold-600 text-night-950 font-bold shadow-md hover:shadow-gold-500/30",
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      aria-label={label || (isPlaying ? "Stop audio" : "Play pronunciation")}
      title={label || (isPlaying ? "Stop audio" : "Listen to pronunciation")}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
        label ? "px-4 rounded-xl w-auto" : sizeClasses[size],
        variantClasses[variant],
        isPlaying && "ring-2 ring-gold-400 ring-offset-1 scale-105",
        className
      )}
    >
      {/* Ripple ring animation when active */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border-2 border-gold-400 animate-ping opacity-75 pointer-events-none" />
      )}

      {isPlaying ? (
        <VolumeX className={cn(iconSizes[size], "animate-pulse text-gold-300")} />
      ) : (
        <Volume2 className={iconSizes[size]} />
      )}

      {label && <span className="font-medium">{label}</span>}
    </button>
  );
};

