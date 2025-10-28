import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import ProjectOverview from '@/components/projects/arreglio/ProjectOverview';
import ProblemStatement from '@/components/projects/arreglio/ProblemStatement';
import Research from '@/components/projects/arreglio/Research';
import Ideation from '@/components/projects/arreglio/Ideation';
import DesignProcess from '@/components/projects/arreglio/DesignProcess';
import Testing from '@/components/projects/arreglio/Testing';
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
        subtitle: 'Turning Sticky Notes into Smart SaaS',
        image: '/images/projects/Arreglio/Untitled design (3).png',
        tags: ['Mobile App', 'SaaS', 'B2B']
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} />
            <ProjectOverview />
            <ProblemStatement />
            <Research />
            <Ideation />
            <DesignProcess />
            <Testing />
            <Outcome />
            <Learnings />
            <Gallery />
            <NextProject nextSlug="ecoprism" nextTitle="ecoPRISM" />
        </MinimalLayout>
    );
}
