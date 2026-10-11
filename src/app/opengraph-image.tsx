import { site } from "@/content/profile";
import { ImageResponse } from "next/og";

export const alt = `${site.name}: ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
                <div style={{ display: "flex", fontSize: 28, color: "#2dd4bf" }}>ihemon.me</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ fontSize: 76, fontWeight: 700 }}>{site.name}</div>
                    <div style={{ fontSize: 36, color: "#a1a1aa", lineHeight: 1.3 }}>
                        {site.headline}
                    </div>
                </div>
                <div style={{ display: "flex", gap: 40, fontSize: 26, color: "#d4d4d8" }}>
                    <span>70k studies/month</span>
                    <span>86-server fleet</span>
                    <span>~1,500 releases</span>
                </div>
            </div>
        ),
        size,
    );
}
