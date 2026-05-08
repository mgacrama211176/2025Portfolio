import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const svgPath = resolve(root, "src/app/icon.svg");
const icoPath = resolve(root, "src/app/favicon.ico");

const svg = readFileSync(svgPath);
const sizes = [16, 32, 48, 64];

const pngBuffers = await Promise.all(
  sizes.map((size) =>
    sharp(svg, { density: 384 })
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer(),
  ),
);

const ico = await pngToIco(pngBuffers);
writeFileSync(icoPath, ico);

console.log(`✓ wrote ${icoPath} (${ico.byteLength} bytes, sizes: ${sizes.join(", ")})`);
