import Layout from '@/components/layout/Layout';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import MountainPathSection from '@/components/sections/MountainPathSection';
import WandererDesignerSection from '@/components/sections/WandererDesignerSection';
import SymbolsPathSection from '@/components/sections/SymbolsPathSection';
import DesignJourneySection from '@/components/sections/DesignJourneySection';
import StoriesLightSection from '@/components/sections/StoriesLightSection';
import BuiltWithPeopleSection from '@/components/sections/BuiltWithPeopleSection';
import AdvocacyImpactSection from '@/components/sections/AdvocacyImpactSection';
import LetsClimbSection from '@/components/sections/LetsClimbSection';

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
            <LetsClimbSection />
        </Layout>
    );
}
