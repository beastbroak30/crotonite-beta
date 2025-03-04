import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // No need for a subpath on Render
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
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Use Render's PORT
    strictPort: true,
    host: '0.0.0.0', // Allow external access (important for Render)
  },
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    strictPort: true,
    host: '0.0.0.0', // Allow Render to access the app externally
  },
});
