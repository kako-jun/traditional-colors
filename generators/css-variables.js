/**
 * CSS Variables Generator
 * Generates CSS custom properties (variables) from Japanese traditional colors
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_DIR = join(__dirname, '../data/colors');
const OUTPUT_DIR = join(__dirname, '../dist/css');

/**
 * Load color data from all JSON files
 */
function loadColorData() {
  const japanese = JSON.parse(readFileSync(join(DATA_DIR, 'japanese.json'), 'utf-8'));
  const chinese = JSON.parse(readFileSync(join(DATA_DIR, 'chinese.json'), 'utf-8'));
  const european = JSON.parse(readFileSync(join(DATA_DIR, 'european.json'), 'utf-8'));

  return { japanese, chinese, european };
}

/**
 * Generate CSS variables
 */
function generateCSSVariables(colorData) {
  const allColors = {
    ...colorData.japanese.colors.japanese,
    ...colorData.chinese.colors.chinese,
    ...colorData.european.colors.european
  };

  let css = `/**
 * Traditional Colors - CSS Variables
 * Includes Japanese, Chinese, and European traditional colors
 *
 * Usage:
 * .element {
 *   color: var(--color-koubai);
 *   background-color: var(--color-sakura);
 * }
 */

:root {
`;

  // Add HEX values
  for (const [key, color] of Object.entries(allColors)) {
    css += `  --color-${key}: ${color.hex};\n`;
  }

  css += '\n';

  // Add RGB values
  for (const [key, color] of Object.entries(allColors)) {
    css += `  --color-${key}-rgb: ${color.rgb.join(', ')};\n`;
  }

  css += '}\n\n';

  // Add utility classes
  css += `/* Utility classes */\n`;
  for (const [key] of Object.entries(allColors)) {
    css += `.text-${key} { color: var(--color-${key}); }\n`;
  }

  css += '\n';

  for (const [key] of Object.entries(allColors)) {
    css += `.bg-${key} { background-color: var(--color-${key}); }\n`;
  }

  css += '\n';

  for (const [key] of Object.entries(allColors)) {
    css += `.border-${key} { border-color: var(--color-${key}); }\n`;
  }

  return css;
}

/**
 * Generate SCSS variables
 */
function generateSCSSVariables(colorData) {
  const japaneseColors = colorData.japanese.colors.japanese;
  const chineseColors = colorData.chinese.colors.chinese;
  const europeanColors = colorData.european.colors.european;
  const allColors = { ...japaneseColors, ...chineseColors, ...europeanColors };

  let scss = `/**
 * Traditional Colors - SCSS Variables
 * Includes Japanese, Chinese, and European traditional colors
 *
 * Usage:
 * .element {
 *   color: $color-koubai;
 *   background-color: $color-sakura;
 * }
 */

`;

  // Add color variables
  for (const [key, color] of Object.entries(allColors)) {
    scss += `$color-${key}: ${color.hex};\n`;
  }

  scss += '\n// RGB values\n';
  for (const [key, color] of Object.entries(allColors)) {
    scss += `$color-${key}-rgb: (${color.rgb.join(', ')});\n`;
  }

  // Add region-specific color maps
  scss += '\n// Japanese color map\n';
  scss += '$japanese-colors: (\n';
  let entries = Object.entries(japaneseColors);
  entries.forEach(([key, color], index) => {
    const comma = index < entries.length - 1 ? ',' : '';
    scss += `  '${key}': ${color.hex}${comma}\n`;
  });
  scss += ');\n\n';

  scss += '// Chinese color map\n';
  scss += '$chinese-colors: (\n';
  entries = Object.entries(chineseColors);
  entries.forEach(([key, color], index) => {
    const comma = index < entries.length - 1 ? ',' : '';
    scss += `  '${key}': ${color.hex}${comma}\n`;
  });
  scss += ');\n\n';

  scss += '// European color map\n';
  scss += '$european-colors: (\n';
  entries = Object.entries(europeanColors);
  entries.forEach(([key, color], index) => {
    const comma = index < entries.length - 1 ? ',' : '';
    scss += `  '${key}': ${color.hex}${comma}\n`;
  });
  scss += ');\n\n';

  scss += '// All colors map\n';
  scss += '$all-colors: (\n';
  entries = Object.entries(allColors);
  entries.forEach(([key, color], index) => {
    const comma = index < entries.length - 1 ? ',' : '';
    scss += `  '${key}': ${color.hex}${comma}\n`;
  });
  scss += ');\n\n';

  // Add helper functions
  scss += `// Helper functions to get color by name
@function japanese-color($name) {
  @return map-get($japanese-colors, $name);
}

@function chinese-color($name) {
  @return map-get($chinese-colors, $name);
}

@function european-color($name) {
  @return map-get($european-colors, $name);
}

@function traditional-color($name) {
  @return map-get($all-colors, $name);
}

// Example usage:
// .element {
//   color: japanese-color('koubai');
//   background: chinese-color('zhusa');
//   border-color: european-color('royalblue');
// }
`;

  return scss;
}

/**
 * Generate CSS file with color swatches documentation
 */
function generateColorSwatches(colorData) {
  const japaneseColors = colorData.japanese.colors.japanese;
  const chineseColors = colorData.chinese.colors.chinese;
  const europeanColors = colorData.european.colors.european;
  const allColors = { ...japaneseColors, ...chineseColors, ...europeanColors };
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Traditional Colors - CSS Variables</title>
  <link rel="stylesheet" href="colors.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 2rem;
      background: #f5f5f5;
    }

    h1 {
      margin-bottom: 2rem;
      color: #333;
    }

    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .color-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;
    }

    .color-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .color-swatch {
      height: 120px;
      cursor: pointer;
    }

    .color-info {
      padding: 1rem;
    }

    .color-name {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .color-name-ja {
      font-size: 1.1rem;
      color: #333;
    }

    .color-name-en {
      font-size: 0.9rem;
      color: #666;
    }

    .color-hex {
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      color: #888;
      margin-top: 0.5rem;
    }

    .color-var {
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      color: #666;
      background: #f5f5f5;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      margin-top: 0.5rem;
      display: inline-block;
    }

    .copied {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #333;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      animation: slideIn 0.3s ease;
    }

    @keyframes slideIn {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  </style>
</head>
<body>
  <h1>Traditional Colors (${Object.keys(allColors).length} colors)</h1>
  <p style="color: #666; margin-bottom: 1.5rem;">
    Japanese: ${Object.keys(japaneseColors).length} | Chinese: ${Object.keys(chineseColors).length} | European: ${Object.keys(europeanColors).length}
  </p>
  <div class="color-grid">
`;

  for (const [key, color] of Object.entries(allColors)) {
    // Determine primary and secondary name based on available fields
    let primaryName = color.name.en || key;
    let secondaryName = color.name.ja || color.name.zh || color.name.pinyin || color.name.reading || '';

    html += `    <div class="color-card">
      <div class="color-swatch bg-${key}" onclick="copyToClipboard('var(--color-${key})')"></div>
      <div class="color-info">
        <div class="color-name">
          ${secondaryName ? `<div class="color-name-ja">${secondaryName}</div>` : ''}
          <div class="color-name-en">${primaryName}</div>
        </div>
        <div class="color-hex">${color.hex}</div>
        <div class="color-var">--color-${key}</div>
      </div>
    </div>
`;
  }

  html += `  </div>

  <script>
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showCopiedNotification(text);
      });
    }

    function showCopiedNotification(text) {
      const notification = document.createElement('div');
      notification.className = 'copied';
      notification.textContent = \`Copied: \${text}\`;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.remove();
      }, 2000);
    }
  </script>
</body>
</html>`;

  return html;
}

/**
 * Main function
 */
function main() {
  console.log('Generating CSS variables...');

  // Load data
  const colorData = loadColorData();
  const totalColors =
    colorData.japanese.metadata.totalColors +
    colorData.chinese.metadata.totalColors +
    colorData.european.metadata.totalColors;
  console.log(`✓ Loaded ${totalColors} colors (JP: ${colorData.japanese.metadata.totalColors}, CN: ${colorData.chinese.metadata.totalColors}, EU: ${colorData.european.metadata.totalColors})`);

  // Create output directory
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Generate CSS variables
  const css = generateCSSVariables(colorData);
  writeFileSync(join(OUTPUT_DIR, 'colors.css'), css, 'utf-8');
  console.log('✓ Generated CSS variables');

  // Generate SCSS variables
  const scss = generateSCSSVariables(colorData);
  writeFileSync(join(OUTPUT_DIR, 'colors.scss'), scss, 'utf-8');
  console.log('✓ Generated SCSS variables');

  // Generate color swatches HTML
  const html = generateColorSwatches(colorData);
  writeFileSync(join(OUTPUT_DIR, 'index.html'), html, 'utf-8');
  console.log('✓ Generated color swatches HTML');

  console.log('✨ CSS generation complete!');
  console.log(`   Output: ${OUTPUT_DIR}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateCSSVariables, generateSCSSVariables };
