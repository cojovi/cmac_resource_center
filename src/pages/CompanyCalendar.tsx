import { Calendar, ChevronLeft, Users, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ResourceCard } from "@/components/ResourceCard";

const calendarResources = [
  {
    title: "CMAC Company Calendar",
    description: "View company events, meetings, and important dates",
    icon: Calendar,
    link: "https://calendar.google.com/calendar/embed?src=admin%40cmacroofing.com&ctz=America%2FChicago",
  },
  {
    title: "Christian's Calendar Requests",
    description: "Schedule meetings and requests with Christian",
    icon: User,
    link: "https://calendar.app.google/CZH7Yjj4TjYBKTYR9",
  },
  {
    title: "Jenn's Calendar Requests",
    description: "Schedule meetings and requests with Jenn",
    icon: User,
    link: "https://calendar.app.google/SUTFcmXMg7pEjENb7",
  },
  {
    title: "Cody's Calendar Requests",
    description: "Schedule meetings and requests with Cody",
    icon: User,
    link: "https://calendar.app.google/jnLDn5bFuUrFF7oy5",
  },
];

const CompanyCalendar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <Button variant="outline" asChild className="mb-6 bg-white/90 hover:bg-white">
          <Link to="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Resource Center
          </Link>
        </Button>

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Company Calendar
          </h1>
          <p className="text-xl text-white/80">
            Stay updated with important dates and schedule meetings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {calendarResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCalendar;