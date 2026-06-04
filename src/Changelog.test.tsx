import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { Changelog } from "./Changelog";
import type { ChangelogEntry } from "./types";

const entries: ChangelogEntry[] = [
    {
        version: "2.0.0",
        date: "2026-07-01",
        title: { en: "Big release", cs: "Velké vydání" },
        changes: [{ type: "added", text: { en: "A new thing", cs: "Nová věc" } }],
    },
];

describe("Changelog", () => {
    it("renders entry content in the requested locale", () => {
        const html = renderToStaticMarkup(<Changelog entries={entries} locale="cs" />);
        expect(html).toContain("Velké vydání");
        expect(html).toContain("Nová věc");
        expect(html).toContain("2.0.0");
    });

    it("falls back to English text and default labels for missing locales", () => {
        const html = renderToStaticMarkup(<Changelog entries={entries} locale="de" />);
        expect(html).toContain("Big release");
        expect(html).toContain("Added");
    });

    it("applies overridden labels", () => {
        const html = renderToStaticMarkup(
            <Changelog entries={entries} locale="cs" labels={{ added: "Přidáno" }} />,
        );
        expect(html).toContain("Přidáno");
    });
});
