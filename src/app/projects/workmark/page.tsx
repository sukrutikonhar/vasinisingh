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
import NewCategory from '@/components/projects/workmark/NewCategory';
import BeyondPerformanceReviews from '@/components/projects/workmark/BeyondPerformanceReviews';
import WorkmarkCTA from '@/components/projects/workmark/WorkmarkCTA';
import PrevNextProject from '@/components/projects/PrevNextProject';

export const metadata = {
    title: 'WorkMark — Making Invisible Work Visible | Case Study | Vasini Singh',
    description: 'Case study on WorkMark: making invisible work visible. Product design, UX research, and impact for internal collaboration and recognition.',
};

export default function WorkmarkProject() {
    const heroData = {
        title: 'WorkMark — Making Invisible Work Visible',
        subtitle: 'A performance intelligence platform that transforms everyday employee contributions into structured evidence of recoginition, fair evaluation, and organizational intelligence.',
        image: '/images/projects/workmark/workmark-hero.webp',
        tags: ['AI powered B2B SaaS', 'HR Tech x Performance', 'LIVE MVP'],
        prototypeLink: 'https://theworkmark.lovable.app/contributions',
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} compactTitle />
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
            <NewCategory />
            <BeyondPerformanceReviews />
            <WorkmarkCTA />
            <PrevNextProject prevSlug="mockoraa-v2" prevTitle="MockOraa" nextSlug="ecoprism" nextTitle="ecoPRISM" />
        </MinimalLayout>
    );
}
