'use client';

import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
    const insights = [
        {
            icon: Target,
            label: 'Challenge',
            text: 'Small repair shops operated on paper logs and phone calls, leading to communication breakdowns and poor customer satisfaction.'
        },
        {
            icon: Lightbulb,
            label: 'Solution',
            text: 'A dual-sided platform enabling workshop owners to digitize operations while giving customers visibility and seamless booking.'
        },
        {
            icon: TrendingUp,
            label: 'Impact',
            text: 'Early MVP validation showing 70% faster turnaround, 80% customer satisfaction, and 40% cost savings.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-10">
                        <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
                            <span className="text-xs font-grotesk font-bold text-[#202022] uppercase tracking-wider">
                                Executive Summary
                            </span>
                        </div>
                        <p className="text-lg sm:text-xl font-inter text-gray-700 leading-relaxed max-w-4xl">
                            Arreglio is a B2B SaaS platform designed to empower small workshop owners with digital infrastructure, enabling them to manage operations, build trust, and grow their customer base. Through strategic problem-solving and cross-functional collaboration, we transformed traditional repair shop workflows into an efficient digital ecosystem.
                        </p>
                    </div>

                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {insights.map((insight, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-[#202022] p-8 hover:bg-[#202022] group transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {React.createElement(insight.icon, {
                                        className: "w-6 h-6 text-[#202022] group-hover:text-white transition-colors"
                                    })}
                                    <h4 className="text-sm font-grotesk font-bold text-[#202022] group-hover:text-white uppercase tracking-wider transition-colors">
                                        {insight.label}
                                    </h4>
                                </div>
                                <p className="text-sm sm:text-base font-inter text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                                    {insight.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveSummary;

