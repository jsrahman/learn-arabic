import React from "react";
import { ARABIC_ALPHABET } from "@/data/alphabet";
import { AudioButton } from "@/components/AudioButton";

interface MasteredLettersGalleryProps {
  isBangla: boolean;
  galleryTitle: string;
  gallerySubtitle: string;
  availableText: string;
}

export const MasteredLettersGallery: React.FC<MasteredLettersGalleryProps> = ({
  isBangla,
  galleryTitle,
  gallerySubtitle,
  availableText,
}) => {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-card space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-sand-950 dark:text-sand-50">
            {galleryTitle}
          </h2>
          <p className="text-xs text-sand-500">{gallerySubtitle}</p>
        </div>
        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
          28 {availableText}
        </span>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-7 gap-3" dir="rtl">
        {ARABIC_ALPHABET.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-800 flex flex-col items-center justify-center text-center hover:border-emerald-500/40 transition-colors"
          >
            <span className="font-arabic text-3xl text-emerald-950 dark:text-gold-200" dir="rtl">
              {item.arabic}
            </span>
            <span className="text-[10px] font-bold text-sand-700 dark:text-sand-300 mt-1">
              {isBangla ? item.nameBangla : item.name}
            </span>
            <div className="mt-2">
              <AudioButton
                audioUrl={item.audioUrl}
                arabicText={item.name}
                size="sm"
                variant="subtle"
                label={isBangla ? "শুনুন" : "Listen"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
