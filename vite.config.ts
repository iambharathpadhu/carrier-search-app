import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("chakra") || id.includes("framer-motion")) {
            return "vendor-ui";
          }
        },
      },
    },
  },
});
