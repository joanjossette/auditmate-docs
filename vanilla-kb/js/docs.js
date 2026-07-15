import { renderNavbar } from "../components/navbar.js";
import { renderFooter } from "../components/footer.js";
import { renderSidebar } from "../components/sidebar.js";
import { renderSearchBar } from "./search.js";
import { docPathToUrl } from "./config.js";

renderNavbar(document.getElementById("navbar"));
renderFooter(document.getElementById("footer"));
renderSearchBar(document.getElementById("doc-search"), {
  size: "default",
  placeholder: "Search documentation...",
});

// --- Mobile sidebar toggle ---
const sidebarPanel = document.getElementById("sidebar-panel");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const sidebarToggleBtn = document.getElementById("sidebar-toggle");
sidebarToggleBtn.addEventListener("click", () => {
  if (sidebarPanel.classList.contains("-translate-x-full")) openSidebar();
  else closeSidebar();
});
sidebarOverlay.addEventListener("click", () => closeSidebar());
function openSidebar() {
  sidebarPanel.classList.remove("-translate-x-full");
  sidebarOverlay.hidden = false;
  sidebarToggleBtn.querySelector("[data-lucide], svg")?.setAttribute("data-lucide", "x");
  window.lucide?.createIcons();
}
function closeSidebar() {
  sidebarPanel.classList.add("-translate-x-full");
  sidebarOverlay.hidden = true;
  sidebarToggleBtn.querySelector("[data-lucide], svg")?.setAttribute("data-lucide", "menu");
  window.lucide?.createIcons();
}

// --- Resolve which doc to load from the URL ---
function currentDocFile() {
  const params = new URLSearchParams(window.location.search);
  let file = params.get("doc") || "getting-started.md";
  if (!file.endsWith(".md")) file += ".md";
  // Guard against path traversal / absolute paths in the query param.
  file = file.replace(/^\/+/, "").replace(/\.\.(\/|$)/g, "");
  return file;
}

// --- Minimal frontmatter parser (flat "key: value" pairs only, which is
// all these docs use — no need for a full YAML parser). ---
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

function titleCaseSegment(segment) {
  return segment.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function buildBreadcrumbs(docFile) {
  const parts = docFile.replace(/\.md$/, "").split("/");
  return parts.map((part, i) => {
    const title = titleCaseSegment(part);
    if (i === parts.length - 1) return { title };
    return { title, file: parts.slice(0, i + 1).join("/") + ".md" };
  });
}

function renderBreadcrumbs(container, docFile) {
  const items = buildBreadcrumbs(docFile);
  const crumbs = items
    .map((item) => {
      if (item.file) {
        return `<span class="flex items-center gap-2">
          <i data-lucide="chevron-right" class="h-4 w-4"></i>
          <a href="docs.html?doc=${item.file}" class="hover:text-foreground transition-colors">${item.title}</a>
        </span>`;
      }
      return `<span class="flex items-center gap-2"><i data-lucide="chevron-right" class="h-4 w-4"></i><span class="text-foreground font-medium">${item.title}</span></span>`;
    })
    .join("");

  container.innerHTML = `
    <a href="index.html" class="flex items-center hover:text-foreground transition-colors rounded px-2 py-1 hover-elevate">
      <i data-lucide="home" class="h-4 w-4"></i>
    </a>${crumbs}`;
  window.lucide?.createIcons();
}

function openLightbox(src, alt) {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt || "";
  overlay.appendChild(img);
  overlay.addEventListener("click", () => overlay.remove());
  document.body.appendChild(overlay);
}

function postProcessContent(container) {
  // Rewrite internal doc links ("/docs/foo/bar") to this site's viewer URL.
  container.querySelectorAll('a[href^="/docs/"]').forEach((a) => {
    a.setAttribute("href", docPathToUrl(a.getAttribute("href")));
  });

  // Wrap tables so wide ones scroll instead of breaking layout.
  container.querySelectorAll("table").forEach((table) => {
    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // Resolve relative image paths, apply width/height=NN hints from the
  // markdown title attribute, and wire up click-to-zoom (unless "nozoom").
  container.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src") || "";
    if (src.startsWith("./images/") || src.startsWith("../images/")) {
      img.setAttribute("src", src.replace(/^(\.\.\/|\.\/)/, ""));
    }

    const title = img.getAttribute("title") || "";
    const widthMatch = title.match(/width=(\d+)/);
    const heightMatch = title.match(/height=(\d+)/);
    if (widthMatch) img.style.width = `${widthMatch[1]}px`;
    if (heightMatch) img.style.height = `${heightMatch[1]}px`;

    const noZoom = title.toLowerCase().includes("nozoom");
    img.removeAttribute("title");
    if (!noZoom) {
      img.classList.add("zoomable");
      img.addEventListener("click", () => openLightbox(img.currentSrc || img.src, img.alt));
    }
  });
}

async function loadDoc(file) {
  const contentEl = document.getElementById("doc-content");
  const breadcrumbsEl = document.getElementById("breadcrumbs");
  contentEl.innerHTML = `<p class="text-muted-foreground">Loading documentation…</p>`;

  try {
    const res = await fetch(`docs/${file}`);
    if (!res.ok) throw new Error(`File not found: docs/${file}`);
    const raw = await res.text();
    const { attributes, body } = parseFrontmatter(raw);

    document.title = `${attributes.title || "Documentation"} — AuditMate MFG`;
    contentEl.innerHTML = marked.parse(body);
    postProcessContent(contentEl);
    renderBreadcrumbs(breadcrumbsEl, file);
  } catch (err) {
    console.error("Error loading markdown:", err);
    document.title = "Not Found — AuditMate MFG";
    contentEl.innerHTML = `
      <h1>Documentation Not Found</h1>
      <p>We couldn't find <code>${file}</code>. Try the sidebar navigation or search above.</p>
    `;
    breadcrumbsEl.innerHTML = "";
  }

  window.scrollTo(0, 0);
}

const docFile = currentDocFile();
const sidebarEl = document.getElementById("sidebar");
renderSidebar(sidebarEl, docFile);
sidebarEl.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeSidebar();
});
loadDoc(docFile);
