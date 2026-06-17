'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const ReflectionLearnings: React.FC = () => {
    const learnings = [
        {
            title: 'Familiarity is a feature',
            content: 'Translating physical workflows (sticky notes, paper boards) into the same visual mental model in digital reduced adoption friction more than any feature.'
        },
        {
            title: 'Compliance is UX, not legal',
            content: 'Designing consent, portability, and erasure across three regulatory regimes was a design problem before a legal one.'
        },
        {
            title: 'Pricing transparency is a behavioral lever',
            content: 'What competitors hid, we surfaced — and conversion lifted because trust moved before the booking.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className={`${h2Section} mb-8`}>
                            Reflection & Learnings
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {learnings.map((learning, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg p-6 shadow-subtle hover:shadow-lg transition-all"
                            >
                                <h3 className="text-lg sm:text-xl font-grotesk font-bold text-black mb-3">
                                    {learning.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {learning.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReflectionLearnings;
