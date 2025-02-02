"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "Experience",
        href: "#experience",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

export function FloatingNav() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-4 inset-x-0 max-w-fit mx-auto z-50"
        >
            <nav className="flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-md">
                {navItems.map((item, index) => (
                    <Button
                        key={item.href}
                        variant="ghost"
                        size="sm"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            index === 0 && "text-primary"
                        )}
                        asChild
                    >
                        <Link href={item.href} scroll={true}>
                            {item.name}
                        </Link>
                    </Button>
                ))}
            </nav>
        </motion.div>
    );
}
