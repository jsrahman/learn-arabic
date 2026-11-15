"use client";

import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { cn } from "@/utils";
import type { HomeFaqItem } from "@/types";

interface HomeFaqProps {
  faqTag: string;
  faqTitle: string;
  faqSubtitle: string;
  faqItems: HomeFaqItem[];
  openFaqId: number | null;
  onToggleFaq: (id: number) => void;
}

export const HomeFaq: React.FC<HomeFaqProps> = ({
  faqTag,
  faqTitle,
  faqSubtitle,
  faqItems,
  openFaqId,
  onToggleFaq,
}) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{faqTag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
          {faqTitle}
        </h2>
        <p className="text-sm sm:text-base text-sand-600 dark:text-sand-400 max-w-2xl mx-auto leading-relaxed">
          {faqSubtitle}
        </p>
      </div>

      {/* Accordion Questions */}
      <div className="space-y-3">
        {faqItems.map((item) => {
          const isOpen = openFaqId === item.id;
          return (
            <div
              key={item.id}
              className={cn(
                "rounded-2xl transition-colors duration-200 border overflow-hidden",
                isOpen
                  ? "bg-sand-100 dark:bg-night-900 border-gold-500/40 shadow-sm"
                  : "bg-sand-50 dark:bg-night-950 border-sand-200 dark:border-night-800 hover:border-sand-300 dark:hover:border-night-700"
              )}
            >
              <button
                type="button"
                onClick={() => onToggleFaq(item.id)}
                aria-expanded={isOpen}
                className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left min-h-[44px] transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-sand-950 dark:text-sand-50">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-sand-700 dark:text-sand-300 leading-relaxed border-t border-sand-200/60 dark:border-night-800/80">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
