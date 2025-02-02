import { ContactSection } from "@/components/contact-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { FloatingNav } from "@/components/floating-nav";
import { HeroSection } from "@/components/hero-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { SkillsGrid } from "@/components/skills-grid";
import { Terminal } from "@/components/terminal";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
            <FloatingNav />
            <section id="home">
                <HeroSection />
            </section>
            <Terminal />
            <section id="experience">
                <ExperienceTimeline />
            </section>
            <section id="projects">
                <ProjectsShowcase />
            </section>
            <section id="skills">
                <SkillsGrid />
            </section>
            <section id="contact">
                <ContactSection />
            </section>
        </main>
    );
}
