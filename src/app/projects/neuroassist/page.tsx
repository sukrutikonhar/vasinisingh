import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import NeuroHero from '@/components/projects/neuroassist/NeuroHero';
import ProjectOverview from '@/components/projects/neuroassist/ProjectOverview';
import TheBrief from '@/components/projects/neuroassist/TheBrief';
import StrategicThinking from '@/components/projects/neuroassist/StrategicThinking';
import Workflow from '@/components/projects/neuroassist/Workflow';
import DecisionArchitecture from '@/components/projects/neuroassist/DecisionArchitecture';
import InformationArchitecture from '@/components/projects/neuroassist/InformationArchitecture';
import KeyDecisions from '@/components/projects/neuroassist/KeyDecisions';
import Reflection from '@/components/projects/neuroassist/Reflection';
import CTASection from '@/components/projects/neuroassist/CTASection';
import PrevNextProject from '@/components/projects/PrevNextProject';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'NeuroAssist — Every Second Is a Decision',
    description:
        'Case study: designing a stroke care system where the right action must be the easiest action.',
    path: '/projects/neuroassist',
});

export default function NeuroAssistProject() {
    return (
        <MinimalLayout>
            <NeuroHero />
            <ProjectOverview />
            <TheBrief />
            <StrategicThinking />
            <Workflow />
            <DecisionArchitecture />
            <InformationArchitecture />
            <KeyDecisions />
            <Reflection />
            <CTASection />
            <PrevNextProject prevSlug="aks" prevTitle="AKS" nextSlug="mockoraa" nextTitle="MockOraa" />
        </MinimalLayout>
    );
}
