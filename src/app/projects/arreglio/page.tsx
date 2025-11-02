import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import ProjectOverview from '@/components/projects/arreglio/ProjectOverview';
import ExecutiveSummary from '@/components/projects/arreglio/ExecutiveSummary';
import ProblemStatement from '@/components/projects/arreglio/ProblemStatement';
import Research from '@/components/projects/arreglio/Research';
import Ideation from '@/components/projects/arreglio/Ideation';
import DesignProcess from '@/components/projects/arreglio/DesignProcess';
import Outcome from '@/components/projects/arreglio/Outcome';
import Learnings from '@/components/projects/arreglio/Learnings';
import Gallery from '@/components/projects/arreglio/Gallery';
import NextProject from '@/components/projects/NextProject';

export const metadata = {
    title: 'Arreglio - Workshop Management SaaS | Vasini Singh',
    description: 'A case study on transforming sticky notes into a smart workshop management system.',
};

export default function ArreglioProject() {
    const heroData = {
        title: 'Arreglio',
        subtitle: 'Digitizing workshop operations for global enterprises through strategic design thinking and user-centered innovation',
        image: '/images/projects/arreglio/arreglio-landing-image.webp',
        tags: ['B2B SAAS', 'LIVE MVP', 'WEB & MOBILE'],
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
            <ExecutiveSummary />
            <ProblemStatement />
            <Research />
            <Ideation />
            <DesignProcess />
            <Outcome />
            <Learnings />
            <Gallery />
            <NextProject nextSlug="ecoprism" nextTitle="ecoPRISM" />
        </MinimalLayout>
    );
}
