/**
 * Convert horizontal_tiles/*.tif → client/public/tiles/*.png (+ thumbnails)
 * and write client/public/tiles/manifest.json so the client can list them
 * without a hardcoded list.
 *
 * Why ImageMagick subprocess: browsers can't read TIFF, and the source tiles
 * are 4096px 16-bit greyscale. We downscale to 1024px (plenty for the ring
 * strip resampling) and 128px thumbs to keep the asset payload sane.
 */

const ROOT = new URL("..", import.meta.url).pathname;
const SRC_DIR = `${ROOT}horizontal_tiles`;
const OUT_DIR = `${ROOT}client/public/tiles`;
const FULL_WIDTH = 1024;
const THUMB_WIDTH = 128;

interface ManifestEntry {
  id: string;
  file: string;
  thumb: string;
  width: number;
  height: number;
}

async function ensureDir(path: string): Promise<void> {
  await Deno.mkdir(path, { recursive: true });
}

async function runMagick(args: string[]): Promise<void> {
  const cmd = new Deno.Command("magick", { args, stderr: "piped", stdout: "piped" });
  const { code, stderr } = await cmd.output();
  if (code !== 0) {
    const msg = new TextDecoder().decode(stderr);
    throw new Error(`magick ${args.join(" ")} failed: ${msg}`);
  }
}

async function identifyDims(path: string): Promise<{ w: number; h: number }> {
  const cmd = new Deno.Command("magick", {
    args: ["identify", "-format", "%w %h", path],
    stdout: "piped",
    stderr: "piped",
  });
  const { code, stdout, stderr } = await cmd.output();
  if (code !== 0) {
    throw new Error(`identify failed: ${new TextDecoder().decode(stderr)}`);
  }
  const [w, h] = new TextDecoder().decode(stdout).trim().split(/\s+/).map(Number);
  return { w, h };
}

function slugify(name: string): string {
  return name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function main(): Promise<void> {
  await ensureDir(OUT_DIR);

  const entries: ManifestEntry[] = [];
  const files: string[] = [];
  try {
    for await (const entry of Deno.readDir(SRC_DIR)) {
      if (entry.isFile && /\.tiff?$/i.test(entry.name)) files.push(entry.name);
    }
  } catch (e) {
    console.warn(`Could not read ${SRC_DIR}: ${(e as Error).message}`);
  }
  files.sort();

  if (files.length === 0) {
    console.warn(`No .tif files in ${SRC_DIR}`);
  }

  let i = 0;
  for (const name of files) {
    i++;
    const id = slugify(name);
    const srcPath = `${SRC_DIR}/${name}`;
    const fullName = `${id}.png`;
    const thumbName = `${id}.thumb.png`;
    const fullPath = `${OUT_DIR}/${fullName}`;
    const thumbPath = `${OUT_DIR}/${thumbName}`;

    console.log(`[${i}/${files.length}] ${name} → ${fullName}`);

    await runMagick([
      // Some TIFs carry an extra frame (mask or thumbnail) which makes magick
      // emit "-0.png" and "-1.png" instead of the requested filename.
      `${srcPath}[0]`,
      "-colorspace", "Gray",
      "-depth", "8",
      "-resize", `${FULL_WIDTH}x`,
      "-strip",
      "PNG8:" + fullPath,
    ]);
    await runMagick([
      fullPath,
      "-resize", `${THUMB_WIDTH}x`,
      "-strip",
      "PNG8:" + thumbPath,
    ]);

    const dims = await identifyDims(fullPath);
    entries.push({
      id,
      file: fullName,
      thumb: thumbName,
      width: dims.w,
      height: dims.h,
    });
  }

  const manifestPath = `${OUT_DIR}/manifest.json`;
  await Deno.writeTextFile(manifestPath, JSON.stringify({ tiles: entries }, null, 2));
  console.log(`Wrote ${entries.length} tile(s) to ${manifestPath}`);
}

if (import.meta.main) {
  await main();
}
