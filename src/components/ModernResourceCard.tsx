import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ModernResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay?: number;
}

export const ModernResourceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  delay = 0 
}: ModernResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternalLink = link.startsWith('http');
  
  const CardContent = (
    <div 
      className={`card-modern group relative h-full p-8 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="hover"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
      
      {/* Icon container */}
      <div className="relative mb-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-soft transition-all duration-300 group-hover:scale-110 group-hover:shadow-medium">
          <Icon className="h-8 w-8" />
        </div>
        
        {/* Floating icon background effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 transition-all duration-300 group-hover:scale-125 group-hover:opacity-30" />
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-800">
          {title}
        </h3>
        
        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
          {description}
        </p>

        {/* Call to action */}
        <div className="flex items-center space-x-2 pt-4">
          <span className="text-sm font-semibold text-gray-800 transition-all duration-300 group-hover:translate-x-1">
            Access Resource
          </span>
          <svg 
            className="h-4 w-4 text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent" />
      </div>
    </div>
  );

  return isExternalLink ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {CardContent}
    </a>
  ) : (
    <Link to={link} className="block h-full">
      {CardContent}
    </Link>
  );
};