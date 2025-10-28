'use client';

import React from 'react';

const ProjectsPageHero: React.FC = () => {
    return (
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block border-2 border-black px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
                        <span className="text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider">
                            Case Studies
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-grotesk font-bold text-black mb-6 sm:mb-8 leading-tight">
                        Selected Projects
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-gray-600 max-w-2xl mx-auto px-4">
                        A collection of work showcasing my process, creativity, and problem-solving approach
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPageHero;

