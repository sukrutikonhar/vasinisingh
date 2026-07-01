'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const Role: React.FC = () => {
    const cards = [
        {
            title: 'UX Strategy & Architecture',
            items: [
                'UX strategy and information architecture',
                'User flows and interaction design',
                'Knowledge Base lifecycle experience design',
            ],
        },
        {
            title: 'Enterprise Experience Design',
            items: [
                'Enterprise dashboard and forum experiences',
                'Design system alignment with ABB guidelines',
                'Responsive UI design for desktop, tablet, and mobile',
            ],
        },
        {
            title: 'Workflow Optimization',
            items: [
                'AI assisted workflow experience concepts',
                'Moderator and Admin workflow optimization',
            ],
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                        My Role
                    </p>
                    <h2 className={`${h2Section} mb-10`}>
                        Leading the end to end design process
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-gray-300 transition-all h-full"
                            >
                                <h3 className="text-base font-grotesk font-bold text-black mb-4">
                                    {card.title}
                                </h3>
                                <ul className="space-y-2 pl-4 list-disc">
                                    {card.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="text-sm font-inter text-gray-600 leading-relaxed"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Role;
