"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projects = [
    {
        name: "Global Business Idea Generator",
        description:
            "A project that generates business ideas tailored for specific countries using LangChain, OpenAI, and SerpAPI to analyze market trends.",
        tags: ["LangChain", "OpenAI", "SerpAPI", "AI"],
    },
    {
        name: "YouTube Video Sentiment Analysis",
        description:
            "Python and Flask-based project that analyzes sentiment of video comments using machine learning.",
        tags: ["Python", "Flask", "Machine Learning", "NLP"],
    },
    {
        name: "QR Code Generator",
        description:
            "Next.js app for creating customizable QR codes with color and margin options.",
        url: "https://qr.nexisltd.com",
        tags: ["Next.js", "React", "TypeScript"],
    },
    {
        name: "URL Shortener",
        description:
            "Fast and efficient URL shortening service built with Next.js.",
        url: "https://url.nexisltd.com",
        tags: ["Next.js", "React", "TypeScript"],
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
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                            >
                                                {tag}
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
