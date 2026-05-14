import { FONT_OPTIONS, type FontOption } from "../types";

let stylesheetInjected = false;
const loadedSpecs = new Set<string>();

function googleHref(): string | null {
  const families = new Map<string, Set<number>>();
  for (const opt of FONT_OPTIONS) {
    if (!opt.google) continue;
    // opt.google is like "Inter:wght@400" or "Merriweather:wght@700".
    const [name, axis] = opt.google.split(":");
    if (!name) continue;
    const weight = axis ? Number(axis.replace(/[^0-9]/g, "")) || 400 : 400;
    if (!families.has(name)) families.set(name, new Set());
    families.get(name)!.add(weight);
  }
  if (families.size === 0) return null;
  const parts: string[] = [];
  for (const [name, weights] of families) {
    const ws = [...weights].sort((a, b) => a - b).join(";");
    parts.push(`family=${encodeURIComponent(name)}:wght@${ws}`);
  }
  return `https://fonts.googleapis.com/css2?${parts.join("&")}&display=swap`;
}

function ensureStylesheet(): void {
  if (stylesheetInjected) return;
  const href = googleHref();
  if (!href) {
    stylesheetInjected = true;
    return;
  }
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
  stylesheetInjected = true;
}

function specFor(family: string, fontPx: number, weight = 400): string {
  return `${weight} ${Math.max(8, Math.round(fontPx))}px ${family}`;
}

async function loadSpec(spec: string): Promise<void> {
  if (loadedSpecs.has(spec)) return;
  if (!("fonts" in document)) {
    loadedSpecs.add(spec);
    return;
  }
  try {
    await document.fonts.load(spec);
  } catch {
    // ignore — fall back to whatever the browser substitutes.
  }
  loadedSpecs.add(spec);
}

function optionsFor(family: string): FontOption[] {
  return FONT_OPTIONS.filter((o) => o.family === family);
}

export function useFontLoader() {
  async function preloadAll(): Promise<void> {
    ensureStylesheet();
    if (!("fonts" in document)) return;
    const probePx = 32;
    await Promise.all(
      FONT_OPTIONS.map((o) => {
        const weight = (o as { weight?: number }).weight ?? 400;
        return loadSpec(specFor(o.family, probePx, weight));
      }),
    );
  }

  async function ensureLoaded(family: string, fontPx: number): Promise<void> {
    ensureStylesheet();
    const opts = optionsFor(family);
    if (opts.length === 0) {
      await loadSpec(specFor(family, fontPx));
      return;
    }
    await Promise.all(
      opts.map((o) => loadSpec(specFor(o.family, fontPx, (o as { weight?: number }).weight ?? 400))),
    );
  }

  return { preloadAll, ensureLoaded };
}
