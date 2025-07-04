import { Shield, Book, FileText, AlertTriangle } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";

const safetyResources = [
  {
    title: "CMAC Commercial Safety Manual",
    description: "Comprehensive safety guidelines for commercial operations",
    icon: Book,
    link: "https://docs.google.com/document/d/1pJMUqzJzMxzYg5glx_R8FALlYG0FCg1W/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "OCHA Rules and Regs",
    description: "Official OCHA safety regulations and requirements",
    icon: FileText,
    link: "https://drive.google.com/file/d/1BzSi1iV_YfJ-UUnvZQIzwoLcAh9ZAv0_/view?usp=sharing",
  },
  {
    title: "CMAC Procedure for OSHA Site Visit",
    description: "Step-by-step procedures for handling OSHA site visits",
    icon: AlertTriangle,
    link: "https://docs.google.com/document/d/1N3DjjlR0bU3dIeOdLdlFHxVIfoAS3gGF/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Workflow for OSHA Inspections",
    description: "Complete workflow guide for OSHA inspection processes",
    icon: Shield,
    link: "https://docs.google.com/document/d/1ASkYvyQOzhrLzxs8y4syVQZGLAcnM6_t/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
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