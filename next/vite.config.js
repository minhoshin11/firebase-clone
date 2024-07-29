import { defineConfig } from "vite";
import next from "vite-plugin-next";

export default defineConfig({
  plugins: [next()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
