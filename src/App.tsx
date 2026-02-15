import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { HashRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { CustomCursor } from "@/components/CustomCursor";
import { ModernNavigation } from "@/components/ModernNavigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import Index from "./pages/Index";
import CmacProcesses from "./pages/CmacProcesses";
import CmacSafety from "./pages/CmacSafety";
import TeamDirectory from "./pages/TeamDirectory";
import CmacForms from "./pages/CmacForms";
import CompanyCalendar from "./pages/CompanyCalendar";
import SlackTutorials from "./pages/SlackTutorials";
import BuilderDirectory from "./pages/BuilderDirectory";
import CmacTools from "./pages/CmacTools";

const queryClient = new QueryClient();

const CmacToolsButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/cmac-tools') {
    return null;
  }

  return (
    <div className="fixed top-24 right-6 z-50 animate-fade-in-up animate-delay-300">
      <button
        onClick={() => navigate('/cmac-tools')}
        className="cta-tools-button group relative px-7 py-4 lg:px-9 lg:py-5 font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-2xl"
        data-cursor="hover"
        aria-label="Navigate to CMAC Tools"
      >
        <span className="relative z-10 flex items-center gap-2.5 text-base lg:text-xl">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
          </svg>
          CMAC Tools
          <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>
    </div>
  );
};

const AppContent = () => {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <ModernNavigation />
      <CmacToolsButton />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cmac-processes" element={<CmacProcesses />} />
        <Route path="/cmac-safety" element={<CmacSafety />} />
        <Route path="/team-directory" element={<TeamDirectory />} />
        <Route path="/cmac-forms" element={<CmacForms />} />
        <Route path="/company-calendar" element={<CompanyCalendar />} />
        <Route path="/slack-tutorials" element={<SlackTutorials />} />
        <Route path="/builder-directory" element={<BuilderDirectory />} />
        <Route path="/cmac-tools" element={<CmacTools />} />
      </Routes>
    </>
  );
};

export default () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={false}
      storageKey="cmac-theme"
    >
      <TooltipProvider>
        <Toaster />
        <div className="custom-cursor">
          <HashRouter>
            <AppContent />
          </HashRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);