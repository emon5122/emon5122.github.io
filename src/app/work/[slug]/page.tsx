import { FlowDiagram } from "@/components/flow-diagram";
import { caseStudies, getCaseStudy, site } from "@/content/profile";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const c = getCaseStudy((await params).slug);
    if (!c) return {};
    return {
        title: c.title,
        description: c.summary,
        alternates: { canonical: `/work/${c.slug}` },
        openGraph: { type: "article", title: c.title, description: c.summary, url: `/work/${c.slug}` },
        twitter: { card: "summary_large_image", title: c.title, description: c.summary },
    };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mt-12">
            <h2 className="text-xl font-bold tracking-tight">{title}</h2>
            <div className="mt-4">{children}</div>
        </section>
    );
}

function List({ items }: { items: string[] }) {
    return (
        <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
            {items.map((i) => (
                <li key={i}>{i}</li>
            ))}
        </ul>
    );
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const c = getCaseStudy(slug);
    if (!c) notFound();
    const index = caseStudies.indexOf(c);
    const next = caseStudies[(index + 1) % caseStudies.length];

    return (
        <article className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
            <Link
                href="/#work"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" aria-hidden /> All work
            </Link>
            <p className="mt-8 text-sm font-medium uppercase tracking-wider text-primary">
                Case study 0{index + 1}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{c.title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{c.summary}</p>

            <dl className="mt-8 grid grid-cols-3 gap-4 rounded-xl border bg-muted/30 p-5">
                {c.highlights.map((m) => (
                    <div key={m.label}>
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="text-xl font-bold sm:text-3xl">{m.value}</dd>
                        <dd className="text-xs text-muted-foreground sm:text-sm">{m.label}</dd>
                    </div>
                ))}
            </dl>

            <div className="max-w-3xl">
                <Section title="Problem">
                    <p className="leading-relaxed text-muted-foreground">{c.problem}</p>
                </Section>
                <Section title="Constraints">
                    <List items={c.constraints} />
                </Section>
                <Section title="What I built and led">
                    <List items={c.built} />
                </Section>
            </div>

            <Section title="Architecture">
                <FlowDiagram id={c.slug} architecture={c.architecture} />
            </Section>

            <div className="max-w-3xl">
                <Section title="Impact">
                    <List items={c.impact} />
                    {c.impactNote && <p className="mt-3 text-xs text-muted-foreground">{c.impactNote}</p>}
                    <p className="mt-6 leading-relaxed">
                        <span className="font-semibold">Transfers to: </span>
                        <span className="text-muted-foreground">{c.transferable}</span>
                    </p>
                </Section>
                <Section title="Stack">
                    <ul className="flex flex-wrap gap-2">
                        {c.stack.map((s) => (
                            <li key={s} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                                {s}
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>

            <div className="mt-16 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
                <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                    <Mail className="h-4 w-4" aria-hidden /> Talk to me about this: {site.email}
                </a>
                <Link
                    href={`/work/${next.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary"
                >
                    Next: {next.title} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
            </div>
        </article>
    );
}
