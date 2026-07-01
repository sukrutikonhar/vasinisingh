import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import ProjectOverview from '@/components/projects/ecoprism/ProjectOverview';
import Role from '@/components/projects/ecoprism/Role';
import Challenge from '@/components/projects/ecoprism/Challenge';
import KeyInsights from '@/components/projects/ecoprism/KeyInsights';
import Solutions from '@/components/projects/ecoprism/Solutions';
import ImpactResults from '@/components/projects/ecoprism/ImpactResults';
import ReflectionLearnings from '@/components/projects/ecoprism/ReflectionLearnings';
import CTASection from '@/components/projects/ecoprism/CTASection';
import Gallery from '@/components/projects/ecoprism/Gallery';
import PrevNextProject from '@/components/projects/PrevNextProject';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'ecoPRISM — When Compliance Has to Earn Belief',
    description:
        'Case study: designing an ESG compliance platform for ABB where the numbers had to be trusted, not just shown.',
    path: '/projects/ecoprism',
});

export default function EcoprismProject() {
    const heroData = {
        title: 'When Compliance Has to Earn Belief',
        subtitle: 'Designing ecoPRISM, an ESG platform for ABB where the numbers had to be trusted, not just shown.',
        image: '/images/projects/ecoprism/ecoprism-landing-image.webp',
        tags: ['Compliance UX', 'Enterprise Dashboard', 'Data-Dense'],
        statusBadge: 'LIVE PRODUCT',
        metrics: [
            { value: '95%', label: 'Task Completion' },
            { value: '4.6/5', label: 'User Satisfaction' },
            { value: '40%', label: 'Time Saved' },
        ],
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} />
            <ProjectOverview />
            <Role />
            <Challenge />
            <KeyInsights />
            <Solutions />
            <ImpactResults />
            <ReflectionLearnings />
            <Gallery />
            <CTASection />
            <PrevNextProject prevSlug="arreglio" prevTitle="Arreglio" nextSlug="aks" nextTitle="AKS" />
        </MinimalLayout>
    );
}
