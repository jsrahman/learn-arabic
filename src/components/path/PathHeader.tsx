import React from "react";
import { Compass } from "lucide-react";

interface PathHeaderProps {
  roadmapTag: string;
  title: string;
  subtitle: string;
  overallPercent: number;
  doneText: string;
  totalProgressText: string;
  completedLessonsCount: number;
  totalLessons: number;
  lessonsCompletedText: string;
  statSummaryText: string;
}

export const PathHeader: React.FC<PathHeaderProps> = ({
  roadmapTag,
  title,
  subtitle,
  overallPercent,
  doneText,
  totalProgressText,
  completedLessonsCount,
  totalLessons,
  lessonsCompletedText,
  statSummaryText,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-sand-200 dark:border-night-800">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
          <Compass className="w-4 h-4" />
          <span>{roadmapTag}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-sand-600 dark:text-sand-400 mt-1 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Overall Completion Card */}
      <div className="p-4 rounded-2xl bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 flex items-center gap-4 shadow-sm w-full md:w-auto backdrop-blur-sm">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 text-gold-300 flex flex-col items-center justify-center font-bold text-base shadow-sm shrink-0">
          <span>{overallPercent}%</span>
          <span className="text-[9px] uppercase tracking-wider font-medium text-emerald-300">{doneText}</span>
        </div>
        <div>
          <div className="text-xs font-medium text-sand-600 dark:text-sand-400">{totalProgressText}</div>
          <div className="text-sm font-bold text-sand-900 dark:text-sand-100">
            {completedLessonsCount} / {totalLessons} {lessonsCompletedText}
          </div>
          <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
            {statSummaryText}
          </div>
        </div>
      </div>
    </div>
  );
};
