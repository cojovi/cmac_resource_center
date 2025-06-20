import { useState, useEffect } from 'react';
import { Search, Play } from 'lucide-react';

interface ClickableHeroSectionProps {
  title: string;
  subtitle: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
}

export const ClickableHeroSection = ({ 
  title, 
  subtitle, 
  showSearch = false, 
  onSearch 
}: ClickableHeroSectionProps) => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Floating Crystals/Diamonds */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large crystals */}
        <div className="crystal crystal-large top-20 left-20" />
        <div className="crystal crystal-large top-40 right-32 crystal-diamond" />
        <div className="crystal crystal-large bottom-32 left-1/4" />
        <div className="crystal crystal-large bottom-20 right-20 crystal-diamond" />
        
        {/* Medium crystals */}
        <div className="crystal top-60 left-1/2" />
        <div className="crystal top-80 right-1/4 crystal-diamond" />
        <div className="crystal bottom-60 left-1/3" />
        <div className="crystal bottom-40 right-1/3 crystal-diamond" />
        
        {/* Small crystals */}
        <div className="crystal crystal-small top-32 left-1/3" />
        <div className="crystal crystal-small top-72 right-1/5 crystal-diamond" />
        <div className="crystal crystal-small bottom-52 left-1/5" />
        <div className="crystal crystal-small bottom-72 right-2/5 crystal-diamond" />
        
        {/* Additional floating elements */}
        <div className="crystal crystal-small top-1/4 left-3/4" />
        <div className="crystal crystal-small top-3/4 left-1/6 crystal-diamond" />
      </div>

      {/* Red geometric lines/shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20" />
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-20" />
        <div className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6">
        {/* Main content */}
        <div className="mb-16 space-y-12">
          {/* Title Section */}
          <div className="space-y-8">
            <h1 className={`text-agency-title text-7xl md:text-8xl lg:text-9xl text-white leading-none ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="block">CREATIVE</span>
              <span className="block text-agency-red">SOLUTIONS</span>
              <span className="block">FOR YOUR</span>
              <span className="block text-agency-red">BUSINESS</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed ${mounted ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
              {subtitle}
            </p>
          </div>

          {/* CTA Button */}
          <div className={`${mounted ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
            <button className="btn-agency group flex items-center space-x-3">
              <Play className="h-5 w-5 fill-current" />
              <span>LET'S CREATE AWESOME</span>
            </button>
          </div>
        </div>

        {/* Search section (if enabled) */}
        {showSearch && (
          <div className={`max-w-2xl ${mounted ? 'animate-fade-in-up animate-delay-700' : 'opacity-0'}`}>
            <form onSubmit={handleSearchSubmit} className="relative group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl border border-red-500/30">
                  <div className="flex items-center p-3">
                    <Search className="ml-6 h-6 w-6 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search resources, docs, team members..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-0 bg-transparent px-6 py-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                    />
                    <button
                      type="submit"
                      className="m-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-black font-bold rounded-xl transition-colors duration-300"
                      data-cursor="hover"
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Bottom scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-center ${mounted ? 'animate-fade-in-up animate-delay-1000' : 'opacity-0'}`}>
          <div className="text-gray-500 text-sm font-medium mb-4">
            SCROLL TO EXPLORE
          </div>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full mx-auto">
            <div className="w-1 h-3 bg-red-500 rounded-full mx-auto mt-2 animate-pulse-red" />
          </div>
        </div>
      </div>
    </section>
  );
};