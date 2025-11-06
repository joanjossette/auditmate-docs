import { useState, useEffect, useRef } from "react";
import { Search, X, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import Fuse from "fuse.js";
import { Card } from "@/components/ui/card";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  size?: "default" | "large";
}

interface SearchableDoc {
  title: string;
  path: string;
  description?: string;
  content: string;
}

export function SearchBar({
  placeholder = "Search help articles...",
  onSearch,
  className = "",
  size = "default",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchableDoc[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [, setLocation] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const [fuse, setFuse] = useState<Fuse<SearchableDoc> | null>(null);

  // Initialize Fuse.js with documentation index
  useEffect(() => {
    const loadSearchIndex = async () => {
      const docs: SearchableDoc[] = [
        {
          title: "Getting Started",
          path: "/docs/getting-started",
          description: "Welcome to AuditMate MFG Revision Manager documentation",
          content: "Getting Started Welcome to the AuditMate MFG Revision Manager documentation. This guide will help you get up and running quickly. Overview AuditMate MFG Revision Manager is a web-based platform designed to streamline the way manufacturers and operators manage CNC programs and related documents.",
        },
        {
          title: "Introduction",
          path: "/docs/getting-started/introduction",
          description: "Introduction to AuditMate MFG Revision Manager",
          content: "Introduction Welcome to the AuditMate MFG Revision Manager, a web-based platform designed to streamline the way manufacturers and operators manage CNC programs and related documents. System Overview Store CNC programs securely Organize documents with version control Preview programs before deployment Transfer files to machines Manage user permissions and access",
        },
        {
          title: "Installation Guide",
          path: "/docs/getting-started/installation",
          description: "Step-by-step installation instructions",
          content: "Installation Guide This guide will walk you through the installation process for AuditMate MFG Revision Manager. System Requirements Operating System Windows Server 2016 or later Database PostgreSQL 12 or later Browser Chrome Firefox Edge Network Local network access for machine communication",
        },
        {
          title: "Quick Start",
          path: "/docs/getting-started/quick-start",
          description: "Get up and running with AuditMate in minutes",
          content: "Quick Start Get up and running with AuditMate in minutes. First Login Create a Part Add an Operation Associate a Machine Import Programs Authorize programs CNC programs authorization workflow manufacturing",
        },
        {
          title: "Using the Product",
          path: "/docs/using-the-product",
          description: "Learn how to use AuditMate MFG Revision Manager",
          content: "Using the Product Learn how to use AuditMate MFG Revision Manager for managing your CNC programs through the complete lifecycle. Part Identification Operation Creation Machine Association Program Import Authorization Deployment",
        },
        {
          title: "Part Identification",
          path: "/docs/using-the-product/part-identification",
          description: "Define the parts you'll be manufacturing",
          content: "Part Identification Define the parts you'll be manufacturing in AuditMate. Creating parts part name revision number authorization type manufacturing components CNC machining",
        },
        {
          title: "Machines",
          path: "/docs/machines",
          description: "Configure and manage CNC machines",
          content: "Machines Configure and manage CNC machines in AuditMate MFG Revision Manager. Machine Types Machining centers Lathes Multi-axis mills Configuration Communication settings File transfer protocols",
        },
        {
          title: "Archive",
          path: "/docs/archive",
          description: "Version control, backup, and historical records",
          content: "Archive Manage version control, backup, and access historical records in AuditMate MFG Revision Manager. Document Archive version tracking revision history backup storage compliance audit",
        },
        {
          title: "Contact Information",
          path: "/docs/contact",
          description: "Get in touch with Nexas America support",
          content: "Contact Information Need help? Get in touch with Nexas America support team. Technical Support Email Phone support Nexas America training emergency support",
        },
      ];

      const fuseInstance = new Fuse(docs, {
        keys: [
          { name: "title", weight: 2 },
          { name: "description", weight: 1.5 },
          { name: "content", weight: 1 },
        ],
        threshold: 0.3,
        includeScore: true,
        minMatchCharLength: 2,
      });

      setFuse(fuseInstance);
    };

    loadSearchIndex();
  }, []);

  // Handle clicks outside search results
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);

    if (value.trim() && fuse) {
      const searchResults = fuse.search(value);
      setResults(searchResults.map((result) => result.item));
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
    onSearch?.("");
  };

  const handleResultClick = (path: string) => {
    setLocation(path);
    setQuery("");
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <Search className={`absolute left-4 text-muted-foreground pointer-events-none ${size === "large" ? "top-5 h-5 w-5" : "top-3 h-4 w-4"}`} />
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onFocus={() => query.trim() && setShowResults(true)}
        className={`${size === "large" ? "pl-12 pr-12 py-6 text-base rounded-xl shadow-xl" : "pl-10 pr-10"} w-full`}
        data-testid="input-search"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-clear-search"
        >
          <X className={size === "large" ? "h-5 w-5" : "h-4 w-4"} />
        </button>
      )}

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <Card className="absolute top-full mt-2 w-full max-h-96 overflow-y-auto z-50 shadow-lg">
          <div className="p-2">
            {results.map((result, index) => (
              <button
                key={index}
                onClick={() => handleResultClick(result.path)}
                className="w-full text-left p-3 rounded-md hover-elevate active-elevate-2 transition-colors flex items-start gap-3"
                data-testid={`search-result-${index}`}
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

      {/* No Results Message */}
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
