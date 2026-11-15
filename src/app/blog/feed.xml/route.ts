import { site } from "@/content/profile";
import { getPosts } from "@/lib/blog";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
    const posts = getPosts();
    const items = posts
        .map(
            (p) => `<item><title>${esc(p.title)}</title><link>${site.url}/blog/${p.slug}</link><guid isPermaLink="true">${site.url}/blog/${p.slug}</guid><pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate><description>${esc(p.summary)}</description></item>`,
        )
        .join("");
    const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${esc(site.name)} · Blog</title><link>${site.url}/blog</link><description>Engineering write-ups from production systems.</description><language>en</language><atom:link href="${site.url}/blog/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
    return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
