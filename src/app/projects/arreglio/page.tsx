import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import ProjectOverview from '@/components/projects/arreglio/ProjectOverview';
import Role from '@/components/projects/arreglio/Role';
import Challenge from '@/components/projects/arreglio/Challenge';
import Solutions from '@/components/projects/arreglio/Solutions';
import ImpactResults from '@/components/projects/arreglio/ImpactResults';
import ReflectionLearnings from '@/components/projects/arreglio/ReflectionLearnings';
import CTASection from '@/components/projects/arreglio/CTASection';
import Gallery from '@/components/projects/arreglio/Gallery';
import PrevNextProject from '@/components/projects/PrevNextProject';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Arreglio — Untangling a Day at the Workshop',
    description:
        'Case study: designing a digital workflow for traditional repair shops resistant to digital change.',
    path: '/projects/arreglio',
});

export default function ArreglioProject() {
    const heroData = {
        title: 'Untangling a Day at the Workshop',
        subtitle: 'Designing a digital workflow for traditional repair shops resistant to digital change.',
        image: '/images/projects/arreglio1/arreglio-landing.webp',
        tags: ['Service Coordination', 'B2B SaaS', 'Multi-Region UX'],
        statusBadge: 'LIVE MVP · WEB & MOBILE',
        metrics: [
            { value: '3x', label: 'Faster Processing' },
            { value: '$50K', label: 'Annual Savings' },
            { value: '98%', label: 'Adoption Rate' },
        ],
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} />
            <ProjectOverview />
            <Role />
            <Challenge />
            <Solutions />
            <ImpactResults />
            <ReflectionLearnings />
            <Gallery />
            <CTASection />
            <PrevNextProject prevSlug="workmark" prevTitle="WorkMark" nextSlug="ecoprism" nextTitle="ecoPRISM" />
        </MinimalLayout>
    );
}
