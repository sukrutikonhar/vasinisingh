'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';
import HierarchyFlow from './HierarchyFlow';

const Problem: React.FC = () => {
    const goals = [
        'Centralize technical discussions and knowledge sharing',
        'Improve discoverability of verified information',
        'Reduce dependency on siloed communication',
        'Enable scalable moderation and governance',
        'Create a future ready AI enabled knowledge ecosystem',
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                        The Problem
                    </p>
                    <h2 className={`${h2Section} mb-4`}>
                        Fragmented knowledge, disconnected teams
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed max-w-3xl mb-8">
                        The brief: large enterprise teams were struggling with fragmented knowledge, repeated questions, disconnected communication channels, and difficulty finding verified technical information. Existing systems lacked structured moderation, intelligent search, and scalable collaboration capabilities.
                    </p>

                    <HierarchyFlow
                        centered
                        nodes={[
                            'Ad-hoc Slack threads',
                            'Answer lost / forgotten',
                            'Same question re-asked elsewhere',
                            'No verified source of truth',
                        ]}
                    />

                    <div className="mt-10 max-w-3xl rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
                        <h3 className="text-lg font-grotesk font-bold text-black mb-4">
                            AKS was designed to
                        </h3>
                        <ul className="space-y-2 pl-4 list-disc">
                            {goals.map((goal, index) => (
                                <li
                                    key={index}
                                    className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed"
                                >
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
