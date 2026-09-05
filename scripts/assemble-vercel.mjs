// Vercel static-prerender assembler (Build Output API v3).
// Copies dist/client into .vercel/output/static, then imports the SSR
// bundle and renders "/", "/robots.txt" and "/sitemap.xml" to static files.
// NOTE: the bundle import must NOT carry a cache-buster query string - the
// query breaks the bundle's internal relative asset resolution and the
// prerendered response silently becomes a 500.
import { existsSync, mkdirSync, cpSync, writeFileSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distClient = resolve(root, "dist/client");
const distServer = resolve(root, "dist/server/server.js");
const outStatic = resolve(root, ".vercel/output/static");

if (!existsSync(distServer)) {
  console.error("SSR bundle not found:", distServer);
  process.exit(1);
}

rmSync(outStatic, { recursive: true, force: true });
mkdirSync(outStatic, { recursive: true });
cpSync(distClient, outStatic, { recursive: true });

// Issued Fresh Build Output API config: filesystem-first, then SPA fallback to
// index.html so deep links (e.g. /work/white-as-snow) render via the client
// router instead of 404ing. Written on every build so git deployments that
// ignore .vercel/ still produce a complete output.
const configPath = resolve(root, ".vercel/output/config.json");
writeFileSync(
  configPath,
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/index.html" },
      ],
    },
    null,
    2,
  ),
);
console.log("wrote .vercel/output/config.json");

const mod = await import(distServer);
const server = mod && typeof mod.fetch === "function" ? mod : mod && mod.default;

if (!server || typeof server.fetch !== "function") {
  console.error("SSR bundle has no fetch export");
  process.exit(1);
}

const paths = ["/", "/robots.txt", "/sitemap.xml"];
const origin = "https://francisco-sousa.higgsfield.app";
for (const path of paths) {
  const res = await server.fetch(new Request(origin + path));
  if (!res.ok) {
    console.error("prerender failed:", path, res.status);
    process.exit(1);
  }
  const text = await res.text();
  const outName = path === "/" ? "index.html" : path.slice(1);
  writeFileSync(resolve(outStatic, outName), text);
  console.log("prerendered", path, "->", outName, "(" + text.length + " bytes)");
}

console.log("Vercel static output ready at", outStatic);