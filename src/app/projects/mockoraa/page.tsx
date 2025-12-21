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
        subtitle: 'Your Empathetic AI Interview Coach. Practice realistic interview scenarios with empathetic AI avatars that listen, respond, and guide. Get instant feedback on confidence, clarity, and technical depth in a calm, supportive space built to help you show up prepared and self assured.',
        image: '/images/projects/mockoraa/mockoraa-01.webp',
        tags: ['AI', 'EdTech', 'Mobile App'],
        metrics: [
            { value: '90%', label: 'User Satisfaction' },
            { value: '15%', label: 'Confidence Increase' },
            { value: '6', label: 'Weeks Duration' }
        ]
    };

    return (
        <MinimalLayout>
            <CaseStudyHero data={heroData} />
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

