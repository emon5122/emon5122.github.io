import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content", "blog");

export type Post = { slug: string; title: string; date: string; summary: string; html: string };

function parse(file: string): Post {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!m) throw new Error(`${file}: missing frontmatter`);
    const meta: Record<string, string> = {};
    for (const line of m[1].split(/\r?\n/)) {
        const i = line.indexOf(":");
        if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    }
    for (const k of ["title", "date", "summary"]) if (!meta[k]) throw new Error(`${file}: missing ${k}`);
    return {
        slug: file.replace(/\.md$/, ""),
        title: meta.title,
        date: meta.date,
        summary: meta.summary,
        html: marked.parse(m[2], { async: false }) as string,
    };
}

export function getPosts(): Post[] {
    return fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".md"))
        .map(parse)
        .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export const formatDate = (d: string) =>
    new Date(`${d}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
