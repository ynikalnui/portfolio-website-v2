import ContactSection from '@/components/contact-section'
import FeedbacksSection from '@/components/feedbacks-section'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'

export default function Home() {
  return (
    <main className='mx-auto mb-10 flex flex-col items-center gap-y-10 px-4 lg:max-w-[1400px]'>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <FeedbacksSection />
      <ContactSection />
    </main>
  )
}
