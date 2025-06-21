import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 hover:bg-gray-200/80 transition-all duration-300"
      >
        <Moon className="h-4 w-4 text-gray-600" />
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 hover:bg-gray-200/80 transition-all duration-300"
      data-cursor="hover"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-gray-600" />
      ) : (
        <Sun className="h-4 w-4 text-gray-600" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}