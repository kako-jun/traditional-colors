# Traditional Colors - TODO管理

最終更新: 2025-11-17

---

## 🚀 現在進行中

### Phase 1: 基盤構築
- [x] .claude/ ディレクトリとドキュメント構造の作成
- [x] 設計ドキュメント作成
- [ ] データ構造の確定とスキーマ定義
- [ ] プロジェクト構造の作成（ディレクトリ・package.json）
- [ ] 日本の伝統色データ収集（最初の50色）
- [ ] ビルドシステムの構築

---

## 📋 Phase別タスク

### Phase 1: 基盤構築 (Week 1-2)

#### データ設計
- [ ] JSONスキーマの定義 (`data/schema.json`)
- [ ] 色定義フォーマットの確定
- [ ] バリデーションルールの設定

#### プロジェクト初期化
- [ ] `package.json` 作成
  - [ ] 必要な依存関係の追加
  - [ ] npm scripts定義
- [ ] TypeScript設定
- [ ] ディレクトリ構造の作成

#### データ収集
- [ ] 日本の伝統色50色のリサーチ
  - [ ] 紅系（10色）
  - [ ] 青系（10色）
  - [ ] 緑系（8色）
  - [ ] 黄系（6色）
  - [ ] 茶系（6色）
  - [ ] 紫系（5色）
  - [ ] 白/黒/灰系（5色）
- [ ] HEX, RGB, HSL値の確定
- [ ] 説明文の作成（日本語・英語）

---

### Phase 2: Tier 1 フレームワーク対応 (Week 3-4)

#### Tailwind CSS
- [ ] generator/tailwind.js 実装
- [ ] プラグイン形式での提供検討
- [ ] 使用例の作成
- [ ] テスト作成

#### VS Code Theme
- [ ] generator/vscode.js 実装
- [ ] package.json (extension) 作成
- [ ] syntax highlighting カラー定義
- [ ] editor UIカラー定義
- [ ] テスト作成

#### CSS Variables
- [ ] generator/css-variables.js 実装
- [ ] :root 形式での出力
- [ ] CSS, SCSS両対応
- [ ] 使用例の作成

---

### Phase 3: データ拡充 (Week 5-6)

#### 日本の伝統色拡充
- [ ] 50色 → 100色に拡充
- [ ] 100色 → 150色に拡充
- [ ] カテゴリ・タグの整理

#### 中国の伝統色
- [ ] 50色のリサーチ
- [ ] データ作成 (`data/colors/chinese.json`)

#### ヨーロッパの伝統色
- [ ] 30色のリサーチ
- [ ] データ作成 (`data/colors/european.json`)

---

### Phase 4: Tier 2-3 フレームワーク対応 (Week 7-8)

#### Sass/SCSS
- [ ] generator/scss.js 実装
- [ ] 変数・マップ・関数の提供
- [ ] 使用例の作成

#### Figma
- [ ] Color Styles定義形式の調査
- [ ] generator/figma.js 実装
- [ ] インポート手順のドキュメント作成

#### Material-UI (MUI)
- [ ] generator/mui.js 実装
- [ ] theme.palette形式での出力
- [ ] React使用例の作成

#### Bootstrap
- [ ] generator/bootstrap.js 実装
- [ ] SCSS変数形式での出力
- [ ] 使用例の作成

#### その他
- [ ] Ant Design対応
- [ ] Chakra UI対応

---

### Phase 5: ドキュメント・公開 (Week 9-10)

#### ドキュメントサイト
- [ ] VitePress / Astro のセットアップ
- [ ] カラーパレット表示ページ
- [ ] 各フレームワークの使用例ページ
- [ ] インストール・使い方ガイド
- [ ] GitHub Pages / Vercel へのデプロイ

#### パッケージ公開
- [ ] npm パッケージの準備
  - [ ] README.md 充実
  - [ ] CHANGELOG.md 作成
  - [ ] LICENSE確認
- [ ] npm publish

#### VS Code拡張機能公開
- [ ] .vsix パッケージング
- [ ] アイコン・スクリーンショット準備
- [ ] VS Code Marketplace 公開

---

## 🔧 技術的タスク

### ビルドシステム
- [ ] TypeScript環境構築
- [ ] ビルドスクリプト作成
- [ ] 各generatorの実行統合
- [ ] watch モードの実装

### テスト
- [ ] Vitest セットアップ
- [ ] 色変換ロジックのテスト
- [ ] 各generatorのテスト
- [ ] CIセットアップ（GitHub Actions）

### アクセシビリティ
- [ ] コントラスト比計算機能
- [ ] WCAG準拠チェック
- [ ] 色覚異常シミュレーション情報

---

## 📝 ドキュメント

- [ ] README.md の充実
  - [ ] プロジェクト概要
  - [ ] インストール方法
  - [ ] 基本的な使い方
  - [ ] サポートフレームワーク一覧
  - [ ] コントリビューションガイド
- [ ] CONTRIBUTING.md 作成
- [ ] コード内ドキュメント（JSDoc/TSDoc）

---

## 🐛 既知の課題

現在なし

---

## 💡 将来的な機能アイデア

- [ ] CLIツール（色検索・変換）
- [ ] Webアプリでの色選択・コピー機能
- [ ] グラデーション生成
- [ ] カラーパレット生成（調和する色の組み合わせ）
- [ ] 他の国の伝統色追加（韓国、インド、アフリカなど）
- [ ] APIサーバー提供
- [ ] Sketch, Adobe XD対応
- [ ] Flutter対応
- [ ] SwiftUI対応

---

## 📊 進捗状況

- Phase 1: ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 10%
- Phase 2: ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 0%
- Phase 3: ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 0%
- Phase 4: ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 0%
- Phase 5: ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 0%

**全体進捗: 2%**
