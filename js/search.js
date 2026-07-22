import { docPathToUrl } from "./config.js";

let fusePromise = null;
let instanceCounter = 0;
const MAX_RESULTS = 8;

// Same Fuse.js version and config as the React app's SearchBar.tsx, so
// ranking behavior matches instead of approximating it with ad-hoc scoring.
function loadFuse() {
  if (!fusePromise) {
    fusePromise = fetch("docs/searchIndex.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load search index");
        return res.json();
      })
      .then(
        (docs) =>
          new Fuse(docs, {
            keys: [
              { name: "title", weight: 2 },
              { name: "description", weight: 1.5 },
              { name: "content", weight: 1 },
            ],
            threshold: 0.3,
            includeScore: true,
            minMatchCharLength: 2,
            isCaseSensitive: false,
          })
      )
      .catch((err) => {
        console.error(err);
        return null;
      });
  }
  return fusePromise;
}

async function search(query) {
  const fuse = await loadFuse();
  if (!fuse || !query.trim()) return [];
  return fuse
    .search(query)
    .slice(0, MAX_RESULTS)
    .map((result) => result.item);
}

function escapeHtml(str) {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(str).replace(/[&<>"']/g, (c) => map[c]);
}

/**
 * Renders a self-contained search box (input + results dropdown) into `container`.
 * options.size: "default" | "large"
 */
export function renderSearchBar(container, { placeholder = "Search help articles...", size = "default" } = {}) {
  const large = size === "large";
  const listboxId = `search-results-${++instanceCounter}`;
  container.innerHTML = `
    <div class="relative">
      <i data-lucide="search" class="absolute left-4 ${large ? "top-5" : "top-2.5"} h-4 w-4 text-muted-foreground pointer-events-none"></i>
      <input type="search" autocomplete="off" placeholder="${placeholder}"
        class="w-full border border-border rounded-lg bg-card text-card-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${large ? "pl-12 pr-4 py-4 text-base shadow-md" : "pl-10 pr-4 py-2 text-sm"}"
        role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="${listboxId}"
        data-search-input />
      <div class="search-results" id="${listboxId}" role="listbox" data-search-results hidden></div>
    </div>
  `;
  window.lucide?.createIcons();

  const input = container.querySelector("[data-search-input]");
  const resultsEl = container.querySelector("[data-search-results]");

  let currentDocs = [];
  let activeIndex = -1;

  function hideResults() {
    resultsEl.hidden = true;
    resultsEl.innerHTML = "";
    currentDocs = [];
    activeIndex = -1;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
  }

  function setActiveIndex(index) {
    const options = resultsEl.querySelectorAll(".search-result-item");
    if (!options.length) return;
    activeIndex = (index + options.length) % options.length;
    options.forEach((el, i) => {
      const active = i === activeIndex;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-selected", String(active));
      if (active) {
        input.setAttribute("aria-activedescendant", el.id);
        el.scrollIntoView({ block: "nearest" });
      }
    });
  }

  function renderResults(docs, query) {
    currentDocs = docs;
    activeIndex = -1;
    input.setAttribute("aria-expanded", "true");
    input.removeAttribute("aria-activedescendant");

    if (docs.length === 0) {
      resultsEl.innerHTML = `<div class="p-4 text-center text-sm text-muted-foreground">No results found for "${escapeHtml(query)}"</div>`;
    } else {
      resultsEl.innerHTML = docs
        .map(
          (doc, i) => `
          <a class="search-result-item hover-elevate" id="${listboxId}-option-${i}" role="option" aria-selected="false" href="${docPathToUrl(doc.path)}">
            <i data-lucide="file-text" class="h-5 w-5 text-primary shrink-0 mt-0.5"></i>
            <span class="flex-1 min-w-0">
              <span class="block font-medium text-sm">${escapeHtml(doc.title)}</span>
              ${doc.description ? `<span class="block text-xs text-muted-foreground line-clamp-2">${escapeHtml(doc.description)}</span>` : ""}
            </span>
          </a>`
        )
        .join("");
      window.lucide?.createIcons();
    }
    resultsEl.hidden = false;
  }

  let debounceTimer;
  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    const query = input.value;
    if (!query.trim()) {
      hideResults();
      return;
    }
    debounceTimer = setTimeout(async () => {
      const docs = await search(query);
      renderResults(docs, query);
    }, 120);
  });

  input.addEventListener("focus", () => {
    if (input.value.trim() && resultsEl.innerHTML) {
      resultsEl.hidden = false;
      input.setAttribute("aria-expanded", "true");
    }
  });

  input.addEventListener("keydown", (e) => {
    if (resultsEl.hidden || currentDocs.length === 0) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex(activeIndex + 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex(activeIndex - 1);
        break;
      case "Enter":
        if (activeIndex >= 0 && currentDocs[activeIndex]) {
          e.preventDefault();
          window.location.href = docPathToUrl(currentDocs[activeIndex].path);
        }
        break;
      case "Escape":
        hideResults();
        break;
    }
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) hideResults();
  });
}
