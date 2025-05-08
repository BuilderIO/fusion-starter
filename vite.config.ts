import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
