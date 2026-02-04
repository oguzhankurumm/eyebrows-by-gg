import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/blog";
import { services } from "@/lib/services";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogCard } from "@/components/blog/BlogCard";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((file) => ({
    slug: file.replace(/\.mdx?$/, ""),
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const { title, description, image, date } = post.metadata;
  const ogImage = image || "/og-blog-default.jpg"; // Fallback image

  return {
    title: `${title} | Eyebrows by GG Blog`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      publishedTime: date,
      url: `/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  
  // Find related services based on tags
  const postTags = post.metadata.tags || [];
  const relatedServices = services.filter(service => {
    // Check if any service tag is present in post tags (case insensitive)
    const serviceTags = service.tags.map(t => t.toLowerCase());
    const postTagsLower = postTags.map(t => t.toLowerCase());
    
    // Check for tag overlap
    const hasTagOverlap = serviceTags.some(t => postTagsLower.some(pt => pt.includes(t) || t.includes(pt)));
    
    // Check if service title is mentioned in tags
    const titleMatch = postTagsLower.some(pt => service.title.toLowerCase().includes(pt));
    
    return hasTagOverlap || titleMatch;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.date,
    dateModified: post.metadata.date,
    description: post.metadata.description,
    image: post.metadata.image,
    author: {
      "@type": "Person",
      name: post.metadata.author || "Eyebrows by GG",
    },
  };

  return (
    <article className="min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Section width="narrow">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-4">
            <Calendar className="size-4" />
            <time dateTime={post.metadata.date}>
              {new Date(post.metadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.metadata.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {post.metadata.description}
          </p>
        </header>

        <div className="mb-16">
          <MarkdownRenderer source={post.content} />
        </div>

        {relatedServices.length > 0 && (
          <div className="mb-12 p-8 bg-muted/30 rounded-2xl border">
            <h3 className="font-serif text-2xl font-bold mb-6">Related Services</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedServices.map((service) => (
                <Link 
                  key={service.slug} 
                  href={`/services/${service.slug}`}
                  className="group block p-4 bg-background border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                  <span className="text-xs font-medium text-primary mt-3 inline-block">
                    View Service →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <BlogCTA variant="card" />

        {relatedPosts.length > 0 && (
          <div className="mt-24 pt-12 border-t">
            <h2 className="font-serif text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.slice(0, 2).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}
      </Section>
    </article>
  );
}
