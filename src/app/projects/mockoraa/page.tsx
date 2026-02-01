import MinimalLayout from '@/components/layout/MinimalLayout';
import CaseStudyHero from '@/components/projects/CaseStudyHero';
import ProjectOverview from '@/components/projects/mockoraa/ProjectOverview';
import Role from '@/components/projects/mockoraa/Role';
import Challenge from '@/components/projects/mockoraa/Challenge';
import Solutions from '@/components/projects/mockoraa/Solutions';
import KeyInsights from '@/components/projects/mockoraa/KeyInsights';
import ImpactResults from '@/components/projects/mockoraa/ImpactResults';
import ReflectionLearnings from '@/components/projects/mockoraa/ReflectionLearnings';
import CTASection from '@/components/projects/mockoraa/CTASection';
import Gallery from '@/components/projects/mockoraa/Gallery';
import PrevNextProject from '@/components/projects/PrevNextProject';

export const metadata = {
    title: 'MockOraa - AI Interview Coach | Vasini Singh',
    description: 'Practice realistic interview scenarios with empathetic AI avatars that listen, respond, and guide.',
};

export default function MockOraaProject() {
    const heroData = {
        title: 'MockOraa',
        subtitle: 'An empathetic AI interview coach that helps you practice realistic interview scenarios. Get instant feedback on your confidence, clarity, and technical depth in a supportive, calm environment.',
        image: '/images/projects/mockoraa/mockoraa-01.webp',
        tags: ['AI', 'EdTech', 'Mobile App'],
        metrics: [
            { value: '90%', label: 'User Satisfaction' },
            { value: '15%', label: 'Confidence Increase' },
            { value: '6', label: 'Weeks Duration' }
        ],
        prototypeLink: 'https://www.figma.com/proto/dDS6lfVky5LwPI8PadYt4O/Final-Flow?node-id=1448-6286&starting-point-node-id=1448%3A6286'
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} topPadding={true} />
            <ProjectOverview />
            <Role />
            <Challenge />
            <Solutions />
            <KeyInsights />
            <ImpactResults />
            <ReflectionLearnings />
            <Gallery />
            <CTASection />
            <PrevNextProject nextSlug="ecoprism" nextTitle="ecoPRISM" />
        </MinimalLayout>
    );
}

