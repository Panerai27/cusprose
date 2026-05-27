import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Canonical production domain. Do not let preview/CF env vars leak in.
const site = 'https://cusprose.com';

export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
