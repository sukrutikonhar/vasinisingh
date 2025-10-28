'use client';

import React from 'react';
import { TrendingUp, Clock, Star, Users } from 'lucide-react';

const Outcome: React.FC = () => {
    const metrics = [
        { icon: TrendingUp, label: 'User Adoption', value: '+85%', description: 'Increase in monthly active users' },
        { icon: Clock, label: 'Time Saved', value: '60%', description: 'Faster report generation' },
        { icon: Star, label: 'Satisfaction', value: '4.7/5', description: 'Average user rating' },
        { icon: Users, label: 'Engagement', value: '+120%', description: 'Daily platform interactions' }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold mb-12 sm:mb-16 text-center">
                        Outcome & Impact
                    </h2>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="border-2 border-white p-8 text-center hover:bg-white hover:text-black transition-all group"
                            >
                                <div className="flex justify-center mb-4">
                                    {React.createElement(metric.icon, {
                                        className: "w-10 h-10"
                                    })}
                                </div>
                                <div className="text-4xl font-grotesk font-bold mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm font-grotesk font-semibold uppercase tracking-wider mb-2">
                                    {metric.label}
                                </div>
                                <p className="text-sm font-inter opacity-80">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Key Results */}
                    <div className="border-2 border-white p-10">
                        <h3 className="text-2xl font-grotesk font-bold mb-6">
                            Key Results
                        </h3>
                        <ul className="space-y-4 font-inter text-lg">
                            <li className="flex items-start gap-3">
                                <span>✓</span>
                                <span>Reduced onboarding time from 3 days to 2 hours</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span>✓</span>
                                <span>Automated 70% of manual reporting tasks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span>✓</span>
                                <span>Improved data accuracy by eliminating manual entry errors</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span>✓</span>
                                <span>Enabled real-time collaboration across teams</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Outcome;

