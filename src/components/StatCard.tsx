import React from "react";
import { cn } from "@/utils";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  iconBgColor?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  iconBgColor = "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card flex items-center gap-2.5 sm:gap-4",
        className
      )}
    >
      <div
        className={cn(
          "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold shrink-0",
          iconBgColor
        )}
      >
        {icon}
      </div>
      <div>
        <span className="text-[11px] sm:text-xs font-medium text-sand-500 block">
          {label}
        </span>
        <span className="text-lg sm:text-2xl font-extrabold text-sand-950 dark:text-sand-50">
          {value}
        </span>
      </div>
    </div>
  );
};
