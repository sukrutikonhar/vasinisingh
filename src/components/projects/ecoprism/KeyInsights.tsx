'use client';

import React from 'react';

const KeyInsights: React.FC = () => {
    const insights = [
        {
            number: '1',
            title: 'Context is Everything',
            description: 'Users needed to understand not just what the data showed but why it mattered to their specific role and objectives. We added contextual explanations and role-based views.'
        },
        {
            number: '2',
            title: 'Progressive Disclosure',
            description: 'The complexity of sustainability data required careful information layering. We implemented progressive disclosure to reveal details on demand without overwhelming users.'
        },
        {
            number: '3',
            title: 'Trust Through Transparency',
            description: 'Users needed to understand data sources and calculation methods to trust the insights. We added data lineage tracking and methodology explanations.'
        },
        {
            number: '4',
            title: 'Collaborative Workflows',
            description: 'Sustainability work inherently collaborative. We designed features for commenting, sharing, and version control to support team workflows.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Key Insights
                        </h2>
                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            Critical learnings that shaped the design decisions.
                        </p>
                    </div>

                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {insights.map((insight, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg p-6 shadow-subtle hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full flex-shrink-0 font-grotesk font-bold text-lg">
                                        {insight.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-xl font-grotesk font-bold text-black mb-2">
                                            {insight.title}
                                        </h3>
                                        <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                            {insight.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyInsights;

