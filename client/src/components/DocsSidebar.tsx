import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, ChevronRight, LucideIcon, BookOpen, Settings, Server, Archive, Mail } from "lucide-react";
import { docsStructure, DocItem } from "@shared/docs-structure";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Settings,
  Server,
  Archive,
  Mail,
};

function SidebarItem({ item, level = 0 }: { item: DocItem; level?: number }) {
  const [location] = useLocation();
  /*const [isOpen, setIsOpen] = useState(true);*/
  const [isOpen, setIsOpen] = useState(
  // Auto-expand if the current URL starts with this item's path
  location.startsWith(item.path)
  );

  
  const hasChildren = item.children && item.children.length > 0;
  const isActive = location === item.path || location.startsWith(item.path + "/");
  const IconComponent = item.icon ? iconMap[item.icon] : null;

  if (hasChildren) {
    return (
      <div className="mb-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md hover-elevate active-elevate-2 transition-colors ${
            isActive ? "bg-accent text-accent-foreground" : ""
          }`}
          data-testid={`button-sidebar-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {IconComponent && <IconComponent className="h-4 w-4" />}
          <span className="flex-1 text-left">{item.title}</span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        {isOpen && item.children && (
          <div className="ml-4 mt-1 space-y-1 border-l border-border pl-2">
            {item.children.map((child) => (
              <SidebarItem key={child.path} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.path}
      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md hover-elevate active-elevate-2 transition-colors ${
        isActive ? "bg-accent text-accent-foreground font-medium" : ""
      }`}
      data-testid={`link-sidebar-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {IconComponent && level === 0 && <IconComponent className="h-4 w-4" />}
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
