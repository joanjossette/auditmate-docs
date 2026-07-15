// Regenerates docs/searchIndex.json from the markdown files under docs/.
// Zero npm dependencies (Node built-ins only), consistent with the rest of
// this project — run it with plain `node scripts/build-search-index.mjs`,
// no `npm install` required.
//
// Run this after adding, removing, or editing a doc's title/description/content.

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DOCS_DIR = path.join(ROOT, "docs");
const OUTPUT_FILE = path.join(DOCS_DIR, "searchIndex.json");

// Minimal flat "key: value" frontmatter parser — same approach as
// components/../js/docs.js's parseFrontmatter, kept in sync intentionally.
function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { attributes: {}, body: raw };
  const attributes = {};
  match[1].split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
    attributes[key] = value;
  });
  return { attributes, body: raw.slice(match[0].length) };
}

function stripMarkdown(md) {
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
    .replace(/(`{1,3})(.*?)\1/g, "$2") // inline code or code blocks
    .replace(/[*_~>#+=-]/g, "") // symbols
    .replace(/\n+/g, " "); // newlines -> space
}

async function findMarkdownFiles(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findMarkdownFiles(fullPath, base)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(path.relative(base, fullPath));
    }
  }
  return files;
}

async function buildIndex() {
  const files = await findMarkdownFiles(DOCS_DIR);
  const docs = [];

  for (const file of files) {
    const fullPath = path.join(DOCS_DIR, file);
    const raw = await fs.readFile(fullPath, "utf-8");
    const { attributes, body } = parseFrontmatter(raw);

    const headingMatches = Array.from(body.matchAll(/^#{1,6}\s+(.*)$/gm));
    const headings = headingMatches.map((m) => m[1]);

    const combinedContent = [attributes.description || "", stripMarkdown(body), ...headings].join(" ");

    docs.push({
      title: attributes.title || "",
      description: attributes.description || "",
      path: "/docs/" + file.replace(/\\/g, "/").replace(/\.md$/, ""),
      content: combinedContent,
    });
  }

  // Pricing isn't a markdown doc, so it's added manually for search.
  docs.push({
    title: "Licensing Plans",
    description: "Compare all license plans for AuditMate MFG Revision Manager.",
    path: "/pricing",
    content:
      "Base License, Base + Incoming File Management, Base + Live Monitoring, ExamDiff, production, CNC program management, incoming file manager, live monitoring, Fanuc FOCAS, license, pricing",
  });

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(docs, null, 2), "utf-8");
  console.log(`Search index built: ${path.relative(ROOT, OUTPUT_FILE)} (${docs.length} entries)`);
}

buildIndex();
