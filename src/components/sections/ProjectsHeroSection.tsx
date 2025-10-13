import React from 'react';
import { FolderOpen } from 'lucide-react';

const ProjectsHeroSection: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="flex items-center gap-4">
                    <FolderOpen className="w-12 h-12 lg:w-16 lg:h-16" />
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        Projects
                    </h1>
                </div>
                <p className="text-lg text-gray-300 mt-6 max-w-2xl">
                    Explore my portfolio of design work across various domains and industries.
                </p>
            </div>
        </section>
    );
};

export default ProjectsHeroSection;
