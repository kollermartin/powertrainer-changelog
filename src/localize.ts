import type { LocalizedText, SupportedLocale } from "./types";

/** Resolve a localized string for the given locale, falling back to English. */
export const localize = (text: LocalizedText, locale: SupportedLocale): string => text[locale] ?? text.en;
