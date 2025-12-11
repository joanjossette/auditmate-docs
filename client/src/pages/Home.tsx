  import { useState } from "react";
  import { SearchBar } from "@/components/SearchBar";
  import { TopicCard } from "@/components/TopicCard";
  import { topicCards } from "@shared/docs-structure";

  export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query: string) => {
      setSearchQuery(query);
      console.log("Searching for:", query);
    };

    return (
      <div className="w-full">
        <section className="py-20 text-center">
          <div className="container px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold mb-4" data-testid="text-hero-title">
              AuditMate MFG Revision Manager
            </h1>
            <p className="text-xl text-muted-foreground mb-12" data-testid="text-hero-subtitle">
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
