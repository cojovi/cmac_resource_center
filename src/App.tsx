import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { HashRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider 
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange={false}
      storageKey="cmac-theme"
    >
      <TooltipProvider>
        <Toaster />
        <div className="custom-cursor">
          <CustomCursor />
          <ScrollProgress />
          <HashRouter>
            <ModernNavigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cmac-processes" element={<CmacProcesses />} />
              <Route path="/cmac-safety" element={<CmacSafety />} />
              <Route path="/team-directory" element={<TeamDirectory />} />
              <Route path="/cmac-forms" element={<CmacForms />} />
              <Route path="/company-calendar" element={<CompanyCalendar />} />
              <Route path="/slack-tutorials" element={<SlackTutorials />} />
            </Routes>
          </HashRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);