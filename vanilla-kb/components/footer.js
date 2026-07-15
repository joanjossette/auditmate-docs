export function renderFooter(container) {
  const year = new Date().getFullYear();
  container.innerHTML = `
    <footer class="w-full border-t border-border bg-background">
      <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div class="text-muted-foreground">© ${year} Nexas America. All rights reserved.</div>
        <a href="mailto:info@nexasamerica.com" class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors rounded px-3 py-2 hover-elevate">
          <i data-lucide="mail" class="h-4 w-4"></i><span>info@nexasamerica.com</span>
        </a>
      </div>
    </footer>
  `;
  window.lucide?.createIcons();
}
