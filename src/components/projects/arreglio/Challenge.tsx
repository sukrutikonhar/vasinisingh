'use client';

import React from 'react';
import { RefreshCw, Users, Clock } from 'lucide-react';

const Challenge: React.FC = () => {
    const challenges = [
        {
            icon: RefreshCw,
            title: 'Legacy System Dependencies',
            description: 'Existing paper-based processes deeply embedded in daily operations'
        },
        {
            icon: Users,
            title: 'User Resistance',
            description: 'Technophobic users requiring intuitive, non-intimidating interfaces'
        },
        {
            icon: Clock,
            title: 'Operational Complexity',
            description: 'Multiple stakeholders with varying technical proficiency levels'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-8">
                            The Challenge
                        </h2>
                    </div>

                    {/* Challenge Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-300 p-6 hover:border-black transition-all shadow-sm"
                            >
                                <div className="mb-4">
                                    {React.createElement(challenge.icon, {
                                        className: "w-8 h-8 text-black"
                                    })}
                                </div>
                                <h3 className="text-lg sm:text-xl font-grotesk font-bold text-black mb-3">
                                    {challenge.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                    {challenge.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Quote Section */}
                    <div className="mt-16 pt-12 border-t border-gray-200">
                        <blockquote className="text-xl sm:text-2xl font-inter italic text-gray-800 leading-relaxed text-center mb-4">
                            &quot;We&apos;re drowning in data but starving for insights. Every report takes weeks to compile, and by the time we have answers, the questions have changed.&quot;
                        </blockquote>
                        <p className="text-sm font-inter text-gray-600 text-center">
                            — Sarah Chen, Head of Sustainability, Fortune 500 Company
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenge;

