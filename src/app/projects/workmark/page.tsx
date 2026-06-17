import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import WorkmarkOverview from '@/components/projects/workmark/WorkMarkOverview';
import RecognitionGap from '@/components/projects/workmark/RecognitionGap';
import WhoWeDesignFor from '@/components/projects/workmark/WhoWeDesignFor';
import RecognitionReality from '@/components/projects/workmark/RecognitionReality';
import WhyUnrecognized from '@/components/projects/workmark/WhyUnrecognized';
import CostOfInvisibleWork from '@/components/projects/workmark/CostOfInvisibleWork';
import MissingIntelligenceLayer from '@/components/projects/workmark/MissingIntelligenceLayer';
import UnderstandingWorkplaceBehavior from '@/components/projects/workmark/UnderstandingWorkplaceBehavior';
import DesigningSolution from '@/components/projects/workmark/DesigningSolution';
import CoreProductPillars from '@/components/projects/workmark/CoreProductPillars';
import ThreeUserPerspectives from '@/components/projects/workmark/ThreeUserPerspectives';
import WhatCouldChange from '@/components/projects/workmark/WhatCouldChange';
import WorkmarkReflection from '@/components/projects/workmark/WorkmarkReflection';
import WorkmarkCTA from '@/components/projects/workmark/WorkmarkCTA';
import PrevNextProject from '@/components/projects/PrevNextProject';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Workmark — Making Invisible Work Visible',
    description:
        'Case study: a performance intelligence platform that transforms everyday employee contributions into structured evidence of recognition and fair evaluation.',
    path: '/projects/workmark',
});

export default function WorkmarkProject() {
    const heroData = {
        title: 'WorkMark: Making Invisible Work Visible',
        subtitle: 'A performance intelligence platform that transforms everyday employee contributions into structured evidence of recognition, fair evaluation, and organizational intelligence.',
        image: '/images/projects/workmark/workmark-hero.webp',
        tags: ['Evidence Design', 'HR Tech', 'AI Experience'],
        statusBadge: 'LIVE MVP',
        prototypeLink: 'https://theworkmark.lovable.app/',
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} />
            <WorkmarkOverview />
            <RecognitionGap />
            <WhoWeDesignFor />
            <RecognitionReality />
            <WhyUnrecognized />
            <CostOfInvisibleWork />
            <MissingIntelligenceLayer />
            <UnderstandingWorkplaceBehavior />
            <DesigningSolution />
            <CoreProductPillars />
            <ThreeUserPerspectives />
            <WhatCouldChange />
            <WorkmarkReflection />
            <WorkmarkCTA />
            <PrevNextProject prevSlug="mockoraa" prevTitle="MockOraa" nextSlug="arreglio" nextTitle="Arreglio" />
        </MinimalLayout>
    );
}
