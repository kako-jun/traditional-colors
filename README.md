# traditional-colors

> 世界の伝統色を、現代のフレームワークで。

日本・中国・欧州の伝統色 176色を、Tailwind CSS・CSS Variables・VS Code テーマとして提供するライブラリ。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@traditional-colors/core.svg)](https://www.npmjs.com/package/@traditional-colors/core)

---

## 特徴

- **176色収録**：日本 99色・中国 47色・欧州 30色
- **複数フォーマット対応**：Tailwind CSS / CSS Variables / SCSS / VS Code テーマ
- **ゼロ依存**：生成物は単体で使える。バンドラー不要
- **文化的コンテキスト付き**：色名の日本語・英語・読み仮名・説明文を収録
- **メンテナンス継続中**：直接競合（nippon-colors 等）はすべてアーカイブ済み

---

## インストール

```bash
npm install @traditional-colors/core
```

---

## 使い方

### Tailwind CSS

```js
// tailwind.config.js
import { japaneseColors, chineseColors, europeanColors } from '@traditional-colors/core/tailwind';

export default {
  theme: {
    extend: {
      colors: {
        jp: japaneseColors,
        cn: chineseColors,
        eu: europeanColors,
      }
    }
  }
}
```

```html
<!-- クラス名で使う -->
<div class="bg-jp-sakura text-jp-ai">
  <h1 class="text-jp-koubai">桜</h1>
</div>
```

#### Tailwind Plugin（CSS Variables として自動登録）

```js
// tailwind.config.js
import traditionalColors from '@traditional-colors/core/tailwind/plugin';

export default {
  plugins: [traditionalColors]
}
```

```css
/* CSS で直接使う */
.my-element {
  color: var(--color-koubai);
  background-color: var(--color-sakura);
}
```

---

### CSS Variables

```html
<link rel="stylesheet" href="node_modules/@traditional-colors/core/dist/css/colors.css">
```

```css
.my-element {
  color: var(--color-koubai);         /* 紅梅 #F2A0A1 */
  background-color: var(--color-ai);  /* 藍色 #165E83 */
}
```

---

### SCSS

```scss
@use 'node_modules/@traditional-colors/core/dist/css/colors' as tc;

.my-element {
  color: $color-koubai;
  background-color: $color-sakura;
}
```

---

### VS Code テーマ

1. `dist/vscode/` フォルダを VS Code の拡張機能フォルダにコピー
2. VS Code を再起動
3. カラーテーマから **"Traditional Japanese Colors - Dark"** または **"Light"** を選択

---

## 収録色（抜粋）

### 日本（和色）99色

| 色名 | 読み | HEX |
|---|---|---|
| 紅梅 | こうばい | `#F2A0A1` |
| 桜色 | さくらいろ | `#FEEEED` |
| 山吹色 | やまぶきいろ | `#F8B500` |
| 常磐色 | ときわいろ | `#007B43` |
| 藍色 | あいいろ | `#165E83` |
| 瑠璃色 | るりいろ | `#1D2088` |
| 藤色 | ふじいろ | `#A59ACA` |
| 臙脂 | えんじ | `#9B003F` |

### 中国 47色 / 欧州 30色

中国の伝統色・欧州の伝統色も同様のキー形式で利用できます。

---

## ビルド（コントリビューター向け）

```bash
git clone https://github.com/kako-jun/traditional-colors.git
cd traditional-colors
npm install
npm run build       # dist/ を全生成
```

### データ追加

1. `data/colors/japanese.json`（または chinese / european）に色を追加
2. `data/schema.json` のスキーマに従う
3. `npm run build` で再生成

---

## ライセンス

MIT
