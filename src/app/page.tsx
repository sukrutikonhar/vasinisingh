import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import MyPhilosophySection from '@/components/sections/MyPhilosophySection';
import FeaturedWorkSection from '@/components/sections/FeaturedWorkSection';
import BeyondDesignSection from '@/components/sections/BeyondDesignSection';
import OpportunitiesSection from '@/components/sections/OpportunitiesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <PhilosophySection />
      <MyPhilosophySection />
      <FeaturedWorkSection />
      <BeyondDesignSection />
      <OpportunitiesSection />
      <ContactSection />
    </Layout>
  );
}
