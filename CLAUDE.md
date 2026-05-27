# traditional-colors

世界の伝統色（和色・中国色・欧州色）を Tailwind CSS・CSS Variables・VS Code テーマなどで提供するライブラリ。

## 技術スタック

- **Node.js (ESM)** — ビルドスクリプト（TypeScript 非使用、ジェネレーターは純 JS）
- **JSON** — カラーデータの唯一の真実（`data/colors/`）
- **ジェネレーター** — `generators/` 以下で各フォーマットに変換

## リポジトリ構成

```
traditional-colors/
├── data/
│   ├── colors/
│   │   ├── japanese.json   # 日本の伝統色（和色）99色
│   │   ├── chinese.json    # 中国の伝統色 47色
│   │   └── european.json   # ヨーロッパの伝統色 30色
│   └── schema.json         # データ構造定義
├── generators/             # 各フォーマット変換スクリプト
│   ├── build-all.js        # 全ジェネレーターを順次実行
│   ├── tailwind.js         # Tailwind CSS プラグイン + colors.js
│   ├── vscode.js           # VS Code テーマ（dark / light）
│   └── css-variables.js    # CSS Variables + SCSS
├── dist/                   # ビルド生成物（git 管理外）
│   ├── tailwind/           # colors.js / colors.cjs / plugin.js / plugin.cjs
│   ├── css/                # colors.css / colors.scss / index.html（スウォッチ）
│   └── vscode/             # dark.json / light.json / package.json
├── docs/
│   ├── overview.md         # 色数・ロードマップ・地域別概要
│   ├── spec.md             # データスキーマ・命名規則
│   └── competitive-analysis.md  # 競合調査（2026-05-26）
├── CLAUDE.md               # 本ファイル
└── README.md
```

## ビルド

```bash
npm run build                     # dist/ 以下を全生成（= node generators/build-all.js）
npm run build:tailwind            # Tailwind のみ
npm run build:vscode              # VS Code テーマのみ
npm run build:css                 # CSS Variables のみ
```

## package.json の exports（ビルド後に有効）

| import path | ファイル |
|---|---|
| `@traditional-colors/core/tailwind` | `dist/tailwind/colors.js` |
| `@traditional-colors/core/tailwind/plugin` | `dist/tailwind/plugin.js` |
| `@traditional-colors/core/css` | `dist/css/colors.css` |
| `@traditional-colors/core/scss` | `dist/css/colors.scss` |

## 開発方針

- **データファースト**：色の追加は `data/colors/*.json` のみ編集。ジェネレーターは触らない
- **ゼロ依存**：`dist/` の各ファイルは単体で使える。バンドラー不要
- **多地域展開**：日本色だけでなく中国・欧州・将来はインド等も対象
- **キー重複NG**：3地域の色キーは一意を保つこと（tailwind.js がビルド時に重複検出してエラーを出す）

## 競合との差別化

`docs/competitive-analysis.md` 参照。一言で言うと：

> **Tailwind × 伝統色** の組み合わせは 2026-05-26 時点で存在しない。直接競合（nippon-colors 等）はすべてメンテ停止。十分独自性がある。

## 残タスク

- [ ] GitHub Actions CI/CD（build 確認）
- [ ] Vitest テスト環境
- [ ] 色数拡充（日本 150色・中国 100色）
- [ ] npm publish（`@traditional-colors/core`）
- [ ] ドキュメントサイト（Astro）
- [ ] VS Code Marketplace 公開
