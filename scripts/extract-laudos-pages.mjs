import { mkdir, readFile, writeFile } from "node:fs/promises";

const ROOT = "https://www.laudos.ai";
const URLS_FILE = "docs/research/laudos.ai/sitemap-urls.txt";
const OUT_TS = "src/app/laudos-pages-data.ts";
const OUT_JSON = "docs/research/laudos.ai/extracted-pages.json";

const sitemapGroups = {
  pages: "Institucional",
  modalidades: "Modalidades",
  glossario: "Glossário",
  classificacoes: "Classificações",
  guias: "Guias",
  comparacoes: "Comparações",
  solucoes: "Soluções",
  integracoes: "Integrações",
  blog: "Blog",
  templates: "Templates",
};

function decodeHtml(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/…/g, "...");
}

function decodeJsString(value) {
  try {
    return JSON.parse(`"${value}"`);
  } catch {
    return value.replace(/\\"/g, '"').replace(/\\n/g, "\n").replace(/\\u0026/g, "&");
  }
}

function cleanText(value) {
  return decodeHtml(value)
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function getMeta(html, name) {
  const byName = html.match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, "i"));
  if (byName) return cleanText(byName[1]);
  const byProp = html.match(new RegExp(`<meta[^>]+property=["']${name}["'][^>]+content=["']([^"']*)["']`, "i"));
  return byProp ? cleanText(byProp[1]) : "";
}

function getTitle(html, url) {
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
  if (title) return cleanText(title);
  return url.replace(`${ROOT}/`, "").replace(/-/g, " ") || "Laudos.AI";
}

function slugForUrl(url) {
  const pathname = new URL(url).pathname.replace(/^\/|\/$/g, "");
  return pathname || "";
}

function titleFromSlug(slug) {
  const last = slug.split("/").filter(Boolean).pop() || "Laudos.AI";
  return last
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function groupForSlug(slug) {
  const first = slug.split("/")[0] || "pages";
  if (first === "en" || first === "es") return first.toUpperCase();
  if (first === "laudo") return "Laudos";
  if (first === "produto") return "Produto";
  return sitemapGroups[first] || "Institucional";
}

function extractStrings(html) {
  const strings = [];
  const seen = new Set();
  const push = (raw) => {
    const text = cleanText(raw);
    if (!text || seen.has(text)) return;
    seen.add(text);
    strings.push(text);
  };

  const childrenRe = /\\\"(?:children|content|alt|title|description)\\\":\\\"((?:\\\\.|[^\\"])*)\\\"/g;
  for (const match of html.matchAll(childrenRe)) push(decodeJsString(match[1]));

  const metaDesc = getMeta(html, "description") || getMeta(html, "og:description");
  if (metaDesc) push(metaDesc);

  return strings.filter((text) => {
    if (text.startsWith("$")) return false;
    if (/^https?:\/\//.test(text)) return false;
    if (/^\/[a-z0-9/-]*$/i.test(text)) return false;
    if (/static\/chunks|_next\/static|dpl_/.test(text)) return false;
    if (/^[A-Z0-9]{1,6}$/.test(text)) return false;
    if (/^[0-9]+$/.test(text)) return false;
    if (text.length < 18) return false;
    return true;
  });
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 sitemap extraction for Laudos.AI static mirror",
      accept: "text/html,application/xhtml+xml",
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let index = 0;
  async function run() {
    while (index < items.length) {
      const current = index++;
      results[current] = await worker(items[current], current);
    }
  }
  await Promise.all(Array.from({ length: limit }, run));
  return results;
}

const urls = (await readFile(URLS_FILE, "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

console.log(`Extracting ${urls.length} Laudos.AI pages...`);

const rawPages = await mapLimit(urls, 8, async (url, index) => {
  process.stdout.write(`${index + 1}/${urls.length} ${url}\n`);
  const html = await fetchHtml(url);
  const slug = slugForUrl(url);
  const title = getTitle(html, url);
  const description = getMeta(html, "description") || getMeta(html, "og:description");
  const strings = extractStrings(html);
  return {
    url,
    slug,
    group: groupForSlug(slug),
    title: title || titleFromSlug(slug),
    description: description || strings.find((text) => text.length > 60) || titleFromSlug(slug),
    strings,
  };
});

const frequency = new Map();
for (const page of rawPages) {
  for (const text of page.strings) {
    frequency.set(text, (frequency.get(text) || 0) + 1);
  }
}

const pages = rawPages.map((page) => {
  const unique = page.strings.filter((text) => frequency.get(text) <= 24);
  const fallback = page.strings.filter((text) => frequency.get(text) <= 80);
  const body = (unique.length >= 5 ? unique : fallback.length >= 5 ? fallback : page.strings)
    .filter((text) => text !== page.title && text !== page.description)
    .slice(0, page.slug.startsWith("templates/") ? 42 : 28);

  return {
    slug: page.slug,
    path: `/${page.slug}`,
    url: page.url,
    group: page.group,
    title: page.title,
    description: page.description,
    body,
  };
});

const data = { generatedAt: new Date().toISOString(), source: ROOT, total: pages.length, pages };

await mkdir("docs/research/laudos.ai", { recursive: true });
await writeFile(OUT_JSON, `${JSON.stringify(data, null, 2)}\n`);

const ts = `// Generated from ${ROOT}/sitemap.xml by scripts/extract-laudos-pages.mjs.\n` +
  `// Do not hand-edit page entries; rerun the extractor when the source sitemap changes.\n\n` +
  `export type LaudosPageData = {\n` +
  `  slug: string;\n  path: string;\n  url: string;\n  group: string;\n  title: string;\n  description: string;\n  body: string[];\n};\n\n` +
  `export const LAUDOS_SITEMAP_SOURCE = ${JSON.stringify(ROOT)};\n` +
  `export const LAUDOS_SITEMAP_GENERATED_AT = ${JSON.stringify(data.generatedAt)};\n` +
  `export const LAUDOS_PAGES = ${JSON.stringify(pages, null, 2)} as const satisfies readonly LaudosPageData[];\n`;

await writeFile(OUT_TS, ts);

console.log(`Wrote ${OUT_TS} and ${OUT_JSON}`);
