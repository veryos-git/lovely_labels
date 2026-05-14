import * as THREE from "three";
import type { PlateConfig, MeshStats } from "../types";
import { brightnessAt, type DepthMap } from "./useDepthMap";

export interface MeshResult {
  geometry: THREE.BufferGeometry;
  stats: MeshStats;
}

interface BoundaryProjection {
  inside: boolean;
  x: number;
  y: number;
}

function projectToRoundedRect(
  x: number,
  y: number,
  W: number,
  H: number,
  r: number,
): BoundaryProjection {
  if (r <= 0) {
    const inside = x >= 0 && x <= W && y >= 0 && y <= H;
    return { inside, x, y };
  }
  const cx = Math.max(r, Math.min(W - r, x));
  const cy = Math.max(r, Math.min(H - r, y));
  const dx = x - cx;
  const dy = y - cy;
  const d = Math.hypot(dx, dy);
  if (d <= r) return { inside: true, x, y };
  return { inside: false, x: cx + (r * dx) / d, y: cy + (r * dy) / d };
}

export function buildMesh(cfg: PlateConfig, map: DepthMap): MeshResult {
  const nx = map.width;
  const ny = map.height;
  const W = cfg.widthMm;
  const H = cfg.heightMm;
  const baseZ = cfg.baseThicknessMm;
  const emboss = cfg.embossHeightMm;
  const r = Math.max(0, Math.min(cfg.cornerRadiusMm, Math.min(W, H) * 0.5));
  const rounded = r > 0;

  const dx = W / (nx - 1);
  const dy = H / (ny - 1);

  const topCount = nx * ny;

  const outerRing: number[] = [];
  if (rounded) {
    for (let i = 0; i < nx; i++) outerRing.push(i);
    for (let j = 1; j < ny; j++) outerRing.push(j * nx + (nx - 1));
    for (let i = nx - 2; i >= 0; i--) outerRing.push((ny - 1) * nx + i);
    for (let j = ny - 2; j >= 1; j--) outerRing.push(j * nx);
  }

  const totalVerts = rounded ? topCount + outerRing.length : topCount + 4;
  const positions = new Float32Array(totalVerts * 3);

  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      const idx = (j * nx + i) * 3;
      const x = i * dx;
      const y = j * dy;
      const proj = projectToRoundedRect(x, y, W, H, r);
      if (proj.inside) {
        const b = brightnessAt(map, i, j);
        positions[idx] = x;
        positions[idx + 1] = y;
        positions[idx + 2] = baseZ + b * emboss;
      } else {
        positions[idx] = proj.x;
        positions[idx + 1] = proj.y;
        positions[idx + 2] = baseZ;
      }
    }
  }

  let BL = 0, BR = 0, TR_b = 0, TL_b = 0;
  if (!rounded) {
    BL = topCount + 0;
    BR = topCount + 1;
    TR_b = topCount + 2;
    TL_b = topCount + 3;
    positions[BL * 3 + 0] = 0;   positions[BL * 3 + 1] = 0; positions[BL * 3 + 2] = 0;
    positions[BR * 3 + 0] = W;   positions[BR * 3 + 1] = 0; positions[BR * 3 + 2] = 0;
    positions[TR_b * 3 + 0] = W; positions[TR_b * 3 + 1] = H; positions[TR_b * 3 + 2] = 0;
    positions[TL_b * 3 + 0] = 0; positions[TL_b * 3 + 1] = H; positions[TL_b * 3 + 2] = 0;
  } else {
    for (let k = 0; k < outerRing.length; k++) {
      const topIdx3 = outerRing[k] * 3;
      const botIdx3 = (topCount + k) * 3;
      positions[botIdx3 + 0] = positions[topIdx3 + 0];
      positions[botIdx3 + 1] = positions[topIdx3 + 1];
      positions[botIdx3 + 2] = 0;
    }
  }

  const topTris = 2 * (nx - 1) * (ny - 1);
  let wallTris: number;
  let bottomTris: number;
  if (rounded) {
    wallTris = 2 * outerRing.length;
    bottomTris = outerRing.length - 2;
  } else {
    const wallEdgeLenX = nx;
    const wallEdgeLenY = ny;
    wallTris = 2 * ((wallEdgeLenX - 1) + (wallEdgeLenY - 1)) + 4;
    bottomTris = 2;
  }
  const totalTris = topTris + wallTris + bottomTris;

  const indices = new Uint32Array(totalTris * 3);
  let p = 0;

  const topIdx = (i: number, j: number) => j * nx + i;

  for (let j = 0; j < ny - 1; j++) {
    for (let i = 0; i < nx - 1; i++) {
      const v00 = topIdx(i, j);
      const v10 = topIdx(i + 1, j);
      const v01 = topIdx(i, j + 1);
      const v11 = topIdx(i + 1, j + 1);
      indices[p++] = v00; indices[p++] = v10; indices[p++] = v11;
      indices[p++] = v00; indices[p++] = v11; indices[p++] = v01;
    }
  }

  if (rounded) {
    const n = outerRing.length;
    for (let k = 0; k < n; k++) {
      const kn = (k + 1) % n;
      const tA = outerRing[k];
      const tB = outerRing[kn];
      const bA = topCount + k;
      const bB = topCount + kn;
      indices[p++] = tA; indices[p++] = bA; indices[p++] = bB;
      indices[p++] = tA; indices[p++] = bB; indices[p++] = tB;
    }
    const b0 = topCount;
    for (let k = 1; k < n - 1; k++) {
      const bA = topCount + k;
      const bB = topCount + k + 1;
      indices[p++] = b0; indices[p++] = bB; indices[p++] = bA;
    }
  } else {
    const stitch = (top: number[], b0: number, b1: number) => {
      for (let k = 0; k < top.length - 1; k++) {
        indices[p++] = b0; indices[p++] = top[k + 1]; indices[p++] = top[k];
      }
      indices[p++] = b0; indices[p++] = b1; indices[p++] = top[top.length - 1];
    };

    const front: number[] = [];
    for (let i = 0; i < nx; i++) front.push(topIdx(i, 0));
    stitch(front, BL, BR);

    const right: number[] = [];
    for (let j = 0; j < ny; j++) right.push(topIdx(nx - 1, j));
    stitch(right, BR, TR_b);

    const back: number[] = [];
    for (let i = nx - 1; i >= 0; i--) back.push(topIdx(i, ny - 1));
    stitch(back, TR_b, TL_b);

    const left: number[] = [];
    for (let j = ny - 1; j >= 0; j--) left.push(topIdx(0, j));
    stitch(left, TL_b, BL);

    indices[p++] = BL; indices[p++] = TL_b; indices[p++] = TR_b;
    indices[p++] = BL; indices[p++] = TR_b; indices[p++] = BR;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeVertexNormals();

  const stats: MeshStats = {
    depthMapWidthPx: nx,
    depthMapHeightPx: ny,
    vertexCount: totalVerts,
    triangleCount: totalTris,
  };

  return { geometry, stats };
}
