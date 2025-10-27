import MinimalLayout from '@/components/layout/MinimalLayout';
import NewHeroSection from '@/components/home/NewHeroSection';
import AboutSection from '@/components/home/AboutSection';
import AnimatedProjectGrid from '@/components/home/AnimatedProjectGrid';
import SkillsSection from '@/components/home/SkillsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <MinimalLayout>
      <NewHeroSection />
      <AnimatedProjectGrid />
      <AboutSection />
      <SkillsSection />
      <TestimonialsSection />
      <CTASection />
    </MinimalLayout>
  );
}
