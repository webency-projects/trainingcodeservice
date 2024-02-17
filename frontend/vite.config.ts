import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import path from "path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve("src/app"),
      "@processes": path.resolve("src/processes"),
      "@pages": path.resolve("src/pages"),
      "@widgets": path.resolve("src/widgets"),
      "@features": path.resolve("src/features"),
      "@entities": path.resolve("src/entities"),
      "@shared": path.resolve("src/shared"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
