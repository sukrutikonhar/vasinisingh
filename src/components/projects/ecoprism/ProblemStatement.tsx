'use client';

import React from 'react';
import { FileText, Users, Zap } from 'lucide-react';

const ProblemStatement: React.FC = () => {
    const challenges = [
        {
            icon: FileText,
            title: 'Complex Regulatory Landscape',
            description: 'Multiple frameworks (EU CSRD, India BRSR) with strict audit requirements needed simplification without losing compliance integrity.',
            stat: null
        },
        {
            icon: Users,
            title: 'Diverse User Base',
            description: 'Serve both ESG experts and novice suppliers—requiring progressive disclosure and role-based experiences.',
            stat: null
        },
        {
            icon: Zap,
            title: 'Scalability Requirements',
            description: 'Platform must adapt to evolving regulations across jurisdictions with modular, future-proof architecture.',
            stat: null
        }
    ];

    const insights = [
        { stat: '88%', label: 'Users demanded real-time regulatory tracking' },
        { stat: '76%', label: 'Required customization for reporting needs' },
        { stat: '62%', label: 'Cross-team coordination was a major pain point' }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12 sm:mb-16">
                        <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
                            <span className="text-xs sm:text-sm font-grotesk font-bold text-[#202022] uppercase tracking-wider">
                                01 — The Problem
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            Challenge & Research Insights
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Collaborated with expert research team to identify critical pain points in ESG compliance workflows
                        </p>
                    </div>

                    {/* Challenges Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 sm:p-8 rounded-lg shadow-subtle border border-gray-200 hover:shadow-lg transition-all"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#202022] rounded-lg flex items-center justify-center mb-6">
                                    {React.createElement(challenge.icon, {
                                        className: "w-7 h-7 sm:w-8 sm:h-8 text-white"
                                    })}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-4">
                                    {challenge.title}
                                </h3>
                                <p className="text-base font-inter text-gray-600 leading-relaxed">
                                    {challenge.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Research Insights */}
                    <div className="bg-white p-8 sm:p-12 rounded-[6px] shadow-card border-l-4 border-gray-800">
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-8">
                            Research Insights
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {insights.map((insight, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl sm:text-5xl font-grotesk font-bold text-[#202022] mb-3">
                                        {insight.stat}
                                    </div>
                                    <p className="text-sm sm:text-base font-inter text-gray-600">
                                        {insight.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;
