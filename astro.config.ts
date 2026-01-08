// astro.config.ts
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_CONFIG } from './src/consts';

export default defineConfig({
  site: `https://${SITE_CONFIG.domain}`, // consts.tsから自動設定
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: 'file'
  }
});