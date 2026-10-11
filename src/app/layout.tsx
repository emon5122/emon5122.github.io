import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/content/profile";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = `${site.name} · ${site.headline}`;

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s · ${site.name}` },
    description: site.description,
    authors: [{ name: site.name, url: site.url }],
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: site.url,
        siteName: site.name,
        title,
        description: site.description,
        locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <a
                        href="#main"
                        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
                    >
                        Skip to content
                    </a>
                    <SiteHeader />
                    <main id="main">{children}</main>
                    <SiteFooter />
                </ThemeProvider>
            </body>
        </html>
    );
}
