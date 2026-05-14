import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export interface ThreePreview {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  resize: (w: number, h: number) => void;
  fitToBox: (box: THREE.Box3, padding?: number) => void;
  start: () => void;
  stop: () => void;
  dispose: () => void;
}

export function createPreview(container: HTMLElement): ThreePreview {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x14171f, 1);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 5000);
  camera.position.set(120, 90, 160);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.target.set(0, 0, 0);

  const ambient = new THREE.AmbientLight(0xffffff, 0.45);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 0.85);
  key.position.set(80, 120, 100);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xb9c4ff, 0.35);
  fill.position.set(-100, 40, -80);
  scene.add(fill);

  const gridSize = 300;
  const grid = new THREE.GridHelper(gridSize, 30, 0x2a2f3d, 0x1a1d27);
  (grid.material as THREE.Material).transparent = true;
  (grid.material as THREE.Material).opacity = 0.6;
  scene.add(grid);

  let running = false;
  let raf = 0;
  const frame = () => {
    if (!running) return;
    raf = requestAnimationFrame(frame);
    controls.update();
    renderer.render(scene, camera);
  };

  function resize(w: number, h: number) {
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    camera.updateProjectionMatrix();
  }

  function fitToBox(box: THREE.Box3, padding = 1.4) {
    if (box.isEmpty()) return;
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = (camera.fov * Math.PI) / 180;
    const dist = (maxDim * padding) / (2 * Math.tan(fov / 2));
    const dir = new THREE.Vector3(0.9, 0.7, 1).normalize();
    camera.position.copy(center).addScaledVector(dir, dist);
    controls.target.copy(center);
    camera.near = Math.max(0.1, dist / 100);
    camera.far = dist * 50;
    camera.updateProjectionMatrix();
    controls.update();
  }

  return {
    renderer,
    scene,
    camera,
    controls,
    resize,
    fitToBox,
    start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    },
    stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    },
    dispose() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    },
  };
}
