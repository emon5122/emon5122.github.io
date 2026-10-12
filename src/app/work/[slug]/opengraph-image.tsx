import { caseStudies, getCaseStudy, site } from "@/content/profile";
import { ImageResponse } from "next/og";

export const alt = `Case study by ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
    return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
    const c = getCaseStudy((await params).slug);
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 72,
                    background: "#09090b",
                    color: "#fafafa",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", fontSize: 28, color: "#2dd4bf" }}>
                    ihemon.me · Case study
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{c?.title ?? site.name}</div>
                    <div style={{ fontSize: 30, color: "#a1a1aa", lineHeight: 1.3 }}>
                        {c?.summary ?? site.headline}
                    </div>
                </div>
                <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#d4d4d8" }}>
                    {(c?.highlights ?? []).map((h) => (
                        <span key={h.label}>{`${h.value} ${h.label}`}</span>
                    ))}
                </div>
            </div>
        ),
        size,
    );
}
