import { renderNavbar } from "../components/navbar.js";
import { renderFooter } from "../components/footer.js";
import { docPathToUrl } from "./config.js";

renderNavbar(document.getElementById("navbar"));
renderFooter(document.getElementById("footer"));

const licenseCards = [
  {
    title: "Production Document Management (Base License)",
    licenseType: "Per machine, minimum 10 machines",
    features: [
      "Full Parts & Operations Program Management (no Email module)",
      "Comprehensive Program Archive With Automatic Versioning",
      "Program Revision Tracking and Audit Logs",
    ],
    ctaText: "Contact Us",
    ctaLink: docPathToUrl("/docs/contact"),
  },
  {
    title: "Base + Incoming File Management",
    licenseType: "Per machine, must match Base License machine count",
    features: [
      "All Base License features",
      "Incoming File Manager for controlled review of CNC programs",
      "Email support for Operations and Server Setup",
      "Includes Examdiff License (for fast revision comparisons)",
    ],
    ctaText: "Contact Us",
    ctaLink: docPathToUrl("/docs/contact"),
    highlight: true,
  },
  {
    title: "Base + Live Monitoring (Fanuc FOCAS)",
    licenseType: "Per machine, no minimum; choose only machines being monitored",
    features: [
      "All Base License features",
      "Automatic File Modification Scanning",
      "Includes Examdiff License (for fast revision comparisons)",
    ],
    ctaText: "Contact Us",
    ctaLink: docPathToUrl("/docs/contact"),
  },
];

document.getElementById("pricing-cards").innerHTML = licenseCards
  .map(
    (card) => `
    <div class="flex flex-col justify-between h-full rounded-lg border ${
      card.highlight ? "border-primary" : "border-card-border"
    } bg-card text-card-foreground shadow-sm p-6 text-left">
      <h3 class="text-xl font-semibold mb-3">${card.title}</h3>
      <p class="text-sm font-medium text-muted-foreground mb-4">${card.licenseType}</p>
      <ul class="space-y-2 mb-6">
        ${card.features
          .map(
            (feature) => `
          <li class="flex gap-2">
            <i data-lucide="check" class="h-5 w-5 text-primary shrink-0"></i>
            <span>${feature}</span>
          </li>`
          )
          .join("")}
      </ul>
      <a href="${card.ctaLink}"
        class="mt-auto inline-block text-center bg-primary text-primary-foreground font-semibold py-3 rounded-md hover-elevate active-elevate-2 transition-colors">
        ${card.ctaText}
      </a>
    </div>`
  )
  .join("");

window.lucide?.createIcons();
