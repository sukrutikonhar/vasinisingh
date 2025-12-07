'use client';

import React from 'react';
import { Database, FileText, Clock } from 'lucide-react';

const Challenge: React.FC = () => {
    const challenges = [
        {
            icon: Database,
            title: 'Data Fragmentation',
            description: 'Users spent 60% of their time aggregating data from multiple disconnected systems.'
        },
        {
            icon: FileText,
            title: 'Complex Reporting',
            description: 'Existing tools couldn\'t handle the complexity of ESG reporting frameworks.'
        },
        {
            icon: Clock,
            title: 'Time Constraints',
            description: 'Manual processes delayed critical sustainability insights by weeks.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-8 text-center">
                            The Challenge
                        </h2>
                        <div className="bg-white border border-gray-200 p-8 sm:p-12 rounded-[6px] mb-12">
                            <p className="text-lg sm:text-xl font-inter text-gray-800 leading-relaxed text-center">
                                Sustainability professionals were struggling with fragmented data sources, complex reporting requirements, and time-consuming manual processes that hindered strategic decision-making.
                            </p>
                        </div>
                    </div>

                    {/* Challenge Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 p-6 hover:border-black transition-all"
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

