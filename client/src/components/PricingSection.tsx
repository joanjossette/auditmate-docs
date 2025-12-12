// src/components/PricingSection.tsx
import React from "react";

interface LicenseCard {
  title: string;
  price: string;
  licenseType: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlight?: boolean;
}

const licenseCards: LicenseCard[] = [
  {
      title: "Production Document Management (Base License)",
      /* price: "Contact Sales", */
      licenseType: "Per machine, minimum 10 machines",
      features: [
          "Full Parts & Operations program management (no Email module)",
          "Comprehensive program archive with automatic versioning",
          "Program change tracking and audit logs",
      ],
      /* ctaText: "Get Base License",
      ctaLink: "#signup-base", */
      ctaText: "Contact Us",
      ctaLink: "/docs/contact",
      price: ""
  },
  {
      title: "Base + Incoming File Management",
      /* price: "Contact Sales", */
      licenseType: "Per machine, must match Base License machine count",
      features: [
          "All Base License features",
          "Incoming File Manager for controlled review of CNC programs",
          "Automatic modification scanning (Scanned & Incoming folders)",
          "Email support for Operations and Server Setup",
          "Includes Examdiff License (for fast revision comparisons)",
      ],
      /* ctaText: "Choose Incoming File Management",
      ctaLink: "#signup-incoming", */
      ctaText: "Contact Us",
      ctaLink: "/docs/contact",
      highlight: true,
      price: ""
  },
  {
      title: "Base + Live Monitoring (Fanuc FOCAS)",
      /* price: "Contact Sales", */
      licenseType: "Per machine, no minimum; choose only machines being monitored",
      features: [
          "All Base License features",
          "Automatic program comparison (Machine vs Record)",
          "Includes Examdiff License (for fast revision comparisons)",
      ],
      /* ctaText: "Choose Live Monitoring", */
      /* ctaLink: "#signup-live-monitoring", */
      ctaText: "Contact Us",
      ctaLink: "/docs/contact",
      price: ""
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">License Plans</h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose the plan that best supports your machine and operational needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {licenseCards.map((card, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between bg-white rounded-xl shadow-md p-6 border ${
                card.highlight ? "border-indigo-600" : "border-gray-200"
              } hover:shadow-lg transition`}
            >
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <div className="text-2xl font-bold mb-4">{card.price}</div>
              <p className="text-sm font-medium text-gray-500 mb-4">
                {card.licenseType}
              </p>
              <ul className="text-left space-y-2 mb-6">
                {card.features.map((feature, i) => (
                  <li
                    key={i}
                    className="before:content-['✔'] before:text-green-600 before:mr-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={card.ctaLink}
                className="mt-auto inline-block bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                {card.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
