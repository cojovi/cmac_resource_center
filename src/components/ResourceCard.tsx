import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  isSpecial?: boolean;
}

export const ResourceCard = ({ title, description, icon: Icon, link, isSpecial }: ResourceCardProps) => {
  const isExternalLink = link.startsWith('http');
  
  const cardClassName = isSpecial
    ? "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-blue-900/90 border-blue-500/50 shadow-blue-500/20 hover:shadow-blue-500/30"
    : "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-card/90 border border-border/50";

  const iconClassName = isSpecial
    ? "w-6 h-6 text-blue-300"
    : "w-6 h-6 text-primary";

  const buttonClassName = isSpecial
    ? "w-full bg-blue-700 hover:bg-blue-600 text-white transition-colors duration-300"
    : "w-full bg-primary hover:bg-primary-light transition-colors duration-300";

  return (
    <Card className={cardClassName}>
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-3">
          <Icon className={iconClassName} />
          <CardTitle className={`text-xl font-semibold tracking-tight ${isSpecial ? 'text-blue-100' : ''}`}>
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className={isSpecial ? "text-blue-200/90" : "text-muted-foreground"}>
          {description}
        </p>
      </CardContent>
      <CardFooter>
        {isExternalLink ? (
          <Button
            asChild
            className={buttonClassName}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Access Resource
            </a>
          </Button>
        ) : (
          <Button
            asChild
            className={buttonClassName}
          >
            <Link to={link}>Access Resource</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};