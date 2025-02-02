"use client";

import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    FileUser,
    Linkedin,
    TerminalIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TechIcon } from "./icons";
import { Button } from "./ui/button";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function HeroSection() {
    const [isHovered, setIsHovered] = useState(false);

    const words = [
        {
            text: "Full-Stack",
        },
        {
            text: "Engineer",
        },
        {
            text: "|",
        },
        {
            text: "DevOps",
        },
        {
            text: "Specialist",
        },
        {
            text: "|",
        },
        {
            text: "Ethical",
        },
        {
            text: "Hacker",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2]" />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10"
            >
                <motion.div
                    variants={itemVariants}
                    className="relative group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative">
                        <Image
                            src="https://lh3.googleusercontent.com/a/ACg8ocKh1Wuv6DpG468SjJJFL7y_4-TIhGkRrRXLY3i6jjJvAJ2kdvPA9Q=s96-c"
                            alt="Istiak Hassan Emon"
                            width={120}
                            height={120}
                            className="rounded-full mb-8 border-4 border-primary transition-transform duration-500 transform group-hover:scale-110"
                        />
                        <motion.div
                            initial={false}
                            animate={
                                isHovered
                                    ? { scale: 1, opacity: 1 }
                                    : { scale: 0.8, opacity: 0 }
                            }
                            className="absolute -right-2 -bottom-2 bg-primary text-primary-foreground p-2 rounded-full"
                        >
                            <TerminalIcon className="w-4 h-4" />
                        </motion.div>
                    </div>
                </motion.div>
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
                >
                    Istiak Hassan Emon
                </motion.h1>
                <motion.div variants={itemVariants} className="mb-8">
                    <TypewriterEffect words={words} />
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row gap-4 items-center justify-center"
                >
                    <Button
                        className="group relative overflow-hidden px-6 h-12"
                        asChild
                    >
                        <Link href="#contact">
                            Contact Me
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button
                        className="group relative overflow-hidden px-6 h-12"
                        asChild
                    >
                        <Link
                            href="https://rxresu.me/emon5122/istiak-hassan-emon"
                            target="_blank"
                        >
                            Resume
                            <FileUser className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full transition-transform hover:scale-110"
                            asChild
                        >
                            <Link
                                href="https://github.com/emon5122"
                                target="_blank"
                            >
                                <TechIcon name={"github"} size={16} />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full transition-transform hover:scale-110"
                            asChild
                        >
                            <Link
                                href="https://www.linkedin.com/in/istiak-hassan-emon/"
                                target="_blank"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                    }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-sm">Scroll to explore</span>
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </div>
    );
}
