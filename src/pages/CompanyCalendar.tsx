import { Calendar, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanyCalendar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-secondary p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <Button variant="outline" asChild className="mb-6 bg-white/90 hover:bg-white">
          <Link to="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Resource Center
          </Link>
        </Button>

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Company Calendar
          </h1>
          <p className="text-xl text-white/80">
            Stay updated with important dates and events
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-card/95 border border-border/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              CMAC Company Calendar
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full">
              <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 shadow-lg">
                <iframe 
                  src="https://calendar.google.com/calendar/embed?src=admin%40cmacroofing.com&ctz=America%2FChicago" 
                  style={{ border: 0 }} 
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  scrolling="no"
                  className="w-full min-h-[600px] lg:min-h-[700px]"
                  title="CMAC Company Calendar"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Need to add an event or have calendar access issues?
                </p>
                <Button asChild variant="outline">
                  <a 
                    href="https://calendar.google.com/calendar/embed?src=admin%40cmacroofing.com&ctz=America%2FChicago" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Open in Google Calendar
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="backdrop-blur-sm bg-card/90 border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a 
                    href="https://calendar.google.com/calendar/ical/admin%40cmacroofing.com/public/basic.ics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📅 Subscribe to Calendar (iCal)
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/cmac-forms">
                    📝 Request Calendar Access
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/90 border border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Calendar Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Company Meetings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Training Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Important Deadlines</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Company Events</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompanyCalendar;