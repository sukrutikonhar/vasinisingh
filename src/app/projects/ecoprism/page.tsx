import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import ProjectOverview from '@/components/projects/ecoprism/ProjectOverview';
import ProblemStatement from '@/components/projects/ecoprism/ProblemStatement';
import Research from '@/components/projects/ecoprism/Research';
import Ideation from '@/components/projects/ecoprism/Ideation';
import DesignProcess from '@/components/projects/ecoprism/DesignProcess';
import Outcome from '@/components/projects/ecoprism/Outcome';
import Learnings from '@/components/projects/ecoprism/Learnings';
import Gallery from '@/components/projects/ecoprism/Gallery';
import NextProject from '@/components/projects/NextProject';

export const metadata = {
    title: 'ecoPRISM - ESG SaaS Platform | Vasini Singh',
    description: 'A case study on designing an intuitive ESG compliance and sustainability reporting platform.',
};

export default function EcoprismProject() {
    const heroData = {
        title: 'ecoPRISM',
        subtitle: 'Simplifying ESG compliance for global enterprises through strategic UI/UX design and user-centered innovation',
        image: '/images/projects/ecoprism/Landing page.webp',
        tags: ['🚀 LIVE PRODUCT', 'GLOBAL ENTERPRISE', 'B2B SAAS'],
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
            <ProblemStatement />
            <Research />
            <Ideation />
            <DesignProcess />
            <Outcome />
            <Learnings />
            <Gallery />
            <NextProject nextSlug="arreglio" nextTitle="Arreglio" />
        </MinimalLayout>
    );
}
