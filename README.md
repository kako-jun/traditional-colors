# Traditional Colors

> Beautiful traditional colors from Japan, China, and Europe for modern frameworks

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@traditional-colors/core.svg)](https://www.npmjs.com/package/@traditional-colors/core)

**Traditional Colors** is a comprehensive color library that brings authentic traditional colors to your development workflow. Unlike existing solutions, we provide multi-framework support from a single source of truth.

## ✨ Features

- 🎨 **50+ Traditional Japanese Colors** - Authentic colors like 紅梅 (Koubai), 桜色 (Sakura), 藍色 (Ai)
- 🔧 **Multi-Framework Support** - Tailwind CSS, VS Code, CSS Variables, SCSS, and more
- 📦 **TypeScript Ready** - Full type definitions included
- 🌍 **Internationalized** - Color names in Japanese, English, and romanized readings
- 🎯 **Zero Dependencies** - Lightweight and tree-shakeable
- 📖 **Rich Metadata** - HEX, RGB, HSL, CMYK values + descriptions and cultural context

## 🎯 Supported Frameworks

| Framework | Status | Package |
|-----------|--------|---------|
| **Tailwind CSS** | ✅ Ready | Plugin + Config |
| **VS Code** | ✅ Ready | Dark & Light Themes |
| **CSS Variables** | ✅ Ready | :root CSS + Utilities |
| **Sass/SCSS** | 🚧 Coming Soon | Variables + Functions |
| **Material-UI** | 🚧 Coming Soon | Theme Palette |
| **Figma** | 🚧 Coming Soon | Color Styles |
| **Bootstrap** | 🚧 Coming Soon | SCSS Variables |

## 📦 Installation

```bash
npm install @traditional-colors/core
```

## 🚀 Quick Start

### Tailwind CSS

```javascript
// tailwind.config.js
import { japaneseColors } from '@traditional-colors/tailwind';

export default {
  theme: {
    extend: {
      colors: japaneseColors
    }
  }
}
```

```jsx
// Use in your components
<div className="bg-sakura text-ai">
  <h1 className="text-koubai">Hello World</h1>
</div>
```

### CSS Variables

```css
/* Import the CSS file */
@import '@traditional-colors/core/dist/css/colors.css';

.my-element {
  color: var(--color-koubai);
  background-color: var(--color-sakura);
}
```

### VS Code Theme

1. Copy `dist/vscode/` to your VS Code extensions folder
2. Reload VS Code
3. Select **"Traditional Japanese Colors - Dark"** or **"Light"** from Color Theme

### Programmatic Usage

```typescript
import { colors } from '@traditional-colors/core';

// Get a specific color
const sakura = colors.japanese.sakura;
console.log(sakura);
// {
//   name: { ja: '桜色', en: 'Sakura', reading: 'さくらいろ' },
//   hex: '#FEEEED',
//   rgb: [254, 238, 237],
//   hsl: [4, 85, 96],
//   category: 'pink',
//   tags: ['flower', 'spring', 'light'],
//   description: {
//     ja: '桜の花のような淡いピンク色',
//     en: 'Pale pink like cherry blossoms'
//   }
// }
```

## 🎨 Color Palette

### Featured Colors

| Color | Japanese | Reading | HEX | Preview |
|-------|----------|---------|-----|---------|
| Koubai | 紅梅 | こうばい | `#F2A0A1` | ![](https://via.placeholder.com/40/F2A0A1/F2A0A1) |
| Sakura | 桜色 | さくらいろ | `#FEEEED` | ![](https://via.placeholder.com/40/FEEEED/FEEEED) |
| Ai | 藍色 | あいいろ | `#165E83` | ![](https://via.placeholder.com/40/165E83/165E83) |
| Moegi | 萌黄 | もえぎ | `#90B44B` | ![](https://via.placeholder.com/40/90B44B/90B44B) |
| Yamabuki | 山吹色 | やまぶきいろ | `#F8B500` | ![](https://via.placeholder.com/40/F8B500/F8B500) |
| Fuji | 藤色 | ふじいろ | `#A59ACA` | ![](https://via.placeholder.com/40/A59ACA/A59ACA) |

[View all 50 colors →](./data/colors/japanese.json)

## 🏗️ Build from Source

```bash
# Clone the repository
git clone https://github.com/kako-jun/traditional-colors.git
cd traditional-colors

# Install dependencies
npm install

# Build all generators
npm run build

# Build specific framework
npm run build:tailwind
npm run build:vscode
npm run build:css
```

## 📂 Project Structure

```
traditional-colors/
├── data/
│   ├── colors/
│   │   ├── japanese.json      # 50 Japanese traditional colors
│   │   ├── chinese.json       # (Coming soon)
│   │   └── european.json      # (Coming soon)
│   └── schema.json            # JSON schema definition
├── generators/
│   ├── tailwind.js            # Tailwind CSS generator
│   ├── vscode.js              # VS Code theme generator
│   ├── css-variables.js       # CSS/SCSS generator
│   └── build-all.js           # Build all generators
├── dist/                      # Generated files
│   ├── tailwind/
│   ├── vscode/
│   └── css/
└── docs/                      # Documentation site (Coming soon)
```

## 🎯 Why Traditional Colors?

### vs. nippon-colors (npm)
- ❌ **nippon-colors**: Archived since 2020, no framework integration
- ✅ **traditional-colors**: Active maintenance, multi-framework support

### vs. PostCSS plugins
- ❌ **Other solutions**: Single framework only
- ✅ **traditional-colors**: One package, multiple frameworks

### vs. VS Code themes
- ❌ **Existing themes**: Theme only, no programmatic access
- ✅ **traditional-colors**: Theme + color data for your projects

## 🌏 Coming Soon

- 🇨🇳 Chinese traditional colors (50+ colors)
- 🇪🇺 European traditional colors (30+ colors)
- 📱 React Native support
- 🎨 Figma plugin
- 🔍 Color search & palette generator
- ♿ WCAG contrast ratio information
- 🌈 Color harmony suggestions

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

### Adding Colors

1. Add color data to `data/colors/japanese.json`
2. Follow the schema in `data/schema.json`
3. Run `npm run build` to regenerate all outputs
4. Submit a Pull Request

## 📜 License

MIT License - see [LICENSE](./LICENSE) file for details

## 🙏 Acknowledgments

- Color data inspired by [NIPPON COLORS](https://nipponcolors.com/)
- Traditional color research from Japanese cultural sources
- Community contributors

## 📞 Support

- 🐛 [Report a bug](https://github.com/kako-jun/traditional-colors/issues)
- 💡 [Request a feature](https://github.com/kako-jun/traditional-colors/issues)
- 💬 [Discussions](https://github.com/kako-jun/traditional-colors/discussions)

---

Made with ❤️ by the Traditional Colors community
