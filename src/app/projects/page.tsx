import Layout from '@/components/layout/Layout';
import ProjectsHeroSection from '@/components/projects/ProjectsHeroSection';
import MainProjectsSection from '@/components/projects/MainProjectsSection';
import OtherProjectsSection from '@/components/projects/OtherProjectsSection';

export default function Projects() {
    return (
        <Layout>
            <ProjectsHeroSection />
            <MainProjectsSection />
            <OtherProjectsSection />
        </Layout>
    );
}
