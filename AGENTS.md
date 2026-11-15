# 🤖 AGENTS.md — AI Agent & Developer Operating Manual

> **Repository**: `QuranPath (learn-arabic)`  
> **Framework**: Next.js 14 App Router, TypeScript (Strict), Tailwind CSS  
> **Target Audience**: AI Agents (Antigravity, Claude Code, Cursor, Copilot) & Human Contributors  

This document defines the mandatory operating guidelines, architectural constraints, and verification protocols for creating code, refactoring modules, and adding features to the QuranPath platform. Any AI agent or developer working in this repository must strictly adhere to these instructions.

---

## 🏛️ 1. Core Principles

### 1.1 Strict 5-Layer Separation of Concerns
QuranPath enforces a strict 5-layer separation of concerns. Every file in the repository belongs to exactly one layer with clearly bounded responsibilities:

1. **Presentation / View Layer (`src/app/`, `src/components/`)**:
   - **Strictly for rendering and display only ("only for printing/rendering")**.
   - **Zero** inline business logic, mathematical calculations, timers, audio synthesis calls, or schema definitions.
   - Page components (`page.tsx`) must be thin orchestrators (<80 lines) that invoke custom hooks and render presentation components.
   - UI blocks are decomposed into small, single-responsibility subcomponents (<300 lines).
   - Preserves 100% UI Bangla localization via `translations` dictionary and dynamic props.
2. **Custom Hooks Layer (`src/hooks/`)**:
   - Encapsulates all React state (`useState`, `useEffect`, `useCallback`, `useMemo`), timer lifecycles, and user action handlers.
   - Acts as the pure interface contract between presentation components and domain services.
   - Returns clean, consumable data structures and callback functions to views.
3. **Schemas & Validation Layer (`src/schemas/`)**:
   - Defensive runtime validation schemas and type guards (`progressSchema.ts`, `preferencesSchema.ts`, `curriculumSchema.ts`).
   - Validates all external, storage, or untrusted inputs before consumption by domain logic.
4. **Domain Services & Utilities Layer (`src/lib/`, `src/services/`)**:
   - Headless audio playback engine (`audioService.ts`), persistence storage sync (`storage.ts`), offline cache manager (`offlineManager.ts`), bilingual dictionaries (`translations.ts`), and pure math/string utilities (`utils.ts`, `confetti.ts`, `progressUtils.ts`).
   - Completely decoupled from React and JSX; 100% unit-testable.
5. **Types Layer (`src/types/index.ts` / `@/types`)**:
   - Single source of truth for all domain models, curriculum entities, user progress states, and UI prop contracts.

### 1.2 DRY Principle (Don't Repeat Yourself) & Zero Duplication
- **Zero Duplication**: Duplicating business logic, calculations, or repeated visual structures across multiple files is strictly forbidden.
- Any function, calculation, or mapping used in two or more places must be centralized in `src/lib/utils.ts` and exported via `@/utils`.
- Any recurring visual pattern (badges, stat cards, metric pills) must be encapsulated into a reusable component (e.g., `DifficultyBadge`, `RuleBadge`, `StatCard`).

---

## 📦 2. Type System Rules (`src/types/index.ts` or `@/types`)

1. **Single Source of Truth**:
   - All data models, interfaces, prop contracts, and context types must reside in `src/types/index.ts`.
   - Always import types using the centralized path alias:
     ```typescript
     import type { LearningLevel, QuizQuestion, LessonSlide, UserProgress } from "@/types";
     ```
2. **Strict Prohibition Against Inline Types**:
   - Do **not** declare domain interfaces or types (e.g., `interface QuizQuestion { ... }`) directly in page or data files.
   - Only localized component prop interfaces (e.g., `interface HomeHeroProps { ... }`) may be declared inside presentation component files if they are strictly private to that single component.

---

## 🛠️ 3. Utility & Services Rules (`src/lib/utils.ts` or `@/utils`)

1. **Centralized Utilities**:
   - All math calculations, date formatting, progress algorithms, and text transformations belong in `src/lib/utils.ts`.
   - Access utilities directly via the `@/utils` alias:
     ```typescript
     import { cn, toBanglaNumber, formatMinutes, getDifficultyLabel, getOptionLabel } from "@/utils";
     ```
2. **Headless Domain Services**:
   - Non-trivial workflows (audio synthesis, storage read/write with versioning, service worker cache control) must be encapsulated in dedicated service modules under `src/lib/`.
3. **Rule for New Helpers**:
   - Never write inline math or ad-hoc calculation functions inside `.tsx` files. Extract the calculation into a pure, testable helper in `src/lib/utils.ts`.

---

## 🧩 4. Component Division & UI Rules

1. **Presentation-Only Responsibility & Sizing**:
   - Components must strictly receive data and callbacks via props and output JSX.
   - Any presentation component approaching or exceeding **300 lines** must be decomposed into focused subcomponents.
   - Use domain-specific subcomponent directories:
     - `src/components/home/*`
     - `src/components/path/*`
     - `src/components/lesson/*`
     - `src/components/quiz/*`
     - `src/components/practice/*`
     - `src/components/progress/*`
     - `src/components/profile/*`
     - `src/components/offline/*`
     - `src/components/pwa/*`
     - `src/components/navbar/*`
     - `src/components/footer/*`
     - `src/components/level/*`
2. **Touch Targets & Responsive Layout**:
   - Every button, tab, and interactive touchpoint must have a minimum touch target height of `min-h-[44px]`.
   - The user interface must support mobile viewports down to **320px** with **zero horizontal overflow** (`overflow-x`).
   - All touch targets must provide clear visual active/focus states.

---

## 🌐 5. Language & Localization Boundaries

1. **Developer-Facing Language (English Only)**:
   - All developer documentation (`README.md`, `AGENTS.md`, `REQUIREMENTS.md`, `CONTRIBUTING.md`) must be in English.
   - All code-level documentation, docstrings, internal comments, and variable/function identifiers must be written strictly in **English**.
2. **Bangla-First User Interface**:
   - The default user-facing application language is Bangla (`bn`).
   - All lesson text, Tajweed rules, Makhraj explanations, and quiz questions must be natively available in authentic Bangla.
3. **Bilingual Support Standard**:
   - When rendering text in components, adhere to the bilingual pattern:
     ```typescript
     {isBangla ? banglaText : englishText}
     ```
   - For static UI strings, use the centralized `translations` dictionary from `src/lib/translations.ts`.
4. **Eastern Arabic / Bangla Numerals**:
   - Whenever numbers (scores, level numbers, questions counts, streaks, percentages) are displayed in Bangla UI mode, format them with `toBanglaNumber`:
     ```typescript
     <span>{isBangla ? toBanglaNumber(value) : value}</span>
     ```

---

## 🔄 6. Mandatory Verification Protocol

After completing any change, the agent must execute the following verification sequence in order:

```bash
# 1. Verify TypeScript compilation
npx tsc --noEmit

# 2. Verify Next.js production build
npm run build

# 3. Inspect Git status
git status

# 4. Commit and push with Conventional Commits
git add .
git commit -m "<type>(<scope>): <clear descriptive message in present tense>"
git push origin main
```

> ⚠️ **Strict Zero-Tolerance Policy**: If `npx tsc --noEmit` or `npm run build` produces any error or warning, you are strictly prohibited from committing or pushing code. You must diagnose and resolve the issue immediately before proceeding.

---

## 🚫 7. Strict DONTs

- ❌ **DONT put business logic in views**: Never place state machines, math calculations, timers, or audio APIs inside page or `.tsx` component files.
- ❌ **DONT declare inline types**: Never scatter ad-hoc type or interface declarations across component or data files; always centralize them in `@/types`.
- ❌ **DONT duplicate logic**: Never copy-paste functions, mappings, or repetitive UI blocks; extract to `@/utils` or shared components.
- ❌ **DONT write non-English comments**: Never write Bengali or non-English code comments, docstrings, variable names, or git commit messages.
- ❌ **DONT break Bangla UI**: Never hardcode English strings into user-facing views without bilingual fallback support, and never omit `toBanglaNumber` for numbers in Bangla mode.
- ❌ **DONT delete error boundaries**: Never delete or bypass Next.js error handling pages (`not-found.tsx`, `error.tsx`, `global-error.tsx`).
- ❌ **DONT break 100% offline capability**: Never introduce un-cached external CDNs, un-cached fonts, or synchronous third-party APIs that fail when offline.
- ❌ **DONT commit without verification**: Never commit or push changes without confirming that `npx tsc --noEmit` and `npm run build` pass with 0 errors.
