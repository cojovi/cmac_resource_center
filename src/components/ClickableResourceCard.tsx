import { DivideIcon as LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface ClickableResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay?: number;
  index?: number;
}

export const ClickableResourceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  delay = 0,
  index = 0
}: ClickableResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternalLink = link.startsWith('http');
  
  const CardContent = (
    <div 
      className={`card-agency group relative h-full p-8 animate-fade-in-up cursor-pointer`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="hover"
    >
      {/* Floating crystal decoration */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="crystal crystal-small crystal-diamond" />
      </div>

      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Icon */}
        <div className="relative">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-red-500/20 text-red-500 transition-all duration-500 group-hover:bg-red-500 group-hover:text-black group-hover:scale-110">
            <Icon className="h-8 w-8" />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-400 text-agency-title">
            {title.toUpperCase()}
          </h3>
          
          <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Call to action */}
        <div className="flex items-center justify-between pt-6">
          <span className="text-sm font-bold text-gray-400 transition-all duration-300 group-hover:text-red-500 uppercase tracking-wider">
            Access Resource
          </span>
          <ArrowUpRight 
            className={`h-5 w-5 text-gray-600 transition-all duration-300 group-hover:text-red-500 ${
              isHovered ? 'translate-x-1 -translate-y-1' : ''
            }`}
          />
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />
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