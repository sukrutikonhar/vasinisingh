'use client';

import React from 'react';

const Testing: React.FC = () => {
    const improvements = [
        {
            before: 'Complex navigation with 7 main menu items',
            after: 'Simplified to 4 core sections based on user tasks',
            impact: '40% faster task completion'
        },
        {
            before: 'Data-heavy dashboard overwhelming users',
            after: 'Introduced progressive disclosure with expandable cards',
            impact: '65% reduction in cognitive load (self-reported)'
        },
        {
            before: 'Unclear reporting status indicators',
            after: 'Added visual progress bars and clear status labels',
            impact: '90% of users found status "immediately clear"'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-8">
                        Testing & Iteration
                    </h2>

                    <p className="text-xl font-inter text-gray-700 leading-relaxed mb-12">
                        Conducted usability testing with 8 ESG professionals to validate design decisions
                        and identify areas for improvement.
                    </p>

                    {/* Before/After Comparisons */}
                    <div className="space-y-8">
                        {improvements.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-2 border-black overflow-hidden">
                                <div className="bg-gray-50 p-6">
                                    <p className="text-sm font-grotesk uppercase tracking-wider text-gray-500 mb-2">
                                        Before
                                    </p>
                                    <p className="font-inter text-gray-700">{item.before}</p>
                                </div>
                                <div className="bg-white p-6">
                                    <p className="text-sm font-grotesk uppercase tracking-wider text-black mb-2">
                                        After
                                    </p>
                                    <p className="font-inter text-black font-semibold">{item.after}</p>
                                </div>
                                <div className="bg-black text-white p-6 flex items-center">
                                    <p className="font-grotesk font-bold">{item.impact}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testing;

