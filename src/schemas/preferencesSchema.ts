/**
 * QuranPath — Preferences Runtime Validation Schemas & Type Guards
 *
 * Provides defensive runtime validation and type guards for user settings,
 * themes, font size scaling, audio playback rate, and language preferences.
 * Enforces the Bangla-first UI mandate (AGENTS.md Section 5).
 */

import type { UserPreferences, ThemeMode, FontSizeScale, LanguageCode } from "@/types";

export const DEFAULT_PREFERENCES: UserPreferences = {
  theme: "light",
  audioSpeed: 1.0,
  autoPlayAudio: true,
  showTransliteration: true,
  arabicFontSize: "large",
  explanationLanguage: "bn",
};

const VALID_THEMES: ReadonlySet<ThemeMode> = new Set<ThemeMode>(["light", "dark"]);
const VALID_FONT_SIZES: ReadonlySet<FontSizeScale> = new Set<FontSizeScale>(["normal", "large", "xlarge"]);
const VALID_LANGUAGES: ReadonlySet<LanguageCode> = new Set<LanguageCode>(["bn", "en"]);
const VALID_AUDIO_SPEEDS: ReadonlySet<number> = new Set<number>([0.75, 1.0, 1.25]);

/**
 * Type guard for UserPreferences
 */
export function isUserPreferences(data: unknown): data is UserPreferences {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return false;
  }

  const p = data as Record<string, unknown>;

  return (
    typeof p.theme === "string" &&
    VALID_THEMES.has(p.theme as ThemeMode) &&
    typeof p.audioSpeed === "number" &&
    Number.isFinite(p.audioSpeed) &&
    p.audioSpeed > 0 &&
    typeof p.autoPlayAudio === "boolean" &&
    typeof p.showTransliteration === "boolean" &&
    typeof p.arabicFontSize === "string" &&
    VALID_FONT_SIZES.has(p.arabicFontSize as FontSizeScale) &&
    typeof p.explanationLanguage === "string" &&
    VALID_LANGUAGES.has(p.explanationLanguage as LanguageCode)
  );
}

/**
 * Defensive validator that guarantees a safe, normalized UserPreferences object
 * with strict fallbacks for missing, corrupt, or invalid properties.
 *
 * Preserves the Bangla-first UI mandate: explanationLanguage defaults to "bn".
 */
export function validateUserPreferences(data: unknown): UserPreferences {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return { ...DEFAULT_PREFERENCES };
  }

  const raw = data as Record<string, unknown>;

  const theme: ThemeMode =
    typeof raw.theme === "string" && VALID_THEMES.has(raw.theme as ThemeMode)
      ? (raw.theme as ThemeMode)
      : DEFAULT_PREFERENCES.theme;

  let audioSpeed = DEFAULT_PREFERENCES.audioSpeed;
  if (typeof raw.audioSpeed === "number" && Number.isFinite(raw.audioSpeed)) {
    if (VALID_AUDIO_SPEEDS.has(raw.audioSpeed)) {
      audioSpeed = raw.audioSpeed;
    } else if (raw.audioSpeed >= 0.5 && raw.audioSpeed <= 2.0) {
      audioSpeed = raw.audioSpeed;
    }
  }

  const autoPlayAudio =
    typeof raw.autoPlayAudio === "boolean" ? raw.autoPlayAudio : DEFAULT_PREFERENCES.autoPlayAudio;

  const showTransliteration =
    typeof raw.showTransliteration === "boolean"
      ? raw.showTransliteration
      : DEFAULT_PREFERENCES.showTransliteration;

  const arabicFontSize: FontSizeScale =
    typeof raw.arabicFontSize === "string" &&
    VALID_FONT_SIZES.has(raw.arabicFontSize as FontSizeScale)
      ? (raw.arabicFontSize as FontSizeScale)
      : DEFAULT_PREFERENCES.arabicFontSize;

  const explanationLanguage: LanguageCode =
    typeof raw.explanationLanguage === "string" &&
    VALID_LANGUAGES.has(raw.explanationLanguage as LanguageCode)
      ? (raw.explanationLanguage as LanguageCode)
      : DEFAULT_PREFERENCES.explanationLanguage;

  return {
    theme,
    audioSpeed,
    autoPlayAudio,
    showTransliteration,
    arabicFontSize,
    explanationLanguage,
  };
}

/**
 * Sanitizes partial preferences updates (e.g., from updatePreferences(partial))
 */
export function validatePartialPreferences(data: unknown): Partial<UserPreferences> {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return {};
  }

  const raw = data as Record<string, unknown>;
  const partial: Partial<UserPreferences> = {};

  if (typeof raw.theme === "string" && VALID_THEMES.has(raw.theme as ThemeMode)) {
    partial.theme = raw.theme as ThemeMode;
  }
  if (typeof raw.audioSpeed === "number" && Number.isFinite(raw.audioSpeed) && raw.audioSpeed > 0) {
    if (VALID_AUDIO_SPEEDS.has(raw.audioSpeed)) {
      partial.audioSpeed = raw.audioSpeed;
    } else if (raw.audioSpeed >= 0.5 && raw.audioSpeed <= 2.0) {
      partial.audioSpeed = raw.audioSpeed;
    }
  }
  if (typeof raw.autoPlayAudio === "boolean") {
    partial.autoPlayAudio = raw.autoPlayAudio;
  }
  if (typeof raw.showTransliteration === "boolean") {
    partial.showTransliteration = raw.showTransliteration;
  }
  if (
    typeof raw.arabicFontSize === "string" &&
    VALID_FONT_SIZES.has(raw.arabicFontSize as FontSizeScale)
  ) {
    partial.arabicFontSize = raw.arabicFontSize as FontSizeScale;
  }
  if (
    typeof raw.explanationLanguage === "string" &&
    VALID_LANGUAGES.has(raw.explanationLanguage as LanguageCode)
  ) {
    partial.explanationLanguage = raw.explanationLanguage as LanguageCode;
  }

  return partial;
}
