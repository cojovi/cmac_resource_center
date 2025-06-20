import { useState, useEffect } from 'react';
import { Home, Book, Users, FileText, Calendar, Shield, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Book, label: 'Processes', path: '/cmac-processes' },
  { icon: Users, label: 'Team', path: '/team-directory' },
  { icon: FileText, label: 'Forms', path: '/cmac-forms' },
  { icon: Calendar, label: 'Calendar', path: '/company-calendar' },
  { icon: Shield, label: 'Safety', path: '/cmac-safety' },
];

export const PremiumNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`nav-premium transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center space-x-3 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 group ${
                  isActive 
                    ? 'bg-black text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                }`}
                data-cursor="hover"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden lg:block">{item.label}</span>
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10" />
                )}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl p-6 shadow-elegant">
            <div className="space-y-3">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-4 rounded-2xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-black text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};