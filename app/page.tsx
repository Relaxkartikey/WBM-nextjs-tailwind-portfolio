// Home.tsx
import AboutSection from "@/components/Services";
import HeroSection from "@/components/HeroSection";
import Overview from "@/components/Overview"; // Importing Overview Section
import Testimonials from "@/components/users";
import EventWorksSection from "@/components/Work";
import TeamSection from "@/components/team";
import ProcessSection from "@/components/process";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <AboutSection />
        <ProcessSection />
        <Overview />
        <Testimonials />
        <EventWorksSection />
        <TeamSection />
      </div>
    </main>
  );
}
