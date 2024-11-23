// Home.tsx
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Overview from "@/components/Overview"; // Importing Overview Section
import Testimonials from "@/components/users";
import Contact from "@/components/contact";
import EventWorksSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <AboutSection />
        <Overview />
        <Testimonials />
        <EventWorksSection />
        <Contact />
      </div>
    </main>
  );
}
