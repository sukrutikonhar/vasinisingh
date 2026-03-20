'use client';

import React from 'react';

const CostOfInvisibleWork: React.FC = () => {
    const metrics = [
        {
            value: '31%',
            title: 'Higher turnover risk',
            description:
                'Employees are more likely to leave when they feel unseen in evaluation systems.',
        },
        {
            value: '21%',
            title: 'Productivity drop',
            description:
                'Disengagement compounds when effort is disconnected from recognition and reward.',
        },
        {
            value: '$8.8T',
            title: 'Global disengagement cost',
            description:
                'Poor recognition contributes to a massive organizational efficiency tax.',
        },
        {
            value: '4x',
            title: 'Culture ripple',
            description:
                'Invisible work weakens fairness, promotions, mentoring behavior, and long term trust.',
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                        05 — CONSEQUENCES
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-4">
                        The Cost of Invisible Work
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        Unrecognized contribution is not only a morale issue. It creates measurable cost at talent, productivity, and culture level.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-3">
                                    {metric.value}
                                </div>
                                <div className="text-base sm:text-lg font-grotesk font-bold text-black mb-2">
                                    {metric.title}
                                </div>
                                <p className="text-xs sm:text-sm font-inter text-gray-600 leading-relaxed">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostOfInvisibleWork;
