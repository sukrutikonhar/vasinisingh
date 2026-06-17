'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const reflections = [
    {
        title: 'Three audiences, one system',
        content: 'Designing for employees, managers, and leadership at once forced a different approach than role-based personas. Each view needed the same evidence, framed differently.',
    },
    {
        title: 'Evidence design is a new UX pattern',
        content: 'What makes AI-extracted activity feel credible vs. invasive was the hardest design question — more than any dashboard layout.',
    },
    {
        title: 'Bias alerts were harder than bias detection',
        content: 'Surfacing bias alerts to managers required careful framing. The UI had to invite reflection without triggering defensiveness or surveillance anxiety.',
    },
    {
        title: 'Recognition is a moment, not a module',
        content: 'The most important surface was the actual moment of giving and receiving recognition — not the analytics layer behind it.',
    },
];

export default function WorkmarkReflection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                        12 — REFLECTION
                    </p>
                    <h2 className={`${h2Section} mb-10`}>
                        What I learned designing Workmark
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {reflections.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                            >
                                <h3 className="text-lg font-grotesk font-bold text-black mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
