import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  avatarSrc?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("h-full border-none shadow-sm bg-background/60", className)}>
      <CardHeader>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"
              )}
            />
          ))}
        </div>
        <blockquote className="text-lg font-medium leading-relaxed italic text-foreground/80">
          &quot;{quote}&quot;
        </blockquote>
      </CardHeader>
      <CardFooter className="flex items-center gap-4 pt-4 mt-auto">
        {avatarSrc ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted">
            <Image
              src={avatarSrc}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-serif font-bold">{author}</div>
          {role && <div className="text-sm text-muted-foreground">{role}</div>}
        </div>
      </CardFooter>
    </Card>
  );
}
