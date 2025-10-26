import React from 'react';
import { FolderOpen } from 'lucide-react';
import { typography, spacing, containers } from '@/lib/typography';

const ProjectsHeroSection: React.FC = () => {
    return (
        <section className={`bg-gray-900 text-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="flex items-center gap-4">
                    <FolderOpen className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white" />
                    <h1 className={`${typography.h1.pageHero} text-white`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                        Projects
                    </h1>
                </div>
                <p className={`${typography.body.large} text-white mt-6 max-w-2xl`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                    Explore my portfolio of design work across various domains and industries.
                </p>
            </div>
        </section>
    );
};

export default ProjectsHeroSection;
