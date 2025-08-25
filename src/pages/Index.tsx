import { Book, Calendar, FileText, Users, Shield } from "lucide-react";
import { ModernResourceCard } from "@/components/ModernResourceCard";
import { SlackRollout } from "@/components/SlackRollout";
import { ModernTicker } from "@/components/ModernTicker";
import { HeroSection } from "@/components/HeroSection";
import { NotificationBanner } from "@/components/NotificationBanner";
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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Light Mode: Clean Simple Background */}
      <div className="dark:hidden fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 -z-20" />

      {/* Dark Mode: Enhanced animated background */}
      <div className="hidden dark:block fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-20">
        {/* Dynamic gradient overlays with better performance */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating geometric shapes - optimized */}
        <div className="absolute top-20 left-10 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/10 to-red-500/10 blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 h-32 w-32 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/10 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

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
      <main className="relative z-10">
        {/* Resources Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 relative bg-transparent">
          {/* Light Mode: Subtle background texture */}
          <div className="dark:hidden absolute inset-0 bg-gradient-to-b from-white/80 via-gray-50/50 to-white/80" />
          
          {/* Dark Mode: Enhanced section background */}
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-gray-900/20 via-gray-800/30 to-gray-900/20" />
          
          <div className="max-w-7xl mx-auto relative">
            {/* Section Header with improved responsive typography */}
            <div className={`text-center mb-12 md:mb-16 space-y-4 md:space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                <span className="dark:bg-gradient-to-r dark:from-white dark:via-blue-100 dark:to-purple-100 dark:bg-clip-text dark:text-transparent">
                  Quick Access Resources
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything you need to stay productive and connected with your team
              </p>
            </div>

            {/* Main Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side - Resource Cards and Stay Connected */}
              <div className="lg:col-span-2 space-y-8">
                {/* Resource Cards Grid (2 rows of 3) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.map((resource, index) => (
                    <div key={resource.title} className="h-full">
                      <ModernResourceCard
                        {...resource}
                        delay={index * 100}
                      />
                    </div>
                  ))}
                </div>

                {/* Stay Connected Section - Directly beneath the cards */}
                <div className={`${isVisible ? 'animate-fade-in-up animate-delay-800' : 'opacity-0'}`}>
                  <div className="card-modern p-6 md:p-8 group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="relative space-y-4 md:space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-all duration-300">
                        Stay Connected
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 dark:text-muted-foreground leading-relaxed">
                        Access real-time updates, collaborate with your team, and stay informed 
                        about the latest company news and announcements.
                      </p>
                      
                      {/* Feature cards with improved mobile layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="card-modern p-4 md:p-6 group/inner bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                          <div className="flex items-start space-x-4">
                            <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover/inner:scale-105 transition-transform duration-300 flex-shrink-0">
                              <FileText className="h-6 w-6 text-white" />
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-gray-900 dark:text-foreground">Documentation</h4>
                              <p className="text-sm text-gray-600 dark:text-muted-foreground leading-relaxed">
                                Access comprehensive guides and procedures
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="card-modern p-4 md:p-6 group/inner bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                          <div className="flex items-start space-x-4">
                            <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover/inner:scale-105 transition-transform duration-300 flex-shrink-0">
                              <Users className="h-6 w-6 text-white" />
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-gray-900 dark:text-foreground">Collaboration</h4>
                              <p className="text-sm text-gray-600 dark:text-muted-foreground leading-relaxed">
                                Connect with team members instantly
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Slack Component */}
              <div className="lg:col-span-1">
                <div className={`${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
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