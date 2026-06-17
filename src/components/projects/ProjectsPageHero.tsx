'use client';

import React from 'react';
import { h1Page } from '@/lib/typography';

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

                    <h1 className={`${h1Page} text-black mb-4 sm:mb-6`}>
                        Selected Projects
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl font-inter text-gray-600 max-w-2xl mx-auto px-4">
                        Most of my work sits at the same place: turning expert-only workflows into something a stressed user can act on quickly.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPageHero;

