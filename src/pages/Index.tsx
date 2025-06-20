import { Book, Calendar, FileText, HelpCircle, Users, Shield } from "lucide-react";
import { ClickableResourceCard } from "@/components/ClickableResourceCard";
import { ClickableSlackRollout } from "@/components/ClickableSlackRollout";
import { ClickableTicker } from "@/components/ClickableTicker";
import { ClickableHeroSection } from "@/components/ClickableHeroSection";
import { ClickableNotificationBanner } from "@/components/ClickableNotificationBanner";
import { useEffect, useState } from "react";

const resources = [
  {
    title: "Employee Handbook",
    description: "Essential guidelines and policies for all team members",
    icon: Book,
    link: "https://texastrustedroofing.com/Employee-handbook.pdf",
  },
  {
    title: "CMAC Processes",
    description: "Step-by-step guides for company processes and procedures",
    icon: FileText,
    link: "/cmac-processes",
  },
  {
    title: "Team Directory",
    description: "Connect with your colleagues and find contact information",
    icon: Users,
    link: "/team-directory",
  },
  {
    title: "CMAC Forms",
    description: "Custom forms created to streamline your workflow",
    icon: FileText,
    link: "/cmac-forms",
  },
  {
    title: "Company Calendar",
    description: "Stay updated with important dates and upcoming events",
    icon: Calendar,
    link: "/company-calendar",
  },
  {
    title: "Meet The Builders",
    description: "Get technical support and connect with our development team",
    icon: HelpCircle,
    link: "https://docs.google.com/document/d/1o3rb9Dp-HmQR1Gd02pLrxXksRSv0P85EZeUwqfM0pg8/edit?usp=sharing",
  },
  {
    title: "CMAC Safety",
    description: "Safety manuals, protocols, and regulatory compliance",
    icon: Shield,
    link: "/cmac-safety",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Notification Banner */}
      <ClickableNotificationBanner />
      
      {/* Hero Section */}
      <ClickableHeroSection
        title="CMAC Resource Center"
        subtitle="Your centralized hub for company resources, documentation, and seamless team collaboration"
        showSearch={true}
        onSearch={handleSearch}
      />

      {/* Ticker */}
      <ClickableTicker />

      {/* Main Content */}
      <main className="relative bg-black">
        {/* Services Section - matching clickable.agency style */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-agency-title text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="block">SERVICES</span>
              </h2>
            </div>

            {/* Resources Grid - styled like agency service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
              {resources.map((resource, index) => (
                <ClickableResourceCard
                  key={resource.title}
                  {...resource}
                  delay={index * 150}
                  index={index}
                />
              ))}
            </div>

            {/* Enhanced Integration Section */}
            <div className={`${isVisible ? 'animate-fade-in-up animate-delay-800' : 'opacity-0'}`}>
              {/* Section divider with red accent */}
              <div className="relative py-16 mb-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                </div>
                <div className="relative flex justify-center">
                  <div className="h-4 w-4 rounded-full bg-red-500" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-12">
                  {/* Enhanced content section */}
                  <div className="card-agency p-10">
                    <h3 className="text-agency-title text-3xl font-bold text-white mb-6">
                      STAY CONNECTED & PRODUCTIVE
                    </h3>
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                      Access real-time updates, collaborate seamlessly with your team, and stay informed 
                      about the latest company news, announcements, and important deadlines.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-black/50 rounded-2xl p-8 border border-red-500/20 group hover:border-red-500/40 transition-all duration-300">
                        <div className="h-14 w-14 bg-red-500/20 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-red-500 group-hover:text-black transition-all duration-300">
                          <FileText className="h-7 w-7 text-red-500 group-hover:text-black" />
                        </div>
                        <h4 className="font-bold text-white mb-3 text-lg text-agency-title">COMPREHENSIVE DOCUMENTATION</h4>
                        <p className="text-gray-400 leading-relaxed">Access detailed guides, procedures, and resources to excel in your role</p>
                      </div>
                      <div className="bg-black/50 rounded-2xl p-8 border border-red-500/20 group hover:border-red-500/40 transition-all duration-300">
                        <div className="h-14 w-14 bg-red-500/20 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-red-500 group-hover:text-black transition-all duration-300">
                          <Users className="h-7 w-7 text-red-500 group-hover:text-black" />
                        </div>
                        <h4 className="font-bold text-white mb-3 text-lg text-agency-title">SEAMLESS COLLABORATION</h4>
                        <p className="text-gray-400 leading-relaxed">Connect instantly with team members and collaborate on projects effortlessly</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <ClickableSlackRollout />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;