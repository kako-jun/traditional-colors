# Traditional Colors - Claude AI 開発ドキュメント

このドキュメントは、Claude AIがプロジェクトを理解し、効率的に開発を進めるための中心的なドキュメントです。

---

## 🎯 プロジェクト概要

**Traditional Colors**は、世界各国の伝統色を開発者とデザイナーが簡単に使用できるようにするオープンソースプロジェクトです。

### コンセプト
- 日本の伝統色（和色）を中心に、中国、ヨーロッパなどの伝統色をカバー
- Tailwind CSS、VS Code、Material-UIなど著名なフレームワークに対応
- 美しい色を簡単にプロジェクトに統合できる形で提供

### ターゲットユーザー
- Webデザイナー
- フロントエンド開発者
- UIフレームワーク利用者
- デジタルアーティスト

---

## 📁 プロジェクト構造

```
traditional-colors/
├── .claude/              # Claude AI用の設計・管理ドキュメント
│   ├── DESIGN.md        # 詳細設計ドキュメント
│   ├── TODO.md          # タスク管理
│   └── RESEARCH.md      # 調査結果・参考資料
├── data/                # カラーデータ（JSON）
│   ├── colors/
│   │   ├── japanese.json
│   │   ├── chinese.json
│   │   └── european.json
│   └── schema.json      # データ構造定義
├── generators/          # 各フレームワーク用の変換ツール
│   ├── tailwind.js
│   ├── vscode.js
│   ├── css-variables.js
│   └── ...
├── dist/                # 生成されたファイル
├── docs/                # ドキュメントサイト
├── tests/               # テスト
├── CLAUDE.md           # 本ファイル
└── README.md           # ユーザー向けREADME
```

---

## 🚀 開発フェーズ

### 現在のフェーズ: **🎉 MVP完成！ (v0.1.0)**

#### 完了したタスク ✅

**Phase 1 - 基盤構築**
- [x] .claude/ディレクトリとドキュメント構造
- [x] DESIGN.md（設計ドキュメント）
- [x] TODO.md（タスク管理）
- [x] RESEARCH.md（調査資料）
- [x] STRATEGY.md（差別化戦略）
- [x] CLAUDE.md（本ファイル）
- [x] プロジェクト構造（ディレクトリ、package.json、tsconfig.json）
- [x] データスキーマ定義（data/schema.json）
- [x] 日本の伝統色50色のデータ作成（data/colors/japanese.json）

**Phase 2 - Tier 1 フレームワーク対応**
- [x] Tailwind CSS generator実装（Plugin + Config）
- [x] VS Code theme generator実装（Dark & Light）
- [x] CSS Variables generator実装（CSS + SCSS + HTML）
- [x] 自動ビルドシステム（generators/build-all.js）
- [x] 包括的なREADME作成

#### 生成されるファイル 📦
```
dist/
├── tailwind/
│   ├── colors.js (ESM)
│   ├── colors.cjs (CommonJS)
│   ├── plugin.js (Tailwind Plugin ESM)
│   ├── plugin.cjs (Tailwind Plugin CJS)
│   └── example.config.js
├── vscode/
│   ├── traditional-japanese-dark.json
│   ├── traditional-japanese-light.json
│   ├── package.json
│   └── README.md
└── css/
    ├── colors.css (CSS Variables)
    ├── colors.scss (SCSS Variables)
    └── index.html (カラースウォッチデモ)
```

#### 次のタスク 📝
1. GitHub Actions CI/CD セットアップ
2. Vitest テスト環境構築
3. ドキュメントサイト構築（VitePress）
4. 日本の伝統色を100色に拡充
5. Material-UI / Bootstrap 対応

---

## 🎨 対応フレームワーク優先度

### Tier 1（最優先）
1. **Tailwind CSS** - 最も人気のCSSフレームワーク
2. **VS Code** - 最も使われているエディタ
3. **CSS Variables** - Web標準

### Tier 2-3（順次対応）
4. Sass/SCSS
5. Figma
6. Material-UI (MUI)
7. Bootstrap
8. Ant Design
9. Chakra UI

詳細は `.claude/DESIGN.md` を参照。

---

## 📊 色データ構造

### 基本構造
```json
{
  "colors": {
    "japanese": {
      "koubai": {
        "name": {
          "ja": "紅梅",
          "en": "Koubai",
          "reading": "こうばい"
        },
        "description": {
          "ja": "紅梅の花のような淡い紅色",
          "en": "Light crimson like Japanese apricot blossoms"
        },
        "hex": "#F2A0A1",
        "rgb": [242, 160, 161],
        "hsl": [359, 71, 79],
        "cmyk": [0, 34, 33, 5],
        "category": "red",
        "tags": ["flower", "spring", "warm"]
      }
    }
  }
}
```

### カテゴリ
`red`, `pink`, `orange`, `yellow`, `green`, `blue`, `purple`, `brown`, `gray`, `white`, `black`

---

## 🛠 技術スタック

### コア
- **Node.js** - 実行環境
- **TypeScript** - 型安全性
- **Zod** - バリデーション

### ビルド
- **esbuild** / **tsup** - 高速ビルド

### テスト
- **Vitest** - ユニットテスト

### ドキュメント
- **VitePress** / **Astro** - 静的サイト生成

---

## 📖 重要なドキュメント

### 開発者向け
- `.claude/DESIGN.md` - 詳細設計・アーキテクチャ
- `.claude/TODO.md` - タスク管理・進捗確認
- `.claude/RESEARCH.md` - 調査資料・参考文献

### ユーザー向け（今後作成）
- `README.md` - プロジェクト紹介・使い方
- `CONTRIBUTING.md` - コントリビューションガイド
- `docs/` - ドキュメントサイト

---

## 🎯 開発ガイドライン

### コーディング規約
- TypeScript strict mode
- ESLint + Prettier
- 関数・変数は英語で命名
- コメントは日本語/英語両方OK

### コミットメッセージ
```
feat: Add Japanese traditional colors data (50 colors)
fix: Correct HEX value for Koubai color
docs: Update README with Tailwind CSS usage
chore: Setup build system
```

### ブランチ戦略
- `main` - 安定版
- `claude/traditional-color-schemes-*` - 開発ブランチ（Claude AI用）
- `feature/*` - 機能追加
- `fix/*` - バグ修正

---

## 📦 リリース計画

### v0.1.0 - MVP（最小限の製品）
- 日本の伝統色 50色
- Tailwind CSS対応
- CSS Variables対応
- 基本的なREADME

### v0.2.0
- 日本の伝統色 100色
- VS Code theme対応
- ドキュメントサイト

### v1.0.0
- 日本150色 + 中国50色 + ヨーロッパ30色
- 全Tier1-3フレームワーク対応
- npm / VS Code Marketplace公開

---

## 🤝 開発フロー

### Claude AIとの協働
1. タスクは `.claude/TODO.md` で管理
2. 設計判断は `.claude/DESIGN.md` に記録
3. 調査結果は `.claude/RESEARCH.md` に追加
4. コミットメッセージは明確に
5. 定期的にドキュメント更新

### ビルド方法
```bash
# すべてのジェネレーターを実行
npm run build
# または
node generators/build-all.js

# 個別実行
node generators/tailwind.js
node generators/vscode.js
node generators/css-variables.js
```

### ビルド結果
```
✅ Tailwind CSS complete
✅ CSS Variables complete
✅ VS Code Theme complete
⏱️  Total time: 0.23s
🎉 All generators completed successfully!
```

---

## 🔍 重要な確認事項

### ライセンス
- プロジェクト: MIT License
- 色データ: 伝統色は一般的にパブリックドメイン

### アクセシビリティ
- WCAG 2.1 AA準拠のコントラスト比情報を提供予定

### 国際化
- 色名: 日本語、英語、ローマ字読み
- 説明文: 日本語、英語

---

## 📞 サポート・コミュニケーション

### イシュートラッキング
- GitHub Issues で管理

### ドキュメント更新ルール
- 重要な設計変更は `.claude/DESIGN.md` に反映
- 新しいタスクは `.claude/TODO.md` に追加
- 参考資料は `.claude/RESEARCH.md` に記録

---

## 🎓 学習リソース

### 日本の伝統色について
- [NIPPON COLORS](https://nipponcolors.com/)
- [和色大辞典](https://www.colordic.org/w/)

### フレームワークドキュメント
- [Tailwind CSS - Customizing Colors](https://tailwindcss.com/docs/customizing-colors)
- [VS Code - Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [Material-UI - Palette](https://mui.com/material-ui/customization/palette/)

---

**最終更新**: 2025-11-17
**現在のフェーズ**: MVP完成 (v0.1.0)
**進捗**: 40% (Phase 1 & 2 Tier 1 完了)
