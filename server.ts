// Minimal Deno static-file server for the Vite build output. Serves
// client/dist/ + falls back to index.html for client-side routing.

const ROOT = new URL("./client/dist/", import.meta.url);
const PORT = Number(Deno.env.get("PORT") ?? 8080);

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".wasm": "application/wasm",
  ".stl": "model/stl",
};

function mimeFor(path: string): string {
  const dot = path.lastIndexOf(".");
  if (dot < 0) return "application/octet-stream";
  return MIME[path.slice(dot).toLowerCase()] ?? "application/octet-stream";
}

async function serveFile(url: URL): Promise<Response | null> {
  try {
    const data = await Deno.readFile(url);
    return new Response(data, {
      headers: { "content-type": mimeFor(url.pathname) },
    });
  } catch {
    return null;
  }
}

Deno.serve({ port: PORT }, async (req) => {
  const url = new URL(req.url);
  let path = decodeURIComponent(url.pathname);
  if (path.endsWith("/")) path += "index.html";

  const target = new URL("." + path, ROOT);
  const resp = await serveFile(target);
  if (resp) return resp;

  // SPA fallback to index.html
  const fallback = await serveFile(new URL("./index.html", ROOT));
  if (fallback) return fallback;
  return new Response("Not found", { status: 404 });
});

console.log(`Serving ${ROOT.pathname} on http://localhost:${PORT}`);
