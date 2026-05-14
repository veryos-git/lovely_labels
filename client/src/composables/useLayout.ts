import type { FrameShape, PlateConfig } from "../types";

const MEASURE_PX_PER_MM = 8;
const RING_THICKNESS_FACTOR = 0.4;
const TILE_ASPECT_FACTOR = 1.6;
const IMAGE_HEIGHT_FACTOR = 2.0;
const MIN_TEXT_HEIGHT_MM = 1;
const MIN_TEXT_WIDTH_MM = 1;
// Shared with useDepthMap.drawText so the rendered text stack matches what we
// measured here. 1.2 ≈ CSS line-height default — leaves some descender room.
export const LINE_HEIGHT_FACTOR = 1.2;

let measureCanvas: HTMLCanvasElement | null = null;

export interface TextMetricsMm {
  widthMm: number;
  heightMm: number;
}

export function measureTextMm(text: string, fontFamily: string, fontSizeMm: number): TextMetricsMm {
  if (!measureCanvas) measureCanvas = document.createElement("canvas");
  const ctx = measureCanvas.getContext("2d");
  if (!ctx) throw new Error("measure canvas 2d context unavailable");
  const fontPx = Math.max(8, fontSizeMm * MEASURE_PX_PER_MM);
  ctx.font = `${fontPx}px ${fontFamily}`;
  const lines = (text || " ").split("\n");
  let maxWidthPx = 0;
  for (const raw of lines) {
    const line = raw.length === 0 ? " " : raw;
    maxWidthPx = Math.max(maxWidthPx, ctx.measureText(line).width);
  }
  const blockHeightPx = fontPx * LINE_HEIGHT_FACTOR * lines.length;
  const widthMm = Math.max(MIN_TEXT_WIDTH_MM, maxWidthPx / MEASURE_PX_PER_MM);
  const heightMm = Math.max(MIN_TEXT_HEIGHT_MM, blockHeightPx / MEASURE_PX_PER_MM);
  return { widthMm, heightMm };
}

export interface DerivedLayout {
  plateWidthMm: number;
  plateHeightMm: number;
  ringOuterDiameterMm: number;
  rectOuterWidthMm: number;
  rectOuterHeightMm: number;
  rectCornerRadiusMm: number;
  ringThicknessMm: number;
  tileScaleMm: number;
}

function emptyFrameDims(plateW: number, plateH: number): DerivedLayout {
  return {
    plateWidthMm: plateW,
    plateHeightMm: plateH,
    ringOuterDiameterMm: 0,
    rectOuterWidthMm: 0,
    rectOuterHeightMm: 0,
    rectCornerRadiusMm: 0,
    ringThicknessMm: 0,
    tileScaleMm: 1,
  };
}

export function deriveLayout(
  textWidthMm: number,
  textHeightMm: number,
  shape: FrameShape,
  tileScaleFactor = 1,
  decorationSizeFactor = 1,
  textPaddingMm = 1.5,
  outerPaddingMm = 1,
): DerivedLayout {
  // textPaddingMm may be negative: the measured text height already bakes in a
  // 1.2× line-height factor, so users need to dial in negative values to get a
  // tight crop around the glyphs.
  const innerPad = textPaddingMm;
  const outerPad = shape === "none" ? 0 : Math.max(0, outerPaddingMm);
  const ringTMm = textHeightMm * RING_THICKNESS_FACTOR * Math.max(0.05, decorationSizeFactor);
  const tileScaleMm = ringTMm * TILE_ASPECT_FACTOR * Math.max(0.05, tileScaleFactor);

  if (shape === "none") {
    const plateW = Math.max(MIN_TEXT_WIDTH_MM, textWidthMm + 2 * innerPad);
    const plateH = Math.max(MIN_TEXT_HEIGHT_MM, textHeightMm + 2 * innerPad);
    return emptyFrameDims(plateW, plateH);
  }

  if (shape === "ring") {
    const innerHalfW = Math.max(0.5, textWidthMm * 0.5 + innerPad);
    const innerHalfH = Math.max(0.5, textHeightMm * 0.5 + innerPad);
    const halfDiag = Math.hypot(innerHalfW, innerHalfH);
    const outerDiameter = 2 * (halfDiag + ringTMm);
    const plateDiameter = outerDiameter + 2 * outerPad;
    return {
      plateWidthMm: plateDiameter,
      plateHeightMm: plateDiameter,
      ringOuterDiameterMm: outerDiameter,
      rectOuterWidthMm: 0,
      rectOuterHeightMm: 0,
      rectCornerRadiusMm: 0,
      ringThicknessMm: ringTMm,
      tileScaleMm,
    };
  }

  const frameW = Math.max(2 * ringTMm + 1, textWidthMm + 2 * (innerPad + ringTMm));
  const frameH = Math.max(2 * ringTMm + 1, textHeightMm + 2 * (innerPad + ringTMm));
  const plateW = frameW + 2 * outerPad;
  const plateH = frameH + 2 * outerPad;
  const cornerRMin = ringTMm * 0.5;
  const cornerRMax = Math.min(frameW, frameH) * 0.5;
  const cornerR = Math.min(cornerRMax, Math.max(cornerRMin, textHeightMm * 0.5));
  return {
    plateWidthMm: plateW,
    plateHeightMm: plateH,
    ringOuterDiameterMm: 0,
    rectOuterWidthMm: frameW,
    rectOuterHeightMm: frameH,
    rectCornerRadiusMm: cornerR,
    ringThicknessMm: ringTMm,
    tileScaleMm,
  };
}

export function deriveLayoutForImage(
  image: HTMLImageElement,
  fontSizeMm: number,
  shape: FrameShape,
  tileScaleFactor = 1,
  decorationSizeFactor = 1,
  textPaddingMm = 1.5,
  outerPaddingMm = 1,
): DerivedLayout {
  const aspect = image.width / Math.max(1, image.height);
  const heightMm = fontSizeMm * IMAGE_HEIGHT_FACTOR;
  const widthMm = heightMm * aspect;
  return deriveLayout(widthMm, heightMm, shape, tileScaleFactor, decorationSizeFactor, textPaddingMm, outerPaddingMm);
}

export function applyLayout(cfg: PlateConfig, layout: DerivedLayout): void {
  cfg.widthMm = layout.plateWidthMm;
  cfg.heightMm = layout.plateHeightMm;
  cfg.frame.ringOuterDiameterMm = layout.ringOuterDiameterMm;
  cfg.frame.rectOuterWidthMm = layout.rectOuterWidthMm;
  cfg.frame.rectOuterHeightMm = layout.rectOuterHeightMm;
  cfg.frame.rectCornerRadiusMm = layout.rectCornerRadiusMm;
  cfg.frame.ringThicknessMm = layout.ringThicknessMm;
  cfg.frame.tileScaleMm = layout.tileScaleMm;
}
