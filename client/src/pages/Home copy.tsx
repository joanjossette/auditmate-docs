import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { TopicCard } from "@/components/TopicCard";
import { topicCards } from "@shared/docs-structure";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-20 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://cdn.document360.io/a268766e-d74d-4619-9613-e2472f809ffb/Images/Documentation/support%20site%20new%20banner.jpg?sv=2022-11-02&spr=https&st=2025-11-06T12%3A00%3A00Z&se=2025-11-06T12%3A15%3A00Z&sr=c&sp=r&sig=Jcz34sO8c%2F%2B%2B5%2BN5tnY6%2Bszzn7dfbO0Vi29mmBLxkhc%3D")',
        }}
      >
        {/* Overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative container px-6 max-w-5xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md" data-testid="text-hero-title">
            AuditMate MFG Revision Manager
          </h1>
          <p
            className="text-xl text-gray-200 mb-12 drop-shadow-sm"
            data-testid="text-hero-subtitle"
          >
            Smart CNC Program Control
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar
              size="large"
              placeholder="Search help articles..."
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      {/* Topic Cards Section */}
      <section className="pb-20">
        <div className="container px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topicCards.map((card) => (
              <TopicCard
                key={card.path}
                title={card.title}
                description={card.description}
                icon={card.icon}
                path={card.path}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
