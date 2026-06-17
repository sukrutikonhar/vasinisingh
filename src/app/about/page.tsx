import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import ExperienceTimelineV2 from '@/components/about/experience-timeline-v2/ExperienceTimelineV2';
import BeyondDesign from '@/components/about/BeyondDesign';
import AboutCTA from '@/components/about/AboutCTA';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'About, Vasini Singh',
    description:
        'Senior Product Designer with 8+ years across healthcare, ESG, B2B SaaS, and enterprise tools. Currently leading design for ABB and Crown Beverage Europe at BetaBridge Ventures.',
    path: '/about',
});

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
