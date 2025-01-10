import { Users } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";

const teamResources = [
  {
    title: "Team Directory",
    description: "Coming soon - Directory of CMAC team members",
    icon: Users,
    link: "#",
  },
];

const TeamDirectory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Team Directory
          </h1>
          <p className="text-xl text-white/80">
            Connect with your CMAC colleagues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDirectory;