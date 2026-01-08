// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../consts';

const sitemapURL = `https://${SITE_CONFIG.domain}/sitemap-index.xml`;

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};