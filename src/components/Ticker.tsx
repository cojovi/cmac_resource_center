import { useEffect, useState } from "react";
import { tickerItems } from "@/ticker/tickerContent";

export const Ticker = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition((prev) => (prev - 1) % (window.innerWidth * 2));
    }, 20);

    return () => clearInterval(animation);
  }, []);

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
      <div
        className="whitespace-nowrap inline-block animate-ticker"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
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