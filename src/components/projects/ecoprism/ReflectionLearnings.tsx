'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const ReflectionLearnings: React.FC = () => {
    const learnings = [
        {
            title: 'Compliance UX is trust UX',
            content: 'Designing data lineage and methodology visibility wasn\'t a polish layer — it was the product. Users needed to see their math, not just the results.'
        },
        {
            title: 'Enterprise users don\'t need simpler dashboards',
            content: 'They need dashboards that show their math. Density was fine when each number was traceable to source and methodology.'
        },
        {
            title: 'Design system from day one',
            content: 'Building a component library early paid off as the platform expanded across reporting modules, settings, and role-based views.'
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
