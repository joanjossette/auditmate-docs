// Minimal flat "key: value" frontmatter parser (no need for a full YAML
// parser — every doc in this project only uses flat string fields).
// Shared between the browser doc viewer (js/docs.js) and the search-index
// build script (scripts/build-search-index.mjs) so the two never drift.
export function parseFrontmatter(raw) {
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
