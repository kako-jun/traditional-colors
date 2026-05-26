# Data Spec

色データの構造定義と命名規則。

## JSON スキーマ

```json
{
  "colors": {
    "<region>": {
      "<key>": {
        "name": {
          "ja": "色の日本語名",
          "en": "English name",
          "reading": "よみがな（日本色のみ）",
          "pinyin": "ピンイン（中国色のみ）"
        },
        "description": {
          "ja": "由来・背景（日本語）",
          "en": "Origin and context (English)"
        },
        "hex": "#RRGGBB",
        "rgb": [R, G, B],
        "hsl": [H, S, L],
        "cmyk": [C, M, Y, K],
        "category": "<color-category>",
        "tags": ["tag1", "tag2"],
        "era": "時代（例: 平安、江戸）",
        "source": "典拠・参考文献"
      }
    }
  }
}
```

## region キー

| region | 対象 |
|---|---|
| `japanese` | 日本の伝統色（和色） |
| `chinese` | 中国の伝統色 |
| `european` | ヨーロッパの伝統色 |

## category 値

`red` / `pink` / `orange` / `yellow` / `green` / `blue` / `purple` / `brown` / `gray` / `white` / `black`

## Tailwind クラス名の生成規則

キーをそのまま Tailwind の色名として使用。

```js
// japanese.json の key "koubai" → Tailwind クラス
bg-koubai     // background-color: #F2A0A1
text-koubai   // color: #F2A0A1
border-koubai // border-color: #F2A0A1
```

## CSS Variables の命名規則

```css
--color-<region>-<key>
/* 例 */
--color-japanese-koubai: #F2A0A1;
--color-chinese-zhushao: #EE3F4D;
--color-european-ultramarine: #120A8F;
```

## 必須フィールド

`hex` / `rgb` / `name.en` / `category` は必須。
`name.ja` / `name.reading` / `description` / `era` / `source` は推奨。
