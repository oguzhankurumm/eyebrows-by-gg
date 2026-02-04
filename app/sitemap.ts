import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://eyebrowsbygg.com'

import { getAllPosts } from "@/lib/blog";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  
  const blogUrls = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const serviceUrls = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceUrls,
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8, // Adjusted slightly lower than services
    },
    ...blogUrls,
  ]
}
