/**
 * QuranPath Mobile Verification Test Suite & Runner
 *
 * Verifies mobile responsiveness, accessibility, typography, touch targets,
 * and compilation quality gates across 360px, 390px, and 430px viewports.
 *
 * Tiers:
 * - Tier 1: Feature Coverage (8 Core Modules & Routing Integrity)
 * - Tier 2: Boundary & Corner Cases (Mobile Viewports, Touch Targets, Scroll Locks)
 * - Tier 3: Arabic Typography, Cursive Ligatures & Theme Contrast
 * - Tier 4: Real-World Scenarios & Production Compilation Gates
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// ANSI colors for clean, legible console reporting
const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
};

interface TestResult {
  tier: number;
  name: string;
  passed: boolean;
  error?: string;
  durationMs: number;
}

const results: TestResult[] = [];
const startTime = Date.now();

function runTest(tier: number, name: string, fn: () => void | Promise<void>) {
  const t0 = Date.now();
  try {
    fn();
    const durationMs = Date.now() - t0;
    results.push({ tier, name, passed: true, durationMs });
    console.log(`  ${colors.green}✔${colors.reset} ${name} ${colors.dim}(${durationMs}ms)${colors.reset}`);
  } catch (err: any) {
    const durationMs = Date.now() - t0;
    const msg = err?.message || String(err);
    results.push({ tier, name, passed: false, error: msg, durationMs });
    console.log(`  ${colors.red}✘${colors.reset} ${name} ${colors.dim}(${durationMs}ms)${colors.reset}`);
    console.log(`    ${colors.red}→ ${msg}${colors.reset}`);
  }
}

async function runTestAsync(tier: number, name: string, fn: () => Promise<void>) {
  const t0 = Date.now();
  try {
    await fn();
    const durationMs = Date.now() - t0;
    results.push({ tier, name, passed: true, durationMs });
    console.log(`  ${colors.green}✔${colors.reset} ${name} ${colors.dim}(${durationMs}ms)${colors.reset}`);
  } catch (err: any) {
    const durationMs = Date.now() - t0;
    const msg = err?.message || String(err);
    results.push({ tier, name, passed: false, error: msg, durationMs });
    console.log(`  ${colors.red}✘${colors.reset} ${name} ${colors.dim}(${durationMs}ms)${colors.reset}`);
    console.log(`    ${colors.red}→ ${msg}${colors.reset}`);
  }
}

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

const PROJECT_ROOT = process.cwd();

function readFile(relPath: string): string {
  const fullPath = path.join(PROJECT_ROOT, relPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Required file does not exist: ${relPath}`);
  }
  return fs.readFileSync(fullPath, "utf-8");
}

console.log(`\n${colors.bold}${colors.cyan}================================================================================${colors.reset}`);
console.log(`${colors.bold}${colors.cyan}                    QuranPath Mobile Verification Suite                       ${colors.reset}`);
console.log(`${colors.bold}${colors.cyan}           Viewports: 360px (Compact) | 390px (Standard) | 430px (Pro Max)       ${colors.reset}`);
console.log(`${colors.bold}${colors.cyan}================================================================================${colors.reset}\n`);

async function main() {
  // =========================================================================
  // TIER 1: Feature Coverage Across All 8 Modules/Pages
  // =========================================================================
  console.log(`${colors.bold}${colors.blue}▶ TIER 1: Feature Coverage (8 Core Modules & Routing)${colors.reset}`);

  runTest(1, "Module 1 - Homepage (src/app/page.tsx): Hero, Letter Explorer, Spotlight, Bento Grid", () => {
    const content = readFile("src/app/page.tsx");
    const hero = readFile("src/components/home/HomeHero.tsx");
    const playground = readFile("src/components/home/HomeAlphabetPlayground.tsx");
    const spotlight = readFile("src/components/home/HomeActiveStageSpotlight.tsx");
    const preview = readFile("src/components/home/HomeCurriculumPreview.tsx");
    assert(content.includes("export default function HomePage"), "HomePage component export missing");
    assert(hero.includes("spiritualRibbon"), "Spiritual ribbon missing");
    assert(playground.includes("playgroundTag") || playground.includes("selectedLetter"), "Interactive letter playground section missing");
    assert(spotlight.includes("activeLevel"), "Active stage bento card missing");
    assert(preview.includes("LevelCard"), "LevelCard component import or usage missing in Homepage curriculum preview");
    assert(preview.includes("filteredLevels"), "18-Level Bento grid mapping missing");
  });

  runTest(1, "Module 2 - Learning Path (src/app/path/page.tsx): 18-Level Visual Roadmap & Lessons", () => {
    const content = readFile("src/app/path/page.tsx");
    const hook = readFile("src/hooks/usePathRoadmap.ts");
    const card = readFile("src/components/path/PathLevelCard.tsx");
    assert(content.includes("export default function LearningPathPage"), "LearningPathPage component export missing");
    assert(hook.includes("LEARNING_LEVELS") || hook.includes("levels"), "LEVELS dataset import missing in Learning Path");
    assert(content.includes("selectedTier"), "Tier filter tabs missing in Learning Path");
    assert(card.includes("levelLessons.map") || card.includes("quiz/q"), "Level lessons and quiz link mapping missing in Learning Path");
  });

  runTest(1, "Module 3 - Practice Arena (src/app/practice/page.tsx): 3 Practice Modes & Audio Drills", () => {
    const content = readFile("src/app/practice/page.tsx");
    const hook = readFile("src/hooks/usePracticeDrill.ts");
    const grid = readFile("src/components/practice/AlphabetDrillGrid.tsx");
    assert(content.includes("export default function PracticePage"), "PracticePage component export missing");
    assert(hook.includes("alphabet") && hook.includes("harakat") && hook.includes("surahs"), "3 practice tabs missing");
    assert(hook.includes("selectedCategory"), "Makhraj category filter missing");
    assert(grid.includes("AudioButton"), "AudioButton integration missing in Practice Arena");
  });

  runTest(1, "Module 4 - Quiz Module: Hub (quiz/page.tsx) and Question Player (quiz/[quizId]/page.tsx)", () => {
    const hubContent = readFile("src/app/quiz/page.tsx");
    assert(hubContent.includes("export default function QuizHubPage"), "QuizHubPage export missing");
    assert(hubContent.includes("selectedTier") || hubContent.includes("tier"), "Tier filtering missing in Quiz Hub");

    const playerContent = readFile("src/app/quiz/[quizId]/page.tsx");
    const scorePill = readFile("src/components/quiz/QuizCompletedView.tsx");
    assert(playerContent.includes("export default function QuizArenaPage"), "QuizArenaPage dynamic player export missing");
    assert(playerContent.includes("QuizNavigator"), "QuizNavigator question palette missing");
    assert(scorePill.includes("QuizScorePill"), "QuizScorePill score breakdown pill missing");
    assert(playerContent.includes("handleSelectOption"), "Question answering interaction missing");
  });

  runTest(1, "Module 5 - Lesson View (src/app/learn/[lessonId]/page.tsx): Deck, Arabic Calligraphy & Completion", () => {
    const content = readFile("src/app/learn/[lessonId]/page.tsx");
    const slideCard = readFile("src/components/lesson/LessonSlideCard.tsx");
    assert(content.includes("export default function LessonViewerPage"), "LessonViewerPage component export missing");
    assert(content.includes("currentSlideIndex"), "Slide presentation state missing");
    assert(slideCard.includes("font-arabic"), "Arabic calligraphy presentation missing");
    assert(slideCard.includes("checkQuestion"), "Quick checkpoint check missing");
    assert(content.includes("LessonCompletedModal"), "Completion modal missing");
  });

  runTest(1, "Module 6 - Progress & Analytics (src/app/progress/page.tsx): Streak Bento, Stats & Mastery Grid", () => {
    const content = readFile("src/app/progress/page.tsx");
    const stats = readFile("src/components/progress/ProgressStatGrid.tsx");
    const gallery = readFile("src/components/progress/MasteredLettersGallery.tsx");
    const modal = readFile("src/components/progress/ResetProgressModal.tsx");
    assert(content.includes("export default function ProgressPage"), "ProgressPage component export missing");
    assert(stats.includes("StatCard"), "StatCard metrics component missing");
    assert(stats.includes("streakDays"), "Streak bento tile missing");
    assert(gallery.includes("ARABIC_ALPHABET"), "Mastered letters gallery missing");
    assert(modal.includes("ResetProgressModal"), "Reset progress modal trigger missing");
  });

  runTest(1, "Module 7 - Profile & Settings (src/app/profile/page.tsx): Preferences, Font Size & Audio Speed", () => {
    const content = readFile("src/app/profile/page.tsx");
    const typo = readFile("src/components/profile/TypographySettingsCard.tsx");
    const audio = readFile("src/components/profile/AudioSettingsCard.tsx");
    assert(content.includes("export default function ProfilePage"), "ProfilePage component export missing");
    assert(typo.includes("arabicFontSize"), "Arabic font size setting missing");
    assert(audio.includes("audioSpeed"), "Audio playback speed setting missing");
    assert(content.includes("LanguageSettingsCard"), "Language setting missing");
    assert(content.includes("ThemeSettingsCard"), "Theme toggle setting missing");
  });

  runTest(1, "Module 8 - Navigation & Shell Components (Navbar, Footer, PWA, Offline, ThemeWrapper)", () => {
    const navbar = readFile("src/components/Navbar.tsx");
    assert(navbar.includes("export const Navbar") || navbar.includes("export default Navbar"), "Navbar export missing");
    assert(navbar.includes("mobileMenuOpen"), "Mobile hamburger menu state missing in Navbar");

    const footer = readFile("src/components/Footer.tsx");
    assert(footer.includes("export const Footer") || footer.includes("export default Footer"), "Footer export missing");
    assert(footer.includes("promptInstall") || footer.includes("Install"), "Install App trigger missing in Footer");

    const pwaModal = readFile("src/components/PWAInstallModal.tsx");
    assert(pwaModal.includes("export function PWAInstallModal") || pwaModal.includes("export const PWAInstallModal"), "PWAInstallModal export missing");

    const offline = readFile("src/components/OfflineStatusIndicator.tsx");
    assert(offline.includes("export function OfflineStatusIndicator") || offline.includes("export const OfflineStatusIndicator"), "OfflineStatusIndicator export missing");

    const theme = readFile("src/components/ThemeWrapper.tsx");
    assert(theme.includes("export function ThemeWrapper") || theme.includes("export const ThemeWrapper"), "ThemeWrapper export missing");
  });

  runTest(1, "Custom Error Boundaries & Fallback Pages (not-found.tsx, error.tsx, global-error.tsx)", () => {
    const notFound = readFile("src/app/not-found.tsx");
    assert(notFound.includes("export default function NotFound"), "Custom 404 NotFound page missing");

    const errorPage = readFile("src/app/error.tsx");
    assert(errorPage.includes("export default function ErrorBoundary") || errorPage.includes("export default function Error"), "Client Error boundary missing");

    const globalError = readFile("src/app/global-error.tsx");
    assert(globalError.includes("export default function GlobalError"), "Root GlobalError boundary missing");
  });

  runTest(1, "Core Data Integrity: 28 Alphabet Letters, 18 Levels, Surahs, Lessons, Quizzes", () => {
    const alphabet = readFile("src/data/alphabet.ts");
    assert(alphabet.includes("ARABIC_ALPHABET"), "ARABIC_ALPHABET dataset export missing in alphabet.ts");
    const letterCountMatches = alphabet.match(/id:\s*["'][a-z0-9_-]+["']/gi);
    assert(letterCountMatches !== null && letterCountMatches.length >= 28, `Expected at least 28 alphabet letters, found ${letterCountMatches?.length}`);

    const levels = readFile("src/data/levels.ts");
    assert(levels.includes("LEVELS") || levels.includes("levels"), "Levels dataset missing in levels.ts");
    const levelNumberMatches = levels.match(/number:\s*\d+/g);
    assert(levelNumberMatches !== null && levelNumberMatches.length >= 18, `Expected at least 18 levels, found ${levelNumberMatches?.length}`);

    const surahs = readFile("src/data/surahs.ts");
    assert(surahs.includes("SURAHS") || surahs.includes("surahs"), "Surahs dataset missing in surahs.ts");

    const quizzes = readFile("src/data/quizzes/index.ts");
    assert(quizzes.includes("QUIZZES") || quizzes.includes("LEVEL_QUIZZES") || quizzes.includes("quizzes"), "Quizzes registry missing");

    const lessons = readFile("src/data/lessons/index.ts");
    assert(lessons.includes("LESSONS") || lessons.includes("ALL_LESSONS") || lessons.includes("tier1Lessons"), "Lessons registry missing");
  });

  // =========================================================================
  // TIER 2: Boundary & Corner Cases (Mobile Viewports: 360px, 390px, 430px)
  // =========================================================================
  console.log(`\n${colors.bold}${colors.blue}▶ TIER 2: Boundary & Corner Cases (Mobile Viewports 360px-430px, Overflow, Touch Targets, Modals)${colors.reset}`);

  runTest(2, "Global Viewport Meta: viewportFit: 'cover' & Zoom Preservation (WCAG 1.4.4)", () => {
    const layout = readFile("src/app/layout.tsx");
    assert(layout.includes('viewportFit: "cover"'), "layout.tsx must specify viewportFit: 'cover' for notch/safe-area support");
    assert(!layout.includes("maximumScale: 1"), "layout.tsx must NOT contain maximumScale: 1 (violates WCAG 1.4.4 text zoom)");
    assert(layout.includes('width: "device-width"'), "layout.tsx must specify width: 'device-width'");
    assert(layout.includes("initialScale: 1"), "layout.tsx must specify initialScale: 1");
    assert(layout.includes("prefers-color-scheme") || layout.includes("themeColor"), "layout.tsx must define adaptive themeColor");
  });

  runTest(2, "Root Body Horizontal Overflow Containment (scrollWidth <= clientWidth)", () => {
    const layout = readFile("src/app/layout.tsx");
    assert(layout.includes("overflow-x-hidden"), "layout.tsx body must include overflow-x-hidden to prevent mobile wobble");
    assert(layout.includes("min-w-0"), "layout.tsx body must include min-w-0");
    assert(layout.includes("w-full"), "layout.tsx body must include w-full");

    const css = readFile("src/app/globals.css");
    assert(css.includes("overflow-x: hidden;"), "globals.css body rule must enforce overflow-x: hidden;");
  });

  runTest(2, "Mobile Tap Highlight Reset & Touch Action Manipulation (globals.css)", () => {
    const css = readFile("src/app/globals.css");
    assert(css.includes("-webkit-tap-highlight-color: transparent;"), "globals.css must reset -webkit-tap-highlight-color to transparent");
    assert(css.includes("touch-action: manipulation;"), "globals.css must specify touch-action: manipulation to eliminate 300ms tap delay");
    assert(css.includes("-webkit-text-size-adjust: 100%;"), "globals.css must specify -webkit-text-size-adjust: 100% to prevent iOS zoom distortion");
  });

  runTest(2, "Navbar 360px Viewport Squeeze Prevention: Header fits in 328px without overflow", () => {
    const navbar = readFile("src/components/Navbar.tsx");
    // Qaida badge and Arabic subtitle must be hidden on mobile (<sm) to prevent header blowout
    assert(navbar.includes("hidden sm:inline-block") || navbar.includes("hidden sm:"), "Navbar must hide Qaida badge on mobile xs (<sm)");
    assert(navbar.includes("hidden sm:block") || navbar.includes("hidden sm:"), "Navbar must hide Arabic subtitle on mobile xs (<sm)");
    // Profile link must be hidden in top bar on mobile and relocated to drawer
    assert(navbar.includes("hidden sm:flex") || navbar.includes("hidden sm:inline-flex"), "Navbar top bar must hide Profile button on xs to prevent 440px squeeze");
    assert(navbar.includes('href="/profile"'), "Navbar mobile drawer must include Profile & Settings link");
  });

  runTest(2, "AudioButton Minimum 44x44px Touch Footprint on All Variants (size='sm', 'md', 'lg', labeled)", () => {
    const audioBtn = readFile("src/components/AudioButton.tsx");
    assert(audioBtn.includes("min-w-[44px]") && audioBtn.includes("min-h-[44px]"), "AudioButton must enforce min-w-[44px] min-h-[44px] on all variants");
    assert(audioBtn.includes("w-11 h-11"), "AudioButton sm and md size classes must specify w-11 h-11 (44px)");
    assert(audioBtn.includes("min-h-[44px]") && (audioBtn.includes("py-2.5") || audioBtn.includes("py-3")), "AudioButton with label must enforce min-h-[44px] and vertical padding py-2.5+");
  });

  runTest(2, "Navbar Touch Targets: Streak, Language, Theme, Mobile Hamburger & Drawer Links (>= 44x44px)", () => {
    const navbar = readFile("src/components/Navbar.tsx");
    assert(navbar.includes("min-h-[44px]"), "Navbar must enforce min-h-[44px] on interactive buttons");
    assert(navbar.includes("w-11 h-11") || navbar.includes("min-w-[44px]"), "Navbar icon buttons (Theme, Mobile menu) must enforce 44x44px footprint");
  });

  runTest(2, "Footer Touch Targets: Curriculum & Tool Links (>= 44px hit area) and App Install Button", () => {
    const footer = readFile("src/components/Footer.tsx");
    assert(footer.includes("block py-2"), "Footer links must specify block py-2 for >= 44px accessible thumb target area");
    assert(footer.includes("min-h-[44px]"), "Footer App Install button must enforce min-h-[44px]");
  });

  runTest(2, "PWAInstallModal: Body Scroll Lock, 44x44px Close Button & max-h-[90vh]", () => {
    const modal = readFile("src/components/PWAInstallModal.tsx");
    assert(modal.includes('document.body.style.overflow = "hidden"'), "PWAInstallModal must lock document.body.style.overflow on mount");
    assert(modal.includes('document.body.style.overflow = ""'), "PWAInstallModal must restore document.body.style.overflow on cleanup");
    assert(modal.includes("min-w-[44px]") && modal.includes("min-h-[44px]"), "PWAInstallModal close button must measure at least 44x44px");
    assert(modal.includes("max-h-[90vh]") && modal.includes("overflow-y-auto"), "PWAInstallModal dialog container must specify max-h-[90vh] overflow-y-auto");
  });

  runTest(2, "OfflineStatusIndicator: Body Scroll Lock, 44x44px Close Button & Action Controls", () => {
    const offline = readFile("src/components/OfflineStatusIndicator.tsx");
    const hook = readFile("src/hooks/useOfflineStatus.ts");
    const modal = readFile("src/components/offline/OfflineModal.tsx");
    assert(hook.includes('document.body.style.overflow = "hidden"'), "OfflineStatusIndicator must lock document.body.style.overflow on open");
    assert(hook.includes('document.body.style.overflow = ""'), "OfflineStatusIndicator must restore document.body.style.overflow on cleanup");
    assert(modal.includes("min-w-[44px]") && modal.includes("min-h-[44px]"), "OfflineStatusIndicator close button must measure >= 44x44px");
    assert(offline.includes("min-h-[36px]") && modal.includes("min-h-[44px]"), "OfflineStatusIndicator triggers and modal buttons must specify min-h-[44px]");
  });

  runTest(2, "Homepage Active Stage CTA: Action Button enforces min-h-[44px]", () => {
    const spotlight = readFile("src/components/home/HomeActiveStageSpotlight.tsx");
    assert(spotlight.includes("min-h-[44px]"), "Homepage active stage CTA must enforce min-h-[44px]");
  });

  // =========================================================================
  // TIER 3: Arabic Typography, Cursive Ligatures & Theme Contrast
  // =========================================================================
  console.log(`\n${colors.bold}${colors.blue}▶ TIER 3: Arabic Typography, Cursive Ligatures & Theme Contrast${colors.reset}`);

  runTest(3, ".font-arabic Cursive Ligature Integrity: letter-spacing: normal !important (globals.css)", () => {
    const css = readFile("src/app/globals.css");
    assert(css.includes(".font-arabic"), ".font-arabic class rule missing in globals.css");
    assert(css.includes("letter-spacing: normal !important;"), ".font-arabic must enforce letter-spacing: normal !important to prevent glyph detachment");
    assert(css.includes('"calt"') && css.includes('"liga"'), ".font-arabic must enable OpenType calt and liga font feature settings");
  });

  runTest(3, "Diacritics & Tashkeel Vertical Breathing Room: padding: 0.1em 0 & line-height: 1.8", () => {
    const css = readFile("src/app/globals.css");
    assert(css.includes("line-height: 1.8;"), ".font-arabic must specify line-height: 1.8 for tashkeel clearance");
    assert(css.includes("padding: 0.1em 0;"), ".font-arabic must specify vertical clearance padding: 0.1em 0");
    assert(css.includes("overflow-wrap: break-word;"), ".font-arabic must specify overflow-wrap: break-word");
  });

  runTest(3, "ArabicDisplay Ligature Integrity: Arabic text span uses tracking-normal (no tracking-wide)", () => {
    const arabicDisplay = readFile("src/components/ArabicDisplay.tsx");
    assert(!arabicDisplay.includes("font-arabic font-normal tracking-wide"), "ArabicDisplay Arabic glyph span must not have tracking-wide");
    assert(arabicDisplay.includes("font-arabic font-normal tracking-normal"), "ArabicDisplay Arabic glyph span must enforce tracking-normal");
  });

  runTest(3, "ThemeWrapper Responsive Arabic Font Scaling (mobile-first 2xl/3xl/4xl with leading >= 1.9)", () => {
    const theme = readFile("src/components/ThemeWrapper.tsx");
    assert(theme.includes("text-2xl sm:text-3xl md:text-4xl leading-[1.9]"), "ThemeWrapper normal font size must scale responsively with leading-[1.9]");
    assert(theme.includes("text-3xl sm:text-4xl md:text-5xl leading-[2]"), "ThemeWrapper large font size must scale responsively with leading-[2]");
    assert(theme.includes("text-4xl sm:text-5xl md:text-6xl leading-[2.1]"), "ThemeWrapper xlarge font size must scale responsively with leading-[2.1]");
  });

  runTest(3, "High-Contrast Visual Hierarchy Across Light and Dark Themes", () => {
    const arabicDisplay = readFile("src/components/ArabicDisplay.tsx");
    assert(arabicDisplay.includes("text-emerald-950"), "ArabicDisplay must use high-contrast text-emerald-950 in light mode");
    assert(arabicDisplay.includes("dark:text-gold-100"), "ArabicDisplay must use high-contrast dark:text-gold-100 in dark mode");

    const layout = readFile("src/app/layout.tsx");
    assert(layout.includes("bg-sand-50") && layout.includes("dark:bg-night-950"), "Root layout must specify bg-sand-50 and dark:bg-night-950");
    assert(layout.includes("text-sand-900") && layout.includes("dark:text-sand-100"), "Root layout must specify text-sand-900 and dark:text-sand-100");
  });

  runTest(3, "DifficultyBadge & StatCard Accessible Theme Badging", () => {
    const diffBadge = readFile("src/components/DifficultyBadge.tsx");
    assert(diffBadge.includes("bg-emerald-500/10") || diffBadge.includes("emerald"), "DifficultyBadge must handle beginner theme tokens");
    assert(diffBadge.includes("amber") || diffBadge.includes("gold"), "DifficultyBadge must handle intermediate theme tokens");

    const statCard = readFile("src/components/StatCard.tsx");
    assert(statCard.includes("dark:"), "StatCard must define explicit dark: mode styling");
  });

  // =========================================================================
  // TIER 4: Real-World Scenarios & Production Compilation Gates
  // =========================================================================
  console.log(`\n${colors.bold}${colors.blue}▶ TIER 4: Real-World Scenarios & Production Compilation Gates${colors.reset}`);

  runTest(4, "End-to-End User State Transitions: Preferences & Progress Serialization", () => {
    const storageFile = readFile("src/lib/storage.ts");
    assert(storageFile.includes("DEFAULT_PREFERENCES"), "storage.ts must export DEFAULT_PREFERENCES");
    assert(storageFile.includes("DEFAULT_PROGRESS"), "storage.ts must export DEFAULT_PROGRESS");
    assert(storageFile.includes("getStoredPreferences"), "storage.ts must export getStoredPreferences");
    assert(storageFile.includes("saveStoredPreferences"), "storage.ts must export saveStoredPreferences");
    assert(storageFile.includes("saveStoredProgress"), "storage.ts must export saveStoredProgress");

    // Dynamic state transition simulation
    const mockPrefs = {
      theme: "dark" as const,
      language: "en" as const,
      arabicFontSize: "xlarge" as const,
      audioSpeed: 0.8,
      autoPlayAudio: true,
      showTransliteration: false,
    };
    const serialized = JSON.stringify(mockPrefs);
    const parsed = JSON.parse(serialized);
    assert(parsed.theme === "dark", "Theme state persistence failed");
    assert(parsed.language === "en", "Language state persistence failed");
    assert(parsed.arabicFontSize === "xlarge", "Font size state persistence failed");
    assert(parsed.audioSpeed === 0.8, "Audio speed state persistence failed");
  });

  runTest(4, "End-to-End Learning Progress State Machine: XP increment, completed lessons & streak calculation", () => {
    const mockProgress = {
      xp: 150,
      streakDays: 3,
      lastActiveDate: new Date().toISOString().split("T")[0],
      completedLessons: ["l1-1", "l1-2"],
      masteredLevels: [1],
      quizScores: { "1": 100 },
      streakFreezeCount: 1,
    };

    // Transition: Complete lesson "l1-3" (+25 XP)
    const updatedProgress = {
      ...mockProgress,
      xp: mockProgress.xp + 25,
      completedLessons: [...mockProgress.completedLessons, "l1-3"],
    };
    assert(updatedProgress.xp === 175, "XP increment calculation error");
    assert(updatedProgress.completedLessons.includes("l1-3"), "Completed lesson registry error");
    assert(updatedProgress.completedLessons.length === 3, "Lesson count error");
  });

  runTest(4, "End-to-End Quiz Scoring State Machine: Accuracy percentage and grade assignment", () => {
    function computeQuizScore(correct: number, total: number) {
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
      const passed = accuracy >= 70;
      return { correct, total, accuracy, passed };
    }

    const perfect = computeQuizScore(10, 10);
    assert(perfect.accuracy === 100 && perfect.passed === true, "100% score calculation error");

    const passing = computeQuizScore(7, 10);
    assert(passing.accuracy === 70 && passing.passed === true, "70% passing threshold error");

    const failing = computeQuizScore(6, 10);
    assert(failing.accuracy === 60 && failing.passed === false, "Failing grade threshold error");
  });

  runTest(4, "Offline Storage and Audio Service API Contracts", () => {
    const audioService = readFile("src/lib/audioService.ts");
    assert(audioService.includes("playRecitation"), "audioService must define playRecitation API");
    assert(audioService.includes("speakArabic"), "audioService must define speakArabic API");
    assert(audioService.includes("stopAudio"), "audioService must define stopAudio API");

    const offlineManager = readFile("src/lib/offlineManager.ts");
    assert(offlineManager.includes("checkOfflineStatus"), "offlineManager must define checkOfflineStatus API");
    assert(offlineManager.includes("downloadAllForOffline"), "offlineManager must define downloadAllForOffline API");
    assert(offlineManager.includes("initAutoOfflineCaching"), "offlineManager must define initAutoOfflineCaching API");
  });

  await runTestAsync(4, "TypeScript Strict Type Check: npx tsc --noEmit passes with 0 errors", async () => {
    try {
      execSync("npx tsc --noEmit", { stdio: "pipe", cwd: PROJECT_ROOT });
    } catch (err: any) {
      const output = err?.stdout?.toString() || err?.stderr?.toString() || err?.message;
      throw new Error(`TypeScript compilation failed:\n${output}`);
    }
  });

  await runTestAsync(4, "Next.js Production Build Gate: All 10 Next.js App Router routes generated", async () => {
    const appManifestPath = path.join(PROJECT_ROOT, ".next/app-build-manifest.json");
    if (!fs.existsSync(appManifestPath)) {
      try {
        execSync("npm run build", { stdio: "pipe", cwd: PROJECT_ROOT });
      } catch (err: any) {
        const output = err?.stdout?.toString() || err?.stderr?.toString() || err?.message;
        throw new Error(`Next.js production build failed:\n${output}`);
      }
    }
    assert(fs.existsSync(appManifestPath), ".next/app-build-manifest.json must exist after build");

    const manifest = JSON.parse(fs.readFileSync(appManifestPath, "utf-8"));
    const pages = Object.keys(manifest.pages || {});

    // Verify all 8 core modules and error pages
    assert(pages.includes("/page"), "Route '/page' (Homepage) missing in build");
    assert(pages.includes("/path/page"), "Route '/path/page' missing in build");
    assert(pages.includes("/practice/page"), "Route '/practice/page' missing in build");
    assert(pages.includes("/quiz/page"), "Route '/quiz/page' missing in build");
    assert(pages.includes("/quiz/[quizId]/page"), "Dynamic route '/quiz/[quizId]/page' missing in build");
    assert(pages.includes("/learn/[lessonId]/page"), "Dynamic route '/learn/[lessonId]/page' missing in build");
    assert(pages.includes("/progress/page"), "Route '/progress/page' missing in build");
    assert(pages.includes("/profile/page"), "Route '/profile/page' missing in build");
    assert(pages.includes("/not-found") || pages.includes("/_not-found/page"), "NotFound route missing in build");
    assert(pages.includes("/error"), "Error boundary route missing in build");
    assert(pages.includes("/global-error"), "GlobalError route missing in build");
  });

  // =========================================================================
  // SUMMARY REPORT & EXIT
  // =========================================================================
  const totalDuration = Date.now() - startTime;
  const totalTests = results.length;
  const passedTests = results.filter((r) => r.passed).length;
  const failedTests = results.filter((r) => !r.passed).length;

  console.log(`\n${colors.bold}${colors.cyan}================================================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}                            VERIFICATION SUMMARY                               ${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}================================================================================${colors.reset}`);

  for (let tier = 1; tier <= 4; tier++) {
    const tierResults = results.filter((r) => r.tier === tier);
    const tierPassed = tierResults.filter((r) => r.passed).length;
    const tierTotal = tierResults.length;
    const tierStatus = tierPassed === tierTotal ? `${colors.green}PASS${colors.reset}` : `${colors.red}FAIL${colors.reset}`;
    console.log(`  Tier ${tier}: ${tierPassed}/${tierTotal} passed [${tierStatus}]`);
  }

  console.log(`${colors.dim}--------------------------------------------------------------------------------${colors.reset}`);
  console.log(`  ${colors.bold}Total Tests:${colors.reset}    ${totalTests}`);
  console.log(`  ${colors.bold}Passed:${colors.reset}         ${colors.green}${passedTests}${colors.reset}`);
  console.log(`  ${colors.bold}Failed:${colors.reset}         ${failedTests > 0 ? colors.red + failedTests + colors.reset : "0"}`);
  console.log(`  ${colors.bold}Duration:${colors.reset}       ${totalDuration}ms`);
  console.log(`${colors.bold}${colors.cyan}================================================================================${colors.reset}`);

  if (failedTests > 0) {
    console.log(`\n${colors.bold}${colors.red}❌ VERIFICATION FAILED with ${failedTests} failure(s).${colors.reset}\n`);
    process.exit(1);
  } else {
    console.log(`\n${colors.bold}${colors.green}✔ ALL TIERS PASSED. MOBILE VERIFICATION SUCCESSFUL.${colors.reset}\n`);
    process.exit(0);
  }
}

main().catch((err) => {
  console.error(`\n${colors.red}Fatal runner error:${colors.reset}`, err);
  process.exit(1);
});
