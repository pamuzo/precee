import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/preceeweb",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
      },
    },
  },
});
