import { renderNavbar } from "../components/navbar.js";
import { renderFooter } from "../components/footer.js";
import { renderSearchBar } from "./search.js";
import { topicCards, iconGlyphs } from "./docs-structure.js";
import { docPathToUrl } from "./config.js";

renderNavbar(document.getElementById("navbar"));
renderFooter(document.getElementById("footer"));
renderSearchBar(document.getElementById("home-search"), {
  size: "large",
  placeholder: "Search help articles...",
});

document.getElementById("topic-cards").innerHTML = topicCards
  .map(
    (card) => `
    <a href="${docPathToUrl(card.path)}" class="block h-full rounded-lg border border-card-border bg-card text-card-foreground shadow-sm p-6 hover-elevate active-elevate-2 transition-colors">
      <div class="mb-4 text-primary"><i data-lucide="${iconGlyphs[card.icon] || "file-text"}" class="h-9 w-9"></i></div>
      <h3 class="text-xl font-semibold mb-2">${card.title}</h3>
      <p class="text-muted-foreground text-sm mb-4 leading-relaxed">${card.description}</p>
      <div class="flex items-center text-primary text-sm font-medium">
        <span>Learn more</span><i data-lucide="chevron-right" class="h-4 w-4 ml-1"></i>
      </div>
    </a>`
  )
  .join("");

window.lucide?.createIcons();
