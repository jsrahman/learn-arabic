import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(__filename), "..");

function readFile(relPath) {
  return fs.readFileSync(path.join(projectRoot, relPath), "utf-8");
}

test("Milestone 2 - Feature 10: Hero Spiritual Ribbon responsive wrap and legible font", () => {
  const heroContent = readFile("src/components/home/HomeHero.tsx");
  assert.ok(
    heroContent.includes("rounded-2xl sm:rounded-full") &&
      heroContent.includes("py-2") &&
      (heroContent.includes("px-3 sm:px-4") || heroContent.includes("px-4")),
    "Hero spiritual ribbon must use rounded-2xl sm:rounded-full py-2 px-3 sm:px-4 for 360px mobile wrapping"
  );
  assert.ok(
    heroContent.includes("text-base sm:text-lg leading-relaxed"),
    "Hero spiritual ribbon Basmala must use text-base sm:text-lg leading-relaxed for clear tashkeel legibility"
  );
});

test("Milestone 2 - Feature 11: 4-Forms Letter Grid 2x2 on mobile with ample breathing room", () => {
  const playgroundContent = readFile("src/components/home/HomeAlphabetPlayground.tsx");
  assert.ok(
    playgroundContent.includes("grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2"),
    "4-Forms letter grid must use grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 on mobile"
  );
  assert.ok(
    playgroundContent.includes("text-2xl sm:text-3xl text-emerald-950 dark:text-gold-200 leading-relaxed"),
    "4-Forms letter glyphs must have sufficient breathing room and leading-relaxed"
  );
});

test("Milestone 2 - Feature 12: Homepage Tier filter tabs and Roadmap CTA touch targets", () => {
  const previewContent = readFile("src/components/home/HomeCurriculumPreview.tsx");
  assert.ok(
    previewContent.includes("min-h-[44px]") && previewContent.includes("py-2.5"),
    "Curriculum tier filter pills must enforce min-h-[44px] py-2.5"
  );
  assert.ok(
    previewContent.includes('href="/path"') && previewContent.includes("min-h-[44px]"),
    "Roadmap CTA link must enforce min-h-[44px]"
  );
});

test("Milestone 2 - Feature 13: LevelCard Action Button touch target & Arabic title contrast", () => {
  const levelCardContent = readFile("src/components/LevelCard.tsx");
  assert.ok(
    levelCardContent.includes("text-emerald-950 dark:text-gold-300"),
    "LevelCard Arabic title must use high-contrast text-emerald-950 dark:text-gold-300"
  );
  assert.ok(
    levelCardContent.includes("min-h-[44px] py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2"),
    "LevelCard action button must enforce min-h-[44px] py-3 px-4 with gap-2"
  );
});

test("Milestone 2 - Feature 14: Learning Path Level Header vertical stacking on mobile", () => {
  const pathLevelCard = readFile("src/components/path/PathLevelCard.tsx");
  assert.ok(
    pathLevelCard.includes("flex flex-col items-start sm:items-end gap-1.5 sm:gap-1 w-full md:w-auto"),
    "PathLevelCard header must stack vertically on mobile screens to prevent horizontal collision"
  );
});

test("Milestone 2 - Feature 15: Learning Path contrast and thumb-friendly action targets", () => {
  const pathLevelCard = readFile("src/components/path/PathLevelCard.tsx");
  assert.ok(
    pathLevelCard.includes("text-emerald-950/80 dark:text-gold-300/80"),
    "PathLevelCard Arabic title must have high contrast text-emerald-950/80 dark:text-gold-300/80"
  );
  assert.ok(
    pathLevelCard.includes("min-h-[44px] min-w-[56px] flex items-center justify-center"),
    "PathLevelCard lesson links must enforce thumb-friendly touch target min-h-[44px] min-w-[56px]"
  );
  assert.ok(
    pathLevelCard.includes("min-h-[44px] py-3 px-4 rounded-xl border text-xs font-bold"),
    "PathLevelCard mastery quiz link must enforce min-h-[44px] py-3 px-4"
  );

  const tierFilterContent = readFile("src/components/path/TierFilterBar.tsx");
  assert.ok(
    tierFilterContent.includes("min-h-[44px]") && tierFilterContent.includes("py-2.5"),
    "TierFilterBar tabs must enforce min-h-[44px] py-2.5"
  );
});

test("Milestone 2 - DifficultyBadge: Padding and mobile legibility", () => {
  const badgeContent = readFile("src/components/DifficultyBadge.tsx");
  assert.ok(
    badgeContent.includes("px-2.5 py-0.5 sm:py-1 rounded-full border inline-flex items-center gap-1.5"),
    "DifficultyBadge must provide adequate padding and gap for mobile legibility"
  );
});
