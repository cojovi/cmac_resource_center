import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CompanyCalendar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 animate-fade-in">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Resource Center
        </Link>
      </Button>
      
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Company Calendar
          </h1>
          <p className="text-xl text-white/80">
            Stay updated with important dates and events
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 h-[800px]">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=admin%40cmacroofing.com&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            title="CMAC Company Calendar"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyCalendar;