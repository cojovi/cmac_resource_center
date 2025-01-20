import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

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
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
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
  );
};
