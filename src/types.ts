export type SupportedLocale = "en" | "cs" | "ru" | "uk" | "fr" | "de";

/**
 * What a consumer may hand to `locale`. Keeps autocomplete for the six supported
 * codes while accepting the raw value an app's i18n layer produces — `i18n.language`
 * or a route segment, which can carry a region subtag (`de-DE`). `resolveLocale()`
 * normalizes it, so consumers never need an `as SupportedLocale` cast that would
 * hide a genuinely unsupported value.
 */
export type LocaleInput = SupportedLocale | (string & {});

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
