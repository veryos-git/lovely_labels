# Lovely Labels

Browser-side generator for 3D-printable name plates. Rasterizes text (or an uploaded image) into a greyscale depth map, displaces a mesh from it, optionally wraps a decorative tile-based frame around it, and exports binary STL.

## Stack
- **Server:** Deno static file host (`server.ts`). No DB, no auth.
- **Client:** Vue 3 (`<script setup>`) + Vite + three.js.
- Depth-map compositing runs in a small WebGL2 fragment shader (`useGLDepthRenderer.ts`); mesh + STL export are pure JS.

## Run

```bash
deno task install        # one-time: cd client && npm install
deno task dev            # vite dev server (recommended while iterating)
deno task build          # vue-tsc + vite build → client/dist
deno task serve          # serve client/dist + /api/* via server.ts
deno task start          # build + serve
```

While iterating, run `deno task serve` in one terminal and `deno task dev` in another — Vite proxies `/api/*` to `localhost:8080`, so the server-font endpoints are reachable from the dev frontend.

## Server-rendered fonts

Drop `.ttf` or `.otf` files anywhere under `fonts/` (subdirectories OK). The server scans the tree on first request and exposes each file as a dropdown entry; the client renders text by fetching `GET /api/text?text=…&font=<id>&fontPx=…`, which shells out to ImageMagick. Font files are gitignored and never bundled into `client/dist`, so licensed fonts stay on the server.

## Tile assets

The decorative frame samples horizontally-seamless greyscale tiles. Drop source `.tif` files into `tiffs/` (or `horizontal_tiles/` for older checkouts) and run:

```bash
deno task build-tiles    # requires `magick` (ImageMagick) on PATH
```

The build emits two things:

- `tile_masters/<id>.png` — 2048 px server-only greyscale masters. **Not shipped to the client.** Resized copies are served on demand via `GET /api/tile/<id>?width=<bucket>`, where `<bucket>` is one of `128, 256, 512, 1024, 2048`. The client snaps the bucket up from the resolution it actually needs for the current `tileScaleMm × vertexDensity`.
- `client/public/tiles/<id>.thumb.png` — ≤64 px thumbnails used by the tile picker grid, plus `manifest.json` listing every tile.

## Reference object

The 3D preview can show a 180 mm banana as a scale reference (toggle in the Debug section). Drop a CC0 low-poly banana at `client/public/reference/banana.glb` for the real model; otherwise the renderer falls back to a procedural curved-tube stand-in.

## Layout

```
client/
  index.html
  vite.config.ts
  tsconfig*.json
  package.json
  public/
    tiles/              # manifest.json + tile PNGs (build output)
    reference/          # optional banana.glb
  src/
    main.ts
    App.vue
    types.ts
    components/         # UI panels
    composables/        # depth-map / mesh / WebGL / layout / STL helpers
deno.json
server.ts
scripts/build_tiles.ts
horizontal_tiles/       # source .tif tiles (gitignored output goes to client/public/tiles)
```
