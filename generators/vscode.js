/**
 * VS Code Theme Generator
 * Generates VS Code color themes from Japanese traditional colors
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_PATH = join(__dirname, '../data/colors/japanese.json');
const OUTPUT_DIR = join(__dirname, '../dist/vscode');

/**
 * Load color data from JSON file
 */
function loadColorData() {
  const data = readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(data);
}

/**
 * Generate dark theme using traditional colors
 */
function generateDarkTheme(colors) {
  return {
    name: 'Traditional Japanese Colors - Dark',
    type: 'dark',
    colors: {
      // Editor
      'editor.background': colors.sumi.hex,  // 墨色 (ink black)
      'editor.foreground': colors.gofun.hex, // 胡粉 (shell white)
      'editorLineNumber.foreground': colors.nezumi.hex, // 鼠色 (mouse gray)
      'editorLineNumber.activeForeground': colors.sakura.hex, // 桜色
      'editorCursor.foreground': colors.sakura.hex, // 桜色
      'editor.selectionBackground': colors.edomurasaki.hex + '40', // 江戸紫 with alpha
      'editor.selectionHighlightBackground': colors.fuji.hex + '30', // 藤色 with alpha
      'editor.lineHighlightBackground': colors.kon.hex + '20', // 紺色 with alpha
      'editorWhitespace.foreground': colors.nezumi.hex + '40', // 鼠色 with alpha

      // Sidebar
      'sideBar.background': colors.kogecha.hex, // 焦茶
      'sideBar.foreground': colors.kinari.hex, // 生成り
      'sideBarTitle.foreground': colors.yamabuki.hex, // 山吹色

      // Activity Bar
      'activityBar.background': colors.kogecha.hex, // 焦茶
      'activityBar.foreground': colors.yamabuki.hex, // 山吹色
      'activityBarBadge.background': colors.beni.hex, // 紅色
      'activityBarBadge.foreground': colors.gofun.hex, // 胡粉

      // Status Bar
      'statusBar.background': colors.ai.hex, // 藍色
      'statusBar.foreground': colors.gofun.hex, // 胡粉
      'statusBar.noFolderBackground': colors.suo.hex, // 蘇芳

      // Title Bar
      'titleBar.activeBackground': colors.sumi.hex, // 墨色
      'titleBar.activeForeground': colors.gofun.hex, // 胡粉
      'titleBar.inactiveBackground': colors.kogecha.hex, // 焦茶
      'titleBar.inactiveForeground': colors.nezumi.hex, // 鼠色

      // Tabs
      'tab.activeBackground': colors.sumi.hex, // 墨色
      'tab.activeForeground': colors.sakura.hex, // 桜色
      'tab.inactiveBackground': colors.kogecha.hex, // 焦茶
      'tab.inactiveForeground': colors.nezumi.hex, // 鼠色
      'tab.border': colors.kogecha.hex, // 焦茶

      // Panel
      'panel.background': colors.sumi.hex, // 墨色
      'panel.border': colors.ai.hex, // 藍色
      'panelTitle.activeForeground': colors.sakura.hex, // 桜色
      'panelTitle.inactiveForeground': colors.nezumi.hex, // 鼠色

      // Terminal
      'terminal.foreground': colors.gofun.hex, // 胡粉
      'terminal.ansiBlack': colors.sumi.hex, // 墨色
      'terminal.ansiRed': colors.beni.hex, // 紅色
      'terminal.ansiGreen': colors.moegi.hex, // 萌黄
      'terminal.ansiYellow': colors.yamabuki.hex, // 山吹色
      'terminal.ansiBlue': colors.ai.hex, // 藍色
      'terminal.ansiMagenta': colors.fuji.hex, // 藤色
      'terminal.ansiCyan': colors.asagi.hex, // 浅葱色
      'terminal.ansiWhite': colors.kinari.hex, // 生成り
      'terminal.ansiBrightBlack': colors.nezumi.hex, // 鼠色
      'terminal.ansiBrightRed': colors.akane.hex, // 茜色
      'terminal.ansiBrightGreen': colors.wakakusa.hex, // 若草色
      'terminal.ansiBrightYellow': colors.nanohana.hex, // 菜の花色
      'terminal.ansiBrightBlue': colors.ruri.hex, // 瑠璃色
      'terminal.ansiBrightMagenta': colors.sumire.hex, // 菫色
      'terminal.ansiBrightCyan': colors.mizuasagi.hex, // 水浅葱
      'terminal.ansiBrightWhite': colors.gofun.hex, // 胡粉

      // Button
      'button.background': colors.sakura.hex, // 桜色
      'button.foreground': colors.sumi.hex, // 墨色

      // Input
      'input.background': colors.kogecha.hex + '80', // 焦茶 with alpha
      'input.foreground': colors.gofun.hex, // 胡粉
      'input.border': colors.ai.hex, // 藍色

      // List
      'list.activeSelectionBackground': colors.edomurasaki.hex, // 江戸紫
      'list.activeSelectionForeground': colors.gofun.hex, // 胡粉
      'list.hoverBackground': colors.kon.hex + '40', // 紺色 with alpha
      'list.inactiveSelectionBackground': colors.kon.hex + '60', // 紺色 with alpha
    },
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: colors.nezumi.hex, // 鼠色
          fontStyle: 'italic'
        }
      },
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: colors.fuji.hex // 藤色
        }
      },
      {
        scope: ['string', 'string.quoted'],
        settings: {
          foreground: colors.moegi.hex // 萌黄
        }
      },
      {
        scope: ['constant.numeric', 'constant.language'],
        settings: {
          foreground: colors.yamabuki.hex // 山吹色
        }
      },
      {
        scope: ['entity.name.function', 'support.function'],
        settings: {
          foreground: colors.sakura.hex // 桜色
        }
      },
      {
        scope: ['entity.name.type', 'entity.name.class', 'support.class'],
        settings: {
          foreground: colors.asagi.hex // 浅葱色
        }
      },
      {
        scope: ['variable', 'variable.other'],
        settings: {
          foreground: colors.gofun.hex // 胡粉
        }
      },
      {
        scope: ['variable.parameter'],
        settings: {
          foreground: colors.kohaku.hex // 琥珀色
        }
      },
      {
        scope: ['entity.name.tag'],
        settings: {
          foreground: colors.beni.hex // 紅色
        }
      },
      {
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: colors.yamabuki.hex // 山吹色
        }
      },
      {
        scope: ['support.type.property-name'],
        settings: {
          foreground: colors.asagi.hex // 浅葱色
        }
      },
      {
        scope: ['constant.other.color'],
        settings: {
          foreground: colors.kohaku.hex // 琥珀色
        }
      },
      {
        scope: ['meta.tag', 'punctuation.definition.tag'],
        settings: {
          foreground: colors.nezumi.hex // 鼠色
        }
      },
      {
        scope: ['markup.bold'],
        settings: {
          foreground: colors.beni.hex, // 紅色
          fontStyle: 'bold'
        }
      },
      {
        scope: ['markup.italic'],
        settings: {
          foreground: colors.fuji.hex, // 藤色
          fontStyle: 'italic'
        }
      },
      {
        scope: ['markup.heading'],
        settings: {
          foreground: colors.sakura.hex, // 桜色
          fontStyle: 'bold'
        }
      },
      {
        scope: ['markup.underline.link'],
        settings: {
          foreground: colors.asagi.hex, // 浅葱色
          fontStyle: 'underline'
        }
      }
    ]
  };
}

/**
 * Generate light theme using traditional colors
 */
function generateLightTheme(colors) {
  return {
    name: 'Traditional Japanese Colors - Light',
    type: 'light',
    colors: {
      // Editor
      'editor.background': colors.gofun.hex, // 胡粉 (shell white)
      'editor.foreground': colors.sumi.hex, // 墨色 (ink black)
      'editorLineNumber.foreground': colors.nezumi.hex, // 鼠色
      'editorLineNumber.activeForeground': colors.beni.hex, // 紅色
      'editorCursor.foreground': colors.beni.hex, // 紅色
      'editor.selectionBackground': colors.sakura.hex + '60', // 桜色 with alpha
      'editor.selectionHighlightBackground': colors.fuji.hex + '40', // 藤色 with alpha
      'editor.lineHighlightBackground': colors.kinari.hex, // 生成り
      'editorWhitespace.foreground': colors.nezumi.hex + '40', // 鼠色 with alpha

      // Sidebar
      'sideBar.background': colors.kinari.hex, // 生成り
      'sideBar.foreground': colors.sumi.hex, // 墨色
      'sideBarTitle.foreground': colors.ai.hex, // 藍色

      // Activity Bar
      'activityBar.background': colors.zouge.hex, // 象牙色
      'activityBar.foreground': colors.ai.hex, // 藍色
      'activityBarBadge.background': colors.beni.hex, // 紅色
      'activityBarBadge.foreground': colors.gofun.hex, // 胡粉

      // Status Bar
      'statusBar.background': colors.asagi.hex, // 浅葱色
      'statusBar.foreground': colors.gofun.hex, // 胡粉
      'statusBar.noFolderBackground': colors.akane.hex, // 茜色

      // Title Bar
      'titleBar.activeBackground': colors.gofun.hex, // 胡粉
      'titleBar.activeForeground': colors.sumi.hex, // 墨色
      'titleBar.inactiveBackground': colors.zouge.hex, // 象牙色
      'titleBar.inactiveForeground': colors.nezumi.hex, // 鼠色

      // Tabs
      'tab.activeBackground': colors.gofun.hex, // 胡粉
      'tab.activeForeground': colors.beni.hex, // 紅色
      'tab.inactiveBackground': colors.zouge.hex, // 象牙色
      'tab.inactiveForeground': colors.nezumi.hex, // 鼠色
      'tab.border': colors.kinari.hex, // 生成り

      // Panel
      'panel.background': colors.gofun.hex, // 胡粉
      'panel.border': colors.asagi.hex, // 浅葱色
      'panelTitle.activeForeground': colors.beni.hex, // 紅色
      'panelTitle.inactiveForeground': colors.nezumi.hex, // 鼠色

      // Terminal
      'terminal.foreground': colors.sumi.hex, // 墨色
      'terminal.ansiBlack': colors.kogecha.hex, // 焦茶
      'terminal.ansiRed': colors.beni.hex, // 紅色
      'terminal.ansiGreen': colors.moegi.hex, // 萌黄
      'terminal.ansiYellow': colors.yamabuki.hex, // 山吹色
      'terminal.ansiBlue': colors.ai.hex, // 藍色
      'terminal.ansiMagenta': colors.fuji.hex, // 藤色
      'terminal.ansiCyan': colors.asagi.hex, // 浅葱色
      'terminal.ansiWhite': colors.gofun.hex, // 胡粉
      'terminal.ansiBrightBlack': colors.nezumi.hex, // 鼠色
      'terminal.ansiBrightRed': colors.akane.hex, // 茜色
      'terminal.ansiBrightGreen': colors.wakakusa.hex, // 若草色
      'terminal.ansiBrightYellow': colors.nanohana.hex, // 菜の花色
      'terminal.ansiBrightBlue': colors.ruri.hex, // 瑠璃色
      'terminal.ansiBrightMagenta': colors.sumire.hex, // 菫色
      'terminal.ansiBrightCyan': colors.mizuasagi.hex, // 水浅葱
      'terminal.ansiBrightWhite': colors.gofun.hex, // 胡粉

      // Button
      'button.background': colors.sakura.hex, // 桜色
      'button.foreground': colors.sumi.hex, // 墨色

      // Input
      'input.background': colors.kinari.hex, // 生成り
      'input.foreground': colors.sumi.hex, // 墨色
      'input.border': colors.asagi.hex, // 浅葱色

      // List
      'list.activeSelectionBackground': colors.sakura.hex, // 桜色
      'list.activeSelectionForeground': colors.sumi.hex, // 墨色
      'list.hoverBackground': colors.kinari.hex, // 生成り
      'list.inactiveSelectionBackground': colors.zouge.hex, // 象牙色
    },
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: colors.nezumi.hex, // 鼠色
          fontStyle: 'italic'
        }
      },
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: colors.edomurasaki.hex // 江戸紫
        }
      },
      {
        scope: ['string', 'string.quoted'],
        settings: {
          foreground: colors.tokiwa.hex // 常磐色
        }
      },
      {
        scope: ['constant.numeric', 'constant.language'],
        settings: {
          foreground: colors.kohaku.hex // 琥珀色
        }
      },
      {
        scope: ['entity.name.function', 'support.function'],
        settings: {
          foreground: colors.beni.hex // 紅色
        }
      },
      {
        scope: ['entity.name.type', 'entity.name.class', 'support.class'],
        settings: {
          foreground: colors.ai.hex // 藍色
        }
      },
      {
        scope: ['variable', 'variable.other'],
        settings: {
          foreground: colors.sumi.hex // 墨色
        }
      },
      {
        scope: ['variable.parameter'],
        settings: {
          foreground: colors.kaki.hex // 柿色
        }
      },
      {
        scope: ['entity.name.tag'],
        settings: {
          foreground: colors.akane.hex // 茜色
        }
      },
      {
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: colors.yamabuki.hex // 山吹色
        }
      },
      {
        scope: ['support.type.property-name'],
        settings: {
          foreground: colors.asagi.hex // 浅葱色
        }
      },
      {
        scope: ['constant.other.color'],
        settings: {
          foreground: colors.kohaku.hex // 琥珀色
        }
      },
      {
        scope: ['meta.tag', 'punctuation.definition.tag'],
        settings: {
          foreground: colors.nezumi.hex // 鼠色
        }
      },
      {
        scope: ['markup.bold'],
        settings: {
          foreground: colors.beni.hex, // 紅色
          fontStyle: 'bold'
        }
      },
      {
        scope: ['markup.italic'],
        settings: {
          foreground: colors.fuji.hex, // 藤色
          fontStyle: 'italic'
        }
      },
      {
        scope: ['markup.heading'],
        settings: {
          foreground: colors.akane.hex, // 茜色
          fontStyle: 'bold'
        }
      },
      {
        scope: ['markup.underline.link'],
        settings: {
          foreground: colors.ai.hex, // 藍色
          fontStyle: 'underline'
        }
      }
    ]
  };
}

/**
 * Main function
 */
function main() {
  console.log('Generating VS Code themes...');

  // Load data
  const colorData = loadColorData();
  const colors = colorData.colors.japanese;
  console.log(`✓ Loaded ${colorData.metadata.totalColors} colors`);

  // Create output directory
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Generate themes
  const darkTheme = generateDarkTheme(colors);
  const lightTheme = generateLightTheme(colors);

  writeFileSync(
    join(OUTPUT_DIR, 'traditional-japanese-dark.json'),
    JSON.stringify(darkTheme, null, 2),
    'utf-8'
  );
  console.log('✓ Generated dark theme');

  writeFileSync(
    join(OUTPUT_DIR, 'traditional-japanese-light.json'),
    JSON.stringify(lightTheme, null, 2),
    'utf-8'
  );
  console.log('✓ Generated light theme');

  // Generate package.json for VS Code extension
  const packageJson = {
    name: 'traditional-japanese-colors',
    displayName: 'Traditional Japanese Colors',
    description: 'Beautiful VS Code themes using traditional Japanese colors',
    version: '0.1.0',
    publisher: 'traditional-colors',
    engines: {
      vscode: '^1.80.0'
    },
    categories: ['Themes'],
    keywords: [
      'theme',
      'color-theme',
      'japanese',
      'traditional',
      'dark',
      'light'
    ],
    contributes: {
      themes: [
        {
          label: 'Traditional Japanese Colors - Dark',
          uiTheme: 'vs-dark',
          path: './traditional-japanese-dark.json'
        },
        {
          label: 'Traditional Japanese Colors - Light',
          uiTheme: 'vs',
          path: './traditional-japanese-light.json'
        }
      ]
    }
  };

  writeFileSync(
    join(OUTPUT_DIR, 'package.json'),
    JSON.stringify(packageJson, null, 2),
    'utf-8'
  );
  console.log('✓ Generated package.json for VS Code extension');

  // Generate README
  const readme = `# Traditional Japanese Colors - VS Code Theme

Beautiful VS Code themes using traditional Japanese colors (和色 / わいろ).

## Themes

- **Traditional Japanese Colors - Dark**: A dark theme featuring deep indigo (藍), ink black (墨色), and cherry blossom pink (桜色)
- **Traditional Japanese Colors - Light**: A light theme with shell white (胡粉), traditional reds (紅色), and soft pastels

## Installation

1. Copy this folder to your VS Code extensions directory:
   - Windows: \`%USERPROFILE%\\.vscode\\extensions\`
   - macOS/Linux: \`~/.vscode/extensions\`
2. Restart VS Code
3. Go to: \`File > Preferences > Color Theme\`
4. Select "Traditional Japanese Colors - Dark" or "Light"

## Color Palette

This theme uses 50 authentic traditional Japanese colors, including:

- 紅梅 (Koubai) - Crimson plum blossom
- 桜色 (Sakura) - Cherry blossom pink
- 藍色 (Ai) - Indigo blue
- 萌黄 (Moegi) - Fresh sprout green
- 山吹色 (Yamabuki) - Bright yellow
- 藤色 (Fuji) - Wisteria purple
- 墨色 (Sumi) - Ink black
- 胡粉 (Gofun) - Shell white

## License

MIT License
`;

  writeFileSync(join(OUTPUT_DIR, 'README.md'), readme, 'utf-8');
  console.log('✓ Generated README');

  console.log('✨ VS Code theme generation complete!');
  console.log(`   Output: ${OUTPUT_DIR}`);
  console.log('\nTo test the theme:');
  console.log(`   1. Copy ${OUTPUT_DIR} to your VS Code extensions folder`);
  console.log('   2. Restart VS Code');
  console.log('   3. Select the theme from Color Theme picker');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateDarkTheme, generateLightTheme };
