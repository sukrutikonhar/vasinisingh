'use client';

import React from 'react';
import { AlertCircle, TrendingDown, Users, MapPin, AlertTriangle, Target } from 'lucide-react';

const ProblemStatement: React.FC = () => {
    const painPoints = [
        {
            stat: '86%',
            label: 'Service failures',
            description: 'Poor communication leads to operational errors',
            icon: AlertCircle
        },
        {
            stat: '-12%',
            label: 'Satisfaction decline',
            description: 'Year-over-year decline in aftermarket repair',
            icon: TrendingDown
        },
        {
            stat: 'Billions',
            label: 'Lost revenue',
            description: 'Industry-wide productivity and customer churn',
            icon: AlertTriangle
        }
    ];

    const personas = [
        {
            name: 'Anna Lindström',
            role: 'Workshop Owner',
            age: '38',
            location: 'Stockholm, Sweden',
            painPoints: ['Lost repair tickets', 'Constant phone interruptions', 'Unclear job timelines', 'Inability to scale'],
            quote: '"I spend more time managing papers than fixing bikes. There has to be a better way."'
        },
        {
            name: 'Ramesh Patel',
            role: 'Customer',
            age: '29',
            location: 'Dubai, UAE',
            painPoints: ['Zero repair visibility', 'Unexpected charges', 'Multiple follow-up calls', 'Lack of trust'],
            quote: '"I just want to know when my scooter will be ready without calling every day."'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-6">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                01 — Problem Discovery
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Uncovering the Root Cause of Operational Chaos
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed mb-8">
                            Through comprehensive stakeholder interviews and market analysis, I identified systemic inefficiencies that were costing the industry billions in lost productivity and customer churn.
                        </p>
                    </div>

                    {/* Core Problem */}
                    <div className="mb-16">
                        <div className="bg-gray-50 border border-gray-200 p-8 sm:p-12 rounded-[6px]">
                            <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-4">
                                The Core Problem
                            </h3>
                            <p className="text-base font-inter text-gray-700 leading-relaxed mb-8">
                                Repair shops operated in chaos—handwritten logs, missed calls, misplaced parts, and zero customer visibility. This was systematically destroying business value and customer relationships.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {painPoints.map((point, index) => (
                                    <div key={index} className="bg-white border border-gray-200 p-6 text-center">
                                        {React.createElement(point.icon, {
                                            className: "w-8 h-8 text-black mx-auto mb-4"
                                        })}
                                        <div className="text-3xl font-grotesk font-bold text-black mb-2">
                                            {point.stat}
                                        </div>
                                        <div className="text-sm font-grotesk font-semibold text-black mb-2">
                                            {point.label}
                                        </div>
                                        <p className="text-xs font-inter text-gray-600">
                                            {point.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* User Personas */}
                    <div>
                        <h3 className="text-2xl font-grotesk font-bold text-black mb-4">
                            User Research
                        </h3>
                        <p className="text-base font-inter text-gray-600 mb-8">
                            Comprehensive user research across two critical personas representing both sides of the marketplace:
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {personas.map((persona, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 p-6"
                                >
                                    <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1 rounded-full mb-4">
                                        <Users className="w-3 h-3" />
                                        <span className="text-xs font-grotesk font-bold uppercase">
                                            {persona.role}
                                        </span>
                                    </div>

                                    <h4 className="text-xl font-grotesk font-bold text-black mb-2">
                                        {persona.name}
                                    </h4>

                                    <div className="flex items-center gap-4 text-sm font-inter text-gray-600 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Users className="w-3 h-3" />
                                            <span>{persona.age}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            <span>{persona.location}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-1 mb-4">
                                        {persona.painPoints.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm font-inter text-gray-700">
                                                <span className="text-black font-bold mt-1">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="border-l-4 border-black pl-4">
                                        <p className="text-sm font-inter italic text-gray-700 leading-relaxed">
                                            {persona.quote}
                                        </p>
                                    </div>
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
