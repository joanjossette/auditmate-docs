// All paths in this project are relative (no leading "/"), so the site
// works whether it's deployed at a domain root or a sub-path like
// username.github.io/repo/ — no config needed either way.

// Converts a React-route-style doc path ("/docs/foo/bar") into the
// markdown file to fetch ("foo/bar.md").
export function docPathToFile(docPath) {
  let file = docPath.replace(/^\/?docs\//, "");
  if (!file.endsWith(".md")) file += ".md";
  return file;
}

// Converts a doc file path ("foo/bar.md") into this site's viewer URL.
export function docFileToUrl(docFile) {
  return `docs.html?doc=${docFile}`;
}

// Rewrites a React-route-style doc path/link into this site's viewer URL.
export function docPathToUrl(docPath) {
  return docFileToUrl(docPathToFile(docPath));
}
