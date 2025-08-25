import { useState, useEffect } from 'react';
import { Home, Book, Users, FileText, Calendar, Shield, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';

const navigationItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Book, label: 'Processes', path: '/cmac-processes' },
  { icon: Users, label: 'Team', path: '/team-directory' },
  { icon: FileText, label: 'Forms', path: '/cmac-forms' },
  { icon: Calendar, label: 'Calendar', path: '/company-calendar' },
  { icon: Shield, label: 'Safety', path: '/cmac-safety' },
  { icon: MessageSquare, label: 'Slack Tutorials', path: '/slack-tutorials' },
];

export const ModernNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasNotificationBanner, setHasNotificationBanner] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check if notification banner exists
    const banner = document.querySelector('[data-notification-banner]');
    setHasNotificationBanner(!!banner);
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

  // Adjust top position based on notification banner presence
  const topPosition = hasNotificationBanner ? 'top-20' : 'top-6';

  return (
    <nav
      className={`nav-modern transition-all duration-300 ${topPosition} ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex items-center justify-between space-x-1">
        {/* Navigation Items - Keep Original Styling */}
        <div className="flex items-center space-x-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-100 ${
                  isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900'
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
        </div>
        
        {/* Theme Toggle - Positioned to the right */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};