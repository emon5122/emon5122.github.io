"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-center mb-12">
                    Get in Touch
                </h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Button
                                variant="outline"
                                className="flex gap-2"
                                asChild
                            >
                                <a href="mailto:emon5122@gmail.com">
                                    <Mail className="h-4 w-4" />
                                    emon5122@gmail.com
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="flex gap-2"
                                asChild
                            >
                                <a href="tel:+8801738812828">
                                    <Phone className="h-4 w-4" />
                                    +880 1738812828
                                </a>
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Button
                                variant="outline"
                                className="flex gap-2"
                                asChild
                            >
                                <a
                                    href="https://github.com/emon5122"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub Profile
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="flex gap-2"
                                asChild
                            >
                                <a
                                    href="https://www.linkedin.com/in/istiak-hassan-emon/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="h-4 w-4" />
                                    LinkedIn Profile
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
}
