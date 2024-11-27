import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import * as child_process from 'node:child_process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Use vitePreprocess for Svelte preprocessor
  preprocess: vitePreprocess(),

  kit: {
    // Use the Vercel adapter for deployment
    adapter: adapter(),

    // Prerender configuration for static generation
    prerender: {
      handleMissingId: 'warn', // Handle missing IDs during prerendering
    },

    // Add versioning using the latest Git commit hash
    version: {
      name: child_process.execSync('git rev-parse HEAD').toString().trim(),
    },
  },
};

export default config;
