"use client";

import React from "react";
import { cn, getDifficultyLabel } from "@/utils";
import type { DifficultyType } from "@/types";

interface DifficultyBadgeProps {
  difficulty?: DifficultyType | string;
  isBangla?: boolean;
  className?: string;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({
  difficulty,
  isBangla = true,
  className,
}) => {
  if (!difficulty) return null;

  return (
    <span
      className={cn(
        "text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 sm:py-1 rounded-full border inline-flex items-center gap-1.5 shrink-0 select-none",
        (difficulty === "Foundational" || difficulty === "Fundamental") &&
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
        difficulty === "Intermediate" &&
          "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
        difficulty === "Advanced" &&
          "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
        difficulty === "Mastery" &&
          "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
        className
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          (difficulty === "Foundational" || difficulty === "Fundamental") && "bg-emerald-500",
          difficulty === "Intermediate" && "bg-blue-500",
          difficulty === "Advanced" && "bg-amber-500",
          difficulty === "Mastery" && "bg-purple-500"
        )}
      />
      <span>{getDifficultyLabel(difficulty, isBangla)}</span>
    </span>
  );
};
