import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare } from "lucide-react";
import { useEffect } from "react";

export const SlackRollout = () => {
  useEffect(() => {
    // Create and execute the Curator.io script exactly as provided
    const executeScript = () => {
      /* curator-feed-default-feed-layout */
      (function(){
        var i,e,d=document,s="script";
        i=d.createElement("script");
        i.async=1;
        i.charset="UTF-8";
        i.src="https://cdn.curator.io/published/23481364-d5fe-48a5-9326-1caeab5477b7.js";
        e=d.getElementsByTagName(s)[0];
        e.parentNode.insertBefore(i, e);
      })();
    };

    // Execute the script
    executeScript();
  }, []);

  return (
    <Card className="backdrop-blur-sm bg-card/90 border border-border/50">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Slack Rollout
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Place <div> tag where you want the feed to appear */}
        <div id="curator-feed-default-feed-layout">
          <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">
            Powered by Curator.io
          </a>
        </div>
      </CardContent>
    </Card>
  );
};