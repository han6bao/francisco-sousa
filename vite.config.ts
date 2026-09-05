import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Vercel port of the Francisco Sousa site (static-prerender mode).
// No server-entry override (the framework default entry is used and its
// build export is `{ fetch }`, which scripts/assemble-vercel.mjs calls at
// build time to prerender every route). The SSR bundle is self-contained
// via ssr.noExternal — no node_modules at runtime, no Cloudflare bindings.
export default defineConfig({
  ssr: {
    noExternal: true,
  },
  plugins: [
    // TanStack Start plugin must run before React's plugin.
    tanstackStart(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});