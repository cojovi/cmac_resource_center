import { Book, Calendar, FileText, HelpCircle, Users, Shield } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";
import { UpcomingMeetings } from "@/components/UpcomingMeetings";
import { Ticker } from "@/components/Ticker";
import { SearchBar } from "@/components/SearchBar";

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
    link: "./cmac-processes",
  },
  {
    title: "Team Directory",
    description: "Connect with your colleagues",
    icon: Users,
    link: "./team-directory",
  },
  {
    title: "CMAC Forms",
    description: "Custom forms created to streamline your work",
    icon: FileText,
    link: "./cmac-forms",
  },
  {
    title: "Company Calendar",
    description: "Stay updated with important dates and events",
    icon: Calendar,
    link: "https://cmac-resource-center.vercel.app/company-calendar",
  },
  {
    title: "Meet The Builders",
    description: "Get help with technical issues",
    icon: HelpCircle,
    link: "#",
  },
  {
    title: "CMAC Safety",
    description: "Safety manuals, protocols, and regulations",
    icon: Shield,
    link: "./cmac-safety",
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <UpcomingMeetings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;