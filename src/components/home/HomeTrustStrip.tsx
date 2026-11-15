"use client";

import React from "react";
import { BookOpen, CheckSquare, Sparkles, ShieldCheck } from "lucide-react";
import type { HomeTrustMetric } from "@/types";

interface HomeTrustStripProps {
  metrics: HomeTrustMetric[];
}

export const HomeTrustStrip: React.FC<HomeTrustStripProps> = ({ metrics }) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 1:
        return <CheckSquare className="w-5 h-5 text-gold-600 dark:text-gold-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl p-6 sm:p-8 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-1.5 p-2">
              <div className="w-10 h-10 rounded-2xl bg-sand-200/80 dark:bg-night-800 flex items-center justify-center mb-1">
                {getIcon(idx)}
              </div>
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-950 dark:text-sand-50 tracking-tight">
                {m.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-sand-900 dark:text-sand-100">
                {m.label}
              </span>
              <p className="text-[11px] text-sand-600 dark:text-sand-400 leading-tight">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
