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

export const metadata = {
    title: 'NeuroAssist — Stroke Care UX | Vasini Singh',
    description: 'A case study on designing a stroke care system where every second counts — translating complex neurology protocols into a workflow a stressed emergency physician can trust.',
};

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
            <PrevNextProject prevSlug="ecoprism" prevTitle="ecoPRISM" nextSlug="mockoraa" nextTitle="MockOraa" />
        </MinimalLayout>
    );
}
