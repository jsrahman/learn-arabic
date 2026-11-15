# 📖 QuranPath (কুরআনপাঠ)
> **Master Quranic Arabic Reading & Tajweed from Scratch — Progressive Web Application (PWA)**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25%20Offline%20Ready-emerald)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-amber)](#-license)

QuranPath is an open-source, interactive digital learning platform designed to take learners from the absolute basics of the Arabic alphabet (Noorani Qaida) to complete, authentic recitation of the Holy Quran with precise Tajweed rules. Engineered as a high-performance Progressive Web Application (PWA), QuranPath delivers a **Bangla-first learning experience** with seamless English bilingual toggling, authentic audio pronunciation, 18 structured curriculum levels, 630+ evaluation quizzes, and full offline functionality.

---

## 🌟 Key Features

- **📚 18-Level Structured Curriculum**:
  - **Tier 1: Foundations (Levels 1–4)**: 28 Arabic letters, dot classification, 17 vocal articulation points (Makharij), connected cursive script forms, and short vowels (Fatḥah, Kasrah, Ḍammah, Sukūn).
  - **Tier 2: Vowels & Orthography (Levels 5–8)**: Tanwīn (double vowels), Shaddah (consonant doubling), Madd Aṣlī (2-count natural prolongation & Līn), and Tafkhīm/Tarqīq (heavy and light letters).
  - **Tier 3: Core Tajweed Rules (Levels 9–12)**: Nūn Sākinah & Tanwīn rules (Iẓhār, Idghām, Iqlāb, Ikhfā’), Mīm Sākinah rules, and Qalqalah echoing mechanics.
  - **Tier 4: Quranic Mastery (Levels 13–18)**: Secondary Madd (4–6 counts), Hamzatul Waṣl vs. Qaṭ‘, Solar/Lunar letters, Waqf (stopping rules), Gharā’ib al-Qur’ān (Imālah, Tashīl, Ishmām, Saktah), and complete Khatm recitation etiquette.
- **🎯 630+ Interactive Quiz Challenges**:
  - 36 verification questions per level across all 18 levels (648 total questions).
  - Multiple choice, audio matching, script form identification, and word building.
  - 70% passing threshold to unlock subsequent levels, supported by an interactive 36-question navigation palette (`QuizNavigator`) and 3-column scoreboard (`QuizScorePill`).
  - Instant rule citations and itemized post-quiz answer reviews.
- **🔊 Triple-Engine Audio Architecture**:
  - Web Speech API integration with native Arabic phoneme synthesis (`ar-SA`).
  - Web Audio API harmonic frequency chime fallback tuned to letter resonant frequencies.
  - Studio-recorded pronunciation streams for alphabet phonemes and EveryAyah Quranic recitations.
- **⚡ 100% Offline-First PWA**:
  - Automated background asset caching after 25 seconds of page interaction.
  - Service worker caching (`quranpath-core-v1.1.0` and `quranpath-audio-v1.0.0`).
  - Installable as a standalone app on iOS (Safari Add to Home Screen), Android (Chrome/Edge), and Desktop.
- **🇧🇩 Bangla-First User Experience**:
  - Native Bengali explanations, linguistic breakdowns, and Eastern Bangla numeral formatting (`toBanglaNumber`) across all stats.
  - Instant one-tap bilingual toggle between Bangla (`bn`) and English (`en`).
- **🎨 Islamic Sand & Night Visual Themes**:
  - Emerald green (`#064E3B`, `#10B981`) and warm gold tones optimized for comfortable reading and contemplation.
  - User-configurable Arabic font sizes (Normal, Large, X-Large) and audio playback speeds (0.75x, 1.0x, 1.25x).

---

## 🏛️ 5-Layer Architectural Design

QuranPath enforces a strict **separation of concerns** where presentation components are strictly view/rendering layers ("only for printing/rendering"), with all business logic, schemas, and state actions decoupled into dedicated modules:

```
src/
├── app/                      # Layer 1: App Router View Orchestrators (Thin shells <80 lines)
│   ├── page.tsx              # Home dashboard & letter playground
│   ├── path/page.tsx         # 18-level visual roadmap
│   ├── learn/[lessonId]/     # Interactive slide viewer
│   ├── quiz/                 # Quiz hub & arena ([quizId])
│   ├── practice/page.tsx     # Makhraj, Harakat & Surah drills
│   ├── progress/page.tsx     # Streak, XP & analytics dashboard
│   ├── profile/page.tsx      # Preferences, theme & offline controls
│   ├── layout.tsx            # Root layout & PWA metadata
│   ├── error.tsx             # Client runtime error boundary
│   ├── global-error.tsx      # Root crash boundary
│   └── not-found.tsx         # Aesthetic 404 boundary
├── components/               # Layer 1: Pure Presentation Components (<300 lines)
│   ├── home/                 # Home page view subcomponents
│   ├── path/                 # Learning path subcomponents
│   ├── lesson/               # Lesson viewer subcomponents
│   ├── quiz/                 # Quiz arena, navigator & score pills
│   ├── practice/             # Practice ground subcomponents
│   ├── progress/             # Analytics charts & gauges
│   ├── profile/              # Settings & storage subcomponents
│   ├── offline/              # Offline indicator & cache modal
│   ├── pwa/                  # PWA install guidance subcomponents
│   ├── navbar/               # Global navigation & language toggle
│   ├── footer/               # Global footer & quick links
│   └── level/                # Level card subcomponents
├── hooks/                    # Layer 2: Custom React Hooks (State, timers, side-effects)
│   ├── useAudioPlayback.ts   # Audio engine state & controls
│   ├── useOfflineManager.ts  # Cache sync & status hook
│   ├── usePWAState.ts        # BeforeInstallPrompt & platform detection
│   ├── useThemeState.ts      # Preferences, progress & hydration
│   ├── useNavbar.ts          # Navigation state & bilingual toggle
│   └── [domainHooks].ts      # useHomeDashboard, useLessonViewer, etc.
├── schemas/                  # Layer 3: Defensive Validation Schemas & Type Guards
│   ├── progressSchema.ts     # UserProgress validator
│   ├── preferencesSchema.ts  # UserPreferences validator
│   └── curriculumSchema.ts   # CurriculumLevel validator
├── lib/                      # Layer 4: Domain Services & Pure Utilities
│   ├── audioService.ts       # SpeechSynthesis & Web Audio API synthesizer
│   ├── storage.ts            # LocalStorage persistence & streak logic
│   ├── offlineManager.ts     # Service worker cache download controller
│   ├── translations.ts       # English & Bangla localization dictionary
│   ├── confetti.ts           # Canvas confetti animation effects
│   └── utils.ts              # cn, toBanglaNumber, formatMinutes, formatters
├── types/                    # Layer 5: Centralized TypeScript System
│   └── index.ts              # Single source of truth for all domain types
└── data/                     # Static Curriculum Datasets
    ├── alphabet.ts           # 28 Arabic letters & articulation points
    ├── levels.ts             # 18 level definitions & objectives
    ├── surahs.ts             # Short Surahs & verse Tajweed rules
    ├── lessons/              # Lesson slides for Tiers 1 through 5
    └── quizzes/              # 18 quiz files (36 questions each = 648 total)
```

---

## 🗺️ Curriculum Overview (18 Levels across 4 Tiers)

| Tier | Level | Title | Arabic Title | Lessons | Minutes | Key Concepts |
|:---:|:---:|:---|:---|:---:|:---:|:---|
| **Tier 1: Foundations** | 1 | Alphabet & Orthography | حُرُوفُ الْهِجَاءِ | 4 | 50m | 28 isolated letters, dot taxonomy, non-connecting letters |
| | 2 | Makhārij al-Ḥurūf | مَخَارِجُ الْحُرُوفِ | 4 | 60m | 17 articulation points, 5 vocal areas (Al-Jawf, Al-Halq, etc.) |
| | 3 | Connected Script | أَشْكَالُ الْحُرُوفِ | 4 | 55m | Initial, medial, final forms & Uthmani ligatures |
| | 4 | Short Vowels & Sukūn | الْحَرَكَاتُ وَالسُّكُونُ | 4 | 55m | Fatḥah, Kasrah, Ḍammah, Sukūn/Jazm stillness |
| **Tier 2: Vowels & Orthography** | 5 | Tanwīn & Nunation | التَّنْوِينُ | 4 | 50m | Double vowels, orthographic Alif, stopping rules |
| | 6 | Shaddah (Tashdīd) | التَّشْدِيدُ | 4 | 55m | Consonant doubling, Ghunnah Mushaddadah, Nabrah |
| | 7 | Madd Aṣlī & Līn | الْمَدُّ الأَصْلِيُّ وَاللِّينُ | 4 | 60m | 2-count natural elongation, Madd Badal, Līn letters |
| | 8 | Tafkhīm & Tarqīq | التَّفْخِيمُ وَالتَّرْقِيقُ | 4 | 65m | Permanently heavy consonants, Raa rules, Lam of Allah |
| **Tier 3: Core Tajweed** | 9 | Nūn Sākinah: Iẓhār & Iqlāb | الإِظْهَارُ وَالإِقْلابُ | 4 | 60m | Throat clarity, 4 exceptions, conversion to Meem |
| | 10 | Nūn Sākinah: Idghām & Ikhfā’ | الإِدْغَامُ وَالإِخْفَاءُ | 4 | 65m | Yarmalūn assimilation, 15 nasalized Ikhfā’ consonants |
| | 11 | Mīm Sākinah Rules | أَحْكَامُ الْمِيمِ السَّاكِنَةِ | 4 | 55m | Idghām, Ikhfā’, and Iẓhār Shafawī precautions |
| | 12 | Qalqalah Mechanics | الْقَلْقَلَةُ | 4 | 50m | Echoing consonants (`قُطْبُ جَدٍّ`), 3 intensity ranks |
| **Tier 4: Quranic Mastery** | 13 | Secondary Madd (Far‘ī) | الْمَدُّ الْفَرْعِيُّ | 4 | 70m | Muttaṣil, Munfaṣil, Lāzim (4–6 counts), ‘Āriḍ li-Sukūn |
| | 14 | Hamzatul Waṣl & Qaṭ‘ | هَمْزَةُ الْوَصْلِ وَالْقَطْعِ | 4 | 55m | Connecting vs. cutting Hamzahs, 3rd-letter verb rule |
| | 15 | Solar/Lunar Lām | اللَّامَاتُ وَالْحُرُوفُ الزَّائِدَةُ | 4 | 50m | 14 Solar vs. 14 Lunar letters, silent calligraphic signs |
| | 16 | Waqf & Recitation Mastery | أَحْكَامُ الْوَقْفِ وَالِابْتِدَاءِ | 4 | 70m | Stopping symbols, Rawm, Ishmām, 4 Saktahs, Tilāwah Sajdahs |
| | 17 | Special Recitation Rules | غَرَائِبُ الْقُرْآنِ | 4 | 75m | Imālah, Tashīl, Ishmām, Naql, Sīn/Ṣād inscriptions |
| | 18 | Grand Khatm Mastery | خَتْمُ الْقُرْآنِ الْكَرِيمِ | 4 | 90m | Makhārij & Ṣifāt synthesis, Waqf Tāmm, Khatm etiquette |

---

## 🚀 Getting Started & Local Development

### Prerequisites
- **Node.js**: `18.17.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/jsrahman/learn-arabic.git
cd learn-arabic
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### 4. Code Quality & Verification
Before submitting contributions, verify that type checks, production builds, and linting succeed:

```bash
# 1. TypeScript compilation check
npx tsc --noEmit

# 2. Production build verification
npm run build

# 3. Next.js ESLint audit
npm run lint
```

---

## 📱 Offline PWA & Deployment

QuranPath is built to function reliably without internet access.

1. **Automatic Caching**: Upon opening the application, core assets, routes, and audio phonemes automatically cache in the background after 25 seconds.
2. **Manual Caching**: Users can open the storage modal from the footer or profile settings to trigger an instant download of all offline targets.
3. **PWA Installation**:
   - **Chrome / Android / Edge**: Click the "Install App" button in the navigation bar or address bar.
   - **iOS Safari**: Tap the **Share** button (`↑`) in Safari, scroll down, and select **"Add to Home Screen"** (`+`).
4. **Vercel / Production Deployment**: Deploy effortlessly to Vercel or any containerized Node.js platform:
   ```bash
   npm run build
   npm run start
   ```

---

## 🤝 Contributing

We welcome contributions from educators, developers, and Quranic Arabic scholars. Please review our guidelines before submitting pull requests:

- Read [CONTRIBUTING.md](./CONTRIBUTING.md) for architectural standards and git workflow.
- Consult [AGENTS.md](./AGENTS.md) for AI agent conventions and view-only component rules.
- Review [REQUIREMENTS.md](./REQUIREMENTS.md) for full functional and non-functional specifications.

---

## 📄 License

QuranPath is distributed under the **MIT License**. See `LICENSE` for details.  
Dedicated to the dissemination of authentic Quranic literacy worldwide.
