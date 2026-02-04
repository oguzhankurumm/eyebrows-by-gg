import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: Post;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  const imageSrc = post.metadata.image || "/images/stock/blog/blog-1.jpg";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col bg-white rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl hover:border-border/80 transition-all duration-500",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={post.metadata.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">
        <div className="flex flex-wrap gap-2">
          {post.metadata.tags && post.metadata.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="font-serif text-2xl font-medium group-hover:text-primary transition-colors leading-tight">
          {post.metadata.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1 font-light">
          {post.metadata.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
          <time dateTime={post.metadata.date} className="text-sm text-muted-foreground">
            {new Date(post.metadata.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            Read Article <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
