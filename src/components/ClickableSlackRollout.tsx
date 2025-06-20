import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, ExternalLink, Users, Zap, Bell } from "lucide-react";
import { useEffect } from "react";

export const ClickableSlackRollout = () => {
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
    <div className="card-agency p-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-br from-red-600 via-red-500 to-red-600 text-white relative overflow-hidden">
        {/* Floating crystals decoration */}
        <div className="absolute top-4 right-4 opacity-30">
          <div className="crystal crystal-small" />
        </div>
        <div className="absolute bottom-4 left-4 opacity-20">
          <div className="crystal crystal-small crystal-diamond" />
        </div>
        
        <div className="relative z-10">
          <CardTitle className="flex items-center gap-4 text-2xl font-bold text-agency-title">
            <div className="h-12 w-12 bg-black/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <MessageSquare className="h-6 w-6" />
            </div>
            <span>SLACK COMMUNICATION HUB</span>
          </CardTitle>
          <p className="text-red-100 mt-3 text-lg">
            STAY CONNECTED WITH REAL-TIME UPDATES AND SEAMLESS TEAM COLLABORATION
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="p-8 bg-black/90">
        {/* Slack rollout information */}
        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl p-6 border border-red-500/20">
            <h4 className="font-bold text-white mb-3 flex items-center space-x-2 text-agency-title">
              <Zap className="h-5 w-5 text-red-500" />
              <span>🚀 SLACK ROLLOUT COMING SOON</span>
            </h4>
            <p className="text-gray-400 leading-relaxed">
              We're implementing Slack for enhanced team communication and collaboration across all departments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-4 p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium text-green-400 uppercase tracking-wider">Enhanced team messaging & channels</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">File sharing & collaborative workspaces</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
              <div className="h-3 w-3 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2">
                <Bell className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">Real-time notifications & integrations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Curator feed */}
        <div className="border-t border-red-500/20 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-white text-lg text-agency-title">LATEST UPDATES</h4>
            <ExternalLink className="h-5 w-5 text-gray-400" />
          </div>
          
          {/* Place <div> tag where you want the feed to appear */}
          <div id="curator-feed-default-feed-layout" className="min-h-[200px]">
            <a href="https://curator.io" target="_blank" className="crt-logo crt-tag text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Powered by Curator.io
            </a>
          </div>
        </div>
      </CardContent>
    </div>
  );
};