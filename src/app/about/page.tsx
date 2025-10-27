import MinimalLayout from '@/components/layout/MinimalLayout';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import DesignPhilosophy from '@/components/about/DesignPhilosophy';
import ExperienceEducation from '@/components/about/ExperienceEducation';
import SkillsTools from '@/components/about/SkillsTools';
import BeyondDesign from '@/components/about/BeyondDesign';
import AboutCTA from '@/components/about/AboutCTA';

export default function About() {
    return (
        <MinimalLayout>
            <AboutHero />
            <AboutIntro />
            <DesignPhilosophy />
            <ExperienceEducation />
            <SkillsTools />
            <BeyondDesign />
            <AboutCTA />
        </MinimalLayout>
    );
}
