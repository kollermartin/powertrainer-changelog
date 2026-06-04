export type SupportedLocale = "en" | "cs" | "ru" | "uk" | "fr" | "de";

/**
 * A localized string. `en` is required and is used as the fallback for any
 * locale that isn't provided, so an entry never renders blank.
 */
export type LocalizedText = { en: string } & Partial<Record<SupportedLocale, string>>;

export type ChangeType = "added" | "improved" | "fixed";

export interface ChangelogChange {
    type: ChangeType;
    text: LocalizedText;
}

export interface ChangelogEntry {
    /** Semver or any human-readable release identifier, e.g. "1.4.0". */
    version: string;
    /** ISO date (YYYY-MM-DD) the entry was released. */
    date: string;
    /** Optional headline for the release. */
    title?: LocalizedText;
    changes: ChangelogChange[];
}
