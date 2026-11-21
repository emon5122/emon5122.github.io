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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.title,
        description: p.summary,
        datePublished: p.date,
        author: { "@type": "Person", name: site.name, url: site.url },
        mainEntityOfPage: `${site.url}/blog/${p.slug}`,
        ...(p.video && {
            video: {
                "@type": "VideoObject",
                name: p.title,
                description: p.summary,
                uploadDate: p.date,
                thumbnailUrl: `https://i.ytimg.com/vi/${p.video}/hqdefault.jpg`,
                contentUrl: `https://www.youtube.com/watch?v=${p.video}`,
                embedUrl: `https://www.youtube-nocookie.com/embed/${p.video}`,
            },
        }),
    };
    return (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" aria-hidden /> All posts
            </Link>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{p.title}</h1>
            <time dateTime={p.date} className="mt-2 block text-sm text-muted-foreground">
                {formatDate(p.date)} · {site.name}
            </time>
            {p.video && (
                <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                    <iframe
                        className="h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${p.video}`}
                        title={p.title}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            )}
            <div
                className="prose prose-zinc mt-8 max-w-none dark:prose-invert prose-a:text-primary prose-pre:overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: p.html }}
            />
        </article>
    );
}
