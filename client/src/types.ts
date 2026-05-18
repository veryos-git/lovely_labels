//license GPL Jonas Immanuel Frey
export type FrameShape = "none" | "ring" | "roundedRect";

export type SnapDimension = "tileScale" | "cornerRadius" | "width" | "height";

export interface FrameConfig {
  shape: FrameShape;
  tileId: string | null;

  ringOuterDiameterMm: number;

  rectOuterWidthMm: number;
  rectOuterHeightMm: number;
  rectCornerRadiusMm: number;
  rectSnapDimension: SnapDimension;

  ringThicknessMm: number;
  tileScaleMm: number;
  // Scales just the tile width along the perimeter (= tile aspect ratio).
  tileScaleFactor: number;
  // Scales the whole decoration relative to text: band thickness AND tile width
  // together, so each tile gets uniformly bigger/smaller.
  decorationSizeFactor: number;
}

export interface PlateConfig {
  text: string;
  fontFamily: string;
  fontSizeMm: number;
  widthMm: number;
  heightMm: number;
  baseThicknessMm: number;
  embossHeightMm: number;
  cornerRadiusMm: number;
  textPaddingMm: number;
  outerPaddingMm: number;
  vertexDensity: number;
  customImage: HTMLImageElement | null;
  showVertices: boolean;
  showReferenceObject: boolean;
  frame: FrameConfig;
}

export interface MeshStats {
  depthMapWidthPx: number;
  depthMapHeightPx: number;
  vertexCount: number;
  triangleCount: number;
}

export interface FramePlanSummary {
  shape: Exclude<FrameShape, "none">;
  perimeterMm: number;
  tileRepetitions: number;
  ringOuterDiameterMm?: number;
  rectOuterWidthMm?: number;
  rectOuterHeightMm?: number;
  rectCornerRadiusMm?: number;
  ringThicknessMm: number;
  tileScaleMm: number;
}

export interface TileManifestEntry {
  id: string;
  thumb: string;
  naturalWidth: number;
  naturalHeight: number;
  // Largest width the server will return from /api/tile?width=… for this tile.
  // Required widths above this are clamped client-side.
  maxWidth: number;
}
export const FONT_OPTIONS = [
  // System fonts
  { family: "Arial, sans-serif", label: "Arial", google: null },
  { family: '"Times New Roman", serif', label: "Times New Roman", google: null },

  // Sans-serif — Google
  { family: '"Inter", sans-serif', label: "Inter", google: "Inter:wght@400" },
  { family: '"Roboto", sans-serif', label: "Roboto", google: "Roboto:wght@400" },
  { family: '"Open Sans", sans-serif', label: "Open Sans", google: "Open Sans:wght@400" },
  { family: '"Lato", sans-serif', label: "Lato", google: "Lato:wght@400" },
  { family: '"Source Sans 3", sans-serif', label: "Source Sans 3", google: "Source Sans 3:wght@400" },
  { family: '"Fira Sans", sans-serif', label: "Fira Sans", google: "Fira Sans:wght@400" },
  { family: '"Public Sans", sans-serif', label: "Public Sans", google: "Public Sans:wght@400" },
  { family: '"IBM Plex Sans", sans-serif', label: "IBM Plex Sans", google: "IBM Plex Sans:wght@400" },

  // Serif — Google
  { family: '"Merriweather", serif', label: "Merriweather", google: "Merriweather:wght@400" },
  { family: '"IBM Plex Serif", serif', label: "IBM Plex Serif", google: "IBM Plex Serif:wght@400" },

  // Monospace — Google
  { family: '"Fira Code", monospace', label: "Fira Code", google: "Fira Code:wght@400" },
  { family: '"JetBrains Mono", monospace', label: "JetBrains Mono", google: "JetBrains Mono:wght@400" },
  { family: '"IBM Plex Mono", monospace', label: "IBM Plex Mono", google: "IBM Plex Mono:wght@400" },
] as const;

export type FontOption = (typeof FONT_OPTIONS)[number];

// Display shape used by the controls dropdown. Wider than FontOption because
// server-rendered entries are appended at runtime from /api/fonts.
export interface FontDisplayOption {
  family: string;
  label: string;
  google: string | null;
  weight?: number;
  serverRendered?: boolean;
}
