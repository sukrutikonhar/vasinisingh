'use client';

import React from 'react';

const ProjectOverview: React.FC = () => {
    const metadata = [
        { label: 'DURATION', value: '6 months' },
        { label: 'ROLE', value: 'Senior Product Designer' },
        { label: 'TOOLS', value: 'Figma, FigJam, Maze' },
        { label: 'CATEGORY', value: 'B2B SaaS' }
    ];

    return (
        <section className="py-12 sm:py-16 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metadata.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 p-6 hover:border-black transition-all group"
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
