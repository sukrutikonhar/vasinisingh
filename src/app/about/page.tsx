import MinimalLayout from '@/components/layout/MinimalLayout';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import ExperienceTimelineV2 from '@/components/about/experience-timeline-v2/ExperienceTimelineV2';
import BeyondDesign from '@/components/about/BeyondDesign';
import AboutCTA from '@/components/about/AboutCTA';

export default function About() {
    return (
        <MinimalLayout>
            <AboutHero />
            <AboutIntro />
            <ExperienceTimelineV2 />
            <BeyondDesign />
            <AboutCTA />
        </MinimalLayout>
    );
}
