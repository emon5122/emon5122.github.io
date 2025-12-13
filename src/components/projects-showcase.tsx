"use client";

import { motion } from "framer-motion";
import { TechIcon } from "./icons";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const projects = [
    {
        name: "Solana Privacy Mixer",
        description:
            "Production-ready zero-knowledge transaction mixer implementing Groth16 zk-SNARKs. Built with Rust/Anchor smart contracts, TypeScript/React frontend, and Node.js relayer network for anonymous withdrawals on Solana blockchain.",
        technologies: [
            { name: "Solana", icon: "solana" },
            { name: "Rust", icon: "rust" },
            { name: "TypeScript", icon: "typescript" },
            { name: "React", icon: "react" },
            { name: "Docker", icon: "docker" },
        ],
    },
    {
        name: "Healthcare AI Platform",
        description:
            "Enterprise medical imaging platform with DICOM viewer integration, ML-powered diagnostic assistance, and laboratory information system bridge. Manages complete radiology workflow from image upload to AI-assisted diagnosis for medical institutions.",
        technologies: [
            { name: "Python", icon: "python" },
            { name: "PyTorch", icon: "pytorch" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Java", icon: "java" },
            { name: "Docker", icon: "docker" },
        ],
    },
    {
        name: "Enterprise SaaS Platform",
        description:
            "Led development of multi-tenant enterprise software suite managing 45+ production applications: human resource management, e-commerce solutions, single sign-on infrastructure, and digital transformation tools. Serves 1000+ users across multiple business domains.",
        technologies: [
            { name: "Kubernetes", icon: "kubernetes" },
            { name: "Terraform", icon: "terraform" },
            { name: "Python", icon: "python" },
            { name: "TypeScript", icon: "typescript" },
            { name: "PostgreSQL", icon: "postgresql" },
        ],
    },
    {
        name: "Restaurant Management Platform",
        description:
            "Full-stack food ordering and restaurant management system with real-time order processing, payment gateway integration, and administrative dashboard. Serving multiple restaurant clients with live production deployment.",
        technologies: [
            { name: "Laravel", icon: "laravel" },
            { name: "JavaScript", icon: "javascript" },
            { name: "MySQL", icon: "mysql" },
            { name: "AWS", icon: "aws" },
        ],
    },
    {
        name: "Education Management Platform",
        description:
            "Comprehensive learning management system with student tracking, course administration, and dynamic form builder. Active production deployment with 14 ongoing feature developments.",
        technologies: [
            { name: "TypeScript", icon: "typescript" },
            { name: "Next.js", icon: "nextjs" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "Vercel", icon: "vercel" },
        ],
    },
    {
        name: "HealthTech Suite",
        description:
            "Leading development of 57+ repositories including diagnostic platforms, prescription management, patient portals, and healthcare provider applications. Manages complete healthcare workflow from appointment scheduling to treatment delivery.",
        technologies: [
            { name: "TypeScript", icon: "typescript" },
            { name: "Laravel", icon: "laravel" },
            { name: "Python", icon: "python" },
            { name: "Docker", icon: "docker" },
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
