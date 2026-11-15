# 📋 REQUIREMENTS.md — System Requirements & Specifications

> **Project**: QuranPath (learn-arabic)  
> **Status**: Production Ready & Fully Offline Capable  
> **Target Audience**: Quranic Arabic Learners (Bangla-first UI with English bilingual support)  
> **Architecture**: Next.js 14 App Router, TypeScript (Strict), Tailwind CSS, PWA  

---

## 1. Executive Summary & Product Vision

QuranPath is an open-source, offline-first Progressive Web Application (PWA) designed to guide learners from absolute zero to authentic, fluent Quranic recitation with rigorous Tajweed. Combining the pedagogical progression of traditional Noorani Qaida with modern cognitive retention techniques, QuranPath delivers an interactive 18-level curriculum, 630+ assessment questions, an anatomical articulation (Makhraj) visualizer, a triple-engine audio pronunciation system, and zero-latency offline operation.

The application adheres to a strict 5-layer architectural separation of concerns where presentation components remain pure view/rendering layers, while state, schemas, and services are decoupled into dedicated modules.

---

## 2. Functional Requirements (FR)

### FR-1: 18-Level Progressive Curriculum & Learning Path
The system shall deliver a structured 18-level curriculum partitioned into 4 mastery tiers:

- **Tier 1: Foundations of Arabic Orthography & Phonetics (Levels 1–4)**
  - *Level 1 (Alphabet & Orthography)*: 28 Arabic letters in isolated forms, dot taxonomy (13 dotless vs. 15 dotted letters), and the 6 non-connecting letters (`ا د ذ ر ز و`).
  - *Level 2 (Makhārij al-Ḥurūf)*: 17 specific vocal exit points across 5 anatomical regions (Al-Jawf, Al-Halq, Al-Lisan, Ash-Shafatan, Al-Khaishoom).
  - *Level 3 (Connected Script & Ligatures)*: Initial, medial, and final positional forms, cursive letter transformations, and classical Uthmani ligatures (e.g., `لا`, `لم`, `مح`).
  - *Level 4 (Short Vowels & Sukūn Precision)*: Fatḥah, Kasrah, Ḍammah, Sukūn/Jazm consonant stillness, and phonemic vowel purity.
- **Tier 2: Vowels & Orthography (Levels 5–8)**
  - *Level 5 (Tanwīn & Nunation)*: Double vowels (Fatḥatān, Kasratān, Ḍammatān), orthographic stopping Alif, and Tanwīn phonetics.
  - *Level 6 (Shaddah / Tashdīd)*: Consonant doubling, structural syllable timing, Ghunnah Mushaddadah (`نّ` and `مّ`), and Nabrah accentuation.
  - *Level 7 (Madd Aṣlī & Līn)*: Natural 2-count prolongation letters (`ا`, `و`, `ي`), Madd Badal, Ṣilah Ṣughrā, and Līn diphthong consonants.
  - *Level 8 (Tafkhīm & Tarqīq Science)*: Permanently heavy letters (`خ ص ض غ ط ق ظ`), situational heavy/light rules for Raa (`ر`), and the Lam of the Divine Name (Allah).
- **Tier 3: Core Tajweed Rules (Levels 9–12)**
  - *Level 9 (Nūn Sākinah & Tanwīn — Iẓhār & Iqlāb)*: Throat letter clarity (ء, هـ, ع, ح, غ, خ), 4 single-word exceptions, and transformation to hidden Meem before Bā’ (`ب`).
  - *Level 10 (Nūn Sākinah & Tanwīn — Idghām & Ikhfā’)*: Yarmalūn (`يرملون`) consonant assimilation (with/without Ghunnah), and 15 nasalized concealment consonants.
  - *Level 11 (Mīm Sākinah & Ghunnah Scales)*: Idghām Shafawī, Ikhfā’ Shafawī, and Iẓhār Shafawī (with explicit warning at `و` and `ف`).
  - *Level 12 (Qalqalah Mechanics & Ranks)*: Echoing consonant mechanics (`قُطْبُ جَدٍّ`), distinct intensity ranks (Kubrā, Wusṭā, Ṣughrā), and vowel-bias prevention.
- **Tier 4: Quranic Mastery & Advanced Tilāwah (Levels 13–18)**
  - *Level 13 (Secondary Madd / Madd Far‘ī)*: Extended prolongation caused by Hamzah or Sukūn (Muttaṣil, Munfaṣil, Lāzim Kalimī/Ḥarfī, and ‘Āriḍ li-Sukūn).
  - *Level 14 (Hamzatul Waṣl & Hamzatul Qaṭ‘)*: Connecting vs. cutting Hamzahs, third-letter vowel determination rule, and irregular noun forms.
  - *Level 15 (Solar/Lunar Lām & Silent Letters)*: 14 Solar (Idghām) vs. 14 Lunar (Iẓhār) letters, Alif al-Wiqāyah, and zero-vowel calligraphic markers.
  - *Level 16 (Waqf, Ibtidā’ & Punctuation)*: Quranic stopping marks (`م`, `لا`, `ج`, `صلى`, `قلى`), Rawm and Ishmām acoustics, the 4 obligatory Saktahs, and Tilāwah prostrations.
  - *Level 17 (Special Recitation Rules & Gharā’ib al-Qur’ān)*: Hafs ‘an ‘Asim transmission anomalies: Imālah Kubrā (`مَجْرٜىٰهَا`), Tashīl (`ءَ۬اعْجَمِيٌّ`), Ishmām (`تَأْمَ۫نَّا`), Naql, and Sīn/Ṣād inscriptions.
  - *Level 18 (Grand Recitation & Complete Khatm)*: Synthesis of Makhārij and Ṣifāt, Waqf Tāmm, 14 Tilāwah Sajdahs, and authentic Khatm al-Quran protocols.

### FR-2: Interactive Lesson Viewer & Checkpoint System
- Each level shall contain 4 guided lesson modules with progressive slides (`LessonSlide`).
- Slides shall display high-contrast Arabic typography with full Tashkeel, phonetic transliterations, contextual Bengali linguistic explanations, and real-world script examples.
- Every lesson slide shall feature a validation Checkpoint Question (`checkQuestion`) providing instant affirmative or constructive remedial feedback upon selection.
- Touch-accessible navigation controls (`min-h-[44px]`) shall support previous/next step traversal and progress synchronization.

### FR-3: 630+ Question Assessment Engine & Scoring System
- The evaluation engine shall feature an inventory of 648 questions (36 questions per level across 18 levels).
- The engine shall support four distinct interactive question formats:
  1. Multiple Choice (`multiple_choice`): Visual phonetics and rule selection.
  2. Audio Match (`audio_match`): Aural phoneme identification.
  3. Form Match (`form_match`): Positional cursive stroke recognition.
  4. Word Builder (`word_builder`): Letter assembly drills.
- **Progression Gate**: Unlocking subsequent curriculum levels requires attaining a minimum score of **70%** on the active level's assessment.
- The interface shall supply an interactive 36-question palette (`QuizNavigator`) and a dynamic 3-column scoreboard (`QuizScorePill`) highlighting correct, incorrect, and remaining counts.
- Upon completion, the engine shall render an itemized rule-by-rule review breakdown citing exact Tajweed rule tags (`ruleTag`).

### FR-4: Interactive Practice Ground & Quranic Recitation Hub
- **Makhraj Directory**: Interactive categorization of letters across the 5 anatomical exit points with audio triggers and physiological diagrams.
- **Harakat Drill Matrix**: Interactive grid evaluating consonant-vowel combinations across 8 sample letters with Fatḥah, Kasrah, Ḍammah, and Sukūn.
- **Short Surah Recitation**: Recitation drill containing the final essential Surahs (Al-Fātiḥah, Al-Ikhlāṣ, Al-Falaq, An-Nās) with verse-by-verse audio streams, phonetic transliterations, translations, and verse-level Tajweed notes.
- **Sensory Reinforcement**: Particle confetti animations (`canvas-confetti`) paired with harmonic audio feedback upon milestone achievements.

### FR-5: Progress Tracking, Gamification & Client-Side Sync
- User state shall persist locally in `localStorage` without requiring user accounts or third-party server synchronization.
- Tracked metrics:
  - Completed lesson IDs (`completedLessons`)
  - Unlocked curriculum levels (`unlockedLevels`)
  - Quiz score records mapped by quiz ID (`quizScores`)
  - Mastered alphabet letters (`masteredLetters`)
  - Active learning streak count (`streakDays`) and calendar tracking (`lastActiveDate`)
  - Cumulative practice minutes (`totalMinutesPracticed`) and XP points (`xpPoints`)
- Streak tracking algorithm shall reward daily engagement, maintain streaks across same-day logins, and handle reset gracefully upon a missed day.
- Visual progress displays: Header streak pill, XP badge, level completion bars (`calculateProgress`), and a centralized analytics dashboard (`/progress`).

### FR-6: Bilingual Interface & Multi-Engine Audio Playback
- **Bangla-First Experience**: Default UI language is Bangla (`bn`), with complete bilingual toggle to English (`en`) via `translations.ts`.
- **Eastern Arabic/Bangla Numerals**: All numerical stats (streaks, minutes, levels, quiz counts) shall format as Eastern Bangla numerals (`০-৯`) in Bangla mode via `toBanglaNumber()`.
- **Triple-Engine Audio Architecture**:
  1. Primary: Browser SpeechSynthesis using native `ar-SA` voice engines.
  2. Fallback: Web Audio API oscillator synthesizing harmonic pentatonic chimes tuned to letter resonance frequencies.
  3. Studio Stream: Direct HTML5 audio streaming of authentic alphabet MP3s and EveryAyah recitations.
- **User Customization**: Preferences allow user tuning of audio speed (0.75x, 1.0x, 1.25x), audio auto-play, Arabic font size scaling (Normal, Large, X-Large), and theme mode (Light Sand vs. Dark Night).

---

## 3. Non-Functional Requirements (NFR)

### NFR-1: Performance & Lightweight Footprint
- **Static Pre-rendering**: All core application routes (`/`, `/path`, `/practice`, `/quiz`, `/progress`, `/profile`) shall pre-render statically at build time using Next.js 14 App Router.
- **Bundle Budget**: Initial client JavaScript bundle shall remain under 150 KB First Load JS.
- **Low Overhead**: Dependency tree strictly limited to essential packages (`lucide-react`, `canvas-confetti`, `clsx`, `tailwind-merge`). Zero bulky UI component frameworks.
- **Instant Latency**: Cached page transitions and audio playback shall trigger with under 50ms interaction latency.

### NFR-2: Accessibility, Mobile-First Layout & Touch Targets
- **Zero Horizontal Overflow**: Interface must remain 100% responsive down to 320px viewport width without horizontal scrollbars (`overflow-x: hidden`).
- **Touch Target Standard**: All interactive buttons, tabs, audio triggers, and quiz choices shall uphold a minimum touch area of 44×44px (`min-h-[44px]`).
- **Contrast & Legibility**: Visual palettes (Sand `#FAF8F5` light theme and Night `#0E1713` dark theme) shall maintain WCAG 2.1 AA compliant contrast ratios against emerald (`#064E3B`, `#10B981`) and gold accent tones.
- **ARIA & Assistive Tech**: Buttons, dialogs, progress bars, and audio controls shall supply accessible labels and semantic roles.

### NFR-3: Separation of Concerns & Type Safety
- **Strict 5-Layer Architectural Model**:
  1. *Presentation Layer* (`src/app/`, `src/components/`): Components strictly handle view rendering ("only for printing/rendering"). Zero inline business logic, math calculations, or schema definitions. Decomposed into focused units under 300 lines.
  2. *Custom Hooks Layer* (`src/hooks/`): Encapsulates React state, timers, side-effects, and UI event handlers.
  3. *Runtime Schemas Layer* (`src/schemas/`): Enforces defensive validation schemas and type guards (`validateUserProgress`, `validateUserPreferences`, `validateCurriculumLevel`).
  4. *Domain Services & Utilities Layer* (`src/lib/`, `src/services/`): Decoupled business logic including `audioService`, `storage`, `offlineManager`, `translations`, and `utils.ts`.
  5. *Centralized Types Layer* (`src/types/index.ts`): Single source of truth for all domain entities, interfaces, and prop contracts.
- **Strict TypeScript**: Compilation under TypeScript 5 strict mode with zero implicit `any` types. `npx tsc --noEmit` must pass with 0 errors.

### NFR-4: Offline-First Reliability & Error Resilience
- **Offline Reliability**: Once cached, 100% of curriculum lessons, quizzes, practice tables, and alphabet audio must function flawlessly without an active internet connection.
- **Automated Service Worker**: Pre-caching manages cache versions `quranpath-core-v1.1.0` and `quranpath-audio-v1.0.0`, initiating automated background caching 25 seconds after page load.
- **Resilient Error Boundaries**:
  - Unhandled client-side runtime errors isolated via `src/app/error.tsx`.
  - Root layout failures handled by `src/app/global-error.tsx`.
  - Missing routes handled by custom aesthetic 404 page `src/app/not-found.tsx`.
- **Defensive Storage Parsing**: Malformed local storage payloads must fall back gracefully to `DEFAULT_PROGRESS` or `DEFAULT_PREFERENCES` without terminating the runtime session.
