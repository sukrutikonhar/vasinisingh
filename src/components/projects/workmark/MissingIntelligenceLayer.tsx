'use client';

import React from 'react';
import { X, Check } from 'lucide-react';

const MissingIntelligenceLayer: React.FC = () => {
    const existingTools = [
        {
            label: 'PERFORMANCE TOOLS',
            tools: 'Lattice, BambooHR',
            description:
                'Evaluate employees but depend heavily on manual reporting and memory.',
        },
        {
            label: 'PRODUCTIVITY TRACKERS',
            tools: 'Jira, Slack, Asana',
            description:
                'Track tasks but do not translate them into structured performance insights.',
        },
        {
            label: 'RECOGNITION PLATFORMS',
            tools: 'Bonusly, Kudos',
            description:
                'Enable appreciation but lack evidence structure for fair evaluation.',
        },
    ];

    const newCategoryFeatures = [
        'Automated evidence capture',
        'High intelligence synthesis',
        'Structured fair evaluation',
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="border-t border-gray-200 pt-4 mb-2">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                            06 — MARKET GAP
                        </p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-6">
                        The Missing Intelligence Layer
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        Existing tools track tasks or manage formal reviews, but no platform connects Work → Evidence → Evaluation as one intelligent system.
                    </p>

                    {/* Three existing tools cards with red X (missing layers) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {existingTools.map((tool, index) => (
                            <div
                                key={index}
                                className="bg-red-50 border border-red-100 rounded-xl p-6 shadow-sm relative"
                            >
                                <div className="w-7 h-7 flex items-center justify-center bg-red-500 rounded-full">
                                    <X className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>

                                <p className="text-xs uppercase tracking-wider text-gray-600 font-grotesk font-bold mb-2 pt-3">
                                    {tool.label}
                                </p>

                                <p className="text-lg font-grotesk font-bold text-black mb-2">
                                    {tool.tools}
                                </p>

                                <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                    {tool.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom: 2x2 grid + A New Category */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

                        {/* Intelligence vs Automation grid */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                            <div className="grid grid-cols-[120px_1fr_1fr] gap-px bg-gray-200 text-center">

                                {/* Empty top-left */}
                                <div className="bg-gray-100 p-4" />

                                {/* Column Headers */}
                                <div className="bg-gray-100 p-5">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold">
                                        Low Intelligence
                                    </p>
                                </div>

                                <div className="bg-gray-100 p-5">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold">
                                        High Intelligence
                                    </p>
                                </div>

                                {/* Manual row label */}
                                <div className="bg-gray-100 p-5 flex items-center justify-center">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold">
                                        Manual
                                    </p>
                                </div>

                                <div className="bg-white p-6 text-left">
                                    <p className="text-base font-grotesk font-bold text-black">Traditional Reviews</p>
                                    <p className="text-sm font-inter text-gray-600 leading-relaxed mt-1">Lattice, CultureAmp</p>
                                </div>

                                <div className="bg-white p-6 text-left">
                                    <p className="text-base font-grotesk font-bold text-black">Recognition</p>
                                    <p className="text-sm font-inter text-gray-600 leading-relaxed mt-1">Bonusly, Kudos</p>
                                </div>

                                {/* Automated row label */}
                                <div className="bg-gray-100 p-5 flex items-center justify-center">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold">
                                        Automated
                                    </p>
                                </div>

                                <div className="bg-white p-6 text-left">
                                    <p className="text-base font-grotesk font-bold text-black">Task Trackers</p>
                                    <p className="text-sm font-inter text-gray-600 leading-relaxed mt-1">Jira, Slack</p>
                                </div>

                                <div className="bg-black text-white p-6 text-left">
                                    <p className="text-xl font-grotesk font-bold text-white">WorkMark</p>
                                    <p className="text-sm font-inter text-gray-300 mt-1">Performance Intelligence</p>
                                </div>

                            </div>
                        </div>

                        {/* A New Category */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-xl font-grotesk font-bold text-black mb-4">
                                A New Category
                            </h3>

                            <p className="text-base font-inter text-black leading-relaxed mb-6">
                                WorkMark sits in the Automated + High Intelligence quadrant, transforming raw activity into structured organizational intelligence without manual overhead.
                            </p>

                            <ul className="space-y-5">
                                {newCategoryFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="font-inter text-black">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissingIntelligenceLayer;
