import { Book, FileText, ClipboardList, Users, Calendar, ArrowLeft } from "lucide-react";
import { ModernResourceCard } from "@/components/ModernResourceCard";
import { HeroSection } from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const processes = [
  {
    title: "CMAC Estimating Checklist/Cheat Sheet",
    description: "Comprehensive guide to help with estimation processes",
    icon: ClipboardList,
    link: "https://docs.google.com/document/d/1DIBiwBEAn0LXqc42N85jo8nVtAQ0JHlp/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "CMAC Restoration Services Employee Handbook",
    description: "Complete handbook for the Restoration Division team",
    icon: Book,
    link: "https://docs.google.com/document/d/1rsysTBDbWxsveYvSLqULKXHkqmwKMjEd/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "CMAC DFW Payroll Timeline",
    description: "Detailed timeline for pay periods and payroll processing",
    icon: Calendar,
    link: "https://docs.google.com/document/d/1Lj1SgAF4oCBiOwMRG1WXgmF7zTccuUUk/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Estimating Process",
    description: "Step-by-step guide to our estimating methodology",
    icon: FileText,
    link: "https://docs.google.com/document/d/1-6mmnItjVgKm-AnVJK8tC_zGFdKdH2oe/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Shorts Process",
    description: "Procedures for handling takeoff requirements",
    icon: FileText,
    link: "https://docs.google.com/document/d/1WVduPXxVMrACYCB6Kw5bvhd6B6WO2knh/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Aging Process",
    description: "Understanding and managing the aging process",
    icon: FileText,
    link: "https://docs.google.com/document/d/147YzjNtAPSpny_pAU0k5tyLq8K42SPnY/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "How-To Purchase Order in Quick Books",
    description: "Complete guide for creating POs in QuickBooks",
    icon: FileText,
    link: "https://docs.google.com/document/d/1sO3oXjkuRrVot7KGThpMxEdssCIjfK06/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Paid Time Off Leave Request",
    description: "Process and requirements for requesting PTO",
    icon: Calendar,
    link: "https://docs.google.com/document/d/1icypVEQZFsbnRvsc3TXKN3R6XXjmQerS/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "PO Creation",
    description: "Comprehensive guide for creating Purchase Orders",
    icon: FileText,
    link: "https://docs.google.com/document/d/1zV-_oL_utBdZXkfKnn-y6hZqHi-ynxwc/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Employee Termination Checklist",
    description: "Complete checklist for employee termination procedures",
    icon: ClipboardList,
    link: "https://docs.google.com/document/d/1FQtJrnQBvmlEAVNSBCItZJtoryHy4MJL/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Checklist for Onboarding New Hires",
    description: "Comprehensive guide for onboarding new team members",
    icon: Users,
    link: "https://docs.google.com/document/d/1Xm9Ly7aSTsUx5KhFlk1UN_GCkjZkNZv8/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Checklist for New Hire Paperwork",
    description: "Essential paperwork requirements for new employees",
    icon: FileText,
    link: "https://docs.google.com/document/d/1rY1FR3aicLXacBF01CRApWZIXvpi2dij/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
  {
    title: "Write Up Form",
    description: "Documentation form for employee write-ups",
    icon: FileText,
    link: "https://docs.google.com/document/d/1qNQ8BCjOZNtFgU4g1MaCQWnrDkmaKzAu/edit?usp=sharing&ouid=115079516805674909565&rtpof=true&sd=true",
  },
];

const CmacProcesses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 float" />
          <div className="absolute bottom-40 left-32 h-24 w-24 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-10 float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Back button */}
          <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
              data-cursor="hover"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Resource Center</span>
            </Link>
          </div>

          <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            CMAC <span className="gradient-text">Processes</span>
          </h1>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
            Access comprehensive documentation and step-by-step guides for all company processes and procedures
          </p>
        </div>
      </section>

      {/* Processes Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <ModernResourceCard
                key={process.title}
                {...process}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CmacProcesses;