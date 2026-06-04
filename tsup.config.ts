import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    sourcemap: true,
    // React (and its JSX runtime) is provided by the host app — never bundle it.
    external: ["react", "react-dom", "react/jsx-runtime"],
    // Ship the stylesheet alongside the bundle so consumers can opt into it.
    onSuccess: "cp src/changelog.css dist/changelog.css",
});
