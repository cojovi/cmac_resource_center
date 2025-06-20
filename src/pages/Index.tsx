import { Book, Calendar, FileText, HelpCircle, Users, Shield } from "lucide-react";
import { PremiumResourceCard } from "@/components/PremiumResourceCard";
import { PremiumSlackRollout } from "@/components/PremiumSlackRollout";
import { PremiumTicker } from "@/components/PremiumTicker";
import { PremiumHeroSection } from "@/components/PremiumHeroSection";
import { PremiumNotificationBanner } from "@/components/PremiumNotificationBanner";
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
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Notification Banner */}
      <PremiumNotificationBanner />
      
      {/* Hero Section */}
      <PremiumHeroSection
        title="CMAC Resource Center"
        subtitle="Your centralized hub for company resources, documentation, and seamless team collaboration"
        showSearch={true}
        onSearch={handleSearch}
      />

      {/* Ticker */}
      <PremiumTicker />

      {/* Main Content */}
      <main className="relative">
        {/* Resources Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center justify-center mb-6">
                <div className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2 text-white text-sm font-semibold">
                  Quick Access
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Everything you need to
                <span className="block text-premium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  stay productive
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Access all your essential resources, connect with your team, and streamline your workflow 
                with our comprehensive resource center
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
              {resources.map((resource, index) => (
                <PremiumResourceCard
                  key={resource.title}
                  {...resource}
                  delay={index * 100}
                />
              ))}
            </div>

            {/* Enhanced Integration Section */}
            <div className={`${isVisible ? 'animate-fade-in-up animate-delay-800' : 'opacity-0'}`}>
              {/* Section divider */}
              <div className="relative py-16 mb-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
                <div className="relative flex justify-center">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-12">
                  {/* Enhanced content section */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-elegant border border-gray-100">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Stay Connected & Productive
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      Access real-time updates, collaborate seamlessly with your team, and stay informed 
                      about the latest company news, announcements, and important deadlines.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 group hover:shadow-medium transition-all duration-300">
                        <div className="h-14 w-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FileText className="h-7 w-7 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">Comprehensive Documentation</h4>
                        <p className="text-gray-600 leading-relaxed">Access detailed guides, procedures, and resources to excel in your role</p>
                      </div>
                      <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 group hover:shadow-medium transition-all duration-300">
                        <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Users className="h-7 w-7 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">Seamless Collaboration</h4>
                        <p className="text-gray-600 leading-relaxed">Connect instantly with team members and collaborate on projects effortlessly</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <PremiumSlackRollout />
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