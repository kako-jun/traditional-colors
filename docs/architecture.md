# Traditional Colors - 設計ドキュメント

## プロジェクト概要

世界各国の伝統色を、エディタやWEBフレームワークで簡単に使用できるようにするカラースキーマプロジェクト。

### 主な目標
- 日本の伝統色（和色）を中心に、世界各国の伝統色をサポート
- 著名なフレームワーク・ツールへの対応（優先度順）
- 開発者とデザイナーの両方が使いやすい形式で提供
- 自動生成により複数フォーマットへの変換を効率化

---

## サポート対象の伝統色

### 1. 日本の伝統色（和色）- 第一優先
- 基本色: 約100-150色
  - 紅系: 紅梅(こうばい)、桜色、桃色、撫子色(なでしこいろ)
  - 青系: 藍色、浅葱色、瑠璃色、群青色、水浅葱
  - 緑系: 萌黄、若草色、鶯色、抹茶色、常磐色
  - 黄系: 山吹色、菜の花色、刈安色、黄蘗色
  - 茶系: 柿色、煉瓦色、栗色、茶色、焦茶
  - 紫系: 藤色、菫色、江戸紫、京紫
  - 白/黒/灰: 胡粉、象牙色、鼠色、墨色

### 2. 中国の伝統色 - 第二優先
- 赤: 朱砂、绯红、胭脂
- 青: 靛青、湖蓝、天青
- 緑: 竹青、豆绿、松绿
- 黄: 缃黄、杏黄、鹅黄

### 3. ヨーロッパの伝統色 - 第三優先
- フランス: Bleu de France, Rouge Cardinal
- イギリス: Royal Blue, British Racing Green
- イタリア: Venetian Red, Pompeian Red

---

## フレームワーク対応優先度

### Tier 1（最優先 - 最も著名）
1. **Tailwind CSS** (npm weekly: 10M+)
   - `tailwind.config.js` での extend.colors 設定
   - プラグイン形式での提供も検討

2. **VS Code** (エディタシェア: 70%+)
   - カラーテーマ (.vsix拡張機能)
   - editor.tokenColorCustomizations 形式

3. **CSS Variables** (Web標準)
   - `:root` での変数定義
   - 全ブラウザ対応

### Tier 2（高優先）
4. **Sass/SCSS** (CSSプリプロセッサ標準)
   - 変数、マップ、関数の提供

5. **Figma** (デザインツール標準)
   - Color Styles定義
   - プラグインまたはインポート可能な形式

6. **Material-UI (MUI)** (React npm weekly: 3M+)
   - theme.palette カスタマイズ

### Tier 3（中優先）
7. **Bootstrap** (npm weekly: 4M+)
   - SCSS変数オーバーライド

8. **Ant Design** (React npm weekly: 1M+)
   - theme変数カスタマイズ

9. **Chakra UI** (React npm weekly: 800K+)
   - extendTheme colors

### Tier 4（汎用フォーマット）
10. **JSON/YAML** - APIやツール連携用
11. **JavaScript/TypeScript** - プログラマティックな利用
12. **Adobe ASE** - Adobe製品用

---

## データ構造設計

### 色定義の基本構造 (JSON)

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
    },
    "chinese": { ... },
    "european": { ... }
  }
}
```

### カテゴリ分類
- `red`, `pink`, `orange`, `yellow`, `green`, `blue`, `purple`, `brown`, `gray`, `white`, `black`

### メタデータ
- 季節感: `spring`, `summer`, `autumn`, `winter`
- 温度感: `warm`, `cool`, `neutral`
- 由来: `nature`, `flower`, `mineral`, `dye`, `art`

---

## プロジェクト構造

```
traditional-colors/
├── .claude/
│   ├── DESIGN.md          # 本ドキュメント
│   ├── TODO.md            # タスク管理
│   └── RESEARCH.md        # 調査結果・参考資料
├── data/
│   ├── colors/
│   │   ├── japanese.json
│   │   ├── chinese.json
│   │   └── european.json
│   └── schema.json        # JSONスキーマ定義
├── generators/
│   ├── tailwind.js
│   ├── vscode.js
│   ├── css-variables.js
│   ├── scss.js
│   ├── figma.js
│   ├── mui.js
│   └── bootstrap.js
├── dist/                  # 生成ファイル出力先
│   ├── tailwind/
│   ├── vscode/
│   ├── css/
│   └── ...
├── docs/                  # ドキュメント・デモ
│   ├── index.html         # カラーパレット表示
│   └── examples/
├── tests/
├── package.json
└── README.md
```

---

## 実装フェーズ

### Phase 1: 基盤構築
- [x] プロジェクト構造設計
- [ ] データ構造の確定
- [ ] 日本の伝統色データ収集（50色から開始）
- [ ] ビルドシステムの構築

### Phase 2: Tier 1 フレームワーク対応
- [ ] Tailwind CSS generator
- [ ] VS Code theme generator
- [ ] CSS Variables generator

### Phase 3: データ拡充
- [ ] 日本の伝統色を150色に拡充
- [ ] 中国の伝統色追加（50色）
- [ ] ヨーロッパの伝統色追加（30色）

### Phase 4: Tier 2-3 フレームワーク対応
- [ ] Sass/SCSS
- [ ] Figma
- [ ] Material-UI
- [ ] Bootstrap
- [ ] その他人気フレームワーク

### Phase 5: ドキュメント・公開
- [ ] ウェブサイトでのカラーパレット表示
- [ ] 各フレームワークの使用例
- [ ] npm パッケージ公開
- [ ] VS Code Marketplace 公開

---

## 技術スタック

### 開発
- **Node.js** - ビルドツール・ジェネレーター実行環境
- **TypeScript** - 型安全なコード生成
- **Zod** - JSONスキーマバリデーション

### ビルド
- **esbuild** - 高速バンドル
- **tsup** - TypeScriptビルド

### テスト
- **Vitest** - ユニットテスト
- **Playwright** - E2Eテスト（カラー表示確認）

### ドキュメント
- **VitePress** または **Astro** - 静的サイト生成

---

## 品質基準

### アクセシビリティ
- WCAG 2.1 AA準拠のコントラスト比情報を提供
- 色覚異常シミュレーション対応の情報提供

### パフォーマンス
- 生成ファイルは最小化
- Tree-shaking 対応

### 国際化
- 色名は日本語・英語・ローマ字読みを提供
- 説明文も多言語対応

---

## ライセンス・参考資料

### 参考文献
- 「日本の伝統色」長崎盛輝著
- 「中国传统色」郭浩、李健明著
- 日本色彩研究所の資料
- Traditional Colors of Japan (Web資料)

### ライセンス
- MIT License（現在のLICENSEを継承）
- 色データは公開されている伝統色を基に作成

---

## リリース計画

### v0.1.0 - MVP
- 日本の伝統色 50色
- Tailwind CSS対応
- CSS Variables対応

### v0.2.0
- 日本の伝統色 100色に拡充
- VS Code theme対応
- ドキュメントサイト公開

### v0.3.0
- 中国・ヨーロッパの伝統色追加
- Sass/SCSS、Material-UI対応

### v1.0.0
- 全フレームワーク対応完了
- 完全なドキュメント
- npm・VS Code Marketplace公開
