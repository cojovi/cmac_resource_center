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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-primary opacity-5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 h-full w-full rounded-full bg-gradient-secondary opacity-5 blur-3xl" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-gradient-accent opacity-10 float" />
        <div className="absolute top-40 right-32 h-24 w-24 rounded-2xl bg-gradient-primary opacity-10 float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 h-40 w-40 rounded-full bg-gradient-secondary opacity-10 float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 text-center">
        {/* Main heading */}
        <div className="mb-8 space-y-6">
          <h1 className={`text-6xl md:text-8xl font-bold text-gray-900 leading-tight ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="block">Welcome to</span>
            <span className="block gradient-text">{title}</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${mounted ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            {subtitle}
          </p>
        </div>

        {/* Search section */}
        {showSearch && (
          <div className={`max-w-2xl mx-auto ${mounted ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl shadow-soft border border-gray-100">
                  <div className="flex items-center p-2">
                    <Search className="ml-6 h-6 w-6 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search resources, docs, team members..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-0 bg-transparent px-6 py-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-0"
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
                  className={`rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 animate-fade-in-up`}
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
          <div className="flex flex-col items-center space-y-2 text-gray-400">
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