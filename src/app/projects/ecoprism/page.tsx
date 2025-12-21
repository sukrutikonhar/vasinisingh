import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import ProjectOverview from '@/components/projects/ecoprism/ProjectOverview';
import Role from '@/components/projects/ecoprism/Role';
import Challenge from '@/components/projects/ecoprism/Challenge';
import Solutions from '@/components/projects/ecoprism/Solutions';
import KeyInsights from '@/components/projects/ecoprism/KeyInsights';
import ImpactResults from '@/components/projects/ecoprism/ImpactResults';
import ReflectionLearnings from '@/components/projects/ecoprism/ReflectionLearnings';
import CTASection from '@/components/projects/ecoprism/CTASection';
import Gallery from '@/components/projects/ecoprism/Gallery';
import PrevNextProject from '@/components/projects/PrevNextProject';

export const metadata = {
    title: 'ecoPRISM - ESG SaaS Platform | Vasini Singh',
    description: 'A case study on designing an intuitive ESG compliance and sustainability reporting platform.',
};

export default function EcoprismProject() {
    const heroData = {
        title: 'ecoPRISM',
        subtitle: 'Simplifying ESG compliance for global enterprises through strategic UI/UX design and user-centered innovation',
        image: '/images/projects/ecoprism/ecoprism-landing-image.webp',
        tags: ['LIVE PRODUCT', 'GLOBAL ENTERPRISE', 'B2B SaaS'],
        metrics: [
            { value: '89%', label: 'Task Completion Rate' },
            { value: '4.6/5', label: 'User Satisfaction' },
            { value: '40%', label: 'Time Saved' }
        ]
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} />
            <ProjectOverview />
            <Role />
            <Challenge />
            <Solutions />
            <KeyInsights />
            <ImpactResults />
            <ReflectionLearnings />
            <Gallery />
            <CTASection />
            <PrevNextProject prevSlug="mockoraa" prevTitle="MockOraa" nextSlug="arreglio" nextTitle="Arreglio" />
        </MinimalLayout>
    );
}
