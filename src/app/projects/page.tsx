import Layout from '@/components/layout/Layout';
import ProjectsHeroSection from '@/components/sections/ProjectsHeroSection';
import MainProjectsSection from '@/components/sections/MainProjectsSection';
import OtherProjectsSection from '@/components/sections/OtherProjectsSection';

export default function Projects() {
    return (
        <Layout>
            <ProjectsHeroSection />
            <MainProjectsSection />
            <OtherProjectsSection />
        </Layout>
    );
}
