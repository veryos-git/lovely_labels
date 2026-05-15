import type { FrameConfig, FramePlanSummary, SnapDimension } from "../types";

export interface RingPlan {
  shape: "ring";
  centerlineRadiusMm: number;
  ringThicknessMm: number;
  tileScaleMm: number;
  perimeterMm: number;
  N: number;
  outerDiameterMm: number;
}

export interface RectPlan {
  shape: "roundedRect";
  outerWidthMm: number;
  outerHeightMm: number;
  cornerRadiusMm: number;
  ringThicknessMm: number;
  tileScaleMm: number;
  perimeterMm: number;
  N: number;
  // Centerline geometry, used by both the strip builder and the GLSL closest-point code.
  // a, b are the corner-arc-center offsets from rect center (a along x, b along y).
  // rc = corner radius of the centerline.
  a: number;
  b: number;
  rc: number;
}

export type FramePlan = RingPlan | RectPlan;

const TWO_PI = Math.PI * 2;
export const STRIP_SUPERSAMPLE = 3;

function rectPerimeter(W: number, H: number, r: number, T: number): number {
  // Centerline rect: (W-T) × (H-T) outer extent, corner radius rc = r - T/2.
  // Equivalently: a = W/2 - r, b = H/2 - r (offsets from rect center to corner-arc-centers).
  // P = 4a + 4b + 2π·rc.
  const a = W / 2 - r;
  const b = H / 2 - r;
  const rc = r - T / 2;
  return 4 * a + 4 * b + TWO_PI * rc;
}

function clampRectInputs(W: number, H: number, r: number, T: number): { W: number; H: number; r: number; T: number } {
  const Tc = Math.max(0.1, T);
  // r >= T/2 keeps the centerline corner radius non-negative; r <= min(W,H)/2 keeps the rect well-formed.
  const rMin = Tc / 2;
  const rMax = Math.min(W, H) / 2;
  const rc = Math.min(Math.max(r, rMin), Math.max(rMin, rMax));
  return { W: Math.max(2 * rc, W), H: Math.max(2 * rc, H), r: rc, T: Tc };
}

function planRing(cfg: FrameConfig): RingPlan | null {
  if (cfg.tileScaleMm <= 0) return null;
  if (cfg.ringOuterDiameterMm <= 0) return null;
  const T = Math.max(0.1, cfg.ringThicknessMm);
  const centerlineCircumferenceUser = Math.PI * (cfg.ringOuterDiameterMm - T);
  const N = Math.max(1, Math.round(centerlineCircumferenceUser / cfg.tileScaleMm));
  const perimeterMm = N * cfg.tileScaleMm;
  const centerlineRadiusMm = perimeterMm / TWO_PI;
  const outerDiameterMm = 2 * centerlineRadiusMm + T;
  return {
    shape: "ring",
    centerlineRadiusMm,
    ringThicknessMm: T,
    tileScaleMm: cfg.tileScaleMm,
    perimeterMm,
    N,
    outerDiameterMm,
  };
}

function planRoundedRect(cfg: FrameConfig): RectPlan | null {
  if (cfg.tileScaleMm <= 0) return null;
  const { W: W0, H: H0, r: r0, T: T0 } = clampRectInputs(
    cfg.rectOuterWidthMm,
    cfg.rectOuterHeightMm,
    cfg.rectCornerRadiusMm,
    cfg.ringThicknessMm,
  );
  if (W0 <= 0 || H0 <= 0) return null;

  // Snap one dimension so perimeter = N · tileScale (seamless tiling). We pick
  // N by rounding the user's current perimeter to the nearest integer multiple
  // of the user's requested tile scale.
  const Pcurrent = rectPerimeter(W0, H0, r0, T0);
  const N = Math.max(1, Math.round(Pcurrent / cfg.tileScaleMm));
  const Ptarget = N * cfg.tileScaleMm;

  let W = W0;
  let H = H0;
  let r = r0;
  const T = T0;

  switch (cfg.rectSnapDimension as SnapDimension) {
    case "tileScale":
      break;
    case "cornerRadius": {
      const denom = 2 * Math.PI - 8;
      const rSnapped = (Ptarget - 2 * (W + H) + Math.PI * T) / denom;
      const clamped = clampRectInputs(W, H, rSnapped, T);
      W = clamped.W;
      H = clamped.H;
      r = clamped.r;
      break;
    }
    case "width": {
      const Wsnapped = (Ptarget - 2 * H - (2 * Math.PI - 8) * r + Math.PI * T) / 2;
      W = Math.max(2 * r, Wsnapped);
      break;
    }
    case "height": {
      const Hsnapped = (Ptarget - 2 * W - (2 * Math.PI - 8) * r + Math.PI * T) / 2;
      H = Math.max(2 * r, Hsnapped);
      break;
    }
  }

  const Pfinal = rectPerimeter(W, H, r, T);
  const Nfinal = Math.max(1, Math.round(Pfinal / cfg.tileScaleMm));
  const tileScale = Pfinal / Nfinal;
  return finalizeRect(W, H, r, T, tileScale, Nfinal);
}

function finalizeRect(W: number, H: number, r: number, T: number, tileScale: number, N: number): RectPlan {
  const a = W / 2 - r;
  const b = H / 2 - r;
  const rc = r - T / 2;
  const perimeterMm = 4 * a + 4 * b + TWO_PI * rc;
  return {
    shape: "roundedRect",
    outerWidthMm: W,
    outerHeightMm: H,
    cornerRadiusMm: r,
    ringThicknessMm: T,
    tileScaleMm: tileScale,
    perimeterMm,
    N,
    a,
    b,
    rc,
  };
}

export function planFrame(cfg: FrameConfig): FramePlan | null {
  if (cfg.shape === "none") return null;
  if (cfg.shape === "ring") return planRing(cfg);
  if (cfg.shape === "roundedRect") return planRoundedRect(cfg);
  return null;
}

export function summarizePlan(plan: FramePlan): FramePlanSummary {
  if (plan.shape === "ring") {
    return {
      shape: "ring",
      perimeterMm: plan.perimeterMm,
      tileRepetitions: plan.N,
      ringOuterDiameterMm: plan.outerDiameterMm,
      ringThicknessMm: plan.ringThicknessMm,
      tileScaleMm: plan.tileScaleMm,
    };
  }
  return {
    shape: "roundedRect",
    perimeterMm: plan.perimeterMm,
    tileRepetitions: plan.N,
    rectOuterWidthMm: plan.outerWidthMm,
    rectOuterHeightMm: plan.outerHeightMm,
    rectCornerRadiusMm: plan.cornerRadiusMm,
    ringThicknessMm: plan.ringThicknessMm,
    tileScaleMm: plan.tileScaleMm,
  };
}

export interface StripBuild {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
}

export function buildStripCanvas(
  plan: FramePlan,
  tile: HTMLImageElement,
  vertexDensity: number,
  contentSrcY = 0,
  contentSrcH = 0,
): StripBuild {
  const pxPerMm = vertexDensity * STRIP_SUPERSAMPLE;
  const stripW = Math.max(1, Math.round(plan.perimeterMm * pxPerMm));
  const stripH = Math.max(1, Math.round(plan.ringThicknessMm * pxPerMm));

  const canvas = document.createElement("canvas");
  canvas.width = stripW;
  canvas.height = stripH;
  const ctx = canvas.getContext("2d", { willReadFrequently: false });
  if (!ctx) throw new Error("strip 2d context unavailable");

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, stripW, stripH);

  const srcY = contentSrcH > 0 ? contentSrcY : 0;
  const srcH = contentSrcH > 0 ? contentSrcH : tile.height;

  // Tile is seamless horizontally; drawing N copies side-by-side reproduces the warp-input strip.
  for (let k = 0; k < plan.N; k++) {
    const x = Math.round(k * (stripW / plan.N));
    const nextX = Math.round((k + 1) * (stripW / plan.N));
    ctx.drawImage(tile, 0, srcY, tile.width, srcH, x, 0, nextX - x, stripH);
  }

  return { canvas, width: stripW, height: stripH };
}
