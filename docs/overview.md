# Overview

世界の伝統色を Tailwind CSS・CSS Variables・VS Code テーマなどのフォーマットで提供するライブラリ。

## コンセプト

- **ソースは1つ**：`data/colors/` の JSON が唯一の真実
- **出力は多数**：Tailwind プラグイン / CSS Variables / VS Code テーマ / SCSS 変数 など
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

| フェーズ | 日本 | 中国 | ヨーロッパ | その他 |
|---|---|---|---|---|
| v0.1.0（現状） | 99 | 47 | 30 | — |
| v0.2.0 | 150 | 100 | 60 | — |
| v1.0.0 | 250 | 150 | 100 | インド・イスラム等 |

### 日本の伝統色：カテゴリ別代表色

赤系：紅梅（こうばい）#F2A0A1、臙脂（えんじ）#9B003F、朱（しゅ）#E83929
桃系：桜色（さくらいろ）#FEEEED、薄紅（うすくれない）#DB7093
橙系：柿色（かきいろ）#ED6D3D、山吹色（やまぶきいろ）#F8B500
緑系：若草色（わかくさいろ）#C3D825、常磐色（ときわいろ）#007B43、青竹色（あおたけいろ）#7EBEA5
青系：藍色（あいいろ）#165E83、瑠璃色（るりいろ）#1D2088、水色（みずいろ）#BCE2E8
紫系：藤色（ふじいろ）#A59ACA、江戸紫（えどむらさき）#745399
茶系：茶色（ちゃいろ）#965042、栗色（くりいろ）#762F07
白黒灰：胡粉（ごふん）#FFFFFC、墨色（すみいろ）#1C1C1C、鼠色（ねずみいろ）#7D7D7D

## 対応フォーマット

| フォーマット | ステータス | 出力ファイル |
|---|---|---|
| **Tailwind CSS** | ✅ 実装済み | `dist/tailwind/colors.js` |
| **CSS Variables** | ✅ 実装済み | `dist/css/colors.css` |
| **VS Code テーマ** | ✅ 実装済み | `dist/vscode/*.json` |
| Sass/SCSS 変数 | 🚧 未実装 | `dist/scss/colors.scss` |
| Figma | 🚧 未実装 | — |
| Material-UI | 🚧 未実装 | — |

## ロードマップ

### v0.1.0（完了）
- 日本 99色・中国 47色・ヨーロッパ 30色
- Tailwind CSS プラグイン
- CSS Variables（CSS / SCSS / サンプル HTML）
- VS Code テーマ（Dark / Light）
- ビルドシステム（`npm run build`）

### v0.2.0（次）
- GitHub Actions CI/CD
- Vitest テスト環境
- 色数拡充（日本 150色・中国 100色）
- SCSS 変数出力
- npm publish（`@traditional-colors/core`）
- ドキュメントサイト（Astro）

### v1.0.0
- 全地域 500色超
- Figma プラグイン
- Material-UI / Bootstrap 対応
- VS Code Marketplace 公開
