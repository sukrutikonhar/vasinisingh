'use client';

import React from 'react';
import { Lightbulb, FileText, Code } from 'lucide-react';

const Role: React.FC = () => {
    const roles = [
        {
            icon: Lightbulb,
            title: 'Product Ideation & Strategy',
            description: 'Conceived the original idea and led ideation and strategy discussions to shape the MVP, feature scope, and business model.'
        },
        {
            icon: FileText,
            title: 'Planning & Feasibility',
            description: 'Contributed to effort estimation, cost planning, MVP budget, subscription model assumptions, and early technology decisions.'
        },
        {
            icon: Code,
            title: 'Prototyping & Validation',
            description: 'Created high fidelity prototypes and led usability testing to validate workflows and refine the product direction.'
        }
    ];

    const approach = [
        {
            number: '1',
            title: 'Research & Discovery',
            description: 'Quick desk research, peer interviews, and personal interview experiences were used to identify common pain points and anxiety triggers.'
        },
        {
            number: '2',
            title: 'Ideation & Prototyping',
            description: 'Rapid sketching, wireframing, and high fidelity prototyping to test multiple interview flows and feedback formats.'
        },
        {
            number: '3',
            title: 'Testing & Refinement',
            description: 'Usability testing with peers and mock users to improve clarity, tone, and confidence building cues.'
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

