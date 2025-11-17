/**
 * Build All Generators
 * Runs all color generators to create framework-specific files
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const generators = [
  { name: 'Tailwind CSS', file: 'tailwind.js' },
  { name: 'CSS Variables', file: 'css-variables.js' },
  { name: 'VS Code Theme', file: 'vscode.js' }
];

async function runGenerator(generator) {
  const filePath = join(__dirname, generator.file);
  console.log(`\n🔨 Building ${generator.name}...`);

  try {
    const { stdout, stderr } = await execAsync(`node ${filePath}`);

    if (stdout) {
      console.log(stdout);
    }
    if (stderr) {
      console.error(stderr);
    }

    console.log(`✅ ${generator.name} complete`);
    return true;
  } catch (error) {
    console.error(`❌ ${generator.name} failed:`, error.message);
    return false;
  }
}

async function main() {
  console.log('╔═══════════════════════════════════════════════╗');
  console.log('║  Traditional Colors - Build All Generators   ║');
  console.log('╚═══════════════════════════════════════════════╝');

  const startTime = Date.now();
  const results = [];

  for (const generator of generators) {
    const success = await runGenerator(generator);
    results.push({ generator: generator.name, success });
  }

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log('\n' + '═'.repeat(50));
  console.log('Build Summary:');
  console.log('═'.repeat(50));

  results.forEach(({ generator, success }) => {
    const status = success ? '✅' : '❌';
    console.log(`${status} ${generator}`);
  });

  console.log('═'.repeat(50));
  console.log(`\n⏱️  Total time: ${duration}s`);

  const failedCount = results.filter(r => !r.success).length;
  if (failedCount === 0) {
    console.log('🎉 All generators completed successfully!');
    process.exit(0);
  } else {
    console.log(`⚠️  ${failedCount} generator(s) failed`);
    process.exit(1);
  }
}

main();
