import React from "react";
import { cn, getRuleBadgeLabel } from "@/utils";

interface RuleBadgeProps {
  badge?: string;
  isBangla?: boolean;
  className?: string;
}

export const RuleBadge: React.FC<RuleBadgeProps> = ({
  badge,
  isBangla = true,
  className,
}) => {
  if (!badge) return null;

  return (
    <span
      className={cn(
        "px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/25 shrink-0",
        className
      )}
    >
      {getRuleBadgeLabel(badge, isBangla)}
    </span>
  );
};
