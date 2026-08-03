import { describe, it, expect } from "vitest";
import { localize, resolveLocale } from "./localize";
import type { SupportedLocale } from "./types";

describe("localize", () => {
    it("returns the requested locale when present", () => {
        expect(localize({ en: "Hello", cs: "Ahoj" }, "cs")).toBe("Ahoj");
    });

    it("falls back to English when the locale is missing", () => {
        expect(localize({ en: "Hello" }, "cs")).toBe("Hello");
    });

    // Regression: consumers pass i18n.language / a route segment straight through,
    // and a region-tagged value used to miss the data key and render English.
    it("matches a region-tagged locale against its base language", () => {
        expect(localize({ en: "Hello", de: "Hallo" }, "de-DE" as SupportedLocale)).toBe("Hallo");
        expect(localize({ en: "Hello", uk: "Привіт" }, "uk-UA" as SupportedLocale)).toBe("Привіт");
    });

    it("is case-insensitive", () => {
        expect(localize({ en: "Hello", fr: "Bonjour" }, "FR" as SupportedLocale)).toBe("Bonjour");
    });

    it("falls back to English for a nullish or unknown locale", () => {
        expect(localize({ en: "Hello", cs: "Ahoj" }, undefined as unknown as SupportedLocale)).toBe("Hello");
        expect(localize({ en: "Hello", cs: "Ahoj" }, "" as SupportedLocale)).toBe("Hello");
        expect(localize({ en: "Hello", cs: "Ahoj" }, "es" as SupportedLocale)).toBe("Hello");
    });
});

describe("resolveLocale", () => {
    it("passes through supported bare codes", () => {
        expect(resolveLocale("de")).toBe("de");
        expect(resolveLocale("uk")).toBe("uk");
    });

    it("strips region subtags and normalizes case", () => {
        expect(resolveLocale("de-DE")).toBe("de");
        expect(resolveLocale("cs_CZ")).toBe("cs");
        expect(resolveLocale("FR")).toBe("fr");
    });

    it("falls back to en for anything unrecognized", () => {
        expect(resolveLocale("es")).toBe("en");
        expect(resolveLocale(undefined)).toBe("en");
        expect(resolveLocale(null)).toBe("en");
        expect(resolveLocale(42)).toBe("en");
    });
});
