import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Processes', path: '/cmac-processes' },
  { label: 'Team', path: '/team-directory' },
  { label: 'Forms', path: '/cmac-forms' },
  { label: 'Calendar', path: '/company-calendar' },
  { label: 'Safety', path: '/cmac-safety' },
];

export const ClickableNavigation = () => {
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
      {/* Main Navigation */}
      <div className={`nav-agency transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        CMAC
      </div>

      {/* Desktop Menu (Top Right) */}
      <div className={`fixed top-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-all duration-300 hover:text-red-500 ${
                  isActive ? 'text-red-500' : 'text-white'
                }`}
                data-cursor="hover"
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 text-white hover:text-red-500 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20">
            <div className="space-y-4">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-semibold transition-all duration-300 hover:text-red-500 ${
                      isActive ? 'text-red-500' : 'text-white'
                    }`}
                  >
                    {item.label.toUpperCase()}
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