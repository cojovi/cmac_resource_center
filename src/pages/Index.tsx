import { Book, Calendar, FileText, HelpCircle, Users, Shield } from "lucide-react";
import { ModernResourceCard } from "@/components/ModernResourceCard";
import { SlackRollout } from "@/components/SlackRollout";
import { ModernTicker } from "@/components/ModernTicker";
import { HeroSection } from "@/components/HeroSection";
import { NotificationBanner } from "@/components/NotificationBanner";
import { SectionDivider } from "@/components/SectionDivider";
import { SearchBar } from "@/components/SearchBar";
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
    // Implement search functionality
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Notification Banner */}
      <div data-notification-banner>
        <NotificationBanner />
      </div>
      
      {/* Hero Section */}
      <HeroSection
        title="CMAC Resource Center"
        subtitle="Your centralized hub for company resources, documentation, and team collaboration"
        showSearch={true}
        onSearch={handleSearch}
      />

      {/* Ticker */}
      <ModernTicker />

      {/* Main Content */}
      <main className="relative">
        {/* Resources Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quick Access Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to stay productive and connected with your team
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {resources.map((resource, index) => (
                <ModernResourceCard
                  key={resource.title}
                  {...resource}
                  delay={index * 100}
                />
              ))}
            </div>

            {/* Slack Integration Section */}
            <div className={`${isVisible ? 'animate-fade-in-up animate-delay-800' : 'opacity-0'}`}>
              <SectionDivider />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-8">
                  {/* Additional content can go here */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-soft">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Stay Connected
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Access real-time updates, collaborate with your team, and stay informed 
                      about the latest company news and announcements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-6 shadow-soft">
                        <div className="h-12 w-12 bg-gradient-primary rounded-xl mb-4 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                        <p className="text-sm text-gray-600">Access comprehensive guides and procedures</p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-soft">
                        <div className="h-12 w-12 bg-gradient-secondary rounded-xl mb-4 flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
                        <p className="text-sm text-gray-600">Connect with team members instantly</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <SlackRollout />
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