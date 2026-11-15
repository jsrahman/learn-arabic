"use client";

import React from "react";
import { Flame, BookOpen, Award, Clock } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { cn, toBanglaNumber } from "@/utils";
import type { UserProgress } from "@/types";

interface ProgressStatGridProps {
  progress: UserProgress;
  completedCount: number;
  totalLessons: number;
  isBangla: boolean;
  t: {
    dailyStreak: string;
    days: string;
    lessonsDone: string;
    knowledgeXP: string;
    timeInvested: string;
  };
}

export const ProgressStatGrid: React.FC<ProgressStatGridProps> = ({
  progress,
  completedCount,
  totalLessons,
  isBangla,
  t,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
      <StatCard
        icon={<Flame className={cn("w-4 h-4 sm:w-6 sm:h-6", progress.streakDays > 0 && "fill-current animate-bounce-short")} />}
        label={t.dailyStreak}
        value={`${isBangla ? toBanglaNumber(progress.streakDays) : progress.streakDays} ${t.days}`}
        iconBgColor={progress.streakDays > 0 ? "bg-amber-500/15 text-amber-600 dark:text-amber-400" : "bg-sand-200/50 dark:bg-night-800 text-sand-400 dark:text-sand-500"}
      />

      <StatCard
        icon={<BookOpen className="w-4 h-4 sm:w-6 sm:h-6" />}
        label={t.lessonsDone}
        value={`${isBangla ? toBanglaNumber(completedCount) : completedCount} / ${isBangla ? toBanglaNumber(totalLessons) : totalLessons}`}
        iconBgColor="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
      />

      <StatCard
        icon={<Award className="w-4 h-4 sm:w-6 sm:h-6" />}
        label={t.knowledgeXP}
        value={`${isBangla ? toBanglaNumber(progress.xpPoints) : progress.xpPoints} ${isBangla ? "এক্সপি" : "XP"}`}
        iconBgColor="bg-teal-500/15 text-teal-600 dark:text-teal-400"
      />

      <StatCard
        icon={<Clock className="w-4 h-4 sm:w-6 sm:h-6" />}
        label={t.timeInvested}
        value={`${isBangla ? toBanglaNumber(progress.totalMinutesPracticed) : progress.totalMinutesPracticed} ${isBangla ? "মিনিট" : "Mins"}`}
        iconBgColor="bg-indigo-500/15 text-indigo-600 dark:text-indigo-400"
      />
    </div>
  );
};
