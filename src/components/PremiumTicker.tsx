import { tickerItems } from "@/ticker/tickerContent";
import { Sparkles } from "lucide-react";

export const PremiumTicker = () => {
  const getTypeStyles = (type: string) => {
    switch (type) {
      case "info":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
      case "event":
        return "bg-gradient-to-r from-purple-500 to-purple-600 text-white";
      case "alert":
        return "bg-gradient-to-r from-orange-500 to-orange-600 text-white";
      case "reminder":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white";
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white border-y border-gray-100 shadow-subtle">
      <div className="relative py-5">
        {/* Ticker content */}
        <div className="animate-ticker flex whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="mx-8 flex items-center space-x-4"
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                <span className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold ${getTypeStyles(item.type)} shadow-soft`}>
                  {item.type.toUpperCase()}
                </span>
                <span className="text-gray-800 font-medium text-sm">
                  {item.text}
                </span>
              </div>
              <div className="h-1 w-1 rounded-full bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white to-transparent pointer-events-none" />
    </div>
  );
};