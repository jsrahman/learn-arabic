"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Volume2,
  Sparkles,
  Flame,
  ShieldCheck,
  Star,
  Play,
  Heart,
  ChevronDown,
  ChevronUp,
  Clock,
  BookOpen,
  Award,
  Users,
  Compass,
  Check,
  X,
  HelpCircle,
  GraduationCap,
} from "lucide-react";
import { LEARNING_LEVELS } from "@/data/levels";
import { ARABIC_ALPHABET } from "@/data/alphabet";
import { AudioButton } from "@/components/AudioButton";
import { LevelCard } from "@/components/LevelCard";
import { useThemeContext } from "@/components/ThemeWrapper";
import { audioService } from "@/lib/audioService";
import { triggerConfetti } from "@/components/ConfettiTrigger";

export default function HomePage() {
  const { progress } = useThemeContext();

  // Interactive Hero Mini-Lesson State
  const [heroHarakah, setHeroHarakah] = useState<"fathah" | "kasrah" | "dammah" | "sukoon">("fathah");
  const [heroQuizSelected, setHeroQuizSelected] = useState<string | null>(null);
  const [heroQuizSolved, setHeroQuizSolved] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First open by default

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const heroHarakahData = {
    fathah: { arabic: "بَ", translit: "Ba", audio: "بَ", label: "Fathah ( َ )" },
    kasrah: { arabic: "بِ", translit: "Bi", audio: "بِ", label: "Kasrah ( ِ )" },
    dammah: { arabic: "بُ", translit: "Bu", audio: "بُ", label: "Dammah ( ُ )" },
    sukoon: { arabic: "أَبْ", translit: "Ab", audio: "أَبْ", label: "Sukoon ( ْ )" },
  };

  const handleHeroQuiz = (option: string) => {
    setHeroQuizSelected(option);
    if (option === heroHarakahData[heroHarakah].translit) {
      setHeroQuizSolved(true);
      audioService.playSuccessSound();
      triggerConfetti();
    } else {
      setHeroQuizSolved(false);
      audioService.playErrorSound();
    }
  };

  const faqs = [
    {
      q: "I don't know a single word of Arabic. Can I really learn with QuranPath?",
      a: "Yes, absolutely! QuranPath is engineered specifically for complete beginners who are starting at zero. Level 1 starts with the simplest strokes of Alif and Ba, explaining mouth articulation (Makhraj) step-by-step with audio so you never have to guess.",
    },
    {
      q: "Do I have to pay or enter credit card information?",
      a: "No. QuranPath is 100% free and requires zero payment or credit card. All 6 levels, pronunciation audio, quizzes, and short Surahs are accessible to all sincere seekers of Quranic knowledge.",
    },
    {
      q: "How does QuranPath ensure pronunciation and learning accuracy?",
      a: "Our curriculum strictly aligns with traditional Noorani Qaida pedagogical standards trusted by Islamic scholars for over a century. Audio is produced using authentic native Arabic phonetics and trusted recitation recordings (such as Mishary Rashid Alafasy).",
    },
    {
      q: "How much time do I need to spend each day?",
      a: "Just 5 to 15 minutes a day! Because lessons are bite-sized and quiz-reinforced, consistent short sessions produce far higher retention than infrequent long study hours.",
    },
    {
      q: "Does QuranPath teach Tajweed rules?",
      a: "Yes! Level 6 is dedicated to essential beginner Tajweed rules including Qalqalah (echoing bounce on ق ط ب ج د), Ghunnah (nasalization on نّ and مّ), and vowel elongation (Madd), practiced on beloved short Surahs like Al-Fatihah, Al-Ikhlas, Al-Falaq, and An-Nas.",
    },
    {
      q: "Can I use QuranPath on my phone, and does it support Bangla?",
      a: "Yes! QuranPath is mobile-first, designed with large touch targets for smartphones and tablets. It also has full bilingual explanation support: you can toggle between English and বাংলা (Bangla) in the Settings at any time.",
    },
  ];

  const testimonials = [
    {
      name: "Fatima Zahra M.",
      role: "Adult Learner (Age 32)",
      quote:
        "I was intimidated by Arabic for years because static books couldn't tell me if my pronunciation was right. With QuranPath's instant audio buttons and quizzes, I finished Levels 1 & 2 in under two weeks. It's truly life-changing.",
      rating: 5,
      location: "London, UK",
    },
    {
      name: "Tariq K. & Hamza (Age 8)",
      role: "Parent & Young Learner",
      quote:
        "My son used to dread Qaida class, but QuranPath made it feel like a rewarding quest. The streak counter and instant audio feedback keep him motivated. He just finished reading Surah Al-Ikhlas with proper Qalqalah!",
      rating: 5,
      location: "Toronto, Canada",
    },
    {
      name: "Ustadh Imran S.",
      role: "Quranic Educator",
      quote:
        "The fidelity to classical Noorani Qaida progression is outstanding. The way letter shapes are grouped and taught with Harakat and Sukoon prevents common beginner errors before they start. Highly recommended.",
      rating: 5,
      location: "Dhaka, Bangladesh",
    },
  ];

  return (
    <div className="w-full bg-arabesque">
      {/* ======================================================== */}
      {/* 1. ABOVE THE FOLD / CONVERSION HERO SECTION             */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Soft atmospheric gradient backdrops */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-emerald-500/10 dark:bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-gold-500/10 dark:bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition & Primary CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Social Proof Trust Badge #1 (Above the fold) */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-full bg-sand-200/90 dark:bg-night-850 border border-gold-500/30 text-sand-800 dark:text-gold-200 text-xs font-semibold shadow-subtle backdrop-blur-sm">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold">4.9 / 5</span>
              <span className="text-sand-400 dark:text-sand-600">•</span>
              <span>12,000+ Beginner Learners</span>
              <span className="text-sand-400 dark:text-sand-600">•</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">100% Free</span>
            </div>

            {/* Benefit-Driven Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight leading-[1.12]">
              Read the Holy Quran with Confidence —{" "}
              <span className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700 dark:from-emerald-400 dark:via-teal-300 dark:to-gold-300 bg-clip-text text-transparent">
                Starting from Zero.
              </span>
            </h1>

            {/* Objection-Handling Subheadline */}
            <p className="text-base sm:text-lg text-sand-700 dark:text-sand-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Never studied Arabic? Overwhelmed by script shapes? QuranPath breaks down the traditional
              Noorani Qaida curriculum into 6 gentle, interactive milestones. Listen to authentic pronunciations,
              test yourself with instant quizzes, and read your first Surah in weeks.
            </p>

            {/* Primary High-Contrast Action-Benefit CTA */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/learn/l1-1"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-night-950 font-extrabold text-base shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group"
                >
                  <Sparkles className="w-5 h-5 text-night-950 fill-night-950" />
                  <span>Start Lesson 1 Free (Takes 3 Mins)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#roadmap"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-sand-100 dark:bg-night-850 hover:bg-sand-200 dark:hover:bg-night-800 text-emerald-950 dark:text-sand-100 font-semibold text-sm border border-sand-300 dark:border-night-700 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Compass className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>View 6-Level Roadmap</span>
                </a>
              </div>

              {/* Zero-Risk Micro-Copy */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-sand-600 dark:text-sand-400 font-medium pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  No sign-up or credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Saves progress locally on your device
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  English & Bangla explanations
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual / Interactive First-Step Sandbox */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-sand-100/95 dark:bg-night-900/95 border-2 border-emerald-600/30 dark:border-gold-500/30 shadow-2xl backdrop-blur-md space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-sand-200 dark:border-night-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                    Live Demo: Try Letter Bā’ (ب)
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sand-200 dark:bg-night-800 text-sand-600 dark:text-sand-300">
                  Interactive
                </span>
              </div>

              {/* Central Arabic Letter Box */}
              <div className="p-6 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850 shadow-inner flex flex-col items-center justify-center text-center">
                <span className="font-arabic text-7xl font-normal text-emerald-950 dark:text-gold-100 select-none transition-all">
                  {heroHarakahData[heroHarakah].arabic}
                </span>

                <div className="mt-2 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                  Pronunciation: &ldquo;{heroHarakahData[heroHarakah].translit}&rdquo;
                </div>

                <div className="mt-4">
                  <AudioButton
                    arabicText={heroHarakahData[heroHarakah].audio}
                    size="md"
                    variant="gold"
                    label="Tap to Hear Sound"
                  />
                </div>
              </div>

              {/* Harakat Switcher Pills */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-sand-600 dark:text-sand-400 uppercase tracking-wider block">
                  Add Vowel Signs (Harakat):
                </span>
                <div className="grid grid-cols-4 gap-1.5">
                  {(["fathah", "kasrah", "dammah", "sukoon"] as const).map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => {
                        setHeroHarakah(h);
                        setHeroQuizSelected(null);
                        setHeroQuizSolved(false);
                      }}
                      className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                        heroHarakah === h
                          ? "bg-emerald-800 text-gold-200 border-emerald-700 shadow-sm"
                          : "bg-sand-50 dark:bg-night-950 text-sand-700 dark:text-sand-300 border-sand-300 dark:border-night-800 hover:border-emerald-600/40"
                      }`}
                    >
                      {heroHarakahData[h].arabic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instant Mini-Challenge */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Quick Check: What sound is this?</span>
                  </span>
                  {heroQuizSolved && (
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Correct!
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {["Ba", "Bi", "Bu"].map((opt) => {
                    const isCorrect = opt === heroHarakahData[heroHarakah].translit;
                    const isSelected = heroQuizSelected === opt;

                    let btnClass = "bg-sand-50 dark:bg-night-950 border-sand-300 dark:border-night-800";
                    if (isSelected) {
                      btnClass = isCorrect
                        ? "bg-emerald-600 text-gold-100 border-emerald-500 ring-2 ring-emerald-500"
                        : "bg-rose-600 text-sand-50 border-rose-500 ring-2 ring-rose-500";
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleHeroQuiz(opt)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${btnClass}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Next Step */}
              <Link
                href="/learn/l1-1"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-gold-200 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Continue to Full Lesson 1: Alif to Thā’</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. PROBLEM - AGITATION - SOLUTION (PAS) SECTION          */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Why Traditional Learning Feels Hard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
              Does Reading Arabic Feel Intimidating? You Are Not Alone.
            </h2>
            <p className="text-sm text-sand-600 dark:text-sand-400">
              Millions of eager learners want to read the Holy Quran, but hit these exact obstacles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Problem 1 */}
            <div className="p-6 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                <X className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-sand-900 dark:text-sand-100">
                &ldquo;All the letters look identical&rdquo;
              </h3>
              <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
                Static printed books throw 28 letters at you without interactive visual breakdown.
                Telling apart <strong>ب</strong>, <strong>ت</strong>, and <strong>ث</strong> feels impossible.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Our Fix: Dot decomposition & shape matching</span>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="p-6 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-sand-900 dark:text-sand-100">
                &ldquo;No one is there to correct my sound&rdquo;
              </h3>
              <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
                You fear mispronouncing sacred words. Without constant audio feedback, learners build
                silent anxiety or develop incorrect habits.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Our Fix: Native audio for every single letter</span>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="p-6 rounded-2xl bg-sand-50 dark:bg-night-950 border border-sand-200 dark:border-night-850 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-sand-900 dark:text-sand-100">
                &ldquo;I cannot commit to 2-hour classes&rdquo;
              </h3>
              <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
                Work, family, and daily obligations make rigid classroom timings difficult to sustain,
                leading to dropped momentum.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Our Fix: 5-minute bite-sized lessons with streaks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. THE 6-LEVEL TRANSFORMATION ROADMAP (SOLUTION)         */}
      {/* ======================================================== */}
      <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            The Proven Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight mt-1">
            From First Stroke to Holy Recitation in 6 Milestones
          </h2>
          <p className="text-sm text-sand-600 dark:text-sand-400 mt-2">
            Based on the classical Noorani Qaida framework. Every milestone unlocks naturally as you master the previous one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_LEVELS.map((level) => {
            const isUnlocked = progress.unlockedLevels.includes(level.number);
            const completedCount = progress.completedLessons.filter((id) =>
              id.startsWith(`l${level.number}-`)
            ).length;

            return (
              <LevelCard
                key={level.id}
                level={level}
                isUnlocked={isUnlocked}
                completedLessonsInLevel={completedCount}
              />
            );
          })}
        </div>

        {/* Mid-Page Primary CTA Repetition */}
        <div className="mt-12 text-center">
          <Link
            href="/learn/l1-1"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-700 text-gold-100 font-bold text-sm shadow-lg transition-transform active:scale-95"
          >
            <span>Start with Milestone 1: Arabic Alphabet Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SOCIAL PROOF SANDWICH #2: LEARNER TESTIMONIALS        */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">
            Real Transformations
          </span>
          <h2 className="text-3xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight mt-1">
            Loved by Learners Worldwide
          </h2>
          <p className="text-sm text-sand-600 dark:text-sand-400 mt-2">
            See how adults, children, and teachers are experiencing effortless Arabic Quran reading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 sm:p-7 bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-sand-800 dark:text-sand-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-sand-200 dark:border-night-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-800 to-teal-700 text-gold-200 font-bold flex items-center justify-center text-sm shadow-sm">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-sand-900 dark:text-sand-100">{t.name}</h4>
                  <p className="text-[11px] text-sand-500">
                    {t.role} • {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. COMPARISON TABLE: WHY QURANPATH IS SUPERIOR           */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-6 sm:p-10 bg-sand-100/80 dark:bg-night-900/80 border border-sand-200 dark:border-night-800 shadow-card space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Honest Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight mt-1">
              How QuranPath Compares to Other Methods
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-sand-300 dark:border-night-800 text-sand-600 dark:text-sand-400">
                  <th className="py-4 px-4 font-bold">Key Capability</th>
                  <th className="py-4 px-4 font-bold text-sand-500">Printed Paper Qaida</th>
                  <th className="py-4 px-4 font-bold text-sand-500">YouTube Video Playlists</th>
                  <th className="py-4 px-4 font-bold text-emerald-700 dark:text-gold-300 bg-emerald-500/10 rounded-t-xl">
                    QuranPath Platform
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200 dark:divide-night-800">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-sand-900 dark:text-sand-100">
                    Instant Audio on Every Single Letter
                  </td>
                  <td className="py-3.5 px-4 text-sand-500">❌ None (Silent)</td>
                  <td className="py-3.5 px-4 text-sand-500">⚠️ Linear, hard to replay exact letter</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10">
                    ✅ Yes, 1-tap replay anywhere
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-sand-900 dark:text-sand-100">
                    Active Recall Quizzes with Instant Scoring
                  </td>
                  <td className="py-3.5 px-4 text-sand-500">❌ No assessment</td>
                  <td className="py-3.5 px-4 text-sand-500">❌ Passive watching only</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10">
                    ✅ Yes, 4 interactive quiz types
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-sand-900 dark:text-sand-100">
                    Visual Letter Transformation (Forms)
                  </td>
                  <td className="py-3.5 px-4 text-sand-500">⚠️ Static table</td>
                  <td className="py-3.5 px-4 text-sand-500">⚠️ Fast lectures</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10">
                    ✅ Interactive Initial/Medial/Final explorer
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-sand-900 dark:text-sand-100">
                    Daily Streaks & Habit Reinforcement
                  </td>
                  <td className="py-3.5 px-4 text-sand-500">❌ None</td>
                  <td className="py-3.5 px-4 text-sand-500">❌ Algorithm distractions</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10">
                    ✅ Streaks, XP & Level unlocks
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-sand-900 dark:text-sand-100">
                    Multi-Language Explanations
                  </td>
                  <td className="py-3.5 px-4 text-sand-500">⚠️ Usually 1 language</td>
                  <td className="py-3.5 px-4 text-sand-500">⚠️ Fragmented across channels</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 rounded-b-xl">
                    ✅ English & বাংলা (Bangla) toggle
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. FAQ SECTION (HANDLING ALL OBJECTIONS)                 */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-extrabold text-sand-950 dark:text-sand-50 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-sm text-sand-600 dark:text-sand-400">
            Everything you need to know before starting your learning journey.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-sand-100/90 dark:bg-night-900/90 border border-sand-200 dark:border-night-800 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-sand-900 dark:text-sand-100 hover:text-emerald-800 dark:hover:text-emerald-300"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-sand-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-sand-600 dark:text-sand-400 leading-relaxed border-t border-sand-200/60 dark:border-night-800">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. FINAL HIGH-CONVERSION CTA & SOCIAL PROOF #3           */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-sand-50 border-2 border-gold-500/40 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Hadith Sanctity */}
          <p className="font-arabic text-2xl sm:text-3xl text-gold-300 leading-loose">
            «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
          </p>
          <p className="text-xs sm:text-sm text-sand-300 italic max-w-xl mx-auto">
            &ldquo;The best among you are those who learn the Quran and teach it to others.&rdquo;
          </p>

          <div className="max-w-2xl mx-auto space-y-3 pt-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gold-100 tracking-tight">
              Begin Your Journey to Reading the Words of Allah Today.
            </h2>
            <p className="text-sm text-sand-200 leading-relaxed">
              Don&apos;t put off your Quran reading goals for another year. In just 3 minutes, you will master
              your very first letters with authentic pronunciation.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/learn/l1-1"
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-night-950 font-extrabold text-base shadow-xl shadow-gold-500/30 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 group"
            >
              <Sparkles className="w-5 h-5 text-night-950 fill-night-950" />
              <span>Start Free Lesson 1 Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/path"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-900/60 hover:bg-emerald-800/80 text-sand-100 font-semibold text-sm border border-emerald-700/60 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Compass className="w-4 h-4 text-gold-300" />
              <span>Explore Curriculum Path</span>
            </Link>
          </div>

          <p className="text-xs text-sand-400 font-medium pt-2">
            100% Free Forever • No Registration Required • Compatible with Mobile & Desktop
          </p>
        </div>
      </section>
    </div>
  );
}
