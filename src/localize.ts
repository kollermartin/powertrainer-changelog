import type { LocaleInput, LocalizedText, SupportedLocale } from "./types";

const SUPPORTED: readonly SupportedLocale[] = ["en", "cs", "ru", "uk", "fr", "de"];

/**
 * Normalize whatever a consumer passes as a locale down to a `SupportedLocale`.
 *
 * Consumers feed this from their own i18n layer — `i18n.language` in fe-web, the
 * `[lang]` route segment in fe-landing — and those can legitimately carry a region
 * subtag (`de-DE`, `uk-UA`), odd casing, or be undefined before i18n has resolved.
 * Matching the raw value against the data keys would miss and render English,
 * which is indistinguishable from a genuinely missing translation. Anything
 * unrecognized still falls back to `en`.
 */
export const resolveLocale = (locale: unknown): SupportedLocale => {
    if (typeof locale !== "string") return "en";
    const base = locale.toLowerCase().split(/[-_]/)[0];
    return (SUPPORTED as readonly string[]).includes(base) ? (base as SupportedLocale) : "en";
};

/** Resolve a localized string for the given locale, falling back to English. */
export const localize = (text: LocalizedText, locale: LocaleInput): string =>
    text[resolveLocale(locale)] ?? text.en;
