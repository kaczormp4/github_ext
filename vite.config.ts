import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "MyApp",
      fileName: () => "app.js",
      formats: ["iife"], // pojedynczy bundle
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        // manualChunks: () => null,
      },
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
