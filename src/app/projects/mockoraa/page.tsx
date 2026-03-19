import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import MockOraaV2Overview from '@/components/projects/mockoraa/MockOraaV2Overview';
import MockOraaV2Problem from '@/components/projects/mockoraa/MockOraaV2Problem';
import MockOraaV2Research from '@/components/projects/mockoraa/MockOraaV2Research';
import MockOraaV2Audience from '@/components/projects/mockoraa/MockOraaV2Audience';
import MockOraaV2Reframe from '@/components/projects/mockoraa/MockOraaV2Reframe';
import MockOraaV2Solution from '@/components/projects/mockoraa/MockOraaV2Solution';
import MockOraaV2Visual from '@/components/projects/mockoraa/MockOraaV2Visual';
import MockOraaV2Platform from '@/components/projects/mockoraa/MockOraaV2Platform';
import MockOraaV2Iterations from '@/components/projects/mockoraa/MockOraaV2Iterations';
import MockOraaV2System from '@/components/projects/mockoraa/MockOraaV2System';
import MockOraaV2Metrics from '@/components/projects/mockoraa/MockOraaV2Metrics';
import MockOraaV2Final from '@/components/projects/mockoraa/MockOraaV2Final';
import PrevNextProject from '@/components/projects/PrevNextProject';
import Gallery from '@/components/projects/mockoraa/Gallery';
import CTASection from '@/components/projects/mockoraa/CTASection';
export const metadata = {
    title: 'MockOraa - AI-Driven Interview Intelligence | Case Study | Vasini Singh',
    description: 'MockOraa is an AI powered mock interview platform designed to transform interview anxiety into measurable performance improvement.',
};

export default function MockOraaV2Project() {
    const heroData = {
        title: 'Designing Confidence Through AI-Driven Interview Intelligence',
        subtitle: 'MockOraa is an AI powered mock interview platform designed to transform interview anxiety into measurable readiness through realistic simulations, behavioral analysis, and structured feedback loops.',
        youtubeVideoId: 'FIleByUXYqY',
        tags: ['AI', 'EdTech', 'Mobile App'],
        prototypeLink: 'https://www.figma.com/proto/dDS6lfVky5LwPI8PadYt4O/Final-Flow?node-id=1448-6286&starting-point-node-id=1448%3A6286',
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} compactTitle comfortableSpacing />
            <MockOraaV2Overview />
            <MockOraaV2Problem />
            <MockOraaV2Research />
            <MockOraaV2Audience />
            <MockOraaV2Reframe />
            <MockOraaV2Solution />
            <MockOraaV2Visual />
            <MockOraaV2Platform />
            <MockOraaV2Iterations />
            <MockOraaV2System />
            <MockOraaV2Metrics />
            <MockOraaV2Final />
            <Gallery />
            <CTASection />
            <PrevNextProject nextSlug="workmark" nextTitle="WorkMark" />
        </MinimalLayout>
    );
}
