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
        version: "1.0.1",
        date: "2026-06-04",
        title: { en: "Trainings & calendar redesign", cs: "Nový vzhled tréninků a kalendáře" },
        changes: [
            {
                type: "improved",
                text: {
                    en: "The trainings and calendar screens got a UX/UI rework — cleaner layout, clearer training events, and much better behavior on mobile, including a redesigned week view.",
                    cs: "Obrazovky tréninků a kalendáře prošly úpravou UX/UI — přehlednější rozvržení, jasnější zobrazení tréninků a mnohem lepší chování na mobilu včetně přepracovaného týdenního zobrazení.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Smoother exercise detail view and a tidier trainings overview.",
                    cs: "Vylepšený detail tréninku a přehled tréninků.",
                },
            },
        ],
    },
    {
        version: "1.0.0",
        date: "2026-06-04",
        title: { en: "Subscriptions & plans", cs: "Předplatné a plány" },
        changes: [
            {
                type: "added",
                text: {
                    en: "Subscriptions are here — upgrade to the Pro plan with secure Stripe checkout and manage your billing anytime from the customer portal.",
                    cs: "Předplatné je tady — přejděte na plán Pro přes zabezpečenou platbu Stripe a fakturaci kdykoli spravujte v zákaznickém portálu.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Free and Pro plans for trainers: Pro raises the number of active athletes you can coach.",
                    cs: "Plány Free a Pro pro trenéry: Pro zvyšuje počet aktivních atletů, které můžete trénovat.",
                },
            },
            {
                type: "added",
                text: {
                    en: "A new Subscription page shows your current plan, its status, and your payment details at a glance.",
                    cs: "Nová stránka Předplatné přehledně zobrazuje váš aktuální plán, jeho stav a platební údaje.",
                },
            },
            {
                type: "added",
                text: {
                    en: "If a payment fails, you get an in-app notification with a one-click link to update your payment method.",
                    cs: "Když platba selže, dostanete upozornění v aplikaci s odkazem na rychlou aktualizaci platební metody.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "A grace period keeps your access running while a failed payment is retried, so your coaching never stops abruptly.",
                    cs: "Ochranná lhůta udrží váš přístup v provozu během opakování neúspěšné platby, takže vaše trénování náhle neskončí.",
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
