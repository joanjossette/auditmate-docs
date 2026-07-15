import { docPathToUrl } from "../js/config.js";

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const preferred = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(preferred);
  return preferred;
}

export function renderNavbar(container) {
  container.innerHTML = `
    <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div class="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
        <a href="index.html" class="flex items-center gap-2 rounded-md px-3 py-2 -ml-3 hover-elevate">
          <img src="images/Auditmate-MFG-LOGO-Transparent-uBRzJ2xf.png" alt="AuditMate MFG" class="h-14 w-auto" />
        </a>
        <div class="flex items-center gap-5 text-sm">
          <a href="${docPathToUrl("/docs/contact")}" class="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
          <a href="pricing.html" class="text-muted-foreground hover:text-foreground transition-colors">Licensing Plans</a>
          <button id="theme-toggle" type="button" aria-label="Toggle theme"
            class="inline-flex items-center justify-center h-9 w-9 rounded-md border border-transparent hover-elevate active-elevate-2">
            <i id="theme-toggle-icon" class="h-5 w-5"></i>
          </button>
        </div>
      </div>
    </header>
  `;

  const iconEl = container.querySelector("#theme-toggle-icon");
  const setIcon = (theme) => {
    // Lucide replaces the element outright, so re-query it by id each time.
    const el = container.querySelector("#theme-toggle-icon");
    el.setAttribute("data-lucide", theme === "light" ? "moon" : "sun");
    el.removeAttribute("class"); // drop the svg lucide leaves behind from a prior render
    el.id = "theme-toggle-icon";
    el.classList.add("h-5", "w-5");
    window.lucide?.createIcons();
  };

  setIcon(initTheme());

  container.querySelector("#theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
    setIcon(next);
  });
}
