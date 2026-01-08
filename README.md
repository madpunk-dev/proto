# Domain Parking Template (Astro)

ドメイン取得直後の「開発中（Under Construction）」を表示するための汎用テンプレートです。
SEO（構造化データ）、レスポンシブ対応済み。

## 使い方

### 1. 設定の変更
- `src/consts.ts` を開き、新しいドメインの情報に書き換えてください。
- `public/`: アイコン画像置き場
  - favicon.ico
  - icon.svg
  - apple-touch-icon.png
  - icon-192.png
  - icon-mask.png
  - icon-512.png

\`\`\`ts
export const SITE_CONFIG = {
  domain: "new-domain.com", // ★ここを変更
  siteTitle: "NEW SERVICE",
  // ...
};
\`\`\`

### 2. 開発サーバーの起動
\`\`\`bash
npm install
npm run dev
\`\`\`

### 3. ビルド（公開用ファイルの生成）
\`\`\`bash
npm run build
\`\`\`
`dist/` フォルダに生成されたファイルをアップロードしてください。
（GitHub Pagesの場合は、Settings > Pages で `GitHub Actions` を選択すれば自動化も可能です）

## ディレクトリ構成
- `src/consts.ts`: 設定ファイル（ここを変えるだけで別サイトになります）
- `src/pages/about.astro`: 運営情報ページ
- `public/`: アイコン画像置き場
