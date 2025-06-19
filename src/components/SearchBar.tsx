import { useState, useRef, useEffect } from "react";
import { Search, ExternalLink } from "lucide-react";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { searchableResources, SearchableItem } from "@/data/searchData";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchableItem[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Handle search as user types
  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = searchableResources.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 8)); // Limit to 8 results
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [query]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item: SearchableItem) => {
    setQuery("");
    setShowResults(false);
    
    if (item.isExternal) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.link);
    }

    toast({
      title: "Navigating to resource",
      description: `Opening: ${item.title}`,
      duration: 2000,
    });
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // If there are exact matches, navigate to the first one
    if (searchResults.length > 0) {
      handleItemClick(searchResults[0]);
      return;
    }

    // Fall back to AI search if no results found
    setIsLoading(true);
    try {
      const response = await fetch("https://427b-132-147-144-208.ngrok-free.app/api/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer sk-508d45c236854100a2471e555587be34",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "amayaicmac",
          messages: [
            {
              role: "user",
              content: query,
            },
          ],
        }),
      });

      const data = await response.json();
      
      toast({
        title: "AmayAI Says:",
        description: data.choices?.[0]?.message?.content || "No response from AI",
        duration: 10000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from AI",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div ref={searchRef} className="w-full max-w-3xl mx-auto relative">
      <form onSubmit={handleSearch}>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-sm group-hover:blur opacity-75" />
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder="Search anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-6 bg-background/80 backdrop-blur-sm border-none rounded-full text-lg placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="absolute right-3 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              disabled={isLoading}
            >
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {searchResults.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {item.isExternal && (
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full mt-2 inline-block">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {showResults && query.trim().length > 0 && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4">
          <p className="text-gray-600 text-center">
            No resources found. Press Enter to ask AmayAI for help.
          </p>
        </div>
      )}
    </div>
  );
};