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
    <div className="min-h-screen bg-background transition-colors duration-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        {/* Dynamic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/50 dark:via-purple-950/30 dark:to-pink-950/50 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-500/20 dark:to-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-gradient-to-br from-pink-400/10 to-red-400/10 dark:from-pink-500/20 dark:to-red-500/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-green-400/5 to-teal-400/5 dark:from-green-500/15 dark:to-teal-500/15 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
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
      <main className="relative">
        {/* Resources Section */}
        <section className="py-24 px-6 relative">
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/50" />
          
          <div className="max-w-7xl mx-auto relative">
            {/* Section Header */}
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                Quick Access Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to stay productive and connected with your team
              </p>
            </div>

            {/* Resources Grid with enhanced spacing and effects */}
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
                  {/* Enhanced connection section */}
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-soft transition-colors duration-300 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
                    
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-foreground mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Stay Connected
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Access real-time updates, collaborate with your team, and stay informed 
                        about the latest company news and announcements.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft transition-colors duration-300 group hover:shadow-medium">
                          <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FileText className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2">Documentation</h4>
                          <p className="text-sm text-muted-foreground">Access comprehensive guides and procedures</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft transition-colors duration-300 group hover:shadow-medium">
                          <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-foreground mb-2">Collaboration</h4>
                          <p className="text-sm text-muted-foreground">Connect with team members instantly</p>
                        </div>
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