import type { ChangelogEntry } from "./types";

/**
 * The PowerTrainer changelog — the single source of truth, authored newest-first.
 *
 * To publish a new entry:
 *   1. Prepend a new ChangelogEntry to this array (newest at the top).
 *   2. Bump the package version (npm version patch | minor | major).
 *   3. npm publish.
 *   4. Update `@powertrainer/changelog` in fe-web and fe-landing, then deploy.
 *
 * See README.md for the full checklist.
 */
export const changelogEntries: ChangelogEntry[] = [
    {
        version: "1.0.0",
        date: "2026-06-04",
        title: { en: "What's new is now here", cs: "Novinky máte nově tady" },
        changes: [
            {
                type: "added",
                text: {
                    en: "You can now see what's new in PowerTrainer on this page.",
                    cs: "Nově zde uvidíte, co je v PowerTraineru nového.",
                },
            },
        ],
    },
];

/**
 * Changelog entries sorted newest-first by date. Defensive — the array above is
 * authored newest-first too, but this guarantees order regardless of edits.
 */
export const getChangelog = (): ChangelogEntry[] =>
    [...changelogEntries].sort((a, b) => b.date.localeCompare(a.date));
