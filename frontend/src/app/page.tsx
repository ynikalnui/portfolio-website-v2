import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <main className="px-4 lg:max-w-[1400px] mx-auto flex items-center flex-col gap-y-10">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
