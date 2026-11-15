import React from "react";
import { Settings } from "lucide-react";

interface ProfileHeaderProps {
  isBangla: boolean;
  title: string;
  subtitle: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  isBangla,
  title,
  subtitle,
}) => {
  return (
    <div className="pb-6 border-b border-sand-200 dark:border-night-800">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
        <Settings className="w-4 h-4" />
        <span>{isBangla ? "পছন্দসমূহ ও সেটিংস" : "Learner Preferences"}</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
        {title}
      </h1>
      <p className="text-sm text-sand-600 dark:text-sand-400 mt-1">
        {subtitle}
      </p>
    </div>
  );
};
