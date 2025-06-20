interface SectionDividerProps {
  className?: string;
}

export const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  return (
    <div className={`relative py-16 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
      <div className="relative flex justify-center">
        <div className="h-3 w-3 rounded-full bg-gradient-primary" />
      </div>
    </div>
  );
};