import { site } from "@/content/profile";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const nav = [
    { name: "Work", href: "/#work" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
];

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-4">
                <Link href="/" className="font-semibold tracking-tight">
                    {site.shortName}
                    <span className="text-primary">.</span>
                </Link>
                <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-1">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:px-3"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}

export function SiteFooter() {
    return (
        <footer className="border-t">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} {site.name}</p>
                <div className="flex gap-4">
                    <a href={`mailto:${site.email}`} className="hover:text-foreground">
                        {site.email}
                    </a>
                    <a href={site.links.github} className="hover:text-foreground">
                        GitHub
                    </a>
                    <a href={site.links.linkedin} className="hover:text-foreground">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
