import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, ExternalLink, Users, Zap, Bell } from "lucide-react";
import { useEffect } from "react";

export const PremiumSlackRollout = () => {
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
    <div className="card-premium p-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="relative z-10">
          <CardTitle className="flex items-center gap-4 text-2xl font-bold">
            <div className="h-12 w-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <MessageSquare className="h-6 w-6" />
            </div>
            <span>Slack Communication Hub</span>
          </CardTitle>
          <p className="text-purple-100 mt-3 text-lg">
            Stay connected with real-time updates and seamless team collaboration
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="p-8">
        {/* Slack rollout information */}
        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
              <Zap className="h-5 w-5 text-purple-600" />
              <span>🚀 Slack Rollout Coming Soon</span>
            </h4>
            <p className="text-gray-700 leading-relaxed">
              We're implementing Slack for enhanced team communication and collaboration across all departments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-2xl border border-green-100">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-green-700" />
                <span className="text-sm font-medium text-green-800">Enhanced team messaging & channels</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-medium text-blue-800">File sharing & collaborative workspaces</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
              <div className="h-3 w-3 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2">
                <Bell className="h-4 w-4 text-purple-700" />
                <span className="text-sm font-medium text-purple-800">Real-time notifications & integrations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Curator feed */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-gray-900 text-lg">Latest Updates</h4>
            <ExternalLink className="h-5 w-5 text-gray-400" />
          </div>
          
          {/* Place <div> tag where you want the feed to appear */}
          <div id="curator-feed-default-feed-layout" className="min-h-[200px]">
            <a href="https://curator.io" target="_blank" className="crt-logo crt-tag text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Powered by Curator.io
            </a>
          </div>
        </div>
      </CardContent>
    </div>
  );
};