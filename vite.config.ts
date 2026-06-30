import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target for self-hosting. The Lovable wrapper only runs the Nitro
// server build when a preset is set explicitly; without this a non-Lovable host
// (e.g. Vercel) gets a client-only build with no server -> 404 NOT_FOUND.
//
// The wrapper also forces Nitro's output into `dist/`, so for the Vercel preset
// we redirect output to the Build Output API layout (`.vercel/output`) that
// Vercel auto-detects. Override the preset with the NITRO_PRESET env var.
const preset = process.env.NITRO_PRESET ?? "vercel";

const vercelOutput = {
  dir: ".vercel/output",
  serverDir: ".vercel/output/functions/__server.func",
  publicDir: ".vercel/output/static",
};

export default defineConfig({
  nitro: {
    preset,
    ...(preset === "vercel" ? { output: vercelOutput } : {}),
  },
});
