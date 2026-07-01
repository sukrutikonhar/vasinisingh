import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import ProjectOverview from '@/components/projects/aks/ProjectOverview';
import NdaNote from '@/components/projects/aks/NdaNote';
import Role from '@/components/projects/aks/Role';
import Problem from '@/components/projects/aks/Problem';
import TargetUsers from '@/components/projects/aks/TargetUsers';
import UxApproach from '@/components/projects/aks/UxApproach';
import KeyFeatures from '@/components/projects/aks/KeyFeatures';
import DesignChallenges from '@/components/projects/aks/DesignChallenges';
import AiExperience from '@/components/projects/aks/AiExperience';
import Outcome from '@/components/projects/aks/Outcome';
import CTASection from '@/components/projects/aks/CTASection';
import PrevNextProject from '@/components/projects/PrevNextProject';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'AKS — Application Knowledge Store',
    description:
        'Case study: designing AKS, an enterprise knowledge management platform for ABB where scattered technical answers became a governed, searchable system.',
    path: '/projects/aks',
});

export default function AksProject() {
    const heroData = {
        title: 'AKS',
        subtitle:
            'Engineers across ABB\'s global teams were re-solving the same technical problems in isolation, with no shared memory of what had already been figured out. AKS turned scattered, one-off answers into a governed, searchable knowledge system spanning engineering, presales, service, and product support.',
        image: '/images/projects/aks/Section_Overview_trim.webp',
        tags: ['Enterprise Platform', 'Knowledge Management', 'ABB'],
        statusBadge: 'Application Knowledge Store',
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} topPadding />
            <ProjectOverview />
            <NdaNote />
            <Role />
            <Problem />
            <TargetUsers />
            <UxApproach />
            <KeyFeatures />
            <DesignChallenges />
            <AiExperience />
            <Outcome />
            <CTASection />
            <PrevNextProject prevSlug="ecoprism" prevTitle="ecoPRISM" nextSlug="neuroassist" nextTitle="NeuroAssist" />
        </MinimalLayout>
    );
}
