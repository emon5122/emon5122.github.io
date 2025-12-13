"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const experiences = [
    {
        company: "TRODAD International LTD.",
        position: "Team Lead, Development & Technology",
        date: "February, 2025-Present",
        location: "Mipur DOHS",
        description:
            "Lead development team architecting enterprise systems across healthcare, e-commerce, and blockchain domains. Manage full-stack development, infrastructure automation (Kubernetes/Docker), and AI/ML integration. Key achievements: built zero-knowledge privacy mixer on Solana, fine-tuned medical AI models for radiology, integrated DICOM networks, deployed IoT-enabled healthcare workflows, and managed CI/CD pipelines for ERP systems.",
    },
    {
        company: "Nexis LTD",
        position: "Lead Developer & Founder",
        date: "September, 2021-February, 2025",
        location: "Dhaka, Bangladesh",
        description:
            "Founded and scaled engineering company managing 44+ production microservices serving real customers. Architected complete infrastructure using Terraform/Kubernetes/Ansible. Delivered e-commerce platforms, SaaS systems (HRM, school management, digital menus), and internal tools. Built GitOps workflows, automated CI/CD pipelines, and published reusable NPM packages. Maintained 99.9% uptime across all production services.",
    },
    {
        company: "Freelance",
        position: "Bug Bounty Hunter & Security Researcher",
        date: "2016-Present",
        location: "Remote",
        description:
            "Active security researcher on HackerOne and Bugcrowd platforms. Identify and responsibly disclose vulnerabilities in web applications and APIs through penetration testing and OWASP Top 10 exploitation. Earned recognition and monetary rewards for discovering critical security issues across multiple platforms.",
    },
    {
        company: "myBurgerLab",
        position: "Systems Support Assistant",
        date: "January, 2020-June, 2021",
        location: "Malaysia",
        description:
            "Maintained ERP system operations for restaurant chain while pursuing university studies. Handled system troubleshooting, performance monitoring, and technical support ensuring smooth daily operations.",
    },
    {
        company: "ZE Enterprise",
        position: "Web Developer Intern",
        date: "May 2019-August 2019",
        location: "Shah Alam, Malaysia",
        description:
            "Developed e-commerce platform using WordPress/WooCommerce and implemented SEO optimization strategies, improving site visibility and customer engagement for online product sales.",
    },
];

export function ExperienceTimeline() {
    return (
        <section id="experience" className="py-24 px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-center mb-12">
                    Experience
                </h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                x: index % 2 === 0 ? -50 : 50,
                                opacity: 0,
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>{exp.position}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>{exp.company}</span>
                                            <span>{exp.date}</span>
                                        </div>
                                        {exp.location && (
                                            <div className="text-sm text-muted-foreground">
                                                {exp.location}
                                            </div>
                                        )}
                                        <p className="text-sm">
                                            {exp.description}
                                        </p>
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
