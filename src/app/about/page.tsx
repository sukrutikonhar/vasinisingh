import MinimalLayout from '@/components/layout/MinimalLayout';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import ExperienceEducation from '@/components/about/ExperienceEducation';
import BeyondDesign from '@/components/about/BeyondDesign';
import AboutCTA from '@/components/about/AboutCTA';

export default function About() {
    return (
        <MinimalLayout>
            <AboutHero />
            <AboutIntro />
            <ExperienceEducation />
            <BeyondDesign />
            <AboutCTA />
        </MinimalLayout>
    );
}
