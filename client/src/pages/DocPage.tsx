import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { Menu, X } from "lucide-react";
import { DocsSidebar } from "@/components/DocsSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MarkdownContent } from "@/components/MarkdownContent";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import matter from "gray-matter";
import fm from "front-matter";

interface DocMetadata {
  title: string;
  description?: string;
  category?: string;
}

interface DocData {
  title: string;
  content: string;
  breadcrumbs: { title: string; path?: string }[];
  metadata?: DocMetadata;
}

// Helper function to generate breadcrumbs from path
function generateBreadcrumbs(path: string): { title: string; path?: string }[] {
  const parts = path.split("/").filter(Boolean);
  const breadcrumbs: { title: string; path?: string }[] = [];
  
  // Remove 'docs' from parts
  const docsParts = parts.slice(1);
  
  for (let i = 0; i < docsParts.length; i++) {
    const title = docsParts[i]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    if (i < docsParts.length - 1) {
      const pathParts = parts.slice(0, i + 2).join("/");
      breadcrumbs.push({ title, path: `/${pathParts}` });
    } else {
      breadcrumbs.push({ title });
    }
  }
  
  return breadcrumbs;
}


export default function DocPage() {
  const [, params] = useRoute("/docs/*");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [docData, setDocData] = useState<DocData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const currentPath = params?.["*"] || "getting-started";
  const fullPath = `/docs/${currentPath}`;

  useEffect(() => {
    loadMarkdownFile(currentPath);
  }, [currentPath]);

  const loadMarkdownFile = async (path: string) => {
    setLoading(true);

    try {
      const mdPath = path.endsWith(".md") ? path : `${path}.md`;

      const response = await fetch(`/docs/${mdPath}`);
      if (!response.ok) throw new Error(`File not found: /docs/${mdPath}`);
      
      const content = await response.text();
      
      const parsed = fm<DocMetadata>(content);

      const metadata = parsed.attributes || {};
      const title = metadata.title || "Documentation";

      setDocData({
        title,
        content: parsed.body,
        breadcrumbs: generateBreadcrumbs(`/docs/${path}`),
        metadata,
      });
    } catch (error) {
      console.error("Error loading markdown:", error);

      // Fallback: use a simple default doc instead of sampleDocs
      setDocData({
        title: "Getting Started",
        content: "# Getting Started\n\nThis section introduces AuditMate MFG.",
        breadcrumbs: [{ title: "Getting Started" }],
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
    // TODO: Implement full-text search with Fuse.js across all docs
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fullPath]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading documentation...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform lg:sticky lg:top-16 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DocsSidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 w-full">
        <div className="container max-w-4xl px-6 py-8 mx-auto">
          {/* Mobile menu toggle */}
          <div className="lg:hidden mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              data-testid="button-sidebar-toggle"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>

          {/* Search bar */}
          <div className="mb-6">
            <SearchBar
              placeholder="Search documentation..."
              onSearch={handleSearch}
              data-testid="search-docs"
            />
          </div>

          {/* Breadcrumbs */}
          {docData && docData.breadcrumbs.length > 0 && (
            <Breadcrumbs items={docData.breadcrumbs} />
          )}

          {/* Content */}
          <article className="mt-8">
            {docData && <MarkdownContent content={docData.content} />}
          </article>
        </div>
      </div>
    </div>
  );
}
