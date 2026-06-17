'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';
import { User, Search, Code } from 'lucide-react';

const Role: React.FC = () => {
    const roles = [
        {
            icon: User,
            title: 'Senior Product Designer',
            description: 'Led end-to-end design strategy and execution'
        },
        {
            icon: Search,
            title: 'UX Research',
            description: 'Conducted user interviews and usability testing'
        },
        {
            icon: Code,
            title: 'Prototyping',
            description: 'Created interactive prototypes and design systems'
        }
    ];

    const approach = [
        {
            number: '1',
            title: 'Discovery',
            description: 'Shadowed workshops across India and UAE; interviewed shop owners and customers. Observed paper-and-clipboard workflows that needed digital replacement.'
        },
        {
            number: '2',
            title: 'Ideation',
            description: 'Co-design sessions with shop owners. Tested 3 mental models (list-based, calendar-based, board-based) against existing physical workflows.'
        },
        {
            number: '3',
            title: 'Validation',
            description: 'Maze testing on 4 core flows. Tracked onboarding drop-off across 3 iterations to reduce time from 15 to 4 minutes.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* My Role Section */}
                        <div>
                            <h2 className={`${h2Section} mb-8`}>
                                My Role
                            </h2>
                            <div className="space-y-6">
                                {roles.map((role, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg flex-shrink-0">
                                            {React.createElement(role.icon, {
                                                className: "w-5 h-5"
                                            })}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl font-grotesk font-bold text-black mb-2">
                                                {role.title}
                                            </h3>
                                            <p className="text-base font-inter text-gray-700 leading-relaxed">
                                                {role.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Approach Section */}
                        <div>
                            <h2 className={`${h2Section} mb-8`}>
                                Approach
                            </h2>
                            <div className="space-y-6">
                                {approach.map((step, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full flex-shrink-0 font-grotesk font-bold text-lg">
                                            {step.number}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl font-grotesk font-bold text-black mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-base font-inter text-gray-700 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Role;

