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
    title: "NetSuite MyLearn Link",
    description: "Tutorials and training documentation",
    icon: FileText,
    link: "https://mylearn.oracle.com/netsuite/home",
  },
  {
    title: "ERP Fundamentals Courses Link",
    description: "Direct Link to ERP Fundamentals Courses",
    icon: Database,
    link: "https://mylearn.oracle.com/netsuite/course/erp-fundamentals/58103/",
  },
  {
    title: "NetSuite Support Contacts",
    description: "NetSuite support team contact information, hit up Nina Tran for any questions",
    icon: Users,
    link: "mailto:nina.tran@oracle.com?cc=wes@cmacroofing.com%2Ccodyv@cmacroofing.com",
  },
  {
    title: "NetSuite Info Bot",
    description: "I equipted an AI bot with all the CMAC related Netsuite data, if you have any questions, use this.",
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