'use client';

import React from 'react';
import { Target, Lightbulb, TrendingUp, Sparkles } from 'lucide-react';

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
        <section className="py-16 sm:py-20 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                Executive Summary
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4 leading-tight">
                            Transforming Traditional Workshops Into Digital-First Operations
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed">
                            Arreglio is a strategic B2B SaaS platform designed to empower small workshop owners with enterprise-grade digital infrastructure. Through comprehensive user research, strategic design decisions, and cross-functional collaboration, we transformed paper-based workflows into an efficient, trust-building digital ecosystem.
                        </p>
                    </div>

                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {insights.map((insight, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 p-8 hover:border-black transition-all"
                            >
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-lg">
                                        {React.createElement(insight.icon, {
                                            className: "w-5 h-5"
                                        })}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-1">
                                            {insight.label}
                                        </h4>
                                        {insight.highlight && (
                                            <span className="inline-block bg-black text-white px-2 py-1 text-xs font-bold rounded">
                                                {insight.highlight}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-base font-inter text-gray-700 leading-relaxed">
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

