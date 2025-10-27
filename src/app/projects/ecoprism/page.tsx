import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import ProjectOverview from '@/components/projects/ecoprism/ProjectOverview';
import ProblemStatement from '@/components/projects/ecoprism/ProblemStatement';
import Research from '@/components/projects/ecoprism/Research';
import Ideation from '@/components/projects/ecoprism/Ideation';
import DesignProcess from '@/components/projects/ecoprism/DesignProcess';
import Testing from '@/components/projects/ecoprism/Testing';
import Outcome from '@/components/projects/ecoprism/Outcome';
import Learnings from '@/components/projects/ecoprism/Learnings';
import Gallery from '@/components/projects/ecoprism/Gallery';
import NextProject from '@/components/projects/NextProject';

export const metadata = {
    title: 'EcoPRISM - ESG SaaS Platform | Vasini Singh',
    description: 'A case study on designing an intuitive ESG compliance and sustainability reporting platform.',
};

export default function EcoprismProject() {
    const heroData = {
        title: 'EcoPRISM',
        subtitle: 'ESG Compliance Made Simple',
        image: '/images/projects/ecoprism/Landing page.webp',
        tags: ['SaaS', 'Enterprise', 'Dashboard']
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
            <NextProject nextSlug="arreglio" nextTitle="Arreglio" />
        </MinimalLayout>
    );
}
