/**
 * Tailwind CSS Color Generator
 * Generates Tailwind CSS compatible color configuration from Japanese traditional colors
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DATA_PATH = join(__dirname, '../data/colors/japanese.json');
const OUTPUT_DIR = join(__dirname, '../dist/tailwind');
const OUTPUT_FILE = join(OUTPUT_DIR, 'colors.js');
const OUTPUT_CJS = join(OUTPUT_DIR, 'colors.cjs');

/**
 * Load color data from JSON file
 */
function loadColorData() {
  const data = readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(data);
}

/**
 * Generate Tailwind CSS color object
 */
function generateTailwindColors(colorData) {
  const colors = {};

  for (const [key, color] of Object.entries(colorData.colors.japanese)) {
    colors[key] = color.hex;
  }

  return colors;
}

/**
 * Generate Tailwind CSS color object with detailed metadata
 */
function generateTailwindColorsWithMeta(colorData) {
  const colors = {};

  for (const [key, color] of Object.entries(colorData.colors.japanese)) {
    colors[key] = {
      DEFAULT: color.hex,
      hex: color.hex,
      rgb: `rgb(${color.rgb.join(', ')})`,
      name: {
        ja: color.name.ja,
        en: color.name.en,
        reading: color.name.reading
      },
      description: color.description
    };
  }

  return colors;
}

/**
 * Generate ESM format output
 */
function generateESM(colors, colorsWithMeta) {
  return `/**
 * Traditional Japanese Colors for Tailwind CSS
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
export const japaneseColors = ${JSON.stringify(colors, null, 2)};

/**
 * Japanese traditional colors with metadata
 * Includes color names, descriptions, and multiple format values
 */
export const japaneseColorsWithMeta = ${JSON.stringify(colorsWithMeta, null, 2)};

/**
 * Default export (simple format)
 */
export default japaneseColors;
`;
}

/**
 * Generate CommonJS format output
 */
function generateCJS(colors, colorsWithMeta) {
  return `/**
 * Traditional Japanese Colors for Tailwind CSS
 * @module @traditional-colors/tailwind
 */

/**
 * Japanese traditional colors (simple format)
 */
const japaneseColors = ${JSON.stringify(colors, null, 2)};

/**
 * Japanese traditional colors with metadata
 */
const japaneseColorsWithMeta = ${JSON.stringify(colorsWithMeta, null, 2)};

module.exports = {
  japaneseColors,
  japaneseColorsWithMeta,
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
 * Tailwind CSS Plugin for Japanese Traditional Colors
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

const japaneseColors = ${JSON.stringify(colors, null, 2)};

export default plugin(function({ addBase, theme }) {
  // Add CSS variables for all colors
  addBase({
    ':root': Object.entries(japaneseColors).reduce((acc, [key, value]) => {
      acc[\`--color-\${key}\`] = value;
      return acc;
    }, {})
  });
}, {
  theme: {
    extend: {
      colors: {
        traditional: japaneseColors
      }
    }
  }
});
`;

  const cjsContent = `/**
 * Tailwind CSS Plugin for Japanese Traditional Colors
 */

const plugin = require('tailwindcss/plugin');

const japaneseColors = ${JSON.stringify(colors, null, 2)};

module.exports = plugin(function({ addBase, theme }) {
  addBase({
    ':root': Object.entries(japaneseColors).reduce((acc, [key, value]) => {
      acc[\`--color-\${key}\`] = value;
      return acc;
    }, {})
  });
}, {
  theme: {
    extend: {
      colors: {
        traditional: japaneseColors
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
  console.log(`✓ Loaded ${colorData.metadata.totalColors} colors`);

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
