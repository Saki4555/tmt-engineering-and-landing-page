import { cn } from "@/lib/utils";

export const SectionContainer = ({ children, className }) => {
  return (
    <div
      className={cn("mx-auto max-w-6xl w-full px-5  sm:px-8 lg:px-14 xl:px-4", className)}
    >
      {children}
    </div>
  );
};
