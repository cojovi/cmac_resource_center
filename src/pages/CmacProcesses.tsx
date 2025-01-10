import { Book, FileText, ClipboardList, Users, Calendar } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";

const processes = [
  {
    title: "CMAC Estimating Checklist/Cheat Sheet",
    description: "This should be very helpful",
    icon: ClipboardList,
    link: "#",
  },
  {
    title: "CMAC Restoration Services Employee Handbook",
    description: "The handbook for the Restoration Division",
    icon: Book,
    link: "#",
  },
  {
    title: "CMAC DFW Payroll Timeline",
    description: "The timeline for pay periods, etc",
    icon: Calendar,
    link: "#",
  },
  {
    title: "Estimating Process",
    description: "Learn about our estimating process",
    icon: FileText,
    link: "#",
  },
  {
    title: "Shorts Process",
    description: "If we do the takeoff",
    icon: FileText,
    link: "#",
  },
  {
    title: "Aging Process",
    description: "Understanding the aging process",
    icon: FileText,
    link: "#",
  },
  {
    title: "How-To Purchase Order in Quick Books",
    description: "Step-by-step guide for PO creation in QuickBooks",
    icon: FileText,
    link: "#",
  },
  {
    title: "Paid Time Off Leave Request",
    description: "Process for requesting PTO",
    icon: Calendar,
    link: "#",
  },
  {
    title: "PO Creation",
    description: "Guide for creating Purchase Orders",
    icon: FileText,
    link: "#",
  },
  {
    title: "Employee Termination Checklist",
    description: "Checklist for employee termination process",
    icon: ClipboardList,
    link: "#",
  },
  {
    title: "Checklist for Onboarding New Hire's",
    description: "Complete guide for onboarding new employees",
    icon: Users,
    link: "#",
  },
  {
    title: "Checklist for New Hire Paperwork",
    description: "Required paperwork for new hires",
    icon: FileText,
    link: "#",
  },
  {
    title: "Write Up Form",
    description: "Employee write up documentation",
    icon: FileText,
    link: "#",
  },
];

const CmacProcesses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            CMAC Processes
          </h1>
          <p className="text-xl text-white/80">
            Access all CMAC process documentation and forms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process) => (
            <ResourceCard key={process.title} {...process} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CmacProcesses;