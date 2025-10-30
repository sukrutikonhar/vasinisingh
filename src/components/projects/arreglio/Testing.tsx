'use client';

import React from 'react';

const Testing: React.FC = () => {
    const improvements = [
        {
            before: 'Complex multi-step booking form',
            after: 'Reduced to 3 simple steps with smart defaults',
            impact: '70% faster booking completion'
        },
        {
            before: 'Technical jargon in status updates',
            after: 'Plain language status messages with icons',
            impact: '95% comprehension rate in testing'
        },
        {
            before: 'Hidden cost breakdown causing mistrust',
            after: 'Upfront transparent pricing with itemized costs',
            impact: '80% increase in user confidence'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-8">
                        Testing & Refinement
                    </h2>

                    <p className="text-xl font-inter text-gray-700 leading-relaxed mb-12">
                        Tested prototypes with 10 shop owners and 15 customers using Maze for remote testing
                        and in-person sessions for qualitative feedback.
                    </p>

                    {/* Before/After Comparisons */}
                    <div className="space-y-8">
                        {improvements.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden shadow-card rounded-[6px]">
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

                    {/* Testimonial */}
                    <div className="mt-12 bg-gray-50 p-8 shadow-card rounded-[6px]">
                        <blockquote className="text-2xl font-grotesk font-medium text-black mb-4">
                            &ldquo;Finally, something my customers can actually use without calling me
                            10 times a day!&rdquo;
                        </blockquote>
                        <p className="text-sm font-inter text-gray-600">
                            — Workshop Owner, Beta Testing Phase
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testing;

