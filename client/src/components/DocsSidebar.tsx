import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ChevronDown,
  ChevronRight,
  LucideIcon,
  BookOpen,
  Settings,
  Server,
  Archive,
  Mail,
} from "lucide-react";
import { docsStructure, DocItem } from "@shared/docs-structure";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Settings,
  Server,
  Archive,
  Mail,
};

function SidebarItem({ item, level = 0 }: { item: DocItem; level?: number }) {
  const [location] = useLocation();

  // Auto-expand if current URL matches this section
  const [isOpen, setIsOpen] = useState(
    location === item.path || location.startsWith(item.path + "/")
  );

  const hasChildren = item.children && item.children.length > 0;
  const isActive =
    location === item.path || location.startsWith(item.path + "/");

  const IconComponent = item.icon ? iconMap[item.icon] : null;

  // ----------------------------
  // Parent item (with children)
  // ----------------------------
  if (hasChildren) {
    return (
      <div className="mb-2">
        <div
          className={`flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive
              ? "bg-accent text-accent-foreground"
              : "hover-elevate active-elevate-2"
          }`}
          data-testid={`sidebar-parent-${item.title
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {/* Navigation (title + icon) */}
          <Link
            href={item.path}
            className="flex items-center gap-2 flex-1 text-left"
          >
            {IconComponent && <IconComponent className="h-4 w-4" />}
            <span>{item.title}</span>
          </Link>

          {/* Expand / Collapse toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            aria-label="Toggle section"
            className="p-1 rounded hover:bg-muted"
          >
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </div>

        {isOpen && item.children && (
          <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
            {item.children.map((child) => (
              <SidebarItem
                key={child.path}
                item={child}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // ----------------------------
  // Leaf item (no children)
  // ----------------------------
  return (
    <Link
      href={item.path}
      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
        isActive
          ? "bg-accent text-accent-foreground font-medium"
          : "hover-elevate active-elevate-2"
      }`}
      data-testid={`sidebar-link-${item.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
    >
      {IconComponent && level === 0 && (
        <IconComponent className="h-4 w-4" />
      )}
      <span>{item.title}</span>
    </Link>
  );
}

export function DocsSidebar() {
  return (
    <aside className="w-64 border-r bg-background p-6 overflow-y-auto">
      <nav className="space-y-1">
        {docsStructure.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </nav>
    </aside>
  );
}
