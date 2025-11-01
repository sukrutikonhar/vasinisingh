'use client';

import React from 'react';
import { AlertCircle, TrendingDown, Users, MapPin, AlertTriangle } from 'lucide-react';

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
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-20 left-20 w-96 h-96 border-2 border-black rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-black rounded-full blur-3xl" />
            </div>

            <div className="container-custom px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-8">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                01 — Problem Discovery
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6 max-w-4xl">
                            Uncovering the Root Cause of Operational Chaos
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-4xl leading-relaxed">
                            Through comprehensive stakeholder interviews and market analysis, I identified systemic inefficiencies that were costing the industry billions in lost productivity and customer churn.
                        </p>
                    </div>

                    {/* Core Problem */}
                    <div className="mb-20">
                        <div className="bg-black p-12 sm:p-16 rounded-[6px] relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 via-white to-gray-400"></div>
                            <div className="max-w-3xl">
                                <h3 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-6">
                                    The Core Problem
                                </h3>
                                <p className="text-lg font-inter text-white/90 leading-relaxed mb-12">
                                    Repair shops operated in operational chaos—handwritten logs, missed calls, misplaced parts, and zero customer visibility. This wasn&apos;t just inconvenient; it was systematically destroying business value and customer relationships.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {painPoints.map((point, index) => (
                                        <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center hover:bg-white/20 transition-all">
                                            {React.createElement(point.icon, {
                                                className: "w-8 h-8 text-white mx-auto mb-4"
                                            })}
                                            <div className="text-4xl font-grotesk font-bold text-white mb-2">
                                                {point.stat}
                                            </div>
                                            <div className="text-sm font-grotesk font-semibold text-white mb-2">
                                                {point.label}
                                            </div>
                                            <p className="text-xs font-inter text-white/70">
                                                {point.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Personas */}
                    <div>
                        <h3 className="text-3xl sm:text-4xl font-grotesk font-bold text-black mb-4">
                            Strategic Research Approach
                        </h3>
                        <p className="text-lg font-inter text-gray-600 mb-12 max-w-3xl">
                            To validate assumptions and build deep empathy, I conducted comprehensive user research across two critical personas representing both sides of the marketplace:
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {personas.map((persona, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white border-2 border-black hover:shadow-2xl transition-all"
                                >
                                    <div className="p-8">
                                        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                                            <Users className="w-4 h-4 text-black" />
                                            <span className="text-xs font-grotesk font-bold text-black uppercase">
                                                {persona.role}
                                            </span>
                                        </div>

                                        <h4 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-4">
                                            {persona.name}
                                        </h4>

                                        <div className="flex items-center gap-4 text-sm font-inter text-gray-600 mb-6">
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{persona.age}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{persona.location}</span>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <p className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-3">
                                                Key Pain Points
                                            </p>
                                            <ul className="space-y-2">
                                                {persona.painPoints.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm font-inter text-gray-700">
                                                        <span className="text-black font-bold">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-black p-6 border-l-4 border-white">
                                            <p className="text-base font-inter italic text-white leading-relaxed">
                                                {persona.quote}
                                            </p>
                                        </div>
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
