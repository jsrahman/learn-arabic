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

test("Milestone 4 - Checkpoint Question: Disabled state & ARIA semantics in LessonSlideCard.tsx", () => {
  const cardContent = readFile("src/components/lesson/LessonSlideCard.tsx");
  assert.ok(
    cardContent.includes("disabled={selectedAnswer !== null}"),
    "LessonSlideCard checkpoint option button must specify disabled={selectedAnswer !== null}"
  );
  assert.ok(
    cardContent.includes('aria-disabled={selectedAnswer !== null ? "true" : undefined}'),
    "LessonSlideCard checkpoint option button must specify aria-disabled"
  );
  assert.ok(
    cardContent.includes("cursor-not-allowed"),
    "LessonSlideCard checkpoint option button must include cursor-not-allowed styling when disabled"
  );
});

test("Milestone 4 - Checkpoint Question: Selection guard in useLessonViewer.ts", () => {
  const hookContent = readFile("src/hooks/useLessonViewer.ts");
  assert.ok(
    hookContent.includes("if (selectedAnswer !== null) return;"),
    "useLessonViewer handleAnswerSelect must include guard against re-selection"
  );
  assert.ok(
    hookContent.includes("[selectedAnswer, slide.checkQuestion]"),
    "useLessonViewer handleAnswerSelect dependencies must include selectedAnswer"
  );
});

test("Milestone 4 - LessonHeader: AGENTS.md Section 5.4 toBanglaNumber formatting", () => {
  const headerContent = readFile("src/components/lesson/LessonHeader.tsx");
  assert.ok(
    headerContent.includes('import { toBanglaNumber } from "@/utils";'),
    "LessonHeader must import toBanglaNumber from @/utils"
  );
  assert.ok(
    headerContent.includes("toBanglaNumber(levelId)") &&
      headerContent.includes("toBanglaNumber(lessonNumber)"),
    "LessonHeader must format levelId and lessonNumber with toBanglaNumber in Bangla mode"
  );
  assert.ok(
    headerContent.includes("toBanglaNumber(currentSlideIndex + 1)") &&
      headerContent.includes("toBanglaNumber(totalSlides)"),
    "LessonHeader must format current slide and total slides with toBanglaNumber in Bangla mode"
  );
  assert.ok(
    headerContent.includes("toBanglaNumber(progressPercent)"),
    "LessonHeader must format progressPercent with toBanglaNumber in Bangla mode"
  );
});
