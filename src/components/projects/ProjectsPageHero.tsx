'use client';

import React from 'react';

const ProjectsPageHero: React.FC = () => {
    return (
        <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full">
                        <span className="text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider">
                            Case Studies
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-grotesk font-bold text-black mb-4 sm:mb-6 leading-tight">
                        Selected Projects
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl font-inter text-gray-600 max-w-2xl mx-auto px-4">
                        A collection of work showcasing my process, creativity, and problem-solving approach
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPageHero;

