'use client';

import React from 'react';

const steps = [
    {
        n: '1',
        title: 'Map cognitive load, not just tasks',
        body: 'Symptom collection is mechanical. Imaging interpretation is high-stakes. Each stage needed a different interaction pattern, not a uniform form.'
    },
    {
        n: '2',
        title: 'Design for the worst-case user',
        body: 'A resident at 3am in a district hospital, no on-call neurologist. Every interaction had to work for that person, with no assumptions about clinical memory.'
    },
    {
        n: '3',
        title: 'Treat time as a UI element',
        body: 'Last known normal time is the most consequential input. I surfaced it prominently at Stage 1 with immediate treatment window feedback.'
    },
    {
        n: '4',
        title: 'Safety gates as UX, not compliance',
        body: 'Exclusion criteria are session-flagged and propagate forward, actively changing later recommendations. The pattern communicates weight, not just requirement.'
    }
];

const StrategicThinking: React.FC = () => {
    return (
        <section className="py-14 sm:py-16 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-10">
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                                Strategic thinking
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-black leading-tight">
                                Reframing the product
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed lg:pt-9">
                            Protocol knowledge is not the bottleneck. Execution under pressure is. I shifted the product from &ldquo;protocol reference&rdquo; to &ldquo;protocol executor.&rdquo; One decision at a time, inputs carried forward, no re-entry.
                        </p>
                    </div>

                    {/* 4-column card grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {steps.map((step) => (
                            <div
                                key={step.n}
                                className="bg-gray-50 border border-gray-200 rounded-[6px] p-6 hover:border-black transition-colors"
                            >
                                <span className="text-5xl font-grotesk font-bold text-gray-200 leading-none block mb-4">
                                    {step.n}
                                </span>
                                <p className="text-base font-grotesk font-semibold text-black mb-2">
                                    {step.title}
                                </p>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {step.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicThinking;
