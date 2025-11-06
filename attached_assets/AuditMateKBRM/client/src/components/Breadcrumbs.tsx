import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  title: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 rounded px-2 py-1" data-testid="link-breadcrumb-home">
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          {item.path && index < items.length - 1 ? (
            <Link href={item.path} className="text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 rounded px-2 py-1" data-testid={`link-breadcrumb-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
              {item.title}
            </Link>
          ) : (
            <span className="text-foreground font-medium" data-testid={`text-breadcrumb-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
              {item.title}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
