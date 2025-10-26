import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import MyPhilosophySection from '@/components/home/MyPhilosophySection';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import BeyondDesignSection from '@/components/home/BeyondDesignSection';
import OpportunitiesSection from '@/components/home/OpportunitiesSection';
import ContactSection from '@/components/home/ContactSection';

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
