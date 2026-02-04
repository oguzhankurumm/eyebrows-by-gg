import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Beauty Blog & Expert Tips | Eyebrows By GG",
  description: "Expert advice on permanent makeup care, brow trends, and skin health from Milford's trusted beauty specialists. Read our latest articles.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section className="py-24 md:py-32 bg-muted/30">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground text-balance">
            Journal
          </h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground text-lg md:text-xl font-light">
            Expert insights on permanent makeup, skin care, and beauty trends.
          </p>
        </div>
      </Section>

      <Section>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/30 rounded-[2.5rem] border border-dashed border-border">
            <h3 className="font-serif text-2xl font-medium mb-2">No posts yet</h3>
            <p className="text-muted-foreground">Check back soon for our first article!</p>
          </div>
        )}
      </Section>
    </>
  );
}
