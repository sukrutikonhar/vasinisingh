'use client';

import React from 'react';
import { TrendingUp, Heart, Flame, GitBranch, MapPin } from 'lucide-react';

const BeyondPerformanceReviews: React.FC = () => {
    const visionStatement =
        'Every organization should have visibility into who contributes what, why it matters, and how to support growth automatically and fairly.';

    const featureSummaries = [
        { icon: TrendingUp, title: 'Career Growth', description: 'Intelligence signals' },
        { icon: Heart, title: 'Team Health', description: 'Collaboration strength' },
        { icon: Flame, title: 'Burnout', description: 'Overwork detection' },
        { icon: GitBranch, title: 'Decision AI', description: 'Fair recommendations' },
        { icon: MapPin, title: 'Skill Mapping', description: 'Workforce planning' },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4 text-center">
                        15 — FUTURE VISION
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-6 text-center">
                        Beyond Performance Reviews
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto text-center leading-relaxed mb-12">
                        {visionStatement}
                    </p>

                    {/* Five icon feature summaries */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                        {featureSummaries.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-3">
                                        <Icon
                                            className="w-8 h-8 text-black"
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <p className="font-grotesk font-bold text-black text-sm sm:text-base mb-1">
                                        {item.title}
                                    </p>
                                    <p className="text-xs sm:text-sm font-inter text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Vision Statement box */}
                    <div className="bg-gray-100 border border-gray-200 rounded-xl p-8 md:p-10">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                            VISION STATEMENT
                        </p>
                        <p className="text-xl sm:text-2xl font-grotesk font-bold text-black leading-snug">
                            {visionStatement}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondPerformanceReviews;
