'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const AiExperience: React.FC = () => {
    const explored = [
        'AI powered answer recommendations',
        'Intelligent search assistance',
        'Context aware suggestions while composing a question',
        'AI generated knowledge summaries',
    ];

    const visibleToday = [
        'Suggested Section/Category placement in the moderator assignment flow',
        'Similarity scoring in the Knowledge Base merge tool (94%, 89%, 83% match confidence)',
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                        AI Assisted Experience
                    </p>
                    <h2 className={`${h2Section} mb-4`}>
                        Concept work for future knowledge discovery
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed max-w-3xl mb-10">
                        This is early-stage concept and roadmap work, not a shipped feature. Flagging that clearly since it&apos;s easy to conflate with the rest of the live product.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all h-full">
                            <h3 className="text-base font-grotesk font-bold text-black mb-4">
                                Explored directions
                            </h3>
                            <ul className="space-y-2 pl-4 list-disc">
                                {explored.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-sm font-inter text-gray-600 leading-relaxed"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all h-full">
                            <h3 className="text-base font-grotesk font-bold text-black mb-4">
                                Where it&apos;s already visible today
                            </h3>
                            <ul className="space-y-2 pl-4 list-disc">
                                {visibleToday.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-sm font-inter text-gray-600 leading-relaxed"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiExperience;
