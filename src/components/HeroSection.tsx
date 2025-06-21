import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
}

export const HeroSection = ({ title, subtitle, showSearch = false, onSearch }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blob */}
        <div className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-pink-600/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 h-full w-full rounded-full bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 dark:from-green-600/30 dark:via-blue-600/30 dark:to-purple-600/30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating geometric shapes with enhanced colors */}
        <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-to-br from-pink-400 to-red-500 opacity-20 dark:opacity-30 float animate-pulse" />
        <div className="absolute top-40 right-32 h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 dark:opacity-30 float animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-green-400 to-teal-500 opacity-20 dark:opacity-30 float animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-60 right-20 h-28 w-28 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 dark:opacity-30 float animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent dark:via-purple-500/10 animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 text-center">
        {/* Main heading */}
        <div className="mb-8 space-y-6">
          <h1 className={`text-6xl md:text-8xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-500 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="block">Welcome to</span>
            <span className="block gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">{title}</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${mounted ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            {subtitle}
          </p>
        </div>

        {/* Search section */}
        {showSearch && (
          <div className={`max-w-2xl mx-auto ${mounted ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <div className="flex items-center p-2">
                    <Search className="ml-6 h-6 w-6 text-gray-400 dark:text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search resources, docs, team members..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-0 bg-transparent px-6 py-4 text-lg placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-0"
                    />
                    <button
                      type="submit"
                      className="btn-modern m-2 px-8 py-3 text-base"
                      data-cursor="hover"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
            {/* Search suggestions */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {['Employee Handbook', 'Team Directory', 'Safety Protocols', 'Forms'].map((suggestion, index) => (
                <button
                  key={suggestion}
                  onClick={() => setSearchQuery(suggestion)}
                  className={`rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-100 animate-fade-in-up`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                  data-cursor="hover"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${mounted ? 'animate-fade-in-up animate-delay-800' : 'opacity-0'}`}>
          <div className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};