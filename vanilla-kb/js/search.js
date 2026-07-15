import { docPathToUrl } from "./config.js";

let indexPromise = null;

function loadIndex() {
  if (!indexPromise) {
    indexPromise = fetch("docs/searchIndex.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load search index");
        return res.json();
      })
      .catch((err) => {
        console.error(err);
        return [];
      });
  }
  return indexPromise;
}

function scoreDoc(doc, terms) {
  const title = (doc.title || "").toLowerCase();
  const description = (doc.description || "").toLowerCase();
  const content = (doc.content || "").toLowerCase();
  let score = 0;
  for (const term of terms) {
    if (title.includes(term)) score += 3;
    if (description.includes(term)) score += 2;
    if (content.includes(term)) score += 1;
  }
  return score;
}

async function search(query) {
  const docs = await loadIndex();
  const terms = query.toLowerCase().trim().split(/\s+/).filter((t) => t.length >= 2);
  if (terms.length === 0) return [];

  return docs
    .map((doc) => ({ doc, score: scoreDoc(doc, terms) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ doc }) => doc);
}

/**
 * Renders a self-contained search box (input + results dropdown) into `container`.
 * options.size: "default" | "large"
 */
export function renderSearchBar(container, { placeholder = "Search help articles...", size = "default" } = {}) {
  const large = size === "large";
  container.innerHTML = `
    <div class="relative">
      <i data-lucide="search" class="absolute left-4 ${large ? "top-5" : "top-2.5"} h-4 w-4 text-muted-foreground pointer-events-none"></i>
      <input type="search" autocomplete="off" placeholder="${placeholder}"
        class="w-full border border-border rounded-lg bg-card text-card-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${large ? "pl-12 pr-4 py-4 text-base shadow-md" : "pl-10 pr-4 py-2 text-sm"}"
        data-search-input />
      <div class="search-results" data-search-results hidden></div>
    </div>
  `;
  window.lucide?.createIcons();

  const input = container.querySelector("[data-search-input]");
  const resultsEl = container.querySelector("[data-search-results]");

  function hideResults() {
    resultsEl.hidden = true;
    resultsEl.innerHTML = "";
  }

  function renderResults(docs, query) {
    if (docs.length === 0) {
      resultsEl.innerHTML = `<div class="p-4 text-center text-sm text-muted-foreground">No results found for "${query}"</div>`;
    } else {
      resultsEl.innerHTML = docs
        .map(
          (doc) => `
          <a class="search-result-item hover-elevate" href="${docPathToUrl(doc.path)}">
            <i data-lucide="file-text" class="h-5 w-5 text-primary shrink-0 mt-0.5"></i>
            <span class="flex-1 min-w-0">
              <span class="block font-medium text-sm">${doc.title}</span>
              ${doc.description ? `<span class="block text-xs text-muted-foreground truncate">${doc.description}</span>` : ""}
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
    if (input.value.trim() && resultsEl.innerHTML) resultsEl.hidden = false;
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) hideResults();
  });
}
