// Builds into dist/ (via `npm run deploy`) and copies the result to the repo
// root, which GitHub Pages serves (master branch, / root).
import { cpSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = '..';
// remove previously published hashed bundles
for (const f of readdirSync(join(root, 'assets'))) {
  if (/^(index|PhoneScene)-.+\.(js|css)$/.test(f)) rmSync(join(root, 'assets', f));
}
rmSync(join(root, 'covers'), { recursive: true, force: true });
cpSync('dist', root, { recursive: true });
writeFileSync(join(root, '.nojekyll'), '');
console.log('Published dist/ to repo root.');
