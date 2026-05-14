import { ref } from "vue";
import type { TileManifestEntry } from "../types";

const manifest = ref<TileManifestEntry[]>([]);
const loaded = ref(false);
const error = ref<string | null>(null);
const imageCache = new Map<string, Promise<HTMLImageElement>>();

export interface TileContentRange {
  // Texture v coords (with UNPACK_FLIP_Y_WEBGL): the band's inner edge (stripY=0)
  // samples vMin, outer edge (stripY=1) samples vMax. Tightens against the tile's
  // actual non-black extent so internal padding inside the source PNG doesn't show
  // up as a gap between text and decoration.
  vMin: number;
  vMax: number;
  // Image-space row crop, used by the CPU strip preview's drawImage.
  srcY: number;
  srcH: number;
  // True iff content occupies the full image (no crop applied).
  full: boolean;
}

const contentRangeCache = new Map<string, TileContentRange>();
const FULL_RANGE: TileContentRange = { vMin: 0, vMax: 1, srcY: 0, srcH: 0, full: true };

function computeTileContentRange(img: HTMLImageElement): TileContentRange {
  const W = img.width;
  const H = img.height;
  if (W === 0 || H === 0) return FULL_RANGE;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return { ...FULL_RANGE, srcH: H };
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, W, H).data;
  const threshold = 16;
  let r0 = -1;
  let r1 = -1;
  for (let y = 0; y < H; y++) {
    let maxV = 0;
    const rowStart = y * W * 4;
    for (let x = 0; x < W; x++) {
      const i = rowStart + x * 4;
      const v = Math.max(data[i], data[i + 1], data[i + 2]);
      if (v > maxV) maxV = v;
      if (maxV >= threshold) break;
    }
    if (maxV >= threshold) {
      if (r0 === -1) r0 = y;
      r1 = y;
    }
  }
  if (r0 === -1) return { ...FULL_RANGE, srcH: H };
  if (r0 === 0 && r1 === H - 1) return { vMin: 0, vMax: 1, srcY: 0, srcH: H, full: true };
  const vMin = (H - 1 - r1 - 0.5) / H;
  const vMax = (H - 1 - r0 + 0.5) / H;
  return { vMin, vMax, srcY: r0, srcH: r1 - r0 + 1, full: false };
}

export function getTileContentRange(img: HTMLImageElement, id: string): TileContentRange {
  const cached = contentRangeCache.get(id);
  if (cached) return cached;
  const result = computeTileContentRange(img);
  contentRangeCache.set(id, result);
  return result;
}

async function loadManifest(): Promise<void> {
  if (loaded.value) return;
  try {
    const res = await fetch("/tiles/manifest.json", { cache: "no-cache" });
    if (!res.ok) throw new Error(`manifest fetch ${res.status}`);
    const json = (await res.json()) as { tiles: TileManifestEntry[] };
    manifest.value = json.tiles;
    loaded.value = true;
  } catch (e) {
    error.value = (e as Error).message;
  }
}

export function loadTileImage(id: string): Promise<HTMLImageElement> {
  const entry = manifest.value.find((t) => t.id === id);
  if (!entry) return Promise.reject(new Error(`unknown tile: ${id}`));
  const cached = imageCache.get(id);
  if (cached) return cached;
  const p = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`failed to load tile ${id}`));
    img.src = `/tiles/${entry.file}`;
  });
  imageCache.set(id, p);
  return p;
}

export function useTileLibrary() {
  return { manifest, loaded, error, loadManifest, loadTileImage };
}
