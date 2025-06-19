import { Book, Calendar, FileText, HelpCircle, Users, Shield } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";
import { SlackRollout } from "@/components/SlackRollout";
import { Ticker } from "@/components/Ticker";
import { SearchBar } from "@/components/SearchBar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const resources = [
  {
    title: "Employee Handbook",
    description: "Essential guidelines and policies",
    icon: Book,
    link: "https://texastrustedroofing.com/Employee-handbook.pdf",
  },
  {
    title: "CMAC Processes",
    description: "Step-by-step guides for company processes",
    icon: FileText,
    link: "/cmac-processes",
  },
  {
    title: "Team Directory",
    description: "Connect with your colleagues",
    icon: Users,
    link: "/team-directory",
  },
  {
    title: "CMAC Forms",
    description: "Custom forms created to streamline your work",
    icon: FileText,
    link: "/cmac-forms",
  },
  {
    title: "Company Calendar",
    description: "Stay updated with important dates and events",
    icon: Calendar,
    link: "/company-calendar",
  },
  {
    title: "Meet The Builders",
    description: "Get help with technical issues",
    icon: HelpCircle,
    link: "https://docs.google.com/document/d/1o3rb9Dp-HmQR1Gd02pLrxXksRSv0P85EZeUwqfM0pg8/edit?usp=sharing",
  },
  {
    title: "CMAC Safety",
    description: "Safety manuals, protocols, and regulations",
    icon: Shield,
    link: "/cmac-safety",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to CMAC's Resource Center
          </h1>
          <p className="text-xl text-white/80">
            Your one-stop hub for all company resources and information
          </p>
        </div>

        <SearchBar />

        <Ticker />

        <Alert className="bg-gradient-to-r from-destructive/90 to-destructive border-none shadow-lg text-white hover:from-destructive hover:to-destructive/90 transition-all duration-300 cursor-pointer animate-fade-in text-center">
          <AlertTitle className="text-lg font-bold tracking-wide">IMPORTANT NOTICE</AlertTitle>
          <AlertDescription className="text-white/95 font-medium">
            FROM NOW ON, IT REQUESTS MUST BE SUBMITTED USING THE IT TICKETING SYSTEM
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <SlackRollout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;