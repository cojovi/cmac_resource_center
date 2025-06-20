import { tickerItems } from "@/ticker/tickerContent";

export const ClickableTicker = () => {
  const getTypeStyles = (type: string) => {
    switch (type) {
      case "info":
        return "bg-blue-600/80 text-white";
      case "event":
        return "bg-purple-600/80 text-white";
      case "alert":
        return "bg-red-600/80 text-white";
      case "reminder":
        return "bg-green-600/80 text-white";
      default:
        return "bg-gray-600/80 text-white";
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-black/50 border-y border-red-500/20 backdrop-blur-sm">
      <div className="relative py-4">
        {/* Ticker content */}
        <div className="animate-ticker flex whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="mx-12 flex items-center space-x-4"
            >
              <div className="flex items-center space-x-4">
                <span className={`inline-flex items-center rounded-lg px-3 py-1 text-xs font-bold uppercase ${getTypeStyles(item.type)}`}>
                  {item.type}
                </span>
                <span className="text-white font-medium text-sm">
                  {item.text}
                </span>
              </div>
              <div className="h-1 w-1 rounded-full bg-red-500" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black via-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black via-black to-transparent pointer-events-none" />
    </div>
  );
};