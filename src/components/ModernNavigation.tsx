import { useState, useEffect } from 'react';
import { Home, Book, Users, FileText, Calendar, Shield, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Book, label: 'Processes', path: '/cmac-processes' },
  { icon: Users, label: 'Team', path: '/team-directory' },
  { icon: FileText, label: 'Forms', path: '/cmac-forms' },
  { icon: Calendar, label: 'Calendar', path: '/company-calendar' },
  { icon: Shield, label: 'Safety', path: '/cmac-safety' },
];

export const ModernNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav
      className={`nav-modern transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ top: '6rem' }} // Push down to avoid overlap with notification banner
    >
      <div className="flex items-center space-x-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                isActive ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
              data-cursor="hover"
            >
              <Icon className="h-4 w-4" />
              <span className="hidden md:block">{item.label}</span>
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10" />
              )}
            </Link>
          );
        })}
        
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="relative flex items-center justify-center rounded-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
          data-cursor="hover"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </div>
    </nav>
  );
};