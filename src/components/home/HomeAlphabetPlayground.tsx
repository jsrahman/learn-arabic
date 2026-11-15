import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ARABIC_ALPHABET, ArabicLetter } from "@/data/alphabet";
import { AudioButton } from "@/components/AudioButton";

interface HomeAlphabetPlaygroundProps {
  selectedLetter: ArabicLetter;
  onSelectLetter: (letter: ArabicLetter) => void;
  isBangla: boolean;
  playgroundTag: string;
  playgroundTitle: string;
  playgroundSubtitle: string;
  openFullGridText: string;
  soundLabel: string;
  makhrajLabel: string;
  formsHeader: string;
  formBeginning: string;
  formMiddle: string;
  formEnding: string;
  formIsolated: string;
}

export const HomeAlphabetPlayground: React.FC<HomeAlphabetPlaygroundProps> = ({
  selectedLetter,
  onSelectLetter,
  isBangla,
  playgroundTag,
  playgroundTitle,
  playgroundSubtitle,
  openFullGridText,
  soundLabel,
  makhrajLabel,
  formsHeader,
  formBeginning,
  formMiddle,
  formEnding,
  formIsolated,
}) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-card">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              {playgroundTag}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-sand-950 dark:text-sand-50 tracking-tight">
              {playgroundTitle}
            </h2>
            <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400 mt-1">
              {playgroundSubtitle}
            </p>
          </div>

          <Link
            href="/practice"
            className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sand-200/60 dark:bg-night-800 border border-sand-300 dark:border-night-700 min-h-[44px]"
          >
            <span>{openFullGridText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Active Letter Feature Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center bg-sand-50 dark:bg-night-950 rounded-2xl p-4 sm:p-8 border border-sand-200/80 dark:border-night-850 shadow-inner">
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-2 sm:p-4">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-emerald-800 to-teal-900 border border-gold-500/30 flex items-center justify-center shadow-lg mb-3 sm:mb-4">
              <span className="font-arabic text-6xl sm:text-7xl text-gold-300 select-none">
                {selectedLetter.arabic}
              </span>
            </div>
            <AudioButton
              audioUrl={selectedLetter.audioUrl}
              arabicText={selectedLetter.name}
              size="lg"
              variant="gold"
              label={isBangla ? `${selectedLetter.nameBangla} এর উচ্চারণ শুনুন` : `Listen to ${selectedLetter.name}`}
            />
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="text-2xl font-bold text-sand-900 dark:text-sand-100">
                {isBangla
                  ? `${selectedLetter.nameBangla} (${selectedLetter.arabic})`
                  : `${selectedLetter.name} (${selectedLetter.nameBangla})`}
              </h3>
              <span className="text-sm font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                {soundLabel}: {selectedLetter.transliteration}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800 space-y-2">
              <p className="text-xs font-bold text-sand-700 dark:text-sand-300 uppercase tracking-wider">
                {makhrajLabel}
              </p>
              <p className="text-sm text-sand-800 dark:text-sand-200 leading-relaxed">
                {isBangla ? selectedLetter.makhrajBangla : selectedLetter.makhraj}
              </p>
              {!isBangla && (
                <p className="text-xs text-sand-600 dark:text-sand-400 italic">
                  {selectedLetter.makhrajBangla}
                </p>
              )}
            </div>

            {/* 4 Forms Mini-Preview */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold text-sand-600 dark:text-sand-400 uppercase tracking-wider">
                  {formsHeader}
                </p>
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                  بداية ← وسط ← نهاية
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 text-center" dir="rtl">
                <div className="p-3 sm:p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                  <span className="text-xs sm:text-[11px] text-sand-600 dark:text-sand-400 font-medium block mb-1 leading-snug">
                    {formBeginning}
                  </span>
                  <span className="font-arabic text-2xl sm:text-3xl text-emerald-950 dark:text-gold-200 leading-relaxed" dir="rtl">
                    {selectedLetter.forms.initial}
                  </span>
                </div>
                <div className="p-3 sm:p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                  <span className="text-xs sm:text-[11px] text-sand-600 dark:text-sand-400 font-medium block mb-1 leading-snug">
                    {formMiddle}
                  </span>
                  <span className="font-arabic text-2xl sm:text-3xl text-emerald-950 dark:text-gold-200 leading-relaxed" dir="rtl">
                    {selectedLetter.forms.medial}
                  </span>
                </div>
                <div className="p-3 sm:p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                  <span className="text-xs sm:text-[11px] text-sand-600 dark:text-sand-400 font-medium block mb-1 leading-snug">
                    {formEnding}
                  </span>
                  <span className="font-arabic text-2xl sm:text-3xl text-emerald-950 dark:text-gold-200 leading-relaxed" dir="rtl">
                    {selectedLetter.forms.final}
                  </span>
                </div>
                <div className="p-3 sm:p-2.5 rounded-xl bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800">
                  <span className="text-xs sm:text-[11px] text-sand-600 dark:text-sand-400 font-medium block mb-1 leading-snug">
                    {formIsolated}
                  </span>
                  <span className="font-arabic text-2xl sm:text-3xl text-emerald-950 dark:text-gold-200 leading-relaxed" dir="rtl">
                    {selectedLetter.forms.isolated}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Select Letter Tiles */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center" dir="rtl">
          {ARABIC_ALPHABET.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectLetter(item)}
              dir="rtl"
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl font-arabic text-xl sm:text-2xl flex items-center justify-center transition-all min-h-[44px] ${
                selectedLetter.id === item.id
                  ? "bg-emerald-800 text-gold-200 scale-110 shadow-md ring-2 ring-gold-400"
                  : "bg-sand-50 dark:bg-night-850 hover:bg-sand-200 dark:hover:bg-night-800 text-sand-800 dark:text-sand-200 border border-sand-200 dark:border-night-750"
              }`}
            >
              {item.arabic}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
