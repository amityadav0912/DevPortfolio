import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ActivitySection from "@/components/activity-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // SEO optimization
    document.title = "Amit Yadav - Full Stack Developer | Portfolio";
    document.querySelector('meta[name="description"]')?.setAttribute("content", 
      "Amit Yadav - Full Stack Developer with expertise in JavaScript, TypeScript, React, Node.js, and Java. Currently working at Accenture with 300+ problems solved on coding platforms."
    );
    
    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Amit Yadav - Full Stack Developer Portfolio');
    document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Professional portfolio showcasing full-stack development expertise, projects, and achievements.');
    document.head.appendChild(ogDescription);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-black dark:text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ActivitySection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
