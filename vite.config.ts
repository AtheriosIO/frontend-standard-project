/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

const PORT = Number(process.env.VITE_PORT || '3000');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  },
  preview: {
    port: PORT,
  },
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 1000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    pool: 'forks',
    coverage: {
      provider: 'v8',
      exclude: [...configDefaults.exclude, '**/assets/**', '**/.{eslint*,prettier*}.*', '**/test/**'],
    },
    testTimeout: 30000,
  },
})
