import { Shield, Book, FileText } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";

const safetyResources = [
  {
    title: "CMAC Commercial Safety Manual",
    description: "Comprehensive safety guidelines for commercial operations",
    icon: Book,
    link: "#",
  },
  {
    title: "OCHA Rules and Regs",
    description: "Official OCHA safety regulations and requirements",
    icon: FileText,
    link: "#",
  },
  {
    title: "CMAC Safety Protocols",
    description: "Standard safety protocols and procedures",
    icon: Shield,
    link: "#",
  },
];

const CmacSafety = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            CMAC Safety Resources
          </h1>
          <p className="text-xl text-white/80">
            Access all safety-related documentation and protocols
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CmacSafety;