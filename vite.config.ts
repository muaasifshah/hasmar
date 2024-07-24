import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    remix({
      future: {
        unstable_singleFetch: true, // remove
        unstable_fogOfWar: true, // remove
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});