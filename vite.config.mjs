import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  build: {
    target: "esnext",
  },
});
