import { describe, it, expect } from "vitest";
import { localize } from "./localize";

describe("localize", () => {
    it("returns the requested locale when present", () => {
        expect(localize({ en: "Hello", cs: "Ahoj" }, "cs")).toBe("Ahoj");
    });

    it("falls back to English when the locale is missing", () => {
        expect(localize({ en: "Hello" }, "cs")).toBe("Hello");
    });
});
