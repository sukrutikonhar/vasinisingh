'use client';

import React from 'react';
import { Users, Target, TrendingUp } from 'lucide-react';

const Research: React.FC = () => {
    const researchMethods = [
        {
            icon: Users,
            title: 'User Interviews',
            description: '15+ interviews with ESG managers, compliance officers, and sustainability teams'
        },
        {
            icon: Target,
            title: 'Competitor Analysis',
            description: 'Analyzed 8 ESG platforms to identify gaps and opportunities'
        },
        {
            icon: TrendingUp,
            title: 'Data Analysis',
            description: 'Studied current workflows and pain points through surveys and analytics'
        }
    ];

    const insights = [
        'Users need role-based dashboards tailored to their specific responsibilities',
        'Real-time data visibility is critical for timely decision-making',
        'Compliance reporting must be automated to save time and reduce errors',
        'Teams want a single source of truth for all ESG metrics'
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-12 sm:mb-16 text-center">
                        Research & Discovery
                    </h2>

                    {/* Research Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {researchMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-[6px] shadow-card"
                            >
                                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                                    {React.createElement(method.icon, {
                                        className: "w-8 h-8 text-white"
                                    })}
                                </div>
                                <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                                    {method.title}
                                </h3>
                                <p className="font-inter text-gray-700 leading-relaxed">
                                    {method.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Key Insights */}
                    <div className="bg-black text-white p-12 rounded-[6px] shadow-card">
                        <h3 className="text-3xl font-grotesk font-bold mb-8">
                            Key Insights
                        </h3>
                        <div className="space-y-6">
                            {insights.map((insight, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-white text-black flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-sm font-grotesk font-bold">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <p className="text-lg font-inter leading-relaxed">{insight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;

