# traditional-colors

世界の伝統色（和色・中国色・欧州色）を Tailwind CSS・CSS Variables・VS Code テーマなどで提供するライブラリ。

## 技術スタック

- **Node.js + TypeScript** — ビルドスクリプト
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
│   ├── build-all.js
│   ├── tailwind.js
│   ├── vscode.js
│   └── css-variables.js
├── dist/                   # ビルド生成物（git 管理外）
│   ├── tailwind/
│   ├── css/
│   └── vscode/
├── docs/
│   ├── overview.md         # 色数・ロードマップ・地域別概要
│   ├── spec.md             # データスキーマ・命名規則
│   └── competitive-analysis.md  # 競合調査（2026-05-26）
├── CLAUDE.md               # 本ファイル
└── README.md
```

## ビルド

```bash
npm run build       # dist/ 以下を全生成
node generators/tailwind.js       # Tailwind のみ
node generators/vscode.js         # VS Code テーマのみ
node generators/css-variables.js  # CSS Variables のみ
```

## 開発方針

- **データファースト**：色の追加は `data/colors/*.json` のみ編集。ジェネレーターは触らない
- **ゼロ依存**：`dist/` の各ファイルは単体で使える。バンドラー不要
- **多地域展開**：日本色だけでなく中国・欧州・将来はインド等も対象

## 競合との差別化

`docs/competitive-analysis.md` 参照。一言で言うと：

> **Tailwind × 伝統色** の組み合わせは 2026-05-26 時点で存在しない。直接競合（nippon-colors 等）はすべてメンテ停止。十分独自性がある。

## 残タスク

- [ ] GitHub Actions CI/CD（型チェック + build 確認）
- [ ] Vitest テスト環境
- [ ] 色数拡充（日本 150色・中国 100色）
- [ ] SCSS 変数出力
- [ ] npm publish（`@traditional-colors/core`）
- [ ] ドキュメントサイト（Astro）
- [ ] VS Code Marketplace 公開
