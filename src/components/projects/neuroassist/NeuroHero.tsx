'use client';

import React from 'react';
import { Tag } from 'lucide-react';
import { h1Page } from '@/lib/typography';

const NeuroHero: React.FC = () => {
    const tags = ['Clinical UX', 'High-Stakes Workflow', 'Trust Under Pressure'];
    const metrics = [
        { value: '8', label: 'Stages · End-to-end coverage' },
        { value: '4', label: 'Clinical pathways · One entry point' },
        { value: '0', label: 'Dead-end states · Every state routes forward' },
    ];

    return (
        <section className="bg-white pt-20 md:pt-24 pb-10 md:pb-14">
            <div className="container-custom px-4 sm:px-6 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    <div className="order-2 lg:order-1">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-1.5 bg-gray-100 text-[#202022] px-3 py-1.5 text-[10px] font-grotesk font-bold uppercase tracking-wider rounded-full"
                                >
                                    <Tag className="w-2.5 h-2.5" />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-xs font-grotesk uppercase tracking-wider text-gray-500 mb-3">
                            Self-initiated case study · 2025
                        </p>

                        <h1 className={`${h1Page} text-[#202022] mb-3`}>
                            Every Second Is a Decision
                        </h1>

                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed mb-6 max-w-lg">
                            Designing NeuroAssist, a stroke care system where the right action must be the easiest action.
                        </p>

                        <div className="grid grid-cols-3 gap-3">
                            {metrics.map((m, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-lg p-3 sm:p-4 text-center">
                                    <p className="text-2xl sm:text-3xl font-grotesk font-bold text-[#202022] mb-1">{m.value}</p>
                                    <p className="text-[10px] font-inter text-gray-600 leading-tight">{m.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative h-[280px] sm:h-[340px] md:h-[400px] rounded-[6px] overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                        <p className="text-sm font-inter text-gray-500 px-6 text-center">
                            UI artifacts in development — workflow diagrams and screen compositions coming soon
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NeuroHero;
