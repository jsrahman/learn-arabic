import React from "react";
import { AudioButton } from "@/components/AudioButton";
import { ARABIC_ALPHABET } from "@/data/alphabet";
import type { HarakatVowel } from "@/hooks/usePracticeDrill";

interface HarakatDrillTableProps {
  vowels: HarakatVowel[];
  isBangla: boolean;
  listenLabel: string;
  vowelDrillsTitle: string;
  tableHeaders: {
    letter: string;
    fathah: string;
    kasrah: string;
    dammah: string;
    sukoon: string;
  };
}

export const HarakatDrillTable: React.FC<HarakatDrillTableProps> = ({
  vowels,
  isBangla,
  listenLabel,
  vowelDrillsTitle,
  tableHeaders,
}) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Harakat Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {vowels.map((v, i) => (
          <div
            key={i}
            className="rounded-2xl p-4 sm:p-5 bg-sand-100 dark:bg-night-900 border border-sand-200 dark:border-night-800 shadow-card text-center space-y-2"
          >
            <span className="font-arabic text-3xl sm:text-4xl text-emerald-800 dark:text-gold-200 block">
              {v.example}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-sand-900 dark:text-sand-100">
              {isBangla ? v.nameBn : v.name}
            </h3>
            <AudioButton
              arabicText={v.example}
              size="sm"
              variant="gold"
              label={listenLabel}
            />
          </div>
        ))}
      </div>

      {/* Letter x Harakat Matrix Table */}
      <div className="rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-card overflow-x-auto -mx-1 sm:mx-0">
        <h3 className="text-base sm:text-lg font-bold text-sand-950 dark:text-sand-50 mb-3 sm:mb-4 px-1 sm:px-0">
          {vowelDrillsTitle}
        </h3>
        <table className="w-full min-w-[480px] text-center" dir="rtl">
          <thead>
            <tr className="border-b border-sand-300 dark:border-night-800 text-xs font-bold text-sand-600 dark:text-sand-400">
              <th className="py-2.5 sm:py-3 px-2 sm:px-4 text-right">{tableHeaders.letter}</th>
              <th className="py-2.5 sm:py-3 px-2 sm:px-4">{tableHeaders.fathah}</th>
              <th className="py-2.5 sm:py-3 px-2 sm:px-4">{tableHeaders.kasrah}</th>
              <th className="py-2.5 sm:py-3 px-2 sm:px-4">{tableHeaders.dammah}</th>
              <th className="py-2.5 sm:py-3 px-2 sm:px-4">{tableHeaders.sukoon}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand-200 dark:divide-night-800">
            {ARABIC_ALPHABET.slice(0, 8).map((letter) => (
              <tr
                key={letter.id}
                className="hover:bg-sand-50/60 dark:hover:bg-night-950/60"
              >
                <td className="py-2.5 sm:py-3 px-2 sm:px-4 text-right font-bold text-xs sm:text-sm text-sand-900 dark:text-sand-100 font-arabic text-lg sm:text-xl" dir="rtl">
                  {letter.arabic} <span className="font-sans text-[11px] sm:text-xs font-normal text-sand-500">({isBangla ? letter.nameBangla : letter.name})</span>
                </td>
                <td className="py-2.5 sm:py-3 px-2 sm:px-4">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <span className="font-arabic text-2xl sm:text-3xl text-emerald-900 dark:text-gold-200">
                      {letter.arabic}َ
                    </span>
                    <AudioButton
                      arabicText={`${letter.arabic}َ`}
                      size="sm"
                      variant="subtle"
                      label={listenLabel}
                    />
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-arabic text-3xl text-emerald-900 dark:text-gold-200">
                      {letter.arabic}ِ
                    </span>
                    <AudioButton
                      arabicText={`${letter.arabic}ِ`}
                      size="sm"
                      variant="subtle"
                      label={listenLabel}
                    />
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-arabic text-3xl text-emerald-900 dark:text-gold-200">
                      {letter.arabic}ُ
                    </span>
                    <AudioButton
                      arabicText={`${letter.arabic}ُ`}
                      size="sm"
                      variant="subtle"
                      label={listenLabel}
                    />
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-arabic text-3xl text-emerald-900 dark:text-gold-200">
                      أَ{letter.arabic}ْ
                    </span>
                    <AudioButton
                      arabicText={`أَ${letter.arabic}ْ`}
                      size="sm"
                      variant="subtle"
                      label={listenLabel}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
