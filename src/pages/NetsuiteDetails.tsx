import { FileText, Database, BookOpen, Users, Settings } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";

const netsuiteResources = [
  {
    title: "NetSuite User Guide",
    description: "Comprehensive guide for using NetSuite at CMAC",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Training Materials",
    description: "Video tutorials and training documentation",
    icon: FileText,
    link: "#",
  },
  {
    title: "System Access",
    description: "Login information and access instructions",
    icon: Database,
    link: "#",
  },
  {
    title: "Support Contacts",
    description: "NetSuite support team contact information",
    icon: Users,
    link: "#",
  },
  {
    title: "Configuration Guide",
    description: "System settings and configuration documentation",
    icon: Settings,
    link: "#",
  },
];

const NetsuiteDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            NetSuite Details & Links
          </h1>
          <p className="text-xl text-white/80">
            Access all NetSuite-related documentation and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {netsuiteResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetsuiteDetails; 