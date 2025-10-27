'use client';

import React from 'react';

const ProjectsPageHero: React.FC = () => {
    return (
        <section className="pt-32 pb-20 bg-white">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block border-2 border-black px-4 py-2 mb-8">
                        <span className="text-sm font-grotesk font-medium uppercase tracking-wider">
                            Case Studies
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-black mb-8 leading-tight">
                        Selected Projects
                    </h1>

                    <p className="text-xl sm:text-2xl font-inter text-gray-600 max-w-2xl mx-auto">
                        A collection of work showcasing my process, creativity, and problem-solving approach
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPageHero;

