import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  image?: string;
  author?: string;
};

export type Post = {
  slug: string;
  metadata: PostMetadata;
  content: string;
};

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx?$/, '');
  
  // Check for both .md and .mdx
  let fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${realSlug}.md`);
  }
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    metadata: data as PostMetadata,
    content,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => (post1.metadata.date > post2.metadata.date ? -1 : 1));
  return posts;
}

export function getRelatedPosts(slug: string, count: number = 3): Post[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];
  
  const allPosts = getAllPosts().filter(p => p.slug !== slug);
  const currentTags = currentPost.metadata.tags || [];
  
  if (currentTags.length === 0) {
    return allPosts.slice(0, count);
  }

  const scoredPosts = allPosts.map(post => {
    const sharedTags = (post.metadata.tags || []).filter(tag => currentTags.includes(tag));
    return {
      post,
      score: sharedTags.length
    };
  });

  scoredPosts.sort((a, b) => b.score - a.score);
  
  return scoredPosts.map(item => item.post).slice(0, count);
}
