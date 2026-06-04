# @powertrainer/changelog

Single source of truth for the PowerTrainer changelog, shared by **fe-web** (React 18) and
**fe-landing** (React 19). Ships:

- the changelog **data** (typed, EN/CS inline with EN fallback for other locales),
- a `localize()` helper,
- a dependency-free, hook-free **`<Changelog />`** React component (works as a client component
  *and* a Next.js server component),
- optional default styles.

React is a **peer dependency** (`^18 || ^19`) and is never bundled — each app supplies its own.

## Install

```bash
npm install @powertrainer/changelog
```

## Usage

```tsx
import { Changelog } from "@powertrainer/changelog";
import "@powertrainer/changelog/changelog.css"; // optional default styling

// Simplest — renders the bundled changelog, newest first, in English:
<Changelog />

// With a locale and translated tag labels:
<Changelog
    locale="cs"
    labels={{ added: "Přidáno", improved: "Vylepšeno", fixed: "Opraveno" }}
    formatDate={(iso, locale) => new Date(iso).toLocaleDateString(locale)}
/>
```

### fe-web (React 18 + Ant Design + i18next)

Pass `i18n.language` as `locale` and translated `labels` from a `changelog` namespace. Render
inside your own page/route. You can skip the CSS import and style via the `ptc-changelog*` class
hooks, or theme the CSS variables (see `changelog.css`).

### fe-landing (Next.js 16 + React 19)

The component is hook-free, so it renders as a server component directly inside an
`app/[lang]/changelog/page.tsx` route. Pass `locale={lang}` and labels from the page dictionary.

### Data-only (render it yourself)

```tsx
import { getChangelog, localize } from "@powertrainer/changelog";

getChangelog().map((entry) =>
    entry.changes.map((c) => localize(c.text, "cs")),
);
```

## `<Changelog />` props

| Prop         | Type                                          | Default            | Notes                                            |
| ------------ | --------------------------------------------- | ------------------ | ------------------------------------------------ |
| `locale`     | `SupportedLocale`                             | `"en"`             | Per-string fallback to English.                  |
| `entries`    | `ChangelogEntry[]`                            | bundled, newest-first | Override to render a custom subset.           |
| `labels`     | `Partial<Record<ChangeType, string>>`         | `Added/Improved/Fixed` | Translated change-type tag labels.          |
| `className`  | `string`                                      | —                  | Added to the root element.                       |
| `formatDate` | `(isoDate, locale) => string`                 | raw ISO date       | Custom date formatting.                          |

## Adding a changelog entry (the publish checklist)

1. Prepend a new `ChangelogEntry` to the array in [`src/data.ts`](./src/data.ts) — newest at the
   top. `en` text is required; `cs` (and other locales) are optional and fall back to `en`.
2. Bump the version: `npm version patch` (or `minor` / `major`).
3. Build + publish: `npm publish` (runs `build` via `prepublishOnly`; publishes publicly).
4. In **fe-web** and **fe-landing**: `npm install @powertrainer/changelog@latest`, commit, deploy.

> Publishing is required to surface a new entry — the data is bundled at build time, not fetched
> at runtime.

## Develop

```bash
npm install
npm run build   # tsup → dist/ (ESM + CJS + .d.ts + changelog.css)
npm test        # vitest (localize + component render)
```

## Conventions

- Data authored newest-first; `getChangelog()` re-sorts by date descending defensively.
- `SupportedLocale` mirrors fe-web's i18n locales (`en cs ru uk fr de`); fe-landing uses `en cs`.
- The component carries no styling dependency (no Ant Design / Tailwind) so it drops into both apps.
