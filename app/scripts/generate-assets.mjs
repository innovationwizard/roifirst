import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');
const logoPath = join(publicDir, 'ROI_FIRST_LOGO.png');

const BASALT = '#1c1917';

async function generate() {
  const logo = sharp(logoPath);
  const meta = await logo.metadata();

  // Trim empty/black space around the logo
  const trimmed = await logo
    .trim({ threshold: 20 })
    .toBuffer();

  const trimmedSharp = sharp(trimmed);

  // Favicon: 32x32 and 48x48 PNG (multi-size for modern browsers)
  await trimmedSharp
    .clone()
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon-32x32.png'));

  await sharp(trimmed)
    .resize(48, 48)
    .png()
    .toFile(join(publicDir, 'favicon-48x48.png'));

  // Apple touch icon: 180x180
  await sharp(trimmed)
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));

  // OG image: 1200x630, logo centered on basalt background, under 300KB
  const trimmedMeta = await sharp(trimmed).metadata();
  const logoW = trimmedMeta.width;
  const logoH = trimmedMeta.height;

  const ogW = 1200;
  const ogH = 630;
  const padding = 80;
  const maxLogoW = ogW - padding * 2;
  const maxLogoH = ogH - padding * 2;

  const scale = Math.min(maxLogoW / logoW, maxLogoH / logoH);
  const scaledW = Math.round(logoW * scale);
  const scaledH = Math.round(logoH * scale);
  const x = Math.round((ogW - scaledW) / 2);
  const y = Math.round((ogH - scaledH) / 2);

  const basaltSvg = `
    <svg width="${ogW}" height="${ogH}">
      <rect width="100%" height="100%" fill="${BASALT}"/>
    </svg>
  `;

  const ogBuffer = await sharp(Buffer.from(basaltSvg))
    .composite([{
      input: await sharp(trimmed).resize(scaledW, scaledH).toBuffer(),
      left: x,
      top: y,
    }])
    .webp({ quality: 85 })
    .toBuffer();

  if (ogBuffer.length > 300 * 1024) {
    const reduced = await sharp(ogBuffer)
      .webp({ quality: 70 })
      .toBuffer();
    if (reduced.length > 300 * 1024) {
      const more = await sharp(ogBuffer)
        .webp({ quality: 55 })
        .toBuffer();
      await sharp(more).toFile(join(publicDir, 'og-image.webp'));
    } else {
      await sharp(reduced).toFile(join(publicDir, 'og-image.webp'));
    }
  } else {
    await sharp(ogBuffer).toFile(join(publicDir, 'og-image.webp'));
  }

  console.log('Generated: favicon-32x32.png, favicon-48x48.png, apple-touch-icon.png, og-image.webp');
}

generate().catch(console.error);
