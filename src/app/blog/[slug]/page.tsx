import { formatDate, getPost, getPosts } from "@/lib/blog";
import { site } from "@/content/profile";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const p = getPost((await params).slug);
    if (!p) return {};
    return {
        title: p.title,
        description: p.summary,
        alternates: { canonical: `/blog/${p.slug}` },
        openGraph: {
            type: "article",
            title: p.title,
            description: p.summary,
            url: `/blog/${p.slug}`,
            publishedTime: p.date,
            authors: [site.name],
        },
        twitter: { card: "summary_large_image", title: p.title, description: p.summary },
    };
}

export default async function PostPage({ params }: Props) {
    const p = getPost((await params).slug);
    if (!p) notFound();
    return (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" aria-hidden /> All posts
            </Link>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{p.title}</h1>
            <time dateTime={p.date} className="mt-2 block text-sm text-muted-foreground">
                {formatDate(p.date)} · {site.name}
            </time>
            <div
                className="prose prose-zinc mt-8 max-w-none dark:prose-invert prose-a:text-primary prose-pre:overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: p.html }}
            />
        </article>
    );
}
