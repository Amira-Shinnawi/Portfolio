// Converts originals in ../assets into lightweight WebP files in public/.
// Run: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { join, parse } from 'node:path';

const src = '../assets/covers';
const out = 'public/covers';
mkdirSync(out, { recursive: true });
for (const f of readdirSync(src)) {
  const { name } = parse(f);
  await sharp(join(src, f)).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 78 }).toFile(join(out, `${name}.webp`));
  console.log('✓', name);
}
await sharp('../assets/profile/profile.png').resize({ width: 640, withoutEnlargement: true }).webp({ quality: 82 }).toFile('public/profile.webp');
console.log('✓ profile');
