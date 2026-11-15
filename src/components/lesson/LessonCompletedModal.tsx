import React from "react";
import Link from "next/link";
import { Award, Sparkles, ArrowRight } from "lucide-react";
import { LESSONS } from "@/data/lessons";
import type { Lesson } from "@/types";

interface LessonCompletedModalProps {
  isOpen: boolean;
  lesson: Lesson;
  isBangla: boolean;
  onClose: () => void;
}

export const LessonCompletedModal: React.FC<LessonCompletedModalProps> = ({
  isOpen,
  lesson,
  isBangla,
}) => {
  if (!isOpen) return null;

  const nextLessonKey = `l${lesson.levelId}-${lesson.lessonNumber + 1}`;
  const hasNextLesson = !!LESSONS[nextLessonKey];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="max-w-md w-full rounded-3xl p-8 bg-sand-50 dark:bg-night-900 border border-gold-500/40 shadow-2xl text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-gold-200 mx-auto flex items-center justify-center shadow-lg animate-bounce-short">
          <Award className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {isBangla ? "পাঠ সম্পন্ন হয়েছে!" : "Lesson Completed!"}
          </span>
          <h2 className="text-2xl font-bold text-sand-950 dark:text-sand-50">
            {isBangla ? "আলহামদুলিল্লাহ!" : "Alhamdulillah!"}
          </h2>
          <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
            {isBangla
              ? `আপনি সফলভাবে "${lesson.titleBangla || lesson.title}" সম্পন্ন করেছেন। মাশাআল্লাহ! আপনার দক্ষতা প্রতিদিন বৃদ্ধি পাচ্ছে।`
              : `You have successfully completed ${lesson.title}. Your reading skills are growing stronger every day.`}
          </p>
        </div>

        {/* XP Awarded */}
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>{isBangla ? "+৫০ নলেজ এক্সপি অর্জিত" : "+50 Knowledge XP Earned"}</span>
        </div>

        {/* Actions */}
        <div className="space-y-2.5">
          {hasNextLesson ? (
            <Link
              href={`/learn/${nextLessonKey}`}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all min-h-[44px]"
            >
              <span>
                {isBangla
                  ? `পরবর্তী পাঠ ${lesson.lessonNumber + 1} এ যান (৪টির মধ্যে)`
                  : `Continue to Lesson ${lesson.lessonNumber + 1} of 4`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href={`/quiz/${lesson.quizId}`}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-sand-50 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 text-gold-300" />
              <span>
                {isBangla
                  ? `লেভেল ${lesson.levelId} এর পূর্ণাঙ্গ কুইজ দিন (৩৫টি প্রশ্ন)`
                  : `Take Level ${lesson.levelId} Mastery Quiz (35 Questions)`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          <Link
            href={`/quiz/${lesson.quizId}`}
            className="w-full py-2.5 px-4 rounded-xl bg-sand-100 hover:bg-sand-200 dark:bg-night-850 dark:hover:bg-night-800 border border-sand-300 dark:border-night-700 text-sand-800 dark:text-sand-200 font-medium text-xs flex items-center justify-center gap-2 transition-all min-h-[44px]"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>
              {isBangla ? `লেভেল ${lesson.levelId} কুইজে যান` : `Jump to Level ${lesson.levelId} Quiz`}
            </span>
          </Link>

          <Link
            href="/path"
            className="w-full py-2.5 px-4 rounded-xl bg-sand-200 hover:bg-sand-300 dark:bg-night-800 dark:hover:bg-night-700 text-sand-800 dark:text-sand-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors min-h-[44px]"
          >
            <span>{isBangla ? "লার্নিং পাথে ফিরে যান" : "Return to Learning Path"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
