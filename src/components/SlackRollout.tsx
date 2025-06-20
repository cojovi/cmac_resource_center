import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, ExternalLink } from "lucide-react";
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
    <div className="card-modern p-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <CardTitle className="flex items-center gap-3 text-xl font-bold">
          <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center">
            <MessageSquare className="h-5 w-5" />
          </div>
          <span>Slack Communication Hub</span>
        </CardTitle>
        <p className="text-purple-100 mt-2">
          Stay connected with real-time updates and team collaboration
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Slack rollout information */}
        <div className="space-y-4 mb-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">🚀 Slack Rollout Coming Soon</h4>
            <p className="text-sm text-gray-600">
              We're implementing Slack for better team communication and collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-800">Enhanced team messaging</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-blue-800">File sharing & collaboration</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-purple-800">Real-time notifications</span>
            </div>
          </div>
        </div>

        {/* Curator feed */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Latest Updates</h4>
            <ExternalLink className="h-4 w-4 text-gray-400" />
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