// src/pages/site.webmanifest.ts
import type { APIRoute } from 'astro';
import { SITE_CONFIG, COMPANY_INFO } from '../consts';

const manifest = {
  name: SITE_CONFIG.siteTitle,           // consts.tsから自動取得
  short_name: SITE_CONFIG.domain,        // consts.tsから自動取得
  description: "Under Construction",
  start_url: "/",
  display: "standalone",
  background_color: "#0a0a0a",           // global.cssの背景色に合わせる
  theme_color: SITE_CONFIG.themeColor,   // consts.tsの色を使う
  icons: [
    {
      src: "/web-app-manifest-192x192.png",
      type: "image/png",
      sizes: "192x192"
    },
    {
      src: "/web-app-manifest-512x512.png",
      type: "image/png",
      sizes: "512x512"
    }
  ]
};

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
    },
  });
};