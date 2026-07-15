import { docsStructure, iconGlyphs } from "../js/docs-structure.js";
import { docPathToFile, docFileToUrl } from "../js/config.js";

function isActiveOrAncestor(itemPath, currentFile) {
  const itemFile = docPathToFile(itemPath);
  return itemFile === currentFile || currentFile.startsWith(itemFile.replace(/\.md$/, "") + "/");
}

function renderItem(item, currentFile, level = 0) {
  const hasChildren = item.children && item.children.length > 0;
  const active = isActiveOrAncestor(item.path, currentFile);
  const href = docFileToUrl(docPathToFile(item.path));
  const icon = item.icon && level === 0
    ? `<i data-lucide="${iconGlyphs[item.icon] || ""}" class="h-4 w-4 shrink-0"></i>`
    : "";

  if (!hasChildren) {
    return `
      <a href="${href}" class="sidebar-link ${active ? "active" : "hover-elevate"}">
        ${icon}<span>${item.title}</span>
      </a>
    `;
  }

  const open = active;
  const childrenHtml = item.children.map((child) => renderItem(child, currentFile, level + 1)).join("");

  return `
    <div class="mb-1">
      <div class="flex items-center gap-1 rounded-md ${active ? "sidebar-link active" : "sidebar-link hover-elevate"}" style="padding-right:0.25rem;">
        <a href="${href}" class="flex items-center gap-2 flex-1 no-underline" style="color:inherit;">
          ${icon}<span>${item.title}</span>
        </a>
        <button type="button" class="sidebar-toggle hover-elevate" data-toggle aria-label="Toggle section">
          <i data-lucide="${open ? "chevron-down" : "chevron-right"}" class="h-4 w-4" data-chevron></i>
        </button>
      </div>
      <div class="sidebar-children" data-children ${open ? "" : "hidden"}>
        ${childrenHtml}
      </div>
    </div>
  `;
}

export function renderSidebar(container, currentFile) {
  container.innerHTML = `
    <nav class="space-y-1">
      ${docsStructure.map((item) => renderItem(item, currentFile)).join("")}
    </nav>
  `;
  window.lucide?.createIcons();

  container.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wrapper = btn.closest(".mb-1");
      const childrenEl = wrapper.querySelector("[data-children]");
      const chevronEl = btn.querySelector("[data-chevron]");
      const isHidden = childrenEl.hasAttribute("hidden");
      if (isHidden) {
        childrenEl.removeAttribute("hidden");
        chevronEl.setAttribute("data-lucide", "chevron-down");
      } else {
        childrenEl.setAttribute("hidden", "");
        chevronEl.setAttribute("data-lucide", "chevron-right");
      }
      window.lucide?.createIcons();
    });
  });
}
