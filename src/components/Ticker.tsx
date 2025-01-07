import { tickerItems } from "@/ticker/tickerContent";

export const Ticker = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "info":
        return "text-sky-400";
      case "event":
        return "text-primary-light";
      case "alert":
        return "text-orange-400";
      case "reminder":
        return "text-emerald-400";
      default:
        return "text-white";
    }
  };

  return (
    <div className="w-full bg-primary-dark/80 backdrop-blur-sm border-y border-primary/20 overflow-hidden py-2">
      <div className="whitespace-nowrap inline-block animate-ticker">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span
            key={`${item.id}-${index}`}
            className={`inline-block mx-8 font-medium ${getTypeColor(item.type)}`}
          >
            {item.text}
            <span className="text-primary-light/50 mx-4">|</span>
          </span>
        ))}
      </div>
    </div>
  );
};