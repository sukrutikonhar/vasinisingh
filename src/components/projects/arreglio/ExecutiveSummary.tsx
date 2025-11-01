'use client';

import React from 'react';
import { Target, Lightbulb, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
    const insights = [
        {
            icon: Target,
            label: 'The Challenge',
            text: 'Traditional repair shops operated on handwritten logs, missed calls, and chaotic workflows. This operational inefficiency led to poor customer satisfaction and stifled business growth.',
            highlight: '86% of failures'
        },
        {
            icon: Lightbulb,
            label: 'The Solution',
            text: 'A comprehensive dual-platform ecosystem enabling workshop owners to digitize operations while providing customers transparent booking, real-time tracking, and secure payments.',
            highlight: 'Zero friction'
        },
        {
            icon: TrendingUp,
            label: 'The Impact',
            text: 'Early MVP metrics demonstrate strong product-market fit: 70% faster turnaround, 80% customer satisfaction, and 40% operational cost reduction.',
            highlight: 'Live MVP'
        }
    ];

    return (
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />

            <div className="container-custom px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                Executive Summary
                            </span>
                        </div>

                        <div className="max-w-4xl">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6 leading-tight">
                                Transforming Traditional Workshops Into Digital-First Operations
                            </h2>
                            <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed mb-6">
                                Arreglio is a strategic B2B SaaS platform designed to empower small workshop owners with enterprise-grade digital infrastructure. Through comprehensive user research, strategic design decisions, and cross-functional collaboration, we transformed paper-based workflows into an efficient, trust-building digital ecosystem.
                            </p>
                            <div className="flex items-center gap-2 text-sm font-inter text-gray-800 font-semibold">
                                <span>Strategic design thinking meets operational excellence</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {insights.map((insight, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-black transform rotate-1 group-hover:rotate-2 transition-transform duration-300 rounded-[6px]"></div>
                                <div className="relative bg-white border-2 border-black p-8 h-full hover:bg-black transition-all duration-300 rounded-[6px]">
                                    <div className="flex items-start gap-3 mb-6">
                                        <div className="w-12 h-12 bg-black !hover:bg-white text-white flex items-center justify-center rounded-lg group-hover:bg-white group-hover:text-black transition-colors">
                                            {React.createElement(insight.icon, {
                                                className: "w-6 h-6"
                                            })}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-1">
                                                {insight.label}
                                            </h4>
                                            {insight.highlight && (
                                                <span className="inline-block bg-gray-100 text-black px-2 py-1 text-xs font-bold rounded">
                                                    {insight.highlight}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-base font-inter text-gray-600 group-hover:text-white leading-relaxed transition-colors">
                                        {insight.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveSummary;

