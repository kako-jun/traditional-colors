# Competitive Analysis

調査日: 2026-05-26

## 結論：「十分独自性があり、作る意味がある」

直接競合はすべてメンテナンス停止。Tailwind CSS × 伝統色の組み合わせは現存ゼロ。

---

## 競合一覧

| パッケージ | 色数 | 地域 | 最終更新 | DL/週 | 主な特徴 |
|---|---|---|---|---|---|
| **nippon-colors** | 不明（少数） | 日本のみ | 2015年（10年前） | 5 | JSON データのみ、Tailwind 対応なし |
| **postcss-nippon-color** | 不明 | 日本のみ | 2016年（9年前） | 7 | PostCSS プラグイン。`nippon-color(KUWAZOME)` 記法 |
| **colorsea** | 日本・中国・X11含む | 日本・中国 | 2023年（2年前） | 9,244 | 色操作ライブラリの付属データとして伝統色を内包。Tailwind 出力なし |
| **color-name-list** | 31,902色 | 世界中 | 毎日更新 | 66,329 | 世界最大の色名アーカイブ。伝統色はサブセットとして埋もれる |
| **color-name-lists** | 複数リスト | 世界中 | 6ヶ月前 | 596 | color-name-list のサブセット集 |

---

## 各競合の詳細評価

### nippon-colors / postcss-nippon-color：死んでいる

- 10年・9年前でメンテ停止。週 5〜7 DL はボットか CI 残骸
- Tailwind・CSS Variables・VS Code テーマへの対応はゼロ
- 日本色のみ。中国・欧州色なし

### colorsea：最も注意すべき競合だが別物

- 生きている（2023年、ただし最近の更新なし）、週 9,244 DL で実用レベル
- 日本色・中国色を内包するが、あくまで「色操作ライブラリの付属データ」
- `colorsea('水がき')` と呼ぶ形式 → Tailwind クラスとして使えない
- Tailwind / CSS Variables / VS Code テーマへの出力機能はない

### color-name-list：別カテゴリ、競合ではない

- 最も活発（毎日更新）、週 66,329 DL、GitHub 2.9k スター
- 31,902色の巨大リストに伝統色が埋もれる
- 地域別・文化別のコンテキストが希薄
- 「Tailwind プラグインとして今すぐ使える伝統色パレット」ではない
- **競合ではなく参照先として引用できる存在**

---

## traditional-colors の独自性

```
1. 多地域・キュレーション特化
   日本99色 + 中国47色 + ヨーロッパ30色
   「伝統色に絞った多地域の視点」は他にない

2. Tailwind CSS プラグイン化（現存ゼロ）
   `bg-wada-kurenai` のようなクラスで直接使える
   伝統色 × Tailwind の組み合わせは調査の限り存在しない

3. CSS Variables 出力
   `--color-wada-kurenai: #...` でフレームワーク非依存使用

4. VS Code テーマ出力
   エディタレベルで伝統色を体験できる用途は他にない

5. メンテナンス済み
   直接競合（nippon-colors 等）はすべてメンテ停止
```

---

## SEO チャンス

`tailwind japanese traditional colors` というキーワードで競合なし。
`bg-wada-kurenai` のような実例コードを README に豊富に載せると差別化が一目瞭然。
