import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type React from "react"; // Added import for React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Istiak Hassan Emon - Full-Stack Engineer & DevOps Specialist",
    description:
        "Portfolio of Istiak Hassan Emon - Full-Stack Engineer, DevOps Specialist, and Ethical Hacker",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
