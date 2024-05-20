import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [react(), tailwind()],
  redirects: {
    '/releases/[...path]': 'https://crowdie.stanford.edu/[...path]'
  }
});