import { useState, useEffect, useRef } from "react";
import { Search, X, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import Fuse from "fuse.js";
import { Card } from "@/components/ui/card";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  size?: "default" | "large";
}

interface SearchableDoc {
  title: string;
  path: string;
  description?: string;
  content: string; // includes headings like ##, ###
}

export function SearchBar({
  placeholder = "Search help articles...",
  className = "",
  size = "default",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchableDoc[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [, setLocation] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const [fuse, setFuse] = useState<Fuse<SearchableDoc> | null>(null);

  // Fetch search index JSON from public folder
  useEffect(() => {
    const fetchIndex = async () => {
      try {
        const res = await fetch("/docs/searchIndex.json");
        if (!res.ok) throw new Error("Failed to fetch search index");
        const docs: SearchableDoc[] = await res.json();

        // Initialize Fuse.js with title, description, and content (headings included)
        const fuseInstance = new Fuse(docs, {
          keys: [
            { name: "title", weight: 2 },
            { name: "description", weight: 1.5 },
            { name: "content", weight: 1 },
          ],
          threshold: 0.3,
          includeScore: true,
          minMatchCharLength: 2,
          isCaseSensitive: false, // make sure search ignores case
        });

        setFuse(fuseInstance);
      } catch (err) {
        console.error("Failed to load search index:", err);
      }
    };

    fetchIndex();
  }, []);

  // Close search results on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() && fuse) {
      const searchResults = fuse.search(value);
      setResults(searchResults.map((res) => res.item));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
  };

  const handleResultClick = (path: string) => {
    setLocation(path);
    setQuery("");
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <Search
        className={`absolute left-4 text-muted-foreground pointer-events-none ${
          size === "large" ? "top-5 h-5 w-5" : "top-3 h-4 w-4"
        }`}
      />
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onFocus={() => query.trim() && setShowResults(true)}
        className={`${
          size === "large" ? "pl-12 pr-12 py-6 text-base rounded-xl shadow-xl" : "pl-10 pr-10"
        } w-full`}
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className={size === "large" ? "h-5 w-5" : "h-4 w-4"} />
        </button>
      )}

      {/* Search Results */}
      {showResults && results.length > 0 && (
        <Card className="absolute top-full mt-2 w-full max-h-96 overflow-y-auto z-50 shadow-lg">
          <div className="p-2">
            {results.map((result, idx) => (
              <button
                key={idx}
                onClick={() => handleResultClick(result.path)}
                className="w-full text-left p-3 rounded-md hover-elevate active-elevate-2 transition-colors flex items-start gap-3"
              >
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm mb-1">{result.title}</div>
                  {result.description && (
                    <div className="text-xs text-muted-foreground line-clamp-2">
                      {result.description}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </Card>
      )}

      {/* No Results */}
      {showResults && query.trim() && results.length === 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg">
          <div className="p-4 text-center text-sm text-muted-foreground">
            No results found for "{query}"
          </div>
        </Card>
      )}
    </div>
  );
}
