import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const projectRoot = path.resolve(__dirname);
// eslint-disable-next-line no-console
console.log('[vite] root =', projectRoot);

export default defineConfig({
  root: projectRoot,
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    alias: { '@': path.resolve(projectRoot, 'src') },
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
