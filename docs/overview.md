# Overview

世界の伝統色を Tailwind CSS・CSS Variables・VS Code テーマなどのフォーマットで提供するライブラリ。

## コンセプト

- **ソースは1つ**：`data/colors/` の JSON が唯一の真実
- **出力は多数**：Tailwind プラグイン / CSS Variables / SCSS / VS Code テーマ
- **文化的コンテキスト付き**：色名の日本語・英語・読み仮名・由来・時代背景
- **メンテナンス継続**：直接競合はすべてメンテ停止。この点が最大の優位性

## 色データ現状

| 地域 | 色数 | データファイル |
|---|---|---|
| 日本（和色） | 99色 | `data/colors/japanese.json` |
| 中国（中国伝統色） | 47色 | `data/colors/chinese.json` |
| ヨーロッパ | 30色 | `data/colors/european.json` |
| **合計** | **176色** | |

### 目標色数

| フェーズ | 日本 | 中国 | ヨーロッパ |
|---|---|---|---|
| v0.1.0（現状） | 99 | 47 | 30 |
| v0.2.0 | 150 | 100 | 60 |
| v1.0.0 | 250 | 150 | 100 |

## 対応フォーマット

| フォーマット | ステータス | 出力ファイル |
|---|---|---|
| **Tailwind CSS** | ✅ 実装済み | `dist/tailwind/colors.js` / `colors.cjs` |
| **Tailwind Plugin** | ✅ 実装済み | `dist/tailwind/plugin.js` / `plugin.cjs` |
| **CSS Variables** | ✅ 実装済み | `dist/css/colors.css` |
| **SCSS 変数** | ✅ 実装済み | `dist/css/colors.scss` |
| **VS Code テーマ** | ✅ 実装済み | `dist/vscode/*.json` |
| Figma | 🚧 未実装 | — |
| Material-UI | 🚧 未実装 | — |

## ロードマップ

### v0.1.0（完了）
- 日本 99色・中国 47色・ヨーロッパ 30色
- Tailwind CSS カラーオブジェクト（ESM / CJS）
- Tailwind CSS プラグイン（ESM / CJS）
- CSS Variables（`dist/css/colors.css`）
- SCSS 変数（`dist/css/colors.scss`）
- VS Code テーマ（Dark / Light）
- ビルドシステム（`npm run build`）
- 色スウォッチ HTML（`dist/css/index.html`）

### v0.2.0（次）
- GitHub Actions CI/CD
- Vitest テスト環境
- 色数拡充（日本 150色・中国 100色）
- npm publish（`@traditional-colors/core`）

### v1.0.0
- 全地域 500色超
- Figma プラグイン
- VS Code Marketplace 公開
- ドキュメントサイト（Astro）
