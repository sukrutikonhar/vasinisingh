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
import NextProject from '@/components/projects/NextProject';

export const metadata = {
    title: 'Arreglio Mock - Workshop Management SaaS | Vasini Singh',
    description: 'A case study on transforming sticky notes into a smart workshop management system.',
};

export default function ArreglioMockProject() {
    const heroData = {
        title: 'Arreglio',
        subtitle: 'Digitizing workshop operations for global enterprises through strategic design thinking and user-centered innovation',
        image: '/images/projects/arreglio1/arreglio-landing-image.webp',
        tags: ['B2B SaaS', 'LIVE MVP', 'WEB & MOBILE'],
        metrics: [
            { value: '70%', label: 'Faster Turnaround' },
            { value: '80%', label: 'Customer Satisfaction' },
            { value: '40%', label: 'Cost Savings' }
        ]
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
            <NextProject nextSlug="ecoprism" nextTitle="ecoPRISM" />
        </MinimalLayout>
    );
}

