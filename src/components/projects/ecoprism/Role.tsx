'use client';

import React from 'react';
import { User, Layout, Code } from 'lucide-react';

const Role: React.FC = () => {
    const roles = [
        {
            icon: User,
            title: 'Lead UI, UX Designer',
            description: 'End-to-end design ownership from research to final implementation'
        },
        {
            icon: Layout,
            title: 'Design Strategy',
            description: 'Developed information architecture and interaction patterns optimized for data-heavy enterprise workflows.'
        },
        {
            icon: Code,
            title: 'Prototyping & Testing',
            description: 'Created high-fidelity prototypes and conducted usability testing with sustainability professionals.'
        }
    ];

    const approach = [
        {
            number: '1',
            title: 'Research & Discovery',
            description: 'Understanding user needs and market landscape'
        },
        {
            number: '2',
            title: 'Ideation & Prototyping',
            description: 'Rapid iteration and concept validation'
        },
        {
            number: '3',
            title: 'Testing & Refinement',
            description: 'User feedback integration and design optimization'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* My Role Section */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-8">
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
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-8">
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

