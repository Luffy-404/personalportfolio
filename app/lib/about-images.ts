import "server-only";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { aboutImageAssets, type AboutImageAssetKey } from "../data/about";

const aboutImagesDirectory = path.join(process.cwd(), "PORTFOLIO_PROD", "assets", "images");

export function getAboutImagePath(asset: AboutImageAssetKey) {
  return path.join(aboutImagesDirectory, aboutImageAssets[asset].fileName);
}

export async function getAboutImageUrl(asset: AboutImageAssetKey) {
  const image = await readFile(getAboutImagePath(asset));
  const version = createHash("sha256").update(image).digest("hex").slice(0, 16);
  return `/api/about-image?asset=${asset}&v=${version}`;
}
