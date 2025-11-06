import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  size?: "default" | "large";
}

export function SearchBar({
  placeholder = "Search help articles...",
  onSearch,
  className = "",
  size = "default",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <div className={`relative ${className}`}>
      <Search className={`absolute left-4 text-muted-foreground pointer-events-none ${size === "large" ? "top-5 h-5 w-5" : "top-3 h-4 w-4"}`} />
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
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
    </div>
  );
}
