import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import matter from "gray-matter";

// Simple markdown stripping
function stripMarkdown(md) {
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // links
    .replace(/(`{1,3})(.*?)\1/g, "$2") // inline code or code blocks
    .replace(/[*_~>#+=-]/g, "") // symbols
    .replace(/\n+/g, " "); // newlines -> space
}

const DOCS_DIR = path.join("client", "public", "docs");
const OUTPUT_FILE = path.join(DOCS_DIR, "searchIndex.json");

async function buildIndex() {
  const files = glob.sync("**/*.md", { cwd: DOCS_DIR });
  const docs = [];

  for (const file of files) {
    const fullPath = path.join(DOCS_DIR, file);
    const raw = await fs.readFile(fullPath, "utf-8");
    const { data, content } = matter(raw);

    // Extract headings (#, ##, ###) as extra searchable content
    const headingMatches = Array.from(content.matchAll(/^#{1,6}\s+(.*)$/gm));
    const headings = headingMatches.map((m) => m[1]);

    // Combine description + stripped content + headings
    const combinedContent = [
      data.description || "",
      stripMarkdown(content),
      ...headings,
    ].join(" ");

    docs.push({
      title: data.title || "",
      description: data.description || "",
      path: "/docs/" + file.replace(/\\/g, "/").replace(/\.md$/, ""),
      content: combinedContent,
    });
  }

  // Add Pricing page manually for search
  docs.push({
    title: "Licensing Plans",
    description:
      "Compare all license plans for AuditMate MFG Revision Manager.",
    path: "/pricing",
    content:
      "Base License, Base + Incoming File Management, Base + Live Monitoring, ExamDiff, production, CNC program management, incoming file manager, live monitoring, Fanuc FOCAS, license, pricing",
  });

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(docs, null, 2), "utf-8");
  console.log(`✅ Search index built: ${OUTPUT_FILE}`);
}

buildIndex();
