'use client';

import React from 'react';
import { Lightbulb, FileText, Code } from 'lucide-react';

const MockOraaV2Role: React.FC = () => {
    const roles = [
        {
            icon: Lightbulb,
            title: 'Problem Framing & Strategy',
            description: 'Led problem identification, research synthesis, and strategic direction to transform interview anxiety into measurable performance improvement.'
        },
        {
            icon: FileText,
            title: 'Research & Persona Creation',
            description: 'Conducted user research, created behavioral archetypes, and mapped user journeys to understand the confidence gap in modern hiring.'
        },
        {
            icon: Code,
            title: 'UX Architecture & Design',
            description: 'Designed the complete user experience, interaction patterns, and design system logic for the AI-powered interview platform.'
        }
    ];

    const approach = [
        {
            number: '1',
            title: 'Research & Discovery',
            description: 'Conducted competitor analysis, user interviews, and behavioral research to identify the root causes of interview anxiety and performance gaps.'
        },
        {
            number: '2',
            title: 'Ideation & Reframing',
            description: 'Used Crazy 8s, SCAMPER, and Six Thinking Hats methodologies to reframe the problem from knowledge gaps to performance gaps.'
        },
        {
            number: '3',
            title: 'Design & Validation',
            description: 'Created high-fidelity prototypes, conducted usability testing (n=57), and iterated based on SUS scores and behavioral analytics.'
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

export default MockOraaV2Role;