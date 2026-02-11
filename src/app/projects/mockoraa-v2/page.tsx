import MinimalLayout from '@/components/layout/MinimalLayout';
import MockOraaV2Hero from '@/components/projects/mockoraa-v2/MockOraaV2Hero';
import MockOraaV2Overview from '@/components/projects/mockoraa-v2/MockOraaV2Overview';
import MockOraaV2Role from '@/components/projects/mockoraa-v2/MockOraaV2Role';
import MockOraaV2Metrics from '@/components/projects/mockoraa-v2/MockOraaV2Metrics';
import MockOraaV2Summary from '@/components/projects/mockoraa-v2/MockOraaV2Summary';
import MockOraaV2Problem from '@/components/projects/mockoraa-v2/MockOraaV2Problem';
import MockOraaV2WhyNow from '@/components/projects/mockoraa-v2/MockOraaV2WhyNow';
import MockOraaV2Audience from '@/components/projects/mockoraa-v2/MockOraaV2Audience';
import MockOraaV2Research from '@/components/projects/mockoraa-v2/MockOraaV2Research';
import MockOraaV2Reframe from '@/components/projects/mockoraa-v2/MockOraaV2Reframe';
import MockOraaV2Solution from '@/components/projects/mockoraa-v2/MockOraaV2Solution';
import MockOraaV2Platform from '@/components/projects/mockoraa-v2/MockOraaV2Platform';
import MockOraaV2System from '@/components/projects/mockoraa-v2/MockOraaV2System';
import MockOraaV2Iterations from '@/components/projects/mockoraa-v2/MockOraaV2Iterations';
import MockOraaV2Trust from '@/components/projects/mockoraa-v2/MockOraaV2Trust';
import MockOraaV2Visual from '@/components/projects/mockoraa-v2/MockOraaV2Visual';
import MockOraaV2Final from '@/components/projects/mockoraa-v2/MockOraaV2Final';
import MockOraaV2Teams from '@/components/projects/mockoraa-v2/MockOraaV2Teams';
import MockOraaV2Personas from '@/components/projects/mockoraa-v2/MockOraaV2Personas';
import PrevNextProject from '@/components/projects/PrevNextProject';

export const metadata = {
    title: 'MockOraa - AI-Driven Interview Intelligence | Case Study | Vasini Singh',
    description: 'MockOraa is an AI powered mock interview platform designed to transform interview anxiety into measurable performance improvement.',
};

export default function MockOraaV2Project() {
    const heroData = {
        title: 'Designing Confidence',
        subtitle: 'Through AI-Driven Interview Intelligence. MockOraa is an AI powered mock interview platform designed to transform interview anxiety into measurable performance improvement.',
        image: '/images/projects/mockoraa/mockoraa-01.webp',
        tags: ['AI', 'EdTech', 'Mobile App'],
        metrics: [
            { value: '81', label: 'SUS Score' },
            { value: '4.4/5', label: 'CSAT' },
            { value: '−31%', label: 'Reduction in Time on Task' }
        ],
        prototypeLink: 'https://www.figma.com/proto/dDS6lfVky5LwPI8PadYt4O/Final-Flow?node-id=1448-6286&starting-point-node-id=1448%3A6286',
        projectStatement: 'This project demonstrates my ability to connect research, behavioral psychology, AI systems, and scalable design into one cohesive product experience.'
    };

    return (
        <MinimalLayout>
            <MockOraaV2Hero data={heroData} />
            <MockOraaV2Overview />
            <MockOraaV2Role />
            <MockOraaV2Metrics />
            <MockOraaV2Summary />
            <MockOraaV2Problem />
            <MockOraaV2WhyNow />
            <MockOraaV2Audience />
            <MockOraaV2Research />
            <MockOraaV2Reframe />
            <MockOraaV2Solution />
            <MockOraaV2Platform />
            <MockOraaV2System />
            <MockOraaV2Iterations />
            <MockOraaV2Trust />
            <MockOraaV2Visual />
            <MockOraaV2Final />
            <MockOraaV2Teams />
            <MockOraaV2Personas />
            <PrevNextProject nextSlug="ecoprism" nextTitle="ecoPRISM" />
        </MinimalLayout>
    );
}