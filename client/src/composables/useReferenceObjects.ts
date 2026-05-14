import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export interface ReferenceDefinition {
  id: string;
  label: string;
  realWorldLengthMm: number;
  gltfUrl: string;
  fallbackColor: number;
  buildFallback: (lengthMm: number, color: number) => THREE.Group;
}

const cache = new Map<string, Promise<THREE.Group>>();

function buildProceduralBanana(lengthMm: number, color: number): THREE.Group {
  const group = new THREE.Group();
  group.name = "reference-banana-fallback";

  const radius = lengthMm * 0.078;
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-lengthMm * 0.5, 0, 0),
    new THREE.Vector3(-lengthMm * 0.25, lengthMm * 0.12, 0),
    new THREE.Vector3(0, lengthMm * 0.16, 0),
    new THREE.Vector3(lengthMm * 0.25, lengthMm * 0.12, 0),
    new THREE.Vector3(lengthMm * 0.5, 0, 0),
  ]);
  const geometry = new THREE.TubeGeometry(curve, 64, radius, 24, false);
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.7,
    metalness: 0.0,
  });
  group.add(new THREE.Mesh(geometry, material));
  return group;
}

export const BANANA: ReferenceDefinition = {
  id: "banana",
  label: "Banana (180 mm)",
  realWorldLengthMm: 180,
  gltfUrl: "/reference/banana.glb",
  fallbackColor: 0xe8d24c,
  buildFallback: buildProceduralBanana,
};

function normalizeToLength(group: THREE.Group, targetLengthMm: number): void {
  // GLB models arrive in arbitrary units; rescale so the model's bounding-box
  // long axis matches the real-world length declared by the reference.
  const box = new THREE.Box3().setFromObject(group);
  const size = new THREE.Vector3();
  box.getSize(size);
  const longest = Math.max(size.x, size.y, size.z);
  if (longest <= 0) return;
  const scale = targetLengthMm / longest;
  group.scale.multiplyScalar(scale);
}

function alignLongAxisToX(group: THREE.Group): void {
  const box = new THREE.Box3().setFromObject(group);
  const size = new THREE.Vector3();
  box.getSize(size);
  // If the longest axis isn't X, rotate so it becomes X — keeps positioning
  // logic in callers uniform regardless of how the GLB was authored.
  if (size.y > size.x && size.y > size.z) {
    group.rotation.z = -Math.PI / 2;
  } else if (size.z > size.x && size.z > size.y) {
    group.rotation.y = Math.PI / 2;
  }
}

function dropToGround(group: THREE.Group): void {
  const box = new THREE.Box3().setFromObject(group);
  group.position.z -= box.min.z;
}

async function loadGltf(url: string): Promise<THREE.Group | null> {
  return new Promise((resolve) => {
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => resolve(gltf.scene),
      undefined,
      () => resolve(null),
    );
  });
}

export async function loadReferenceObject(def: ReferenceDefinition): Promise<THREE.Group> {
  const cached = cache.get(def.id);
  if (cached) return cached.then((g) => g.clone(true));
  const p = (async () => {
    const loaded = await loadGltf(def.gltfUrl);
    let group: THREE.Group;
    if (loaded) {
      group = new THREE.Group();
      group.add(loaded);
      alignLongAxisToX(group);
      normalizeToLength(group, def.realWorldLengthMm);
    } else {
      group = def.buildFallback(def.realWorldLengthMm, def.fallbackColor);
    }
    dropToGround(group);
    group.name = `reference-${def.id}`;
    return group;
  })();
  cache.set(def.id, p);
  return p.then((g) => g.clone(true));
}

export function disposeReference(group: THREE.Group): void {
  group.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      const m = obj as THREE.Mesh;
      m.geometry?.dispose();
      const mat = m.material;
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else mat?.dispose();
    }
  });
}
