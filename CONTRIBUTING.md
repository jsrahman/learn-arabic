# 🤝 Contributing to QuranPath

Thank you for your interest in contributing to **QuranPath**!  
QuranPath is an open-source, progressive web application (PWA) designed to teach Quranic Arabic recitation and authentic Tajweed from the ground up.

We welcome contributions from developers, designers, educators, and language enthusiasts of all backgrounds. This guide outlines everything you need to know to set up your environment, understand our architecture, adhere to our coding conventions, and submit high-quality contributions.

---

## 📜 Table of Contents
1. [Code of Conduct](#-code-of-conduct)
2. [Getting Started & Local Setup](#-getting-started--local-setup)
3. [Branching & Pull Request Workflow](#-branching--pull-request-workflow)
4. [5-Layer Architectural Standard](#-5-layer-architectural-standard)
5. [Component Design & Sizing Rules](#-component-design--sizing-rules)
6. [TypeScript & Coding Conventions](#-typescript--coding-conventions)
7. [Localization & Language Boundaries](#-localization--language-boundaries)
8. [Mandatory Verification Protocol](#-mandatory-verification-protocol)

---

## 🤝 Code of Conduct

QuranPath is dedicated to providing a welcoming, inclusive, and harassment-free environment for everyone. Because this platform teaches sacred Quranic recitation and Islamic educational material:
- **Respect and Reverence**: Handle Quranic verses, Arabic phonetic rules (Makhraj), and Tajweed rulings with scholarly accuracy and respect.
- **Constructive Communication**: Maintain kindness, professional empathy, and open collaboration in issue discussions, PR reviews, and chat channels.
- **Inclusive Community**: We welcome contributors of all skill levels, backgrounds, and identities. Discrimination, harassment, or derogatory comments will not be tolerated.

---

## 💻 Getting Started & Local Setup

### Prerequisites
- **Node.js**: v18.18.0 or higher (Node 20+ recommended)
- **npm**: v9.0.0 or higher
- **Git**: v2.30.0 or higher

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/learn-arabic.git
   cd learn-arabic
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Verify static types and production build**:
   ```bash
   npx tsc --noEmit
   npm run build
   ```

---

## 🌿 Branching & Pull Request Workflow

We follow a structured Git workflow to ensure codebase reliability and clear history.

### 1. Branch Naming Conventions
Always create a descriptive branch for your work:
- `feat/<feature-name>`: New user-facing capabilities or lessons (e.g., `feat/audio-playback-speed`)
- `fix/<bug-description>`: Bug fixes (e.g., `fix/tajweed-badge-contrast`)
- `refactor/<module>`: Structural improvements without behavior change (e.g., `refactor/quiz-arena-decomposition`)
- `docs/<subject>`: Documentation additions or revisions (e.g., `docs/contributing-guide`)
- `chore/<task>`: Dependency updates, build configurations, or tooling (e.g., `chore/bump-tailwindcss`)

### 2. Commit Message Standards (Conventional Commits)
All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```text
<type>(<scope>): <clear descriptive subject in present tense>
```

**Examples**:
- `feat(quiz): add audio matching question type for level 4`
- `refactor(views): decompose home hero into view-only component`
- `fix(responsive): eliminate horizontal scroll on 320px viewport`
- `docs(agents): update architectural guidelines to 5-layer separation`

### 3. Pull Request (PR) Checklist
Before opening a Pull Request:
- [ ] Run `npx tsc --noEmit` and confirm **zero** type errors.
- [ ] Run `npm run build` and confirm **zero** compilation errors.
- [ ] Ensure all new or modified code comments and developer docs are written in **English**.
- [ ] Verify that UI-level Bangla localization, bilingual toggle, and `toBanglaNumber` are preserved.
- [ ] Test the interface on a mobile viewport (minimum 320px width) to ensure zero horizontal scroll and `min-h-[44px]` touch targets.
- [ ] Provide a clear PR description explaining *what* was changed and *why*.

---

## 🏛️ 5-Layer Architectural Standard

QuranPath enforces a strict **5-Layer Separation of Concerns**. This prevents component bloat, simplifies testing, and guarantees maintainability.

```text
src/
├── app/                  # Layer 1: View Orchestrators (Thin shells <80 lines)
├── components/           # Layer 1: Presentation UI Components (Pure rendering only, <300 lines)
├── hooks/                # Layer 2: Custom React Hooks (State, handlers, timers, side-effects)
├── schemas/              # Layer 3: Runtime Validation Schemas & Type Guards
├── lib/                  # Layer 4: Headless Domain Services & Pure Utilities
├── types/                # Layer 5: Centralized TypeScript Definitions (Single source of truth)
└── data/                 # Curriculum Data (Levels, lessons, quizzes, alphabet)
```

### Layer 1: Presentation / View Layer (`src/app/`, `src/components/`)
- **Strict Role**: View/rendering only ("only for printing/rendering").
- **Constraints**:
  - **Zero** inline business logic, math calculations, audio playback management, or schema definitions.
  - Page components (`src/app/**/page.tsx`) must be thin orchestrators (<80 lines) that invoke custom hooks and render presentation components.
  - Components receive data and callbacks via props and return pure JSX.
  - Decomposed into focused, single-responsibility subcomponents organized by domain (e.g., `src/components/home/`, `src/components/quiz/`).

### Layer 2: Custom Hooks Layer (`src/hooks/`)
- **Strict Role**: State management, lifecycle side-effects, timers, and action handlers.
- **Responsibilities**:
  - Connects presentation components to domain services and storage.
  - Manages `useState`, `useEffect`, `useCallback`, `useMemo`, and browser event listeners.
  - Returns clean data models and event callbacks to the view layer.
- **Examples**: `useAudioPlayback`, `useOfflineManager`, `useQuizArena`, `useLearningPath`.

### Layer 3: Schemas & Validation Layer (`src/schemas/`)
- **Strict Role**: Defensive runtime validation and type guards.
- **Responsibilities**:
  - Validates untrusted data loaded from `localStorage`, indexed cache, or external APIs.
  - Safely falls back to valid defaults when encountering corrupted or legacy schema data.
- **Examples**: `progressSchema.ts`, `preferencesSchema.ts`, `curriculumSchema.ts`.

### Layer 4: Domain Services & Utilities Layer (`src/lib/`, `src/services/`)
- **Strict Role**: Headless business logic, platform services, and pure utility functions.
- **Responsibilities**:
  - `src/lib/utils.ts`: Pure mathematical calculations, string formatting, and Tailwind class merging (`cn`).
  - `src/lib/audioService.ts`: Headless Web Speech API and Web Audio API synthesis engine.
  - `src/lib/storage.ts`: Local persistence abstraction for user progress and preferences.
  - `src/lib/offlineManager.ts`: Service Worker and CacheStorage manager.
  - `src/lib/translations.ts`: Comprehensive bilingual localization dictionary.
- **Constraint**: Zero UI/JSX code. Fully decoupled and unit-testable.

### Layer 5: Types Layer (`src/types/index.ts` / `@/types`)
- **Strict Role**: Single source of truth for the entire application.
- **Responsibilities**:
  - Defines all domain models (`LearningLevel`, `LessonSlide`, `QuizQuestion`, `UserProgress`).
  - Defines all UI component prop types and context types.
  - Always import types using the path alias:
    ```typescript
    import type { LearningLevel, QuizQuestion, UserProgress } from "@/types";
    ```
- **Constraint**: **Zero** inline type declarations in page or component files.

---

## 🧩 Component Design & Sizing Rules

1. **Size Guideline**:
   - Presentation subcomponents should be kept under **300 lines**.
   - If a component exceeds 300 lines or addresses more than one visual concern, decompose it into focused subcomponents under a domain folder:
     - `src/components/home/HomeHero.tsx`
     - `src/components/quiz/QuizNavigator.tsx`
     - `src/components/level/LevelCard.tsx`
2. **Touch-Friendly Targets**:
   - Every interactive element (buttons, interactive pills, navigation links) must satisfy a minimum touch target height of `min-h-[44px]`.
3. **Mobile-First Responsiveness**:
   - The user interface must gracefully support viewports down to **320px** with **zero horizontal overflow** (`overflow-x`).
   - Use fluid flex/grid layouts and appropriate padding (`px-3 sm:px-6`).
4. **DRY Principle (Don't Repeat Yourself)**:
   - Never duplicate formatting logic or UI markup.
   - Centralize recurring UI elements into dedicated components (e.g., `DifficultyBadge`, `RuleBadge`, `StatCard`).

---

## 📐 TypeScript & Coding Conventions

- **Strict Typing**: The project runs in strict TypeScript mode (`"strict": true`). Do **not** use `any`. Use `unknown` combined with type guards or schemas when handling dynamic data.
- **Path Aliases**: Always use standardized path aliases:
  - `@/types` for centralized type definitions
  - `@/utils` for pure utility functions
  - `@/hooks` for custom React hooks
  - `@/schemas` for runtime validation schemas
  - `@/lib` for domain services
  - `@/components` for UI components
- **Pure Functions**: Ensure utility functions in `@/utils` are pure and deterministic (given identical inputs, they produce identical outputs without side-effects).
- **Naming Conventions**:
  - Components & Types: `PascalCase` (e.g., `QuizNavigator`, `UserProgress`)
  - Hooks: `camelCase` starting with `use` (e.g., `useAudioPlayback`)
  - Utilities & Services: `camelCase` (e.g., `toBanglaNumber`, `audioService`)
  - Constants: `UPPER_SNAKE_CASE` (e.g., `DEFAULT_PROGRESS`)

---

## 🌐 Localization & Language Boundaries

QuranPath serves a global audience while prioritizing Bengali-speaking learners of Quranic Arabic. We enforce strict boundaries between codebase language and user interface language:

### 1. Developer-Facing Language (English Only)
- **All** code comments, docstrings, variable names, function identifiers, and Git commit messages must be in **English**.
- **All** markdown documentation files (`README.md`, `AGENTS.md`, `REQUIREMENTS.md`, `CONTRIBUTING.md`) must be authored in **English**.

### 2. User-Facing Language (Bangla-First with Bilingual Support)
- The user interface defaults to Bangla (`bn`). All lesson explanations, Tajweed rule guides, button labels, and quiz questions must be available in authentic Bangla.
- Use bilingual rendering patterns:
  ```typescript
  <span>{isBangla ? titleBangla : title}</span>
  ```
  or reference the centralized localization dictionary:
  ```typescript
  const t = translations[isBangla ? "bn" : "en"];
  ```
- **Numerals**: In Bangla mode, always format numbers using the `toBanglaNumber` utility:
  ```typescript
  import { toBanglaNumber } from "@/utils";
  <span>{isBangla ? toBanglaNumber(score) : score}%</span>
  ```

---

## 🔄 Mandatory Verification Protocol

Before submitting a pull request, run the following commands sequentially in your local terminal:

```bash
# 1. Type-check the entire repository
npx tsc --noEmit

# 2. Build the Next.js production bundle
npm run build

# 3. Check Git status for untracked or modified files
git status
```

> ⚠️ **Verification Policy**: Pull Requests will not be reviewed or merged if `npx tsc --noEmit` or `npm run build` fails or outputs warnings. Always resolve all errors locally before pushing.

---

Thank you for contributing to QuranPath and helping learners worldwide master the recitation of the Holy Quran!
