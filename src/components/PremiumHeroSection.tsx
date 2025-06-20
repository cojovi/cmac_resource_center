import { useState, useEffect } from 'react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

interface PremiumHeroSectionProps {
  title: string;
  subtitle: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
}

export const PremiumHeroSection = ({ 
  title, 
  subtitle, 
  showSearch = false, 
  onSearch 
}: PremiumHeroSectionProps) => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-light">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orb */}
        <div className="absolute -top-1/4 -right-1/4 h-full w-full rounded-full bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-pink-400/20 blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 h-full w-full rounded-full bg-gradient-to-tr from-blue-400/20 via-cyan-400/20 to-teal-400/20 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-float" />
        <div className="absolute top-40 right-32 h-24 w-24 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 text-center">
        {/* Main content */}
        <div className="mb-12 space-y-8">
          {/* Sparkle icon */}
          <div className={`inline-flex items-center justify-center ${mounted ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-6">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold leading-tight ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="block text-gray-900">Welcome to</span>
              <span className="block text-premium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                {title}
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${mounted ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              {subtitle}
            </p>
          </div>
        </div>

        {/* Search section */}
        {showSearch && (
          <div className={`max-w-3xl mx-auto ${mounted ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
            <form onSubmit={handleSearchSubmit} className="relative group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-elegant border border-white/20">
                  <div className="flex items-center p-3">
                    <Search className="ml-6 h-6 w-6 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search resources, docs, team members..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-0 bg-transparent px-6 py-5 text-lg placeholder-gray-400 focus:outline-none focus:ring-0"
                    />
                    <button
                      type="submit"
                      className="btn-premium m-2 px-8 py-4 text-base flex items-center space-x-2"
                      data-cursor="hover"
                    >
                      <span>Search</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
            {/* Search suggestions */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {['Employee Handbook', 'Team Directory', 'Safety Protocols', 'Forms'].map((suggestion, index) => (
                <button
                  key={suggestion}
                  onClick={() => setSearchQuery(suggestion)}
                  className={`rounded-full bg-white/50 backdrop-blur-sm px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-white hover:shadow-soft border border-white/30 animate-fade-in-up`}
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
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce ${mounted ? 'animate-fade-in-up animate-delay-800' : 'opacity-0'}`}>
          <div className="flex flex-col items-center space-y-3 text-gray-500">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="h-8 w-5 rounded-full border-2 border-gray-300 flex justify-center">
              <div className="h-2 w-0.5 bg-gray-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};