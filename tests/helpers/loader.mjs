import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const createJiti = require('jiti');

const __filename = fileURLToPath(import.meta.url);
const helpersDir = path.dirname(__filename);
const projectRoot = path.resolve(helpersDir, '../../');
const srcDir = path.resolve(projectRoot, 'src');

/**
 * Pre-configured jiti instance for synchronous loading of TypeScript files
 * with '@/*' alias mapped directly to 'src/*'.
 */
export const jiti = createJiti(__filename, {
  alias: {
    '@': srcDir,
  },
  interopDefault: true,
  esmResolve: true,
});

/**
 * Synchronous loader helper for TypeScript modules.
 * @param {string} specifier - Module specifier (e.g. '@/data/levels' or relative path)
 * @returns {any} Exported module content
 */
export const load = (specifier) => {
  return jiti(specifier);
};

export default load;
