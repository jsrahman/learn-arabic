import React from "react";
import { cn } from "@/utils";
import type { TierFilter } from "@/types";

interface TierFilterBarProps {
  filters: TierFilter[];
  selectedTier: string;
  onSelectTier: (tierId: string) => void;
}

export const TierFilterBar: React.FC<TierFilterBarProps> = ({
  filters,
  selectedTier,
  onSelectTier,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {filters.map((filter) => {
        const isActive = selectedTier === filter.id;
        return (
          <button
            key={filter.id}
            onClick={() => onSelectTier(filter.id)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-2 border min-h-[44px]",
              isActive
                ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
                : "bg-sand-100 dark:bg-night-900 text-sand-700 dark:text-sand-300 border-sand-200 dark:border-night-800 hover:bg-sand-200 dark:hover:bg-night-850"
            )}
          >
            {filter.tier && (
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  filter.tier === "Foundations" && "bg-emerald-400",
                  filter.tier === "Vowels & Orthography" && "bg-blue-400",
                  filter.tier === "Core Tajweed" && "bg-amber-400",
                  filter.tier === "Quranic Mastery" && "bg-purple-400"
                )}
              />
            )}
            <span>{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
};
