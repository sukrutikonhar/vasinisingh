'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const DesignChallenges: React.FC = () => {
    const complexityItems = [
        'Progressive disclosure, so the merge flow only shows comparison detail once a primary article is chosen',
        'Structured layouts and clear visual hierarchy across dense data screens',
        'Role based navigation so each user only sees what\'s relevant to them',
        'Consistent interaction patterns reused across forum, KB, and admin surfaces',
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Design Challenges
                    </p>
                    <h2 className={`${h2Section} mb-10`}>
                        Solving for complexity and scale
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
                            <h3 className="text-lg font-grotesk font-bold text-black mb-3">
                                Managing Enterprise Complexity
                            </h3>
                            <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed mb-4">
                                The platform involved highly complex workflows including approval systems, moderation pipelines, audit logs, multi-role permissions, knowledge verification, and reporting. I simplified these using:
                            </p>
                            <ul className="space-y-2 pl-4 list-disc">
                                {complexityItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
                            <h3 className="text-lg font-grotesk font-bold text-black mb-3">
                                Designing for Scalability
                            </h3>
                            <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed mb-4">
                                The platform was expected to support thousands of users, large discussion volumes, cross-divisional collaboration, future AI integrations, and multi-device experiences. The solution architecture and UX patterns were designed to scale without compromising usability.
                            </p>
                            <p className="text-xs sm:text-sm font-inter text-gray-500 leading-relaxed">
                                Note: the numbers visible in the dashboard screens above (thread counts, user counts, adoption rate) are illustrative test data used to design and stress-test the layouts at scale, not reported production metrics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignChallenges;
