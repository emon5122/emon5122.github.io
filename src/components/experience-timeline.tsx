"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const experiences = [
    {
        company: "Nexis LTD",
        position: "Lead Developer & Founder",
        date: "September, 2021-Present",
        location: "Dhaka, Bangladesh",
        description:
            "Led company operations, project management, and long-term strategic growth. Developed platforms such as Madhobimart, Sardarhandicrafts, and Crafts Maker.",
    },
    {
        company: "Freelance",
        position: "Bug bounty hunter",
        date: "2016-Present",
        description:
            "Identified and reported vulnerabilities across platforms like HackerOne and Bugcrowd, contributing to improving website security.",
    },
    {
        company: "myBurgerLab",
        position: "Systems Support Assistant",
        date: "January, 2020-June, 2021",
        description:
            "Maintained ERP system and supported day-to-day processes while pursuing studies.",
    },
    {
        company: "ZE Enterprise",
        position: "Web Developer Intern",
        date: "May 2019-August 2019",
        location: "Shah Alam, Malaysia",
        description:
            "Built e-commerce platform using WordPress and WooCommerce, implemented SEO strategies.",
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
