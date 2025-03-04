import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure it works correctly on Render
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },
  server: {
    port: 3000, // Local dev server port
    strictPort: true,
  },
  preview: {
    port: 3000, // Ensure preview works on Render
    strictPort: true,
  },
});
