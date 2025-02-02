"use client";

import { motion } from "framer-motion";
import { TechIcon } from "./icons";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skills = [
    {
        name: "Full-Stack Development",
        level: 5,
        keywords: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextjs" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Django", icon: "django" },
            { name: "Golang", icon: "golang" },
            { name: "Laravel", icon: "laravel" },
        ],
    },
    {
        name: "DevOps",
        level: 5,
        keywords: [
            { name: "Docker", icon: "docker" },
            { name: "Kubernetes", icon: "kubernetes" },
            { name: "Terraform", icon: "terraform" },
            { name: "Jenkins", icon: "jenkins" },
            { name: "Ansible", icon: "ansible" },
            { name: "GitHub Actions", icon: "githubactions" },
        ],
    },
    {
        name: "Cloud & Infrastructure",
        level: 4,
        keywords: [
            { name: "AWS", icon: "aws" },
            { name: "GCP", icon: "gcp" },
            { name: "Azure", icon: "azure" },
            { name: "Vercel", icon: "vercel" },
        ],
    },
    {
        name: "AI & Machine Learning",
        level: 3,
        keywords: [
            { name: "TensorFlow", icon: "tensorflow" },
            { name: "OpenAI", icon: "openai" },
            { name: "Python", icon: "python" },
        ],
    },
    {
        name: "Databases",
        level: 5,
        keywords: [
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "Redis", icon: "redis" },
        ],
    },
    {
        name: "Security",
        level: 5,
        keywords: [
            { name: "Linux", icon: "linux" },
            { name: "Kali Linux", icon: "kalilinux" },
        ],
    },
];

export function SkillsGrid() {
    return (
        <section id="skills" className="py-24 px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        <span>{skill.name}</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-2 h-2 rounded-full mx-0.5 ${
                                                        i < skill.level
                                                            ? "bg-primary"
                                                            : "bg-muted"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.keywords.map((keyword) => (
                                            <Badge
                                                key={keyword.name}
                                                variant="secondary"
                                                className="flex items-center gap-1"
                                            >
                                                <TechIcon
                                                    name={keyword.icon}
                                                    size={16}
                                                />
                                                {keyword.name}
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
