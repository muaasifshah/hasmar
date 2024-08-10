import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
const targetUrl = process.env.VITE_BASE_URL ?? "http://localhost:5000";
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
  server: {
    proxy: {
      "/api": {
        target: targetUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    port: 3000,
  },
});
