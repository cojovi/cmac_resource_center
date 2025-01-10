import { Book, FileText, ClipboardList, Users, Calendar } from "lucide-react";
import { ResourceCard } from "@/components/ResourceCard";

const processes = [
  {
    title: "CMAC Estimating Checklist/Cheat Sheet",
    description: "This should be very helpful",
    icon: ClipboardList,
    link: "https://docs.google.com/document/d/1DIBiwBEAn0LXqc42N85jo8nVtAQ0JHlp/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "CMAC Restoration Services Employee Handbook",
    description: "The handbook for the Restoration Division",
    icon: Book,
    link: "https://docs.google.com/document/d/1rsysTBDbWxsveYvSLqULKXHkqmwKMjEd/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "CMAC DFW Payroll Timeline",
    description: "The timeline for pay periods, etc",
    icon: Calendar,
    link: "https://docs.google.com/document/d/1Lj1SgAF4oCBiOwMRG1WXgmF7zTccuUUk/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Estimating Process",
    description: "Learn about our estimating process",
    icon: FileText,
    link: "https://docs.google.com/document/d/1-6mmnItjVgKm-AnVJK8tC_zGFdKdH2oe/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Shorts Process",
    description: "If we do the takeoff",
    icon: FileText,
    link: "https://docs.google.com/document/d/1WVduPXxVMrACYCB6Kw5bvhd6B6WO2knh/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Aging Process",
    description: "Understanding the aging process",
    icon: FileText,
    link: "https://docs.google.com/document/d/147YzjNtAPSpny_pAU0k5tyLq8K42SPnY/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "How-To Purchase Order in Quick Books",
    description: "Step-by-step guide for PO creation in QuickBooks",
    icon: FileText,
    link: "https://docs.google.com/document/d/1sO3oXjkuRrVot7KGThpMxEdssCIjfK06/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Paid Time Off Leave Request",
    description: "Process for requesting PTO",
    icon: Calendar,
    link: "https://docs.google.com/document/d/1icypVEQZFsbnRvsc3TXKN3R6XXjmQerS/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "PO Creation",
    description: "Guide for creating Purchase Orders",
    icon: FileText,
    link: "https://docs.google.com/document/d/1zV-_oL_utBdZXkfKnn-y6hZqHi-ynxwc/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Employee Termination Checklist",
    description: "Checklist for employee termination process",
    icon: ClipboardList,
    link: "https://docs.google.com/document/d/1FQtJrnQBvmlEAVNSBCItZJtoryHy4MJL/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Checklist for Onboarding New Hire's",
    description: "Complete guide for onboarding new employees",
    icon: Users,
    link: "https://docs.google.com/document/d/1Xm9Ly7aSTsUx5KhFlk1UN_GCkjZkNZv8/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Checklist for New Hire Paperwork",
    description: "Required paperwork for new hires",
    icon: FileText,
    link: "https://docs.google.com/document/d/1rY1FR3aicLXacBF01CRApWZIXvpi2dij/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Write Up Form",
    description: "Employee write up documentation",
    icon: FileText,
    link: "https://docs.google.com/document/d/1qNQ8BCjOZNtFgU4g1MaCQWnrDkmaKzAu/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
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
