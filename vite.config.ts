import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Pin the root to this file's directory rather than letting Vite infer it from
// process.cwd(). Normally identical, but they diverge when the checkout sits
// behind a junction or a redirected folder.
const projectRoot = path.resolve(__dirname);

export default defineConfig({
  root: projectRoot,
  plugins: [react()],
  resolve: {
    // Don't canonicalise module ids. On Windows, a checkout behind a redirected
    // folder resolves to a much longer real path; past MAX_PATH the dev server
    // silently fails to read files and serves raw, untransformed TSX. Safe here
    // because dependencies come from a plain `npm ci` — no linked packages.
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
