import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface PremiumResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay?: number;
}

export const PremiumResourceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  delay = 0 
}: PremiumResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternalLink = link.startsWith('http');
  
  const CardContent = (
    <div 
      className={`card-premium group relative h-full p-8 animate-fade-in-up cursor-pointer`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="hover"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Icon container */}
        <div className="relative">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-8 w-8" />
          </div>
          
          {/* Floating background effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-20 group-hover:scale-150" />
        </div>

        {/* Text content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-800">
            {title}
          </h3>
          
          <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Call to action */}
        <div className="flex items-center justify-between pt-4">
          <span className="text-sm font-semibold text-gray-800 transition-all duration-300 group-hover:text-indigo-600">
            Access Resource
          </span>
          <ArrowUpRight 
            className={`h-5 w-5 text-gray-400 transition-all duration-300 group-hover:text-indigo-600 ${
              isHovered ? 'translate-x-1 -translate-y-1' : ''
            }`}
          />
        </div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shimmer" />
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