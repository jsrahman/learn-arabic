"use client";

import React from "react";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import type { HomeTestimonialItem } from "@/types";

interface HomeTestimonialsProps {
  socialProofTag: string;
  socialProofTitle: string;
  socialProofSubtitle: string;
  testimonials: HomeTestimonialItem[];
}

export const HomeTestimonials: React.FC<HomeTestimonialsProps> = ({
  socialProofTag,
  socialProofTitle,
  socialProofSubtitle,
  testimonials,
}) => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 dark:text-gold-300 text-xs font-bold uppercase tracking-wider">
          <MessageSquareQuote className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400" />
          <span>{socialProofTag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
          {socialProofTitle}
        </h2>
        <p className="text-sm sm:text-base text-sand-600 dark:text-sand-400 max-w-2xl mx-auto leading-relaxed">
          {socialProofSubtitle}
        </p>
      </div>

      {/* Testimonials 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl p-6 sm:p-8 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-sm flex flex-col justify-between space-y-6 hover:border-gold-500/40 transition-colors"
          >
            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-gold-500 dark:text-gold-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-sand-800 dark:text-sand-200 leading-relaxed italic">
                “{item.quote}”
              </p>
            </div>

            {/* Author Profile Footer */}
            <div className="pt-4 border-t border-sand-200 dark:border-night-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-700 to-teal-800 text-gold-200 font-bold text-sm flex items-center justify-center shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-sand-950 dark:text-sand-50">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-sand-500 dark:text-sand-400">
                    {item.role}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full shrink-0">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{item.badge}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
