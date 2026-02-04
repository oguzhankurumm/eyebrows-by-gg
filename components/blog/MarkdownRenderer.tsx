import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogCTA } from "./BlogCTA";
import Image from "next/image";
import Link from "next/link";

const components = {
  BlogCTA,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Image: (props: any) => <Image className="rounded-xl border" alt={props.alt || ""} {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  a: ({ href, children, ...props }: any) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};

interface MarkdownRendererProps {
  source: string;
}

export function MarkdownRenderer({ source }: MarkdownRendererProps) {
  return (
    <div className="prose prose-stone prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
