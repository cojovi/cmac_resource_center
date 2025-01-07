import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Video } from "lucide-react";

const meetings = [
  {
    title: "BB Living BuilderLynx Zoom",
    description: "BB Living Builder Lynx Trade Partner Training, New Vendor Portal Informavtion. Zoom Meeting ID: 818 6647 4897",
    url: "https://bblivingresidential.zoom.us/j/81866474897",
  },
  {
    title: "NetSuite Kick Off Zoom",
    description: "Kick Off Zoom Call for ERP and FSM, and the strategies for efficient implementation",
    url: "https://oracle.zoom.us/j/3646455233?pwd=d0tSWFdDR1NXZWJob01LbFdQRTlFQT09&omn=93953692813",
  },
  {
    title: "NetSuite Field Service Management",
    description: "Hosted by Marianne Ma, our LEAD Technical POC at NetSuite",
    url: "https://oracle.zoom.us/j/3646455233?pwd=d0tSWFdDR1NXZWJob01LbFdQRTlFQT09&omn=93953692813",
  },
];

export const UpcomingMeetings = () => {
  return (
    <Card className="backdrop-blur-sm bg-card/90 border border-border/50">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Video className="h-5 w-5" />
          Upcoming Meetings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.title}
            className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
          >
            <h3 className="font-semibold text-primary mb-2">{meeting.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {meeting.description}
            </p>
            <Button
              variant="default"
              size="sm"
              className="w-full"
              asChild
            >
              <a href={meeting.url} target="_blank" rel="noopener noreferrer">
                Click Here
              </a>
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};