/**
 * Tailwind CSS Color Generator
 * Generates Tailwind CSS compatible color configuration from Japanese traditional colors
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_DIR = join(__dirname, '../data/colors');
const OUTPUT_DIR = join(__dirname, '../dist/tailwind');
const OUTPUT_FILE = join(OUTPUT_DIR, 'colors.js');
const OUTPUT_CJS = join(OUTPUT_DIR, 'colors.cjs');

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
 * Generate Tailwind CSS color object for a specific region
 */
function generateRegionColors(colors) {
  const result = {};
  for (const [key, color] of Object.entries(colors)) {
    result[key] = color.hex;
  }
  return result;
}

/**
 * Generate Tailwind CSS color objects for all regions
 */
function generateTailwindColors(colorData) {
  return {
    japanese: generateRegionColors(colorData.japanese.colors.japanese),
    chinese: generateRegionColors(colorData.chinese.colors.chinese),
    european: generateRegionColors(colorData.european.colors.european)
  };
}

/**
 * Generate Tailwind CSS color object with detailed metadata for a region
 */
function generateRegionColorsWithMeta(colors, hasReading = false) {
  const result = {};
  for (const [key, color] of Object.entries(colors)) {
    const colorObj = {
      DEFAULT: color.hex,
      hex: color.hex,
      rgb: `rgb(${color.rgb.join(', ')})`,
      name: color.name,
      description: color.description
    };
    result[key] = colorObj;
  }
  return result;
}

/**
 * Generate Tailwind CSS color objects with metadata for all regions
 */
function generateTailwindColorsWithMeta(colorData) {
  return {
    japanese: generateRegionColorsWithMeta(colorData.japanese.colors.japanese, true),
    chinese: generateRegionColorsWithMeta(colorData.chinese.colors.chinese, false),
    european: generateRegionColorsWithMeta(colorData.european.colors.european, false)
  };
}

/**
 * Generate ESM format output
 */
function generateESM(colors, colorsWithMeta) {
  return `/**
 * Traditional Colors for Tailwind CSS
 * @module @traditional-colors/tailwind
 */

/**
 * Japanese traditional colors (simple format)
 * Use this in your tailwind.config.js:
 *
 * @example
 * import { japaneseColors } from '@traditional-colors/tailwind';
 *
 * export default {
 *   theme: {
 *     extend: {
 *       colors: japaneseColors
 *     }
 *   }
 * }
 */
export const japaneseColors = ${JSON.stringify(colors.japanese, null, 2)};

/**
 * Chinese traditional colors (simple format)
 */
export const chineseColors = ${JSON.stringify(colors.chinese, null, 2)};

/**
 * European traditional colors (simple format)
 */
export const europeanColors = ${JSON.stringify(colors.european, null, 2)};

/**
 * All traditional colors organized by region
 */
export const allColors = {
  japanese: japaneseColors,
  chinese: chineseColors,
  european: europeanColors
};

/**
 * Japanese traditional colors with metadata
 * Includes color names, descriptions, and multiple format values
 */
export const japaneseColorsWithMeta = ${JSON.stringify(colorsWithMeta.japanese, null, 2)};

/**
 * Chinese traditional colors with metadata
 */
export const chineseColorsWithMeta = ${JSON.stringify(colorsWithMeta.chinese, null, 2)};

/**
 * European traditional colors with metadata
 */
export const europeanColorsWithMeta = ${JSON.stringify(colorsWithMeta.european, null, 2)};

/**
 * All traditional colors with metadata
 */
export const allColorsWithMeta = {
  japanese: japaneseColorsWithMeta,
  chinese: chineseColorsWithMeta,
  european: europeanColorsWithMeta
};

/**
 * Default export (Japanese colors for backward compatibility)
 */
export default japaneseColors;
`;
}

/**
 * Generate CommonJS format output
 */
function generateCJS(colors, colorsWithMeta) {
  return `/**
 * Traditional Colors for Tailwind CSS
 * @module @traditional-colors/tailwind
 */

const japaneseColors = ${JSON.stringify(colors.japanese, null, 2)};
const chineseColors = ${JSON.stringify(colors.chinese, null, 2)};
const europeanColors = ${JSON.stringify(colors.european, null, 2)};

const allColors = {
  japanese: japaneseColors,
  chinese: chineseColors,
  european: europeanColors
};

const japaneseColorsWithMeta = ${JSON.stringify(colorsWithMeta.japanese, null, 2)};
const chineseColorsWithMeta = ${JSON.stringify(colorsWithMeta.chinese, null, 2)};
const europeanColorsWithMeta = ${JSON.stringify(colorsWithMeta.european, null, 2)};

const allColorsWithMeta = {
  japanese: japaneseColorsWithMeta,
  chinese: chineseColorsWithMeta,
  european: europeanColorsWithMeta
};

module.exports = {
  japaneseColors,
  chineseColors,
  europeanColors,
  allColors,
  japaneseColorsWithMeta,
  chineseColorsWithMeta,
  europeanColorsWithMeta,
  allColorsWithMeta,
  default: japaneseColors
};
`;
}

/**
 * Generate Tailwind CSS plugin format
 */
function generatePlugin(colors) {
  const pluginPath = join(OUTPUT_DIR, 'plugin.js');
  const pluginCjsPath = join(OUTPUT_DIR, 'plugin.cjs');

  const esmContent = `/**
 * Tailwind CSS Plugin for Traditional Colors
 *
 * @example
 * // tailwind.config.js
 * import traditionalColors from '@traditional-colors/tailwind/plugin';
 *
 * export default {
 *   plugins: [traditionalColors]
 * }
 */

import plugin from 'tailwindcss/plugin.js';

const japaneseColors = ${JSON.stringify(colors.japanese, null, 2)};
const chineseColors = ${JSON.stringify(colors.chinese, null, 2)};
const europeanColors = ${JSON.stringify(colors.european, null, 2)};

const allColors = { ...japaneseColors, ...chineseColors, ...europeanColors };

export default plugin(function({ addBase, theme }) {
  // Add CSS variables for all colors
  addBase({
    ':root': Object.entries(allColors).reduce((acc, [key, value]) => {
      acc[\`--color-\${key}\`] = value;
      return acc;
    }, {})
  });
}, {
  theme: {
    extend: {
      colors: {
        jp: japaneseColors,
        cn: chineseColors,
        eu: europeanColors
      }
    }
  }
});
`;

  const cjsContent = `/**
 * Tailwind CSS Plugin for Traditional Colors
 */

const plugin = require('tailwindcss/plugin');

const japaneseColors = ${JSON.stringify(colors.japanese, null, 2)};
const chineseColors = ${JSON.stringify(colors.chinese, null, 2)};
const europeanColors = ${JSON.stringify(colors.european, null, 2)};

const allColors = { ...japaneseColors, ...chineseColors, ...europeanColors };

module.exports = plugin(function({ addBase, theme }) {
  addBase({
    ':root': Object.entries(allColors).reduce((acc, [key, value]) => {
      acc[\`--color-\${key}\`] = value;
      return acc;
    }, {})
  });
}, {
  theme: {
    extend: {
      colors: {
        jp: japaneseColors,
        cn: chineseColors,
        eu: europeanColors
      }
    }
  }
});
`;

  writeFileSync(pluginPath, esmContent, 'utf-8');
  writeFileSync(pluginCjsPath, cjsContent, 'utf-8');
  console.log('✓ Generated Tailwind CSS plugin');
}

/**
 * Generate usage examples
 */
function generateExamples() {
  const examplePath = join(OUTPUT_DIR, 'example.config.js');

  const content = `/**
 * Example Tailwind CSS Configuration
 *
 * This file shows different ways to use Traditional Japanese Colors
 * with Tailwind CSS.
 */

// Method 1: Direct import (ESM)
import { japaneseColors } from '@traditional-colors/tailwind';

export default {
  theme: {
    extend: {
      colors: {
        // Add all Japanese colors with their original names
        ...japaneseColors,

        // Or use them under a namespace
        jp: japaneseColors,

        // Or pick specific colors
        primary: japaneseColors.sakura,
        secondary: japaneseColors.ai,
        accent: japaneseColors.yamabuki
      }
    }
  }
};

// Method 2: Use the plugin (recommended)
// import traditionalColors from '@traditional-colors/tailwind/plugin';
//
// export default {
//   plugins: [traditionalColors],
//   theme: {
//     extend: {
//       // Colors are available as 'traditional-koubai', 'traditional-sakura', etc.
//     }
//   }
// };

// Method 3: CommonJS (legacy)
// const { japaneseColors } = require('@traditional-colors/tailwind');
//
// module.exports = {
//   theme: {
//     extend: {
//       colors: japaneseColors
//     }
//   }
// };
`;

  writeFileSync(examplePath, content, 'utf-8');
  console.log('✓ Generated Tailwind CSS example configuration');
}

/**
 * Main function
 */
function main() {
  console.log('Generating Tailwind CSS colors...');

  // Load data
  const colorData = loadColorData();
  const totalColors =
    colorData.japanese.metadata.totalColors +
    colorData.chinese.metadata.totalColors +
    colorData.european.metadata.totalColors;
  console.log(`✓ Loaded ${totalColors} colors (JP: ${colorData.japanese.metadata.totalColors}, CN: ${colorData.chinese.metadata.totalColors}, EU: ${colorData.european.metadata.totalColors})`);

  // Generate color objects
  const colors = generateTailwindColors(colorData);
  const colorsWithMeta = generateTailwindColorsWithMeta(colorData);

  // Create output directory
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Generate files
  const esmContent = generateESM(colors, colorsWithMeta);
  const cjsContent = generateCJS(colors, colorsWithMeta);

  writeFileSync(OUTPUT_FILE, esmContent, 'utf-8');
  writeFileSync(OUTPUT_CJS, cjsContent, 'utf-8');

  console.log('✓ Generated Tailwind CSS colors (ESM)');
  console.log('✓ Generated Tailwind CSS colors (CommonJS)');

  // Generate plugin
  generatePlugin(colors);

  // Generate examples
  generateExamples();

  console.log('✨ Tailwind CSS generation complete!');
  console.log(`   Output: ${OUTPUT_DIR}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateTailwindColors, generateTailwindColorsWithMeta };
