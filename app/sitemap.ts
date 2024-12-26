import blogPosts from "@/data/blog.json";
import popularPosts from "@/data/popular-articles.json";
import properties from "@/data/properties.json";
import recentPosts from "@/data/recent-articles.json";
import type { MetadataRoute } from "next";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const links = [
    {
      url: `${baseURL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseURL}/faqs`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseURL}/blog`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseURL}/blog/recent`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseURL}/properties`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];

  blogPosts.forEach((post) => {
    links.push({
      url: `${baseURL}/blog/${post.slug}`,
      lastModified: new Date(),
      priority: 0.5,
    });
  });

  popularPosts.forEach((post) => {
    links.push({
      url: `${baseURL}/blog/${post.slug}`,
      lastModified: new Date(),
      priority: 0.5,
    });
  });

  recentPosts.forEach((post) => {
    links.push({
      url: `${baseURL}/blog/${post.slug}`,
      lastModified: new Date(),
      priority: 0.5,
    });
  });

  properties.forEach((property) => {
    links.push({
      url: `${baseURL}/properties/${property.id}`,
      lastModified: new Date(),
      priority: 0.5,
    });
  });

  return links;
}
