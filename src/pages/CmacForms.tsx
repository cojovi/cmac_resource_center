import { FileText } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";

const formResources = [
  {
    title: "Material Shorts Form",
    description: "Request material shorts for your project",
    icon: FileText,
    link: "https://forms.gle/QuXcJPL1ggWnEpas8",
  },
  {
    title: "Backcharge Request Form",
    description: "Submit a backcharge request for project costs",
    icon: FileText,
    link: "https://forms.gle/LPGqtdh5pCkNm1JM8",
  },
  {
    title: "IT Request Form",
    description: "Submit your IT support or equipment requests",
    icon: FileText,
    link: "https://forms.gle/v5AibafwoRW4ftTT8",
  },
  {
    title: "Builder Detail Form",
    description: "Provide details for builder-related information",
    icon: FileText,
    link: "https://forms.gle/7UcKHLzmHvRaKMAR9",
  },
  {
    title: "Austin Field Update Form",
    description: "Update field status and progress in Austin projects",
    icon: FileText,
    link: "https://forms.gle/1EmxpE1xC1xdytNp8",
  },
  {
    title: "Austin Community Outlook Form",
    description: "Share insights and outlook for Austin community projects",
    icon: FileText,
    link: "https://forms.gle/euZycmUFH9HgwEeK6",
  },
  {
    title: "New Email Request Form",
    description: "Request a new company email account",
    icon: FileText,
    link: "https://forms.gle/48X1YiQBSiEoj4MF6",
  },
  {
    title: "Time Off Request",
    description: "Submit your time off requests",
    icon: FileText,
    link: "https://forms.google.com/timeoff",
  },
];

const CmacForms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            CMAC Forms
          </h1>
          <p className="text-xl text-white/80">
            Access all CMAC forms and documents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CmacForms;