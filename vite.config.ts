import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["chakra-ui", "framer-motion"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("chakra") || id.includes("framer-motion")) {
            return "vendor-ui";
          }
        },
      },
    },
  },
});
