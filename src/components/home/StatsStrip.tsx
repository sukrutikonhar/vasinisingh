'use client';

import React from 'react';

const stats = [
    {
        value: '8+ years',
        label: 'Senior product design practice',
    },
    {
        value: '40+ products',
        label: 'Shipped across SaaS, enterprise, and EdTech',
    },
    {
        value: '5 industries',
        label: 'Healthcare, ESG, automotive services, HR tech, AI tools',
    },
];

const StatsStrip: React.FC = () => {
    return (
        <section className="border-y border-gray-100 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                    {stats.map((stat) => (
                        <div key={stat.value} className="py-6 sm:py-8 px-4 sm:px-8 text-center sm:text-left">
                            <div className="text-lg sm:text-xl font-grotesk font-bold text-black tabular-nums mb-1">
                                {stat.value}
                            </div>
                            <p className="text-xs sm:text-sm font-inter text-gray-600 leading-snug">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;
