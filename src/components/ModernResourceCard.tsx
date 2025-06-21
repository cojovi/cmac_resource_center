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

// Vibrant gradient combinations for each card
const gradientCombos = [
  "from-pink-500 via-red-500 to-yellow-500",
  "from-blue-500 via-purple-500 to-pink-500", 
  "from-green-500 via-teal-500 to-blue-500",
  "from-purple-500 via-pink-500 to-red-500",
  "from-indigo-500 via-blue-500 to-teal-500",
  "from-orange-500 via-red-500 to-pink-500",
  "from-cyan-500 via-blue-500 to-purple-500",
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
  const gradientIndex = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradientCombos.length;
  const gradient = gradientCombos[gradientIndex];
  
  const CardContent = (
    <div 
      className={`card-modern group relative h-full p-8 animate-fade-in-up overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="hover"
    >
      {/* Dynamic gradient background that appears on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-all duration-500 transform scale-110 group-hover:scale-100`} />
      
      {/* Animated border gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-sm transition-all duration-500`} />
      
      {/* Icon container with vibrant styling */}
      <div className="relative mb-6">
        <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-soft transition-all duration-500 group-hover:scale-110 group-hover:shadow-medium group-hover:rotate-6`}>
          <Icon className="h-8 w-8" />
        </div>
        
        {/* Pulsing glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse blur-md`} />
        
        {/* Floating sparkle effects */}
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" style={{ animationDelay: '0.2s' }} />
      </div>

      {/* Content with enhanced styling */}
      <div className="relative space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 leading-relaxed">
          {description}
        </p>

        {/* Enhanced call to action */}
        <div className="flex items-center space-x-2 pt-4">
          <span className={`text-sm font-semibold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent ${gradient.replace('from-', 'group-hover:from-').replace('via-', 'group-hover:via-').replace('to-', 'group-hover:to-')} text-gray-800 dark:text-gray-200`}>
            Access Resource
          </span>
          <svg 
            className={`h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 text-gray-600 dark:text-gray-400 group-hover:text-transparent group-hover:fill-current`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id={`arrow-gradient-${gradientIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
              className="group-hover:stroke-[url(#arrow-gradient-" + gradientIndex + ")]"
            />
          </svg>
        </div>
      </div>

      {/* Magnetic hover effect with particles */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-4 right-4 h-1 w-1 bg-white rounded-full animate-ping" />
        <div className="absolute top-8 right-8 h-1 w-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-4 left-4 h-1 w-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      </div>
    </div>
  );

  return isExternalLink ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full transform transition-transform duration-300 hover:scale-105"
    >
      {CardContent}
    </a>
  ) : (
    <Link to={link} className="block h-full transform transition-transform duration-300 hover:scale-105">
      {CardContent}
    </Link>
  );
};