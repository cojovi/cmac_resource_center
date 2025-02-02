import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CmacProcesses from "./pages/CmacProcesses";
import CmacSafety from "./pages/CmacSafety";
import TeamDirectory from "./pages/TeamDirectory";
import CmacForms from "./pages/CmacForms";
import CompanyCalendar from "./pages/CompanyCalendar";
import NetsuiteDetails from "./pages/NetsuiteDetails";

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cmac-processes" element={<CmacProcesses />} />
          <Route path="/cmac-safety" element={<CmacSafety />} />
          <Route path="/team-directory" element={<TeamDirectory />} />
          <Route path="/cmac-forms" element={<CmacForms />} />
          <Route path="/company-calendar" element={<CompanyCalendar />} />
          <Route path="/netsuite-details" element={<NetsuiteDetails />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);