'use client';

import React from 'react';

const ProjectOverview: React.FC = () => {
    const metadata = [
        { label: 'DURATION', value: '6 months' },
        { label: 'ROLE', value: 'Product Designer' },
        { label: 'TOOLS', value: 'Figma, FigJam, Maze' },
        { label: 'CATEGORY', value: 'B2B SaaS' }
    ];

    return (
        <section className="py-12 sm:py-16 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-4">
                            <span className="text-xs font-grotesk font-bold text-[#202022] uppercase tracking-wider">
                                Project Details
                            </span>
                        </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metadata.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 shadow-card hover:shadow-xl transition-all group"
                            >
                                <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-3">
                                    {item.label}
                                </p>
                                <p className="text-base sm:text-lg font-grotesk font-semibold text-[#202022] leading-snug">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;
