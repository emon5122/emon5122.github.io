import { formatDate, getPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
    description: "Engineering write-ups from production systems.",
    alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/feed.xml" } },
};

export default function BlogIndex() {
    const posts = getPosts();
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
            <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
            <ul className="mt-8 divide-y">
                {posts.map((p) => (
                    <li key={p.slug} className="py-6">
                        <time dateTime={p.date} className="text-sm text-muted-foreground">
                            {formatDate(p.date)}
                        </time>
                        <h2 className="mt-1 text-xl font-semibold tracking-tight">
                            <Link href={`/blog/${p.slug}`} className="hover:text-primary">
                                {p.title}
                            </Link>
                        </h2>
                        <p className="mt-2 text-muted-foreground">{p.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
