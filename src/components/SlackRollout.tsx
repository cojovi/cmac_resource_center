import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const FEED_ID = "curator-feed-default-feed-layout";
const REQUIRED_HASHTAG = "#resourcecenter";

export const SlackRollout = () => {
  const [hasMatchingPosts, setHasMatchingPosts] = useState(true);

  useEffect(() => {
    const executeScript = () => {
      (function () {
        const d = document;
        const i = d.createElement("script");
        i.async = true;
        i.charset = "UTF-8";
        i.src = "https://cdn.curator.io/published/23481364-d5fe-48a5-9326-1caeab5477b7.js";
        const e = d.getElementsByTagName("script")[0];
        e.parentNode?.insertBefore(i, e);
      })();
    };

    const applyHashtagFilter = () => {
      const container = document.getElementById(FEED_ID);
      if (!container) return;

      const possiblePostNodes = Array.from(
        container.querySelectorAll<HTMLElement>(".crt-post, .crt-feed-post, article, li")
      );

      if (possiblePostNodes.length === 0) return;

      let matches = 0;
      possiblePostNodes.forEach((node) => {
        const text = (node.textContent || "").toLowerCase();
        const includesRequiredTag = text.includes(REQUIRED_HASHTAG);
        node.style.display = includesRequiredTag ? "" : "none";
        if (includesRequiredTag) {
          matches += 1;
        }
      });

      setHasMatchingPosts(matches > 0);
    };

    executeScript();

    const container = document.getElementById(FEED_ID);
    const observer = new MutationObserver(() => {
      applyHashtagFilter();
    });

    if (container) {
      observer.observe(container, { childList: true, subtree: true });
    }

    const interval = window.setInterval(applyHashtagFilter, 1500);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="card-modern p-0 overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <CardTitle className="flex items-center gap-3 text-xl font-bold">
          <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center">
            <MessageSquare className="h-5 w-5" />
          </div>
          <span>Slack Communication Hub</span>
        </CardTitle>
        <p className="text-purple-100 mt-2">Showing Slack updates tagged with #ResourceCenter</p>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4 mb-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">📌 Tag to Appear in Feed</h4>
            <p className="text-sm text-gray-600">Only posts containing #ResourceCenter are displayed below.</p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Latest #ResourceCenter Updates</h4>
            <ExternalLink className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          </div>

          <div id={FEED_ID} className="min-h-[200px] bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
            <a
              href="https://curator.io"
              target="_blank"
              rel="noopener noreferrer"
              className="crt-logo crt-tag text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Powered by Curator.io
            </a>
          </div>

          {!hasMatchingPosts && (
            <p className="text-sm text-gray-600 mt-4">
              No posts with #ResourceCenter were found yet. Add that hashtag in Slack messages to show them here.
            </p>
          )}
        </div>
      </CardContent>
    </div>
  );
};
