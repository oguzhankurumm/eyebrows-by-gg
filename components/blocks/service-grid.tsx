import { cn } from "@/lib/utils";

interface ServiceGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ServiceGrid({ children, columns = 3, className }: ServiceGridProps) {
  return (
    <div className={cn(
      "grid gap-8",
      columns === 2 && "md:grid-cols-2",
      columns === 3 && "md:grid-cols-3",
      columns === 4 && "md:grid-cols-2 lg:grid-cols-4",
      className
    )}>
      {children}
    </div>
  );
}
