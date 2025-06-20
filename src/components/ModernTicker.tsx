import { tickerItems } from "@/ticker/tickerContent";

export const ModernTicker = () => {
  const getTypeStyles = (type: string) => {
    switch (type) {
      case "info":
        return "bg-blue-500 text-white";
      case "event":
        return "bg-purple-500 text-white";
      case "alert":
        return "bg-orange-500 text-white";
      case "reminder":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white border-y border-gray-200 shadow-soft">
      <div className="relative py-4">
        <div className="animate-ticker flex whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="mx-8 flex items-center space-x-3"
            >
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getTypeStyles(item.type)}`}>
                {item.type.toUpperCase()}
              </span>
              <span className="text-gray-800 font-medium">
                {item.text}
              </span>
              <span className="text-gray-300">•</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
};