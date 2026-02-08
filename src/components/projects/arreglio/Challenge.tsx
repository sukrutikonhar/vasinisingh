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
                        <div className="bg-gray-50 border border-gray-300 p-8 sm:p-12 rounded-[6px] mb-12 shadow-sm">
                            <p className="text-xl sm:text-2xl md:text-3xl font-inter text-gray-800 leading-relaxed text-center italic">
                                &quot;How do we modernize a traditional repair shop workflow without overwhelming users who are resistant to digital change?&quot;
                            </p>
                        </div>
                    </div>

                    {/* Challenge Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 p-6 rounded-lg shadow-subtle hover:shadow-lg transition-all"
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


                </div>
            </div>
        </section>
    );
};

export default Challenge;

