import {
    caseStudies,
    education,
    experience,
    moreWork,
    site,
    skills,
} from "@/content/profile";
import { ArrowRight, ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.jobTitle,
    description: site.summary,
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    sameAs: [site.links.github, site.links.linkedin],
    knowsAbout: site.knowsAbout,
    worksFor: { "@type": "Organization", name: experience[0].company },
    alumniOf: { "@type": "CollegeOrUniversity", name: education[0].school },
};

function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
    return (
        <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</p>
            <h2 id={id} className="mt-1 scroll-mt-20 text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
            </h2>
        </div>
    );
}

const cta =
    "inline-flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:pt-24">
                <p className="text-sm text-muted-foreground">{site.location}</p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">{site.name}</h1>
                <p className="mt-4 text-lg font-medium text-primary sm:text-xl">{site.headline}</p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {site.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href={site.links.resume}
                        className={`${cta} bg-primary text-primary-foreground hover:bg-primary/90`}
                    >
                        <FileText className="h-4 w-4" aria-hidden /> Resume
                    </a>
                    <a href={`mailto:${site.email}`} className={`${cta} border hover:bg-accent`}>
                        <Mail className="h-4 w-4" aria-hidden /> {site.email}
                    </a>
                    <a href={site.links.github} className={`${cta} border hover:bg-accent`}>
                        <Github className="h-4 w-4" aria-hidden /> GitHub
                    </a>
                    <a href={site.links.linkedin} className={`${cta} border hover:bg-accent`}>
                        <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                    </a>
                </div>
            </section>

            {/* Featured case studies */}
            <section aria-labelledby="work" className="border-t bg-muted/30">
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <SectionHeading id="work" eyebrow="Featured work" title="Case studies" />
                    <ol className="grid gap-6 md:grid-cols-2">
                        {caseStudies.map((c, i) => (
                            <li key={c.slug}>
                                <Link
                                    href={`/work/${c.slug}`}
                                    className="group flex h-full flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    <span className="text-sm font-medium text-muted-foreground">
                                        0{i + 1}
                                    </span>
                                    <h3 className="mt-2 text-lg font-semibold leading-snug">{c.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {c.summary}
                                    </p>
                                    <dl className="mt-5 grid grid-cols-3 gap-3 border-t pt-4">
                                        {c.highlights.map((m) => (
                                            <div key={m.label}>
                                                <dt className="sr-only">{m.label}</dt>
                                                <dd className="text-base font-bold sm:text-lg">{m.value}</dd>
                                                <dd className="text-xs leading-snug text-muted-foreground">
                                                    {m.label}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                    <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-primary">
                                        Read the case study
                                        <ArrowRight
                                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                            aria-hidden
                                        />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* More work */}
            <section aria-labelledby="more-work" className="border-t">
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <SectionHeading id="more-work" eyebrow="Also" title="More work" />
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {moreWork.map((p) => (
                            <li key={p.name}>
                                <a
                                    href={p.href}
                                    className="group flex h-full flex-col rounded-xl border p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-semibold">{p.name}</h3>
                                        <ArrowUpRight
                                            className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary"
                                            aria-hidden
                                        />
                                    </div>
                                    {p.label && (
                                        <span className="mt-2 w-fit rounded-full border border-primary/40 px-2 py-0.5 text-xs font-medium text-primary">
                                            {p.label}
                                        </span>
                                    )}
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                                        {p.description}
                                    </p>
                                    <p className="mt-4 text-xs text-muted-foreground">{p.tags.join(" · ")}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Experience */}
            <section aria-labelledby="experience" className="border-t bg-muted/30">
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <SectionHeading id="experience" eyebrow="Career" title="Experience" />
                    <ol className="relative space-y-10 border-l pl-6">
                        {experience.map((r) => (
                            <li key={r.company} className="relative">
                                <span
                                    className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
                                    aria-hidden
                                />
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                    <h3 className="font-semibold">
                                        {r.title} <span className="text-muted-foreground">· {r.company}</span>
                                    </h3>
                                    <p className="shrink-0 text-sm text-muted-foreground">{r.period}</p>
                                </div>
                                {r.location && <p className="text-sm text-muted-foreground">{r.location}</p>}
                                {r.context && <p className="mt-3 text-sm leading-relaxed">{r.context}</p>}
                                {r.bullets.length > 0 && (
                                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                                        {r.bullets.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ol>
                    <div className="mt-10">
                        <h3 className="font-semibold">Education</h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                            {education.map((e) => (
                                <li key={e.school}>
                                    {e.degree}, {e.school} ({e.year})
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section aria-labelledby="skills" className="border-t">
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <SectionHeading id="skills" eyebrow="Toolbox" title="Skills" />
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {skills.map((g) => (
                            <div key={g.group}>
                                <h3 className="text-sm font-semibold">{g.group}</h3>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {g.items.map((s) => (
                                        <li
                                            key={s}
                                            className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                                        >
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section aria-labelledby="contact" className="border-t bg-muted/30">
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <SectionHeading id="contact" eyebrow="Contact" title="Let's talk" />
                    <p className="max-w-2xl leading-relaxed text-muted-foreground">
                        Open to staff, principal and lead roles in platform, backend, DevOps/SRE and
                        engineering leadership, in any industry: remote, in Dhaka, or abroad with relocation.
                    </p>
                    <a
                        href={`mailto:${site.email}`}
                        className={`${cta} mt-6 bg-primary text-primary-foreground hover:bg-primary/90`}
                    >
                        <Mail className="h-4 w-4" aria-hidden /> {site.email}
                    </a>
                </div>
            </section>
        </>
    );
}
