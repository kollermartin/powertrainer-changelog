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
        version: "1.5.0",
        date: "2026-07-01",
        title: { en: "Plan your own trainings", cs: "Plánujte si vlastní tréninky" },
        changes: [
            {
                type: "added",
                text: {
                    en: "You can now create your own trainings directly on your calendar — plan a workout for any day yourself, without waiting for a trainer to assign one.",
                    cs: "Nově si můžete vytvářet vlastní tréninky přímo ve svém kalendáři — naplánujte si trénink na libovolný den sami, bez čekání na přiřazení od trenéra.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Manage your own trainings freely: edit them, duplicate them, drag them to another day, or delete them anytime.",
                    cs: "Své tréninky si spravujete podle sebe: upravte je, zkopírujte, přetáhněte na jiný den nebo je kdykoli smažte.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Trainings assigned by your trainer appear on the same calendar, labelled with their author and kept view-only, so your own plans and your trainer's never get mixed up.",
                    cs: "Tréninky přiřazené trenérem se zobrazují ve stejném kalendáři, označené jménem autora, a zůstávají jen ke čtení, takže se vaše vlastní plány a plány od trenéra nikdy nepomíchají.",
                },
            },
        ],
    },
    {
        version: "1.4.0",
        date: "2026-06-25",
        title: { en: "Your trainings on a calendar", cs: "Vaše tréninky v kalendáři" },
        changes: [
            {
                type: "improved",
                text: {
                    en: "Your trainings now live on a calendar instead of a plain list — browse any month on desktop or any week on mobile.",
                    cs: "Vaše tréninky se nově zobrazují v kalendáři místo jednoduchého seznamu — procházejte libovolný měsíc na počítači nebo týden na mobilu.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Opening a training now takes you to its full detail page, and going back returns you to the exact month or week you were viewing.",
                    cs: "Otevření tréninku vás nově přenese na celou stránku s detailem a po návratu zpět se vrátíte přesně na měsíc nebo týden, který jste si prohlíželi.",
                },
            },
        ],
    },
    {
        version: "1.3.0",
        date: "2026-06-17",
        title: { en: "Trainings 2.0 is now standard", cs: "Tréninky 2.0 jsou nově standardem" },
        changes: [
            {
                type: "improved",
                text: {
                    en: "Trainings 2.0 is out of beta and is now the standard way to train. When you create a training it's always built set by set — the separate Classic option is gone.",
                    cs: "Tréninky 2.0 opouštějí beta verzi a stávají se standardním způsobem tréninku. Nový trénink se nově vždy sestavuje sérii po sérii — samostatná volba Klasický trénink už není.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "All your existing trainings have been automatically upgraded to the new set-based format — there's nothing you need to do, and your uploaded videos stay attached.",
                    cs: "Všechny vaše stávající tréninky byly automaticky převedeny do nového formátu se sériemi — nemusíte nic dělat a vaše nahraná videa zůstávají na svém místě.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Every training now opens in the same editor and the same view, so the experience is consistent everywhere.",
                    cs: "Každý trénink se nově otevírá ve stejném editoru a zobrazení, takže máte všude jednotné prostředí.",
                },
            },
        ],
    },
    {
        version: "1.2.0",
        date: "2026-06-14",
        title: { en: "Trainings 2.0 (beta)", cs: "Tréninky 2.0 (beta)" },
        changes: [
            {
                type: "added",
                text: {
                    en: "Introducing Trainings 2.0 (beta): build workouts set by set, giving each set its own reps, weight, and difficulty target instead of a single prescription for the whole exercise.",
                    cs: "Představujeme Tréninky 2.0 (beta): sestavujte tréninky sérii po sérii — každá série může mít vlastní cíl pro opakování, váhu i obtížnost místo jednoho zadání pro celý cvik.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Athletes can log what they actually performed for each individual set, making progress tracking far more precise.",
                    cs: "Atleti mohou zaznamenat, co skutečně odcvičili, pro každou jednotlivou sérii, takže sledování pokroku je mnohem přesnější.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Trainings 2.0 is in beta and works as a new training type. When creating a training you can choose between Classic training and Training 2.0. Each has its own editor and its own view. Everything will gradually be unified into Training 2.0.",
                    cs: "Tréninky 2.0 jsou v beta verzi a fungují jako nový typ tréninku. Při vytváření tréninku máte na výběr Klasický trénink a Trénink 2.0. Každý z těchto tréninků má svůj vlastní editor a své zobrazení. Postupně bude vše sjednoceno do podoby Trénink 2.0.",
                },
            },
        ],
    },
    {
        version: "1.1.0",
        date: "2026-06-08",
        title: { en: "A calendar of our own", cs: "Vlastní kalendář" },
        changes: [
            {
                type: "improved",
                text: {
                    en: "The training calendar has been rebuilt from the ground up — faster and lighter, with a dedicated month view on desktop and a streamlined week view on mobile.",
                    cs: "Tréninkový kalendář jsme přepracovali od základu — je rychlejší a lehčí, s vlastním měsíčním zobrazením na počítači a zjednodušeným týdenním zobrazením na mobilu.",
                },
            },
            {
                type: "added",
                text: {
                    en: "Drag and drop a training onto another day to reschedule it instantly.",
                    cs: "Přetáhněte trénink na jiný den a okamžitě jej přeplánujte.",
                },
            },
            {
                type: "improved",
                text: {
                    en: "Smoother drag-and-drop animations make moving trainings around feel effortless.",
                    cs: "Plynulejší animace přetahování usnadňují přesouvání tréninků.",
                },
            },
        ],
    },
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
