import * as THREE from "three";
import { STLExporter } from "three/addons/exporters/STLExporter.js";

export function sanitizeFilename(s: string): string {
  const cleaned = s.replace(/[^a-zA-Z0-9_\- ]+/g, "").trim().replace(/\s+/g, "_");
  return cleaned || "nameplate";
}

export function exportSTL(geometry: THREE.BufferGeometry, name: string): void {
  const exporter = new STLExporter();
  // Pre-rotate so the model imports into the slicer in the user's preferred
  // orientation without manual fixup (90° around X, then 90° around Z).
  const rotated = geometry.clone();
  rotated.rotateX(Math.PI / 2);
  rotated.rotateZ(Math.PI / 2);
  const mesh = new THREE.Mesh(rotated);
  const data = exporter.parse(mesh, { binary: true }) as unknown as DataView;
  const buffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
  const blob = new Blob([buffer], { type: "model/stl" });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${sanitizeFilename(name)}.stl`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  rotated.dispose();
}
