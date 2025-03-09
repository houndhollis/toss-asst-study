import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    allowedHosts: ["toss-asst-study-production.up.railway.app"],
  },
  preview: {
    allowedHosts: ["toss-asst-study-production.up.railway.app"],
  },
});
