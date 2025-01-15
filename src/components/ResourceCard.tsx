import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export const ResourceCard = ({ title, description, icon: Icon, link }: ResourceCardProps) => {
  const isExternalLink = link.startsWith('http');
  
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-card/90 border border-border/50">
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-3">
          <Icon className="w-6 h-6 text-primary" />
          <CardTitle className="text-xl font-semibold tracking-tight">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        {isExternalLink ? (
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary-light transition-colors duration-300"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Access Resource
            </a>
          </Button>
        ) : (
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary-light transition-colors duration-300"
          >
            <Link to={link}>Access Resource</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};