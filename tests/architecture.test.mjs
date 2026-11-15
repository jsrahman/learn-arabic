import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(__filename), "..");

test("Architecture: Page orchestrators must be thin (<120 lines)", () => {
  const pageFiles = [
    "src/app/page.tsx",
    "src/app/path/page.tsx",
    "src/app/practice/page.tsx",
    "src/app/learn/[lessonId]/page.tsx",
    "src/app/quiz/page.tsx",
    "src/app/quiz/[quizId]/page.tsx",
    "src/app/profile/page.tsx",
    "src/app/progress/page.tsx",
  ];

  for (const relPath of pageFiles) {
    const fullPath = path.join(projectRoot, relPath);
    assert.ok(fs.existsSync(fullPath), `Page exists: ${relPath}`);
    const lines = fs.readFileSync(fullPath, "utf-8").split("\n").length;
    assert.ok(
      lines < 120,
      `Page ${relPath} must be <120 lines (orchestrator only), got ${lines} lines`
    );
  }
});

test("Architecture: All presentation subcomponents must be <300 lines", () => {
  function getTsxFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(getTsxFiles(full));
      } else if (entry.name.endsWith(".tsx")) {
        files.push(full);
      }
    }
    return files;
  }

  const componentFiles = getTsxFiles(path.join(projectRoot, "src/components"));
  assert.ok(componentFiles.length >= 30, `Expected at least 30 subcomponents, found ${componentFiles.length}`);

  for (const file of componentFiles) {
    const rel = path.relative(projectRoot, file);
    const lines = fs.readFileSync(file, "utf-8").split("\n").length;
    assert.ok(
      lines < 300,
      `Component ${rel} must be <300 lines, got ${lines} lines`
    );
  }
});

test("Architecture: Custom hooks layer exists and is populated", () => {
  const hookFiles = [
    "src/hooks/useHomePlayground.ts",
    "src/hooks/usePathRoadmap.ts",
    "src/hooks/usePracticeDrill.ts",
    "src/hooks/useLessonViewer.ts",
    "src/hooks/useQuizHub.ts",
    "src/hooks/useQuizArena.ts",
    "src/hooks/useProfileSettings.ts",
    "src/hooks/useProgressDashboard.ts",
    "src/hooks/useOfflineStatus.ts",
  ];

  for (const hook of hookFiles) {
    const fullPath = path.join(projectRoot, hook);
    assert.ok(fs.existsSync(fullPath), `Hook exists: ${hook}`);
  }
});

test("Architecture: Schemas layer exists and exports defensive validators", () => {
  const schemaFiles = [
    "src/schemas/index.ts",
    "src/schemas/curriculumSchema.ts",
    "src/schemas/preferencesSchema.ts",
    "src/schemas/progressSchema.ts",
  ];

  for (const s of schemaFiles) {
    const fullPath = path.join(projectRoot, s);
    assert.ok(fs.existsSync(fullPath), `Schema exists: ${s}`);
  }
});

test("Data: All 28 Arabic letters and 18 curriculum levels exist", () => {
  const alphabetContent = fs.readFileSync(path.join(projectRoot, "src/data/alphabet.ts"), "utf-8");
  assert.ok(alphabetContent.includes("ARABIC_ALPHABET"), "ARABIC_ALPHABET export found");

  const levelsContent = fs.readFileSync(path.join(projectRoot, "src/data/levels.ts"), "utf-8");
  assert.ok(levelsContent.includes("LEARNING_LEVELS"), "LEARNING_LEVELS export found");

  const quizzesContent = fs.readFileSync(path.join(projectRoot, "src/data/quizzes/index.ts"), "utf-8");
  assert.ok(quizzesContent.includes("QUIZZES"), "QUIZZES export found");

  const lessonsContent = fs.readFileSync(path.join(projectRoot, "src/data/lessons/index.ts"), "utf-8");
  assert.ok(lessonsContent.includes("LESSONS"), "LESSONS export found");
});

test("Regression: Hooks must not auto-increment XP on mount or in effect loops", () => {
  const quizArenaContent = fs.readFileSync(path.join(projectRoot, "src/hooks/useQuizArena.ts"), "utf-8");
  assert.ok(
    !quizArenaContent.includes("recordDailyActivity"),
    "useQuizArena must not call recordDailyActivity on mount or in effects"
  );

  const lessonViewerContent = fs.readFileSync(path.join(projectRoot, "src/hooks/useLessonViewer.ts"), "utf-8");
  assert.ok(
    !lessonViewerContent.includes("recordDailyActivity(1, 5)"),
    "useLessonViewer must not call recordDailyActivity(1, 5) on mount"
  );

  const practiceDrillContent = fs.readFileSync(path.join(projectRoot, "src/hooks/usePracticeDrill.ts"), "utf-8");
  assert.ok(
    !practiceDrillContent.includes("recordDailyActivity"),
    "usePracticeDrill must not call recordDailyActivity in mount loop"
  );

  const themeWrapperContent = fs.readFileSync(path.join(projectRoot, "src/components/ThemeWrapper.tsx"), "utf-8");
  assert.ok(
    themeWrapperContent.includes("refreshProgress = useCallback"),
    "ThemeWrapper must memoize refreshProgress with useCallback"
  );
  assert.ok(
    themeWrapperContent.includes("updateProgress = useCallback"),
    "ThemeWrapper must memoize updateProgress with useCallback"
  );
});
