'use client';

import React from 'react';

const currentPoints = [
    'Contributions are scattered across tools and conversations.',
    'Managers lack a single view of who did what.',
    'Recognition is often tied to visibility, not impact.',
];

const refinedPoints = [
    'How might we make contributions visible without adding overhead?',
    'How might we support both individual and team accountability?',
    'How might we align recognition with real impact and goals?',
];

export default function WorkmarkReframing() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        Reframing The Problem
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        We reframed the problem from &ldquo;people don’t report work&rdquo; to &ldquo;work is invisible by default.&rdquo; This shifted the solution toward lightweight visibility and recognition.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-4">
                                Current Problem
                            </h3>
                            <p className="text-sm font-inter text-gray-600 mb-4 leading-relaxed">
                                Work that doesn’t show up in standard tools or reports is effectively invisible, leading to missed recognition and unclear accountability.
                            </p>
                            <ul className="space-y-2">
                                {currentPoints.map((point, i) => (
                                    <li key={i} className="flex gap-2 text-sm font-inter text-gray-700">
                                        <span className="text-black">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-4">
                                Refined Problem
                            </h3>
                            <p className="text-sm font-inter text-gray-600 mb-4 leading-relaxed">
                                We focused on making contributions discoverable and actionable for both individuals and managers, without adding heavy process.
                            </p>
                            <ul className="space-y-2">
                                {refinedPoints.map((point, i) => (
                                    <li key={i} className="flex gap-2 text-sm font-inter text-gray-700">
                                        <span className="text-black">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-100 aspect-video min-h-[240px] flex items-center justify-center">
                        <p className="text-sm font-inter text-gray-500">Reframing / problem space — Image placeholder</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
