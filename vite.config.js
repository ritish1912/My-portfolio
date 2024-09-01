import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Opens the browser automatically when the server starts
  },
  build: {
    outDir: "build", // Vite defaults to `dist`, so change it to `build` if you want to keep the same output directory as CRA
  },
});
