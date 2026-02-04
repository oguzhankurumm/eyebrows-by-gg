import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TrustBarProps {
  items: TrustItem[];
  className?: string;
}

export function TrustBar({ items, className }: TrustBarProps) {
  return (
    <div className={cn("py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center gap-3 flex-1">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
            <item.icon className="w-6 h-6 stroke-[1.5]" />
          </div>
          <h3 className="font-display font-bold text-lg">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
