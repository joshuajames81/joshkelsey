import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const base = "https://joshkelsey.org";
const APP_DIR = path.join(process.cwd(), "src", "app");

/**
 * Discover every route from the filesystem so the sitemap can never drift out
 * of sync with the app (SEO fix 4). Any `page.*` under src/app becomes a URL;
 * route groups, dynamic segments, private folders, and api are skipped. This
 * automatically includes all church-planting chapters, for-leaders weeks,
 * writing essays, /running, and any future page.
 */
function collectRoutes(dir: string, segments: string[] = [], out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const name = entry.name;
      if (name.startsWith("(") || name.startsWith("[") || name.startsWith("_") || name === "api") continue;
      collectRoutes(path.join(dir, name), [...segments, name], out);
    } else if (entry.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(entry.name)) {
      out.push("/" + segments.join("/"));
    }
  }
  return out;
}

function priorityFor(route: string): number {
  if (route === "/") return 1;
  const depth = route.split("/").filter(Boolean).length;
  const top = route.split("/")[1];
  if (["about", "sermons", "press", "dinner-parties", "church-planting", "writing"].includes(top) && depth === 1) return 0.9;
  if (depth === 1) return 0.8;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = Array.from(new Set(collectRoutes(APP_DIR))).sort((a, b) =>
    a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)
  );
  return routes.map((route) => ({
    url: route === "/" ? base : `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: priorityFor(route),
  }));
}
