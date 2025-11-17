/**
 * CSS Variables Generator
 * Generates CSS custom properties (variables) from Japanese traditional colors
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_PATH = join(__dirname, '../data/colors/japanese.json');
const OUTPUT_DIR = join(__dirname, '../dist/css');

/**
 * Load color data from JSON file
 */
function loadColorData() {
  const data = readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(data);
}

/**
 * Generate CSS variables
 */
function generateCSSVariables(colorData) {
  const colors = colorData.colors.japanese;
  let css = `/**
 * Traditional Japanese Colors - CSS Variables
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
  for (const [key, color] of Object.entries(colors)) {
    css += `  --color-${key}: ${color.hex};\n`;
  }

  css += '\n';

  // Add RGB values
  for (const [key, color] of Object.entries(colors)) {
    css += `  --color-${key}-rgb: ${color.rgb.join(', ')};\n`;
  }

  css += '}\n\n';

  // Add utility classes
  css += `/* Utility classes */\n`;
  for (const [key] of Object.entries(colors)) {
    css += `.text-${key} { color: var(--color-${key}); }\n`;
  }

  css += '\n';

  for (const [key] of Object.entries(colors)) {
    css += `.bg-${key} { background-color: var(--color-${key}); }\n`;
  }

  css += '\n';

  for (const [key] of Object.entries(colors)) {
    css += `.border-${key} { border-color: var(--color-${key}); }\n`;
  }

  return css;
}

/**
 * Generate SCSS variables
 */
function generateSCSSVariables(colorData) {
  const colors = colorData.colors.japanese;
  let scss = `/**
 * Traditional Japanese Colors - SCSS Variables
 *
 * Usage:
 * .element {
 *   color: $color-koubai;
 *   background-color: $color-sakura;
 * }
 */

`;

  // Add color variables
  for (const [key, color] of Object.entries(colors)) {
    scss += `$color-${key}: ${color.hex};\n`;
  }

  scss += '\n// RGB values\n';
  for (const [key, color] of Object.entries(colors)) {
    scss += `$color-${key}-rgb: (${color.rgb.join(', ')});\n`;
  }

  scss += '\n// Color map\n';
  scss += '$japanese-colors: (\n';
  const entries = Object.entries(colors);
  entries.forEach(([key, color], index) => {
    const comma = index < entries.length - 1 ? ',' : '';
    scss += `  '${key}': ${color.hex}${comma}\n`;
  });
  scss += ');\n\n';

  // Add helper functions
  scss += `// Helper function to get color by name
@function japanese-color($name) {
  @return map-get($japanese-colors, $name);
}

// Example usage:
// .element {
//   color: japanese-color('koubai');
// }
`;

  return scss;
}

/**
 * Generate CSS file with color swatches documentation
 */
function generateColorSwatches(colorData) {
  const colors = colorData.colors.japanese;
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Traditional Japanese Colors - CSS Variables</title>
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
  <h1>Traditional Japanese Colors (${Object.keys(colors).length} colors)</h1>
  <div class="color-grid">
`;

  for (const [key, color] of Object.entries(colors)) {
    html += `    <div class="color-card">
      <div class="color-swatch bg-${key}" onclick="copyToClipboard('var(--color-${key})')"></div>
      <div class="color-info">
        <div class="color-name">
          <div class="color-name-ja">${color.name.ja}</div>
          <div class="color-name-en">${color.name.en}</div>
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
  console.log(`✓ Loaded ${colorData.metadata.totalColors} colors`);

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
