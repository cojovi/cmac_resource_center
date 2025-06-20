import { AlertTriangle, X, Zap } from 'lucide-react';
import { useState } from 'react';

export const ClickableNotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white animate-fade-in-down">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-black/20 flex items-center justify-center">
                <Zap className="h-4 w-4 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-2 md:space-y-0">
              <p className="font-bold text-lg flex items-center space-x-2 uppercase tracking-wider">
                <span>IMPORTANT UPDATES</span>
              </p>
              <div className="text-sm md:text-base space-y-1 md:space-y-0 md:space-x-8 md:flex">
                <span className="flex items-center space-x-2">
                  <span>🎫</span>
                  <span>IT REQUESTS MUST NOW USE THE IT TICKETING SYSTEM</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>SLACK ROLLOUT BEGINS NEXT WEEK - PARTICIPATION REQUIRED</span>
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 rounded-full p-2 hover:bg-black/20 transition-colors duration-200 group"
            data-cursor="hover"
          >
            <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};