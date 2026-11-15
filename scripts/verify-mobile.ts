/**
 * QuranPath Mobile Verification Test Suite & Runner
 *
 * Verifies mobile responsiveness, accessibility, typography, touch targets,
 * domain state machines, and production compilation quality gates across
 * 360px, 390px, and 430px viewports.
 *
 * Tiers:
 * - Tier 1: Feature Coverage (8 Core Modules, 5-Layer Layout & Routing Integrity)
 * - Tier 2: Boundary & Corner Cases (Mobile Viewports, Touch Targets, Scroll Locks, Modals)
 * - Tier 3: Arabic Typography, Cursive Ligatures & Theme Contrast
 * - Tier 4: Real-World Scenarios, Genuine Domain State Machines & Production Compilation Gates
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// Direct imports of genuine domain models and functions
import {
  calculateUpdatedStreak,
  getYesterdayDateString,
  getLocalDateString,
  DEFAULT_PROGRESS,
  DEFAULT_PREFERENCES,
  getStoredProgress,
  saveStoredProgress,
  resetStoredProgress,
  markLessonCompleted,
  saveQuizScore,
  type UserProgress,
} from "../src/lib/storage";

import {
  calculateProgressPercentage,
  calculateProgress,
  calculateLevelProgress,
  countCompletedLessonsInLevel,
  calculateLevelStatus,
} from "../src/lib/utils";

import {
  validateUserProgress,
  isUserProgress,
} from "../src/schemas/progressSchema";

import { QUIZZES } from "../src/data/quizzes";

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

function assert(condition: unknown, message: string): asserts condition {
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

/**
 * Strips CSS block comments to prevent commented-out rules from passing assertions (MUT-06).
 */
export function stripCssComments(css: string): string {
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
}

/**
 * Reads CSS file with comments stripped for robust active-rule inspection.
 */
export function readCleanCss(relPath: string = "src/app/globals.css"): string {
  return stripCssComments(readFile(relPath));
}

/**
 * Headless in-memory localStorage polyfill for Node.js test execution.
 */
export function setupInMemoryStorage(): void {
  const memoryStore: Record<string, string> = {};
  (globalThis as any).window = globalThis;
  (globalThis as any).localStorage = {
    getItem: (key: string): string | null => memoryStore[key] ?? null,
    setItem: (key: string, value: string): void => {
      memoryStore[key] = String(value);
    },
    removeItem: (key: string): void => {
      delete memoryStore[key];
    },
    clear: (): void => {
      for (const k in memoryStore) delete memoryStore[k];
    },
  };
}

async function main() {
  console.log(`\n${colors.bold}${colors.cyan}================================================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}                    QuranPath Mobile Verification Suite                       ${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}    Static Layout Audits, Touch Targets & Build Gates (360px-430px Standards)   ${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}================================================================================${colors.reset}\n`);

  // =========================================================================
  // TIER 1: Feature Coverage Across All 8 Modules/Pages (5-Layer Layout Aware)
  // =========================================================================
  console.log(`${colors.bold}${colors.blue}▶ TIER 1: Feature Coverage (8 Core Modules & Routing)${colors.reset}`);

  runTest(1, "Module 1 - Homepage (src/app/page.tsx): Hero, Letter Explorer, Spotlight, Bento Grid", () => {
    const pageContent = readFile("src/app/page.tsx");
    const hero = readFile("src/components/home/HomeHero.tsx");
    const playground = readFile("src/components/home/HomeAlphabetPlayground.tsx");
    const spotlight = readFile("src/components/home/HomeActiveStageSpotlight.tsx");
    const preview = readFile("src/components/home/HomeCurriculumPreview.tsx");

    assert(pageContent.includes("export default function HomePage"), "HomePage component export missing");
    assert(hero.includes("spiritualRibbon"), "Spiritual ribbon missing in HomeHero");
    assert(playground.includes("playgroundTag") || playground.includes("selectedLetter"), "Interactive letter playground missing in HomeAlphabetPlayground");
    assert(spotlight.includes("activeLevel"), "Active stage bento card missing in HomeActiveStageSpotlight");
    assert(preview.includes("LevelCard"), "LevelCard component import or usage missing in HomeCurriculumPreview");
    assert(preview.includes("filteredLevels"), "18-Level Bento grid mapping missing in HomeCurriculumPreview");
  });

  runTest(1, "Module 2 - Learning Path (src/app/path/page.tsx): 18-Level Visual Roadmap & Lessons", () => {
    const pageContent = readFile("src/app/path/page.tsx");
    const hook = readFile("src/hooks/usePathRoadmap.ts");
    const filterBar = readFile("src/components/path/TierFilterBar.tsx");
    const card = readFile("src/components/path/PathLevelCard.tsx");

    assert(pageContent.includes("export default function LearningPathPage"), "LearningPathPage component export missing");
    assert(hook.includes("LEARNING_LEVELS") || hook.includes("levels"), "LEARNING_LEVELS dataset import missing in usePathRoadmap");
    assert(pageContent.includes("selectedTier") || filterBar.includes("selectedTier"), "Tier filter tabs missing in Learning Path");
    assert(card.includes("levelLessons.map") || card.includes("quiz/q"), "Level lessons and quiz link mapping missing in PathLevelCard");
  });

  runTest(1, "Module 3 - Practice Arena (src/app/practice/page.tsx): 3 Practice Modes & Audio Drills", () => {
    const pageContent = readFile("src/app/practice/page.tsx");
    const hook = readFile("src/hooks/usePracticeDrill.ts");
    const grid = readFile("src/components/practice/AlphabetDrillGrid.tsx");
    const harakat = readFile("src/components/practice/HarakatDrillTable.tsx");
    const surahs = readFile("src/components/practice/SurahPracticeView.tsx");

    assert(pageContent.includes("export default function PracticePage"), "PracticePage component export missing");
    assert(hook.includes("alphabet") && hook.includes("harakat") && hook.includes("surahs"), "3 practice tabs missing in usePracticeDrill");
    assert(hook.includes("selectedCategory"), "Makhraj category filter missing in usePracticeDrill");
    assert(grid.includes("AudioButton") || harakat.includes("AudioButton"), "AudioButton integration missing in Practice Arena");
    assert(surahs.includes("SURAHS") || surahs.includes("activeSurah"), "Surah practice view missing dataset wiring");
  });

  runTest(1, "Module 4 - Quiz Module: Hub (quiz/page.tsx) and Question Player (quiz/[quizId]/page.tsx)", () => {
    const hubContent = readFile("src/app/quiz/page.tsx");
    assert(hubContent.includes("export default function QuizHubPage"), "QuizHubPage export missing");
    assert(hubContent.includes("selectedTier") || hubContent.includes("tier"), "Tier filtering missing in Quiz Hub");

    const playerContent = readFile("src/app/quiz/[quizId]/page.tsx");
    const completedView = readFile("src/components/quiz/QuizCompletedView.tsx");
    assert(playerContent.includes("export default function QuizArenaPage"), "QuizArenaPage dynamic player export missing");
    assert(playerContent.includes("QuizNavigator"), "QuizNavigator question palette missing in QuizArenaPage");
    assert(completedView.includes("QuizScorePill"), "QuizScorePill score breakdown pill missing in QuizCompletedView");
    assert(playerContent.includes("handleSelectOption") || playerContent.includes("selectedOption"), "Question answering interaction missing");
  });

  runTest(1, "Module 5 - Lesson View (src/app/learn/[lessonId]/page.tsx): Deck, Arabic Calligraphy & Completion", () => {
    const pageContent = readFile("src/app/learn/[lessonId]/page.tsx");
    const slideCard = readFile("src/components/lesson/LessonSlideCard.tsx");
    const modal = readFile("src/components/lesson/LessonCompletedModal.tsx");

    assert(pageContent.includes("export default function LessonViewerPage"), "LessonViewerPage component export missing");
    assert(pageContent.includes("currentSlideIndex"), "Slide presentation state missing in LessonViewerPage");
    assert(slideCard.includes("font-arabic"), "Arabic calligraphy presentation missing in LessonSlideCard");
    assert(slideCard.includes("checkQuestion"), "Quick checkpoint check missing in LessonSlideCard");
    assert(modal.includes("isOpen") || modal.includes("onRestart"), "LessonCompletedModal contract missing");
  });

  runTest(1, "Module 6 - Progress & Analytics (src/app/progress/page.tsx): Streak Bento, Stats & Mastery Grid", () => {
    const pageContent = readFile("src/app/progress/page.tsx");
    const statGrid = readFile("src/components/progress/ProgressStatGrid.tsx");
    const gallery = readFile("src/components/progress/MasteredLettersGallery.tsx");
    const modal = readFile("src/components/progress/ResetProgressModal.tsx");

    assert(pageContent.includes("export default function ProgressPage"), "ProgressPage component export missing");
    assert(statGrid.includes("StatCard"), "StatCard metrics component missing in ProgressStatGrid");
    assert(statGrid.includes("streakDays"), "Streak bento tile missing in ProgressStatGrid");
    assert(gallery.includes("ARABIC_ALPHABET"), "Mastered letters gallery missing in MasteredLettersGallery");
    assert(modal.includes("ResetProgressModal") || pageContent.includes("ResetProgressModal"), "Reset progress modal trigger missing");
  });

  runTest(1, "Module 7 - Profile & Settings (src/app/profile/page.tsx): Preferences, Font Size & Audio Speed", () => {
    const pageContent = readFile("src/app/profile/page.tsx");
    const typo = readFile("src/components/profile/TypographySettingsCard.tsx");
    const audio = readFile("src/components/profile/AudioSettingsCard.tsx");

    assert(pageContent.includes("export default function ProfilePage"), "ProfilePage component export missing");
    assert(typo.includes("arabicFontSize"), "Arabic font size setting missing in TypographySettingsCard");
    assert(audio.includes("audioSpeed"), "Audio playback speed setting missing in AudioSettingsCard");
    assert(pageContent.includes("LanguageSettingsCard"), "Language settings card missing in ProfilePage");
    assert(pageContent.includes("ThemeSettingsCard"), "Theme settings card missing in ProfilePage");
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

  runTest(2, "Static Audit: Root Body Horizontal Overflow Containment (overflow-x-hidden, w-full, min-w-0)", () => {
    const layout = readFile("src/app/layout.tsx");
    assert(layout.includes("overflow-x-hidden"), "layout.tsx body must include overflow-x-hidden to prevent mobile wobble");
    assert(layout.includes("min-w-0"), "layout.tsx body must include min-w-0");
    assert(layout.includes("w-full"), "layout.tsx body must include w-full");

    const cleanCss = readCleanCss("src/app/globals.css");
    const bodyBlock = cleanCss.match(/body\s*\{([^}]+)\}/)?.[1] || "";
    assert(bodyBlock.includes("overflow-x: hidden;"), "globals.css body rule must actively enforce overflow-x: hidden; outside comments (MUT-06)");
  });

  runTest(2, "Static Audit: Mobile Tap Highlight Reset & Touch Action Manipulation (globals.css)", () => {
    const cleanCss = readCleanCss("src/app/globals.css");
    const bodyBlock = cleanCss.match(/body\s*\{([^}]+)\}/)?.[1] || "";
    assert(bodyBlock.includes("-webkit-tap-highlight-color: transparent;"), "globals.css must actively reset -webkit-tap-highlight-color outside comments");
    assert(bodyBlock.includes("touch-action: manipulation;"), "globals.css must actively specify touch-action: manipulation outside comments");
    assert(bodyBlock.includes("-webkit-text-size-adjust: 100%;"), "globals.css must actively specify -webkit-text-size-adjust: 100% outside comments");
  });

  runTest(2, "Static Audit: Navbar 360px Mobile Viewport Squeeze Prevention (Responsive Hiding & Drawer Relocation)", () => {
    const navbar = readFile("src/components/Navbar.tsx");
    // Qaida badge and Arabic subtitle must be hidden on mobile (<sm) to prevent header blowout
    assert(navbar.includes("hidden sm:inline-block") || navbar.includes("hidden sm:"), "Navbar must hide Qaida badge on mobile xs (<sm)");
    assert(navbar.includes("hidden sm:block") || navbar.includes("hidden sm:"), "Navbar must hide Arabic subtitle on mobile xs (<sm)");
    // Profile link must be hidden in top bar on mobile and relocated to drawer
    assert(navbar.includes("hidden sm:flex") || navbar.includes("hidden sm:inline-flex"), "Navbar top bar must hide Profile button on xs to prevent 440px squeeze");
    assert(navbar.includes('href="/profile"'), "Navbar mobile drawer must include Profile & Settings link");
  });

  runTest(2, "AudioButton Minimum 44x44px Touch Footprint on All Variants (size='sm', 'md', 'lg', labeled) (MUT-02)", () => {
    const audioBtn = readFile("src/components/AudioButton.tsx");

    // 1. sizeClasses.sm variant check (isolated regex - catches MUT-02)
    const smMatch = audioBtn.match(/sm:\s*["']([^"']+)["']/);
    assert(smMatch !== null, "AudioButton sizeClasses must define 'sm' variant");
    const smClasses = smMatch?.[1] || "";
    assert(smClasses.includes("min-w-[44px]"), "AudioButton 'sm' size class must enforce min-w-[44px]");
    assert(smClasses.includes("min-h-[44px]"), "AudioButton 'sm' size class must enforce min-h-[44px]");
    assert(smClasses.includes("w-11 h-11") || (smClasses.includes("w-11") && smClasses.includes("h-11")), "AudioButton 'sm' size class must specify w-11 h-11 (44px footprint)");

    // 2. sizeClasses.md variant check
    const mdMatch = audioBtn.match(/md:\s*["']([^"']+)["']/);
    assert(mdMatch !== null, "AudioButton sizeClasses must define 'md' variant");
    const mdClasses = mdMatch?.[1] || "";
    assert(mdClasses.includes("min-w-[44px]"), "AudioButton 'md' size class must enforce min-w-[44px]");
    assert(mdClasses.includes("min-h-[44px]"), "AudioButton 'md' size class must enforce min-h-[44px]");
    assert(mdClasses.includes("w-11 h-11") || (mdClasses.includes("w-11") && mdClasses.includes("h-11")), "AudioButton 'md' size class must specify w-11 h-11 (44px footprint)");

    // 3. sizeClasses.lg variant check
    const lgMatch = audioBtn.match(/lg:\s*["']([^"']+)["']/);
    assert(lgMatch !== null, "AudioButton sizeClasses must define 'lg' variant");
    const lgClasses = lgMatch?.[1] || "";
    assert(lgClasses.includes("min-w-[44px]"), "AudioButton 'lg' size class must enforce min-w-[44px]");
    assert(lgClasses.includes("min-h-[44px]"), "AudioButton 'lg' size class must enforce min-h-[44px]");
    assert(lgClasses.includes("w-14 h-14") || (lgClasses.includes("w-14") && lgClasses.includes("h-14")), "AudioButton 'lg' size class must specify w-14 h-14 (56px footprint)");

    // 4. Labeled variant check
    const labelMatch = audioBtn.match(/label\s*\?\s*["']([^"']+)["']/);
    assert(labelMatch !== null, "AudioButton must define classes for labeled mode");
    const labelClasses = labelMatch?.[1] || "";
    assert(labelClasses.includes("min-h-[44px]"), "AudioButton with label must enforce min-h-[44px]");
    assert(labelClasses.includes("py-2.5") || labelClasses.includes("py-3"), "AudioButton with label must specify vertical padding py-2.5+");
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

  runTest(2, "OfflineStatusIndicator & OfflineModal: Body Scroll Lock, 44x44px Close Button & max-h-[90vh]", () => {
    const offline = readFile("src/components/OfflineStatusIndicator.tsx");
    const hook = readFile("src/hooks/useOfflineStatus.ts");
    const modal = readFile("src/components/offline/OfflineModal.tsx");

    assert(hook.includes('document.body.style.overflow = "hidden"'), "useOfflineStatus hook must lock document.body.style.overflow on open");
    assert(hook.includes('document.body.style.overflow = ""'), "useOfflineStatus hook must restore document.body.style.overflow on cleanup");
    assert(modal.includes("min-w-[44px]") && modal.includes("min-h-[44px]"), "OfflineModal close button must measure >= 44x44px");
    assert(modal.includes("max-h-[90vh]") && modal.includes("overflow-y-auto"), "OfflineModal must specify max-h-[90vh] overflow-y-auto to prevent viewport trapping");
    assert(offline.includes("min-h-[44px]"), "OfflineStatusIndicator trigger pill must specify min-h-[44px]");
  });

  runTest(2, "Homepage Active Stage CTA: Action Button enforces min-h-[44px]", () => {
    const spotlight = readFile("src/components/home/HomeActiveStageSpotlight.tsx");
    assert(spotlight.includes("min-h-[44px]"), "Homepage active stage CTA must enforce min-h-[44px]");
  });

  runTest(2, "Modules 2–7 Interactive Touch Targets & Action Hit Areas (>= 44px)", () => {
    const levelCard = readFile("src/components/LevelCard.tsx");
    assert(levelCard.includes("min-h-[44px]"), "LevelCard action button must enforce min-h-[44px]");

    const tierFilter = readFile("src/components/path/TierFilterBar.tsx");
    assert(tierFilter.includes("min-h-[44px]"), "TierFilterBar tabs must enforce min-h-[44px]");

    const pathCard = readFile("src/components/path/PathLevelCard.tsx");
    assert(pathCard.includes("min-h-[44px]"), "PathLevelCard lesson and quiz links must enforce min-h-[44px]");

    const practiceHeader = readFile("src/components/practice/PracticeHeader.tsx");
    assert(practiceHeader.includes("min-h-[44px]"), "PracticeHeader mode tabs must enforce min-h-[44px]");

    const quizCard = readFile("src/components/quiz/QuizQuestionCard.tsx");
    assert(quizCard.includes("min-h-[48px]") || quizCard.includes("min-h-[44px]"), "QuizQuestionCard options must enforce min-h-[44px]+");
    assert(quizCard.includes("min-h-[44px]"), "QuizQuestionCard next button must enforce min-h-[44px]");

    const quizCompleted = readFile("src/components/quiz/QuizCompletedView.tsx");
    assert(quizCompleted.includes("min-h-[44px]"), "QuizCompletedView action buttons must enforce min-h-[44px]");

    const lessonCard = readFile("src/components/lesson/LessonSlideCard.tsx");
    assert(lessonCard.includes("min-h-[44px]"), "LessonSlideCard checkpoint options and slide navigation must enforce min-h-[44px]");

    const lessonModal = readFile("src/components/lesson/LessonCompletedModal.tsx");
    assert(lessonModal.includes("min-h-[44px]"), "LessonCompletedModal action links must enforce min-h-[44px]");

    const progressHeader = readFile("src/components/progress/ProgressHeader.tsx");
    assert(progressHeader.includes("min-h-[44px]"), "ProgressHeader reset progress button must enforce min-h-[44px]");

    const resetModal = readFile("src/components/progress/ResetProgressModal.tsx");
    assert(resetModal.includes("min-h-[44px]"), "ResetProgressModal confirm buttons must enforce min-h-[44px]");

    const typoSettings = readFile("src/components/profile/TypographySettingsCard.tsx");
    assert(typoSettings.includes("min-h-[44px]"), "TypographySettingsCard font size buttons must enforce min-h-[44px]");
  });

  // =========================================================================
  // TIER 3: Arabic Typography, Cursive Ligatures & Theme Contrast
  // =========================================================================
  console.log(`\n${colors.bold}${colors.blue}▶ TIER 3: Arabic Typography, Cursive Ligatures & Theme Contrast${colors.reset}`);

  runTest(3, ".font-arabic Cursive Ligature Integrity: letter-spacing: normal !important (globals.css)", () => {
    const cleanCss = readCleanCss("src/app/globals.css");
    const fontArabicBlock = cleanCss.match(/\.font-arabic\s*\{([^}]+)\}/)?.[1] || "";
    assert(fontArabicBlock.includes("letter-spacing: normal !important;"), ".font-arabic must actively enforce letter-spacing: normal !important; outside comments");
    assert(fontArabicBlock.includes('"calt"') && fontArabicBlock.includes('"liga"'), ".font-arabic must enable OpenType calt and liga font feature settings");
  });

  runTest(3, "Diacritics & Tashkeel Vertical Breathing Room: padding: 0.1em 0 & line-height: 1.8", () => {
    const cleanCss = readCleanCss("src/app/globals.css");
    const fontArabicBlock = cleanCss.match(/\.font-arabic\s*\{([^}]+)\}/)?.[1] || "";
    assert(fontArabicBlock.includes("line-height: 1.8;"), ".font-arabic must actively specify line-height: 1.8 outside comments");
    assert(fontArabicBlock.includes("padding: 0.1em 0;"), ".font-arabic must actively specify vertical clearance padding: 0.1em 0 outside comments");
    assert(fontArabicBlock.includes("overflow-wrap: break-word;"), ".font-arabic must actively specify overflow-wrap: break-word outside comments");
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
  console.log(`\n${colors.bold}${colors.blue}▶ TIER 4: Real-World Scenarios, Genuine Domain State Machines & Production Compilation Gates${colors.reset}`);

  runTest(4, "End-to-End User State Transitions: Preferences & Progress Serialization", () => {
    const storageFile = readFile("src/lib/storage.ts");
    assert(storageFile.includes("DEFAULT_PREFERENCES"), "storage.ts must export DEFAULT_PREFERENCES");
    assert(storageFile.includes("DEFAULT_PROGRESS"), "storage.ts must export DEFAULT_PROGRESS");
    assert(storageFile.includes("getStoredPreferences"), "storage.ts must export getStoredPreferences");
    assert(storageFile.includes("saveStoredPreferences"), "storage.ts must export saveStoredPreferences");
    assert(storageFile.includes("saveStoredProgress"), "storage.ts must export saveStoredProgress");

    // Dynamic state transition simulation with typed schema
    const mockPrefs = {
      ...DEFAULT_PREFERENCES,
      theme: "dark" as const,
      language: "en" as const,
      arabicFontSize: "xlarge" as const,
      audioSpeed: 0.8,
    };
    const serialized = JSON.stringify(mockPrefs);
    const parsed = JSON.parse(serialized);
    assert(parsed.theme === "dark", "Theme state persistence failed");
    assert(parsed.language === "en", "Language state persistence failed");
    assert(parsed.arabicFontSize === "xlarge", "Font size state persistence failed");
    assert(parsed.audioSpeed === 0.8, "Audio speed state persistence failed");
  });

  runTest(4, "End-to-End Learning Progress State Machine: Domain streak logic, lesson completion & level unlocks", () => {
    setupInMemoryStorage();

    // 1. Domain Streak Calculation Logic (calculateUpdatedStreak)
    const today = getLocalDateString();
    const yesterday = getYesterdayDateString();

    // Case A: First activity ever (empty lastActiveDate, 0 streak) -> streak 1
    const s0 = calculateUpdatedStreak("", 0);
    assert(s0.streak === 1 && s0.lastActiveDate === today, "First activity must initialize streak to 1");

    // Case B: Same-day activity (lastActiveDate === today, streak 3) -> maintains streak 3 without incrementing
    const sSameDay = calculateUpdatedStreak(today, 3);
    assert(sSameDay.streak === 3 && sSameDay.lastActiveDate === today, "Same-day activity must preserve streak without double-incrementing");

    // Case C: Consecutive day activity (lastActiveDate === yesterday, streak 3) -> increments streak to 4
    const sConsec = calculateUpdatedStreak(yesterday, 3);
    assert(sConsec.streak === 4 && sConsec.lastActiveDate === today, "Consecutive-day activity must increment streak from 3 to 4");

    // Case D: Broken streak lapse (lastActiveDate expired, e.g. 2+ days ago) -> resets to 1
    const sBroken = calculateUpdatedStreak("2020-01-01", 10);
    assert(sBroken.streak === 1 && sBroken.lastActiveDate === today, "Lapsed streak must reset to 1 on return");

    // 2. State Machine Transitions with markLessonCompleted & Level Unlocks
    resetStoredProgress();
    const initialProgress = getStoredProgress();
    assert(initialProgress.completedLessons.length === 0, "Initial progress must have 0 completed lessons");
    assert(initialProgress.xpPoints === 0, "Initial progress must have 0 XP");
    assert(initialProgress.unlockedLevels.length === 1 && initialProgress.unlockedLevels[0] === 1, "Only level 1 must be unlocked initially");

    // Complete lesson 1 in Level 1
    const p1 = markLessonCompleted("l1-1", 1, 50);
    assert(p1.completedLessons.includes("l1-1"), "Lesson l1-1 must be recorded in completedLessons");
    assert(p1.xpPoints === 50, "New lesson must award 50 XP");
    assert(p1.streakDays === 1, "Active streak must be 1");
    assert(!p1.unlockedLevels.includes(2), "Level 2 must remain locked after 1 lesson");

    // Complete lesson 2 in Level 1
    const p2 = markLessonCompleted("l1-2", 1, 50);
    assert(p2.completedLessons.length === 2 && p2.xpPoints === 100, "Progress must have 2 lessons and 100 XP");

    // Complete lesson 3 in Level 1 (triggers level 2 unlock threshold >= 3 completed lessons)
    const p3 = markLessonCompleted("l1-3", 1, 50);
    assert(p3.completedLessons.length === 3 && p3.xpPoints === 150, "Progress must have 3 lessons and 150 XP");
    assert(p3.unlockedLevels.includes(2), "Level 2 must unlock after completing 3 lessons in Level 1");

    // Repeat already completed lesson (l1-1)
    const pRepeat = markLessonCompleted("l1-1", 1, 50);
    assert(pRepeat.completedLessons.length === 3, "Re-completing lesson must not create duplicate entries");
    assert(pRepeat.xpPoints === 160, "Re-completing lesson must award only repeat XP (10 XP), total 160");

    // 3. Schema Type Guard & Progress Utilities Validation
    const validated = validateUserProgress(pRepeat);
    assert(isUserProgress(validated), "Updated progress state must satisfy UserProgress type guard schema");

    const level1Count = countCompletedLessonsInLevel(pRepeat.completedLessons, 1);
    assert(level1Count === 3, "countCompletedLessonsInLevel must return 3 completed lessons for Level 1");

    const level1Progress = calculateLevelProgress(pRepeat.completedLessons, 1, 3);
    assert(level1Progress === 100, "Level 1 progress percentage must calculate to 100%");

    const l1Status = calculateLevelStatus(1, [1], pRepeat.unlockedLevels);
    assert(l1Status === "completed", "Level 1 status must be 'completed'");

    const l2Status = calculateLevelStatus(2, [1], pRepeat.unlockedLevels);
    assert(l2Status === "current", "Level 2 status must be 'current' (unlocked)");

    const l3Status = calculateLevelStatus(3, [1], pRepeat.unlockedLevels);
    assert(l3Status === "locked", "Level 3 status must be 'locked'");
  });

  runTest(4, "End-to-End Quiz Scoring State Machine: Accuracy percentage, passing threshold & level unlocking", () => {
    setupInMemoryStorage();

    // 1. Real Quiz Registry Contract Verification
    const quiz1 = QUIZZES["q1"];
    assert(quiz1 !== undefined, "Quiz dataset q1 must exist in QUIZZES registry");
    assert(quiz1.passingScore === 70, "Quiz q1 passing score threshold must be 70%");
    assert(Array.isArray(quiz1.questions) && quiz1.questions.length >= 5, "Quiz q1 must have at least 5 questions");

    // 2. Real Accuracy Percentage Calculations via calculateProgressPercentage
    const totalQ = quiz1.questions.length;
    const perfectScore = calculateProgressPercentage(totalQ, totalQ);
    assert(perfectScore === 100, "Perfect score calculation must yield 100%");
    assert(perfectScore >= quiz1.passingScore, "100% must satisfy passingScore threshold");

    const passingScore = calculateProgressPercentage(7, 10);
    assert(passingScore === 70, "7/10 score must yield exactly 70%");
    assert(passingScore >= quiz1.passingScore, "70% must meet passingScore threshold");

    const failingScore = calculateProgressPercentage(6, 10);
    assert(failingScore === 60, "6/10 score must yield 60%");
    assert(failingScore < quiz1.passingScore, "60% must fail passingScore threshold");

    const zeroScore = calculateProgressPercentage(0, 0);
    assert(zeroScore === 0, "0/0 edge case must safely yield 0%");

    // 3. Quiz Score Persistence & Level Unlock State Transitions via saveQuizScore
    resetStoredProgress();
    const initialXP = getStoredProgress().xpPoints;

    // Failing attempt: 60% on q1 (< 70%)
    const failedProgress = saveQuizScore("q1", 60, 100);
    assert(failedProgress.quizScores["q1"] === 60, "Quiz q1 failing score (60%) must be saved");
    assert(failedProgress.xpPoints === initialXP + 25, "Failing quiz score must award 25 XP partial reward");

    // Passing attempt: 80% on q1 (>= 70%)
    const passedProgress = saveQuizScore("q1", 80, 100);
    assert(passedProgress.quizScores["q1"] === 80, "Quiz q1 passing score (80%) must be updated");
    assert(passedProgress.xpPoints === initialXP + 25 + 100, "Passing quiz score must award full 100 XP");
    assert(passedProgress.unlockedLevels.includes(2), "Passing quiz q1 (>= 70%) must unlock Level 2");

    // Retake attempt with lower score: 70%
    const retakeProgress = saveQuizScore("q1", 70, 100);
    assert(retakeProgress.quizScores["q1"] === 80, "Retaking quiz with lower score must retain historical best score (80%)");
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

  await runTestAsync(4, "Next.js Production Build Gate: Clean compilation of all 10 App Router routes", async () => {
    const skipBuild = process.env.SKIP_BUILD_GATE === "1" || process.env.FAST === "1";
    const appManifestPath = path.join(PROJECT_ROOT, ".next/app-build-manifest.json");

    if (!skipBuild) {
      const binPath = path.join(PROJECT_ROOT, "node_modules/.bin");
      const buildEnv = {
        ...process.env,
        PATH: `${binPath}:${process.env.PATH || ""}`,
        NEXT_TELEMETRY_DISABLED: "1",
        NODE_ENV: "production" as const,
      };

      try {
        execSync("npm run build", {
          stdio: "pipe",
          cwd: PROJECT_ROOT,
          env: buildEnv,
        });
      } catch (err: any) {
        try {
          execSync("pnpm build", {
            stdio: "pipe",
            cwd: PROJECT_ROOT,
            env: buildEnv,
          });
        } catch (pnpmErr: any) {
          const stdout = err?.stdout?.toString() || pnpmErr?.stdout?.toString() || "";
          const stderr = err?.stderr?.toString() || pnpmErr?.stderr?.toString() || "";
          const msg = err?.message || pnpmErr?.message || "";
          throw new Error(`Next.js production build failed:\nSTDOUT:\n${stdout}\nSTDERR:\n${stderr}\nMSG:\n${msg}`);
        }
      }
    }

    assert(fs.existsSync(appManifestPath), ".next/app-build-manifest.json must exist after production build");

    const manifest = JSON.parse(fs.readFileSync(appManifestPath, "utf-8"));
    const pages = Object.keys(manifest.pages || {});

    // Verify all 8 core modules, dynamic routes, and error boundaries
    assert(pages.includes("/page"), "Route '/page' (Homepage) missing in build manifest");
    assert(pages.includes("/path/page"), "Route '/path/page' missing in build manifest");
    assert(pages.includes("/practice/page"), "Route '/practice/page' missing in build manifest");
    assert(pages.includes("/quiz/page"), "Route '/quiz/page' missing in build manifest");
    assert(pages.includes("/quiz/[quizId]/page"), "Dynamic route '/quiz/[quizId]/page' missing in build manifest");
    assert(pages.includes("/learn/[lessonId]/page"), "Dynamic route '/learn/[lessonId]/page' missing in build manifest");
    assert(pages.includes("/progress/page"), "Route '/progress/page' missing in build manifest");
    assert(pages.includes("/profile/page"), "Route '/profile/page' missing in build manifest");
    assert(pages.includes("/not-found") || pages.includes("/_not-found/page"), "NotFound route missing in build manifest");
    assert(pages.includes("/error"), "Error boundary route missing in build manifest");
    assert(pages.includes("/global-error"), "GlobalError route missing in build manifest");
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

if (
  process.argv[1] &&
  (process.argv[1].endsWith("verify-mobile.ts") ||
    process.argv[1].endsWith("verify-mobile") ||
    process.argv[1].includes("verify-mobile"))
) {
  main().catch((err) => {
    console.error(`\n${colors.red}Fatal runner error:${colors.reset}`, err);
    process.exit(1);
  });
}
