"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skills = [
    {
        name: "Full-Stack Development",
        level: 5,
        keywords: [
            "React",
            "Next.js",
            "TypeScript",
            "Django",
            "Golang",
            "Laravel",
        ],
    },
    {
        name: "DevOps",
        level: 5,
        keywords: [
            "Docker",
            "Kubernetes",
            "CI/CD",
            "Terraform",
            "Jenkins",
            "Ansible",
        ],
    },
    {
        name: "Networking & Cybersecurity",
        level: 5,
        keywords: [
            "Penetration Testing",
            "Bug Bounty",
            "Kali Linux",
            "Ethical Hacking",
        ],
    },
    {
        name: "Cloud Platforms",
        level: 4,
        keywords: ["AWS", "GCP", "Azure", "Oracle", "DigitalOcean"],
    },
    {
        name: "Machine Learning & AI",
        level: 3,
        keywords: [
            "Machine Learning",
            "OpenAI",
            "LangChain",
            "Sentiment Analysis",
        ],
    },
    {
        name: "Programming Languages",
        level: 5,
        keywords: ["Python", "TypeScript", "Golang", "Rust", "Java", "C++"],
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
                                                key={keyword}
                                                variant="secondary"
                                            >
                                                {keyword}
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
