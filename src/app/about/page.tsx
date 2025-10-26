import Layout from '@/components/layout/Layout';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import MountainPathSection from '@/components/about/MountainPathSection';
import WandererDesignerSection from '@/components/about/WandererDesignerSection';
import SymbolsPathSection from '@/components/about/SymbolsPathSection';
import DesignJourneySection from '@/components/about/DesignJourneySection';
import StoriesLightSection from '@/components/about/StoriesLightSection';
import BuiltWithPeopleSection from '@/components/about/BuiltWithPeopleSection';
import AdvocacyImpactSection from '@/components/about/AdvocacyImpactSection';

export default function About() {
    return (
        <Layout>
            <AboutHeroSection />
            <MountainPathSection />
            <WandererDesignerSection />
            <SymbolsPathSection />
            <DesignJourneySection />
            <StoriesLightSection />
            <BuiltWithPeopleSection />
            <AdvocacyImpactSection />
        </Layout>
    );
}
