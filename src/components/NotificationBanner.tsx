import { AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

export const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-500 text-white animate-fade-in-down z-[100]">
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="relative px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 animate-pulse" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-1 md:space-y-0">
              <p className="font-bold text-lg">IMPORTANT NOTICE</p>
              <div className="text-sm md:text-base space-y-1 md:space-y-0 md:space-x-6 md:flex">
                <span>🎫 IT requests must now use the IT ticketing system</span>
                <span>💬 Slack rollout begins next week - participation required</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 rounded-full p-2 hover:bg-white/20 transition-colors duration-200"
            data-cursor="hover"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};