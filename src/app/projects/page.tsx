import MinimalLayout from '@/components/layout/MinimalLayout';
import ProjectsPageHero from '@/components/projects/ProjectsPageHero';
import ProjectsGrid from '@/components/projects/ProjectsGrid';

export default function Projects() {
    return (
        <MinimalLayout>
            <ProjectsPageHero />
            <ProjectsGrid />
        </MinimalLayout>
    );
}
