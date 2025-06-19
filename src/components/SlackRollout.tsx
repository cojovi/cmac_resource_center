import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare } from "lucide-react";
import { useEffect } from "react";

export const SlackRollout = () => {
  useEffect(() => {
    // Load the Curator.io script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.async = true;
    script.src = 'https://cdn.curator.io/published/23481364-d5fe-48a5-9326-1caeab5477b7.js';
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
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
        <div id="curator-feed-default-feed-layout">
          <a 
            href="https://curator.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="crt-logo crt-tag"
          >
            Powered by Curator.io
          </a>
        </div>
      </CardContent>
    </Card>
  );
};