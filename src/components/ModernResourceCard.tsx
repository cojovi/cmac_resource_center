import { DivideIcon as LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ModernResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay?: number;
}

// Refined gradient combinations for better visual hierarchy
const iconGradients = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600", 
  "from-green-500 to-green-600",
  "from-pink-500 to-pink-600",
  "from-indigo-500 to-indigo-600",
  "from-orange-500 to-orange-600",
  "from-teal-500 to-teal-600",
];

export const ModernResourceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  delay = 0 
}: ModernResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternalLink = link.startsWith('http');
  
  // Get a consistent gradient based on title hash
  const gradientIndex = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % iconGradients.length;
  const iconGradient = iconGradients[gradientIndex];
  
  const CardContent = (
    <div 
      className={`card-modern group relative h-full p-6 md:p-8 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="hover"
    >
      {/* Enhanced background overlay for theme consistency */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-50 dark:group-hover:opacity-30" />
      
      {/* Icon container with improved responsive design */}
      <div className="relative mb-4 md:mb-6">
        <div className={`inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br ${iconGradient} text-white shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:shadow-medium group-hover:-rotate-3`}>
          <Icon className="h-6 w-6 md:h-8 md:w-8" />
        </div>
        
        {/* Subtle floating effect */}
        <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${iconGradient} opacity-0 transition-all duration-300 group-hover:opacity-20 group-hover:scale-110 blur-sm`} />
      </div>

      {/* Content with improved typography hierarchy */}
      <div className="relative space-y-3 md:space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Call to action with better mobile responsiveness */}
        <div className="flex items-center justify-between pt-2 md:pt-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200 transition-all duration-300 group-hover:translate-x-1">
              Access Resource
            </span>
            <svg 
              className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-800 dark:group-hover:text-gray-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Status indicator for external links */}
          {isExternalLink && (
            <div className="opacity-60 group-hover:opacity-100 transition-opacity">
              <svg className="h-3 w-3 md:h-4 md:w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Refined hover overlay effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:via-transparent dark:to-white/10" />
      </div>
    </div>
  );

  return isExternalLink ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl transition-all"
    >
      {CardContent}
    </a>
  ) : (
    <Link 
      to={link} 
      className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl transition-all"
    >
      {CardContent}
    </Link>
  );
};