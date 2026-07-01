'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const Outcome: React.FC = () => {
    const pills = [
        'Community driven discussions',
        'Structured knowledge management',
        'Intelligent moderation',
        'AI assisted discovery (roadmap)',
        'Enterprise governance',
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Outcome
                    </p>
                    <h2 className={`${h2Section} mb-4 max-w-2xl mx-auto`}>
                        What the design delivered
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                        The design work produced a complete system spec: IA, role-based flows, and high-fidelity screens, covering community discussion, structured knowledge management, moderation tooling, and enterprise governance, ready to hand off for build.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {pills.map((pill, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-grotesk font-medium text-[#202022] shadow-sm"
                            >
                                {pill}
                            </span>
                        ))}
                    </div>

                    <p className="text-xs sm:text-sm font-inter text-gray-500 leading-relaxed max-w-3xl mx-auto">
                        This case study reflects the design phase of the work. If the product has since shipped and generated usage data, that&apos;s the next thing I&apos;d add here.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Outcome;
