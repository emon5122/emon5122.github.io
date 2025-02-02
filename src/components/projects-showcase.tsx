"use client";

import { motion } from "framer-motion";
import { TechIcon } from "./icons";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projects = [
    {
        name: "Global Business Idea Generator",
        description:
            "AI-powered system that generates business ideas based on location and market trends.",
        technologies: [
            { name: "Python", icon: "python" },
            { name: "OpenAI", icon: "openai" },
            { name: "Next.js", icon: "nextjs" },
            { name: "TypeScript", icon: "typescript" },
        ],
    },
    {
        name: "YouTube Video Sentiment Analysis",
        description:
            "Machine learning-powered system for analyzing YouTube comment sentiments.",
        technologies: [
            { name: "Python", icon: "python" },
            { name: "Flask", icon: "flask" },
            { name: "TensorFlow", icon: "tensorflow" },
        ],
    },
    {
        name: "QR Code Generator",
        description:
            "Advanced QR code generation system with customization options.",
        url: "https://qr.nexisltd.com",
        technologies: [
            { name: "Next.js", icon: "nextjs" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Tailwind CSS", icon: "tailwindcss" },
            { name: "Vercel", icon: "vercel" },
        ],
    },
    {
        name: "URL Shortener",
        description: "Fast and efficient URL shortening service.",
        url: "https://url.nexisltd.com",
        technologies: [
            { name: "Next.js", icon: "nextjs" },
            { name: "TypeScript", icon: "typescript" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "Vercel", icon: "vercel" },
        ],
    },
];

export function ProjectsShowcase() {
    return (
        <section id="projects" className="py-24 px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-center mb-12">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        <span>{project.name}</span>
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-primary hover:underline"
                                            >
                                                Visit →
                                            </a>
                                        )}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech.name}
                                                variant="secondary"
                                                className="flex items-center gap-1"
                                            >
                                                <TechIcon
                                                    name={tech.icon}
                                                    size={16}
                                                />
                                                {tech.name}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
