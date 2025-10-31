'use client';

import React from 'react';
import { Target, Clock, Star, TrendingDown } from 'lucide-react';

const Outcome: React.FC = () => {
    const metrics = [
        { icon: Target, value: '89%', label: 'Task Completion Rate', description: 'Users successfully complete complex workflows' },
        { icon: Clock, value: '40%', label: 'Time Saved on Reporting', description: 'Reduced manual effort significantly' },
        { icon: Star, value: '4.6/5', label: 'User Satisfaction Score', description: 'Highly rated by enterprise teams' },
        { icon: TrendingDown, value: '50%', label: 'Reduction in Errors', description: 'Automated validation prevents mistakes' }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container-custom px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <span className="text-xs sm:text-sm font-grotesk font-bold text-white uppercase tracking-wider">
                                05 — Measurable Impact
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-white mb-6">
                            Business & User Impact
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Data-driven results demonstrating the success of user-centered design decisions
                        </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-[6px] border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    {React.createElement(metric.icon, {
                                        className: "w-10 h-10 sm:w-12 sm:h-12 text-white"
                                    })}
                                </div>
                                <div className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-3">
                                    {metric.value}
                                </div>
                                <div className="text-base sm:text-lg font-grotesk font-semibold text-white mb-2">
                                    {metric.label}
                                </div>
                                <p className="text-sm font-inter text-white/70">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Success Story */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 sm:p-12 rounded-[6px] border-2 border-white/20">
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-white mb-6">
                            Product Success
                        </h3>
                        <p className="text-lg sm:text-xl font-inter text-white/90 leading-relaxed mb-6">
                            ecoPRISM is now live, serving global enterprise clients and transforming how organizations approach ESG compliance.
                        </p>
                        <div className="inline-block bg-white text-gray-800 px-6 py-3 rounded-full font-grotesk font-bold text-sm sm:text-base">
                            Used by Global Leaders like ABB
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Outcome;
