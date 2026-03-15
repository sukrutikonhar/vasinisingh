'use client';

import React from 'react';
import Image from 'next/image';

const UnderstandingWorkplaceBehavior: React.FC = () => {
    const gaps = [
        {
            title: 'Visibility Gap',
            description: 'Meaningful work never enters performance systems.',
        },
        {
            title: 'Bias Gap',
            description: 'Lack of structured data creates unfair evaluation.',
        },
        {
            title: 'Evidence Gap',
            description: 'Reviews depend on memory rather than evidence.',
        },
        {
            title: 'Emotion Gap',
            description: 'Employees want acknowledgment of effort, not just scores.',
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="border-t border-gray-200 pt-4 mb-2">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                            07 — RESEARCH
                        </p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-4">
                        Understanding Real Workplace Behavior
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        Research revealed that the issue was not just recognition frequency. The deeper problem was the absence of a system to convert fragmented work into credible evidence.
                    </p>

                    {/* Image + Gaps side by side on larger screens */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                        <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                            <Image
                                src="/images/projects/workmark/workplace-behavior.webp"
                                alt="Research synthesis - sticky notes and workplace behavior mapping"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Center aligned content */}
                        <div className="flex items-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {gaps.map((gap, index) => (
                                    <div key={index}>
                                        <h3 className="text-xl font-grotesk font-bold text-black mb-2">
                                            {gap.title}
                                        </h3>
                                        <p className="text-[15px] font-inter text-gray-600 leading-relaxed">
                                            {gap.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Framing cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-3">
                                OLD FRAMING
                            </p>
                            <p className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-3 leading-snug">
                                Employees are not recognized enough.
                            </p>
                            <p className="text-base font-inter text-black leading-relaxed">
                                This treats the problem like a cultural issue and focuses on reminders rituals, or manager discipline.
                            </p>
                        </div>
                        <div className="bg-black text-white rounded-xl p-8">
                            <p className="text-xs uppercase tracking-wider text-gray-400 font-grotesk font-bold mb-3">
                                NEW FRAMING
                            </p>
                            <p className="text-xl sm:text-2xl font-grotesk font-bold text-white mb-3 leading-snug">
                                Organizations lack a system to translate work into evidence.
                            </p>
                            <p className="text-base font-inter text-gray-200 leading-relaxed">
                                This reframes the challenge as a product and systems design opportunity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnderstandingWorkplaceBehavior;
