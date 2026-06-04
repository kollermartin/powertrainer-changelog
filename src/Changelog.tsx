import type { ChangeType, ChangelogEntry, SupportedLocale } from "./types";
import { localize } from "./localize";
import { getChangelog } from "./data";

const DEFAULT_LABELS: Record<ChangeType, string> = {
    added: "Added",
    improved: "Improved",
    fixed: "Fixed",
};

export interface ChangelogProps {
    /** Locale to render entry text in. Falls back to English per-string. Default "en". */
    locale?: SupportedLocale;
    /** Entries to render. Defaults to the bundled changelog (newest first). */
    entries?: ChangelogEntry[];
    /** Override the change-type tag labels (e.g. translated "Added"/"Improved"/"Fixed"). */
    labels?: Partial<Record<ChangeType, string>>;
    /** Extra class name on the root element, for app-specific styling. */
    className?: string;
    /** Format the ISO date for display. Defaults to the raw ISO date string. */
    formatDate?: (isoDate: string, locale: SupportedLocale) => string;
}

/**
 * Presentational, dependency-free changelog list. Hook-free, so it renders
 * equally well as a React 18 client component or a React 19 server component.
 *
 * Styling is opt-in: import `@powertrainer/changelog/changelog.css` for the
 * defaults, or target the stable `ptc-changelog*` class hooks from your app.
 */
export const Changelog = ({
    locale = "en",
    entries,
    labels,
    className,
    formatDate,
}: ChangelogProps): JSX.Element => {
    const data = entries ?? getChangelog();
    const tagLabels = { ...DEFAULT_LABELS, ...labels };
    const rootClassName = className ? `ptc-changelog ${className}` : "ptc-changelog";

    return (
        <div className={rootClassName}>
            {data.map((entry) => (
                <section className="ptc-changelog__entry" key={`${entry.version}-${entry.date}`}>
                    <header className="ptc-changelog__entry-header">
                        <span className="ptc-changelog__version">{entry.version}</span>
                        <time className="ptc-changelog__date" dateTime={entry.date}>
                            {formatDate ? formatDate(entry.date, locale) : entry.date}
                        </time>
                    </header>
                    {entry.title ? (
                        <h3 className="ptc-changelog__title">{localize(entry.title, locale)}</h3>
                    ) : null}
                    <ul className="ptc-changelog__changes">
                        {entry.changes.map((change, index) => (
                            <li
                                className={`ptc-changelog__change ptc-changelog__change--${change.type}`}
                                key={`${entry.version}-${index}`}
                            >
                                <span className={`ptc-changelog__tag ptc-changelog__tag--${change.type}`}>
                                    {tagLabels[change.type]}
                                </span>
                                <span className="ptc-changelog__text">{localize(change.text, locale)}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
};
