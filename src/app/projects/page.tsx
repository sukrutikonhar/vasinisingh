import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import ProjectsPageHero from '@/components/projects/ProjectsPageHero';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Projects',
    description:
        'Case studies across healthcare, ESG, automotive services, EdTech, and internal tools — turning expert-only workflows into something a stressed user can act on quickly.',
    path: '/projects',
});

export default function Projects() {
    return (
        <MinimalLayout>
            <ProjectsPageHero />
            <ProjectsGrid />
        </MinimalLayout>
    );
}
