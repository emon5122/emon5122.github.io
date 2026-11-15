import { getPosts } from "@/lib/blog";
import { caseStudies, site } from "@/content/profile";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: site.url, changeFrequency: "monthly", priority: 1 },
        ...caseStudies.map((c) => ({
            url: `${site.url}/work/${c.slug}`,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
        { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
        ...getPosts().map((p) => ({
            url: `${site.url}/blog/${p.slug}`,
            lastModified: p.date,
            changeFrequency: "yearly" as const,
            priority: 0.6,
        })),
    ];
}
