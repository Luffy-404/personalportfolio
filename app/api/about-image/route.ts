import { readFile } from "node:fs/promises";
import { NextRequest } from "next/server";
import { aboutImageAssets, type AboutImageAssetKey } from "../../data/about";
import { getAboutImagePath } from "../../lib/about-images";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const asset = request.nextUrl.searchParams.get("asset");
  if (!asset || !(asset in aboutImageAssets)) return new Response("Not found", { status: 404 });

  const imageKey = asset as AboutImageAssetKey;
  const image = await readFile(getAboutImagePath(imageKey));
  return new Response(image, {
    headers: {
      "Content-Type": aboutImageAssets[imageKey].contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
