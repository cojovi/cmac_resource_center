import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CustomCursor } from "@/components/CustomCursor";
import { PremiumNavigation } from "@/components/PremiumNavigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import Index from "./pages/Index";
import CmacProcesses from "./pages/CmacProcesses";
import CmacSafety from "./pages/CmacSafety";
import TeamDirectory from "./pages/TeamDirectory";
import CmacForms from "./pages/CmacForms";
import CompanyCalendar from "./pages/CompanyCalendar";

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <div className="custom-cursor">
        <CustomCursor />
        <ScrollProgress />
        <HashRouter>
          <PremiumNavigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cmac-processes" element={<CmacProcesses />} />
            <Route path="/cmac-safety" element={<CmacSafety />} />
            <Route path="/team-directory" element={<TeamDirectory />} />
            <Route path="/cmac-forms" element={<CmacForms />} />
            <Route path="/company-calendar" element={<CompanyCalendar />} />
          </Routes>
        </HashRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);