# @powertrainer/changelog

Single source of truth for the PowerTrainer changelog, shared by **fe-web** (React 18) and
**fe-landing** (React 19). Ships:

- the changelog **data** (typed, fully translated into all six supported locales),
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

## Adding a changelog entry (the release checklist)

**This package is never published to npm.** Both consumers install it as a GitHub tag dependency
(`"github:kollermartin/powertrainer-changelog#v1.17.0"`), so *pushing the tag* is the release, and
`dist/` is built by the `prepare` script on the consumer's install rather than committed here.

1. Prepend a new `ChangelogEntry` to the array in [`src/data.ts`](./src/data.ts) — newest at the
   top. Only `en` is required by the type and `localize()` falls back to it, but **fill in all six
   locales** (`en cs de fr ru uk`) — the existing entries are fully translated, so a partial entry
   would render as an English island inside an otherwise localized list.
2. Commit the entry. Version convention in practice: a new feature is a **minor**, an improvement or
   a fix is a **patch**.
3. `npm version minor` (or `patch` / `major`) — commits the bump and creates the `v<x>` tag.
4. `git push origin main && git push origin v<x>`. The tag has to be on GitHub before either
   consumer can install it.
5. In **fe-web** and **fe-landing**: `npm install @powertrainer/changelog`, commit, deploy.

> ⚠️ **Name the package in step 5.** A bare `npm install` updates only the spec string in
> `package.json` and leaves the lockfile resolved to the *old* commit — a lock that contradicts
> itself, with `node_modules` still holding the previous entries. `npm install --package-lock-only`
> is worse: the same stale resolution, plus unrelated bundled-dependency churn in fe-landing's lock.
> A correct bump is a 4-line diff: one in `package.json`, three in the lock. Check that the lock
> names the new version *and* the bump commit's SHA before committing.

> A tag push is required to surface a new entry — the data is bundled at build time, not fetched
> at runtime.

## Develop

```bash
npm install
npm run build   # tsup → dist/ (ESM + CJS + .d.ts + changelog.css)
npm test        # vitest (localize + component render)
```

## Conventions

- Data authored newest-first; `getChangelog()` re-sorts by date descending defensively.
- `SupportedLocale` (`en cs ru uk fr de`) matches the locales **both** apps ship — fe-web's i18n
  namespaces and fe-landing's `app/[lang]/dictionaries/`. Register per language: DE informal (du),
  FR `vous`, CS/RU/UK formal (vy/вы/ви).
- The component carries no styling dependency (no Ant Design / Tailwind) so it drops into both apps.
