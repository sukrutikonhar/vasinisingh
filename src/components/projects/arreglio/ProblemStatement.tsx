'use client';

import React from 'react';

const ProblemStatement: React.FC = () => {
    const painPoints = [
        {
            stat: '86%',
            label: 'Service failures from poor communication',
            description: 'Handwritten logs, missed calls, and misplaced parts caused frequent errors'
        },
        {
            stat: '-12%',
            label: 'Year-over-year satisfaction decline',
            description: 'In aftermarket repair industry showing systemic issues'
        }
    ];

    const personas = [
        {
            name: 'Anna Lindström',
            role: 'Workshop Owner',
            age: '38',
            location: 'Stockholm, Sweden',
            painPoints: 'Lost repair tickets, constant phone interruptions, unclear job timelines, inability to scale operations.',
            quote: '"I spend more time managing papers than fixing bikes. There has to be a better way."'
        },
        {
            name: 'Ramesh Patel',
            role: 'Customer',
            age: '29',
            location: 'Dubai, UAE',
            painPoints: 'Zero repair visibility, unexpected charges, multiple follow-up calls, lack of trust in service providers.',
            quote: '"I just want to know when my scooter will be ready without calling every day."'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12 sm:mb-16">
                        <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
                            <span className="text-xs sm:text-sm font-grotesk font-bold text-[#202022] uppercase tracking-wider">
                                01 — Problem Discovery
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            Uncovering the Root Cause
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Through stakeholder interviews and market analysis, I identified systemic inefficiencies costing the industry billions in lost productivity and customer churn.
                        </p>
                    </div>

                    {/* Core Problem */}
                    <div className="bg-white p-8 sm:p-12 rounded-[6px] shadow-card border-l-4 border-red-500 mb-12 sm:mb-16">
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-6">
                            The Core Problem
                        </h3>
                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed mb-8">
                            Repair shops operated in operational chaos—handwritten logs, missed calls, misplaced parts, and zero customer visibility. This wasn&apos;t just inconvenient; it was costing businesses.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            {painPoints.map((point, index) => (
                                <div key={index} className="text-center bg-gray-50 p-6 rounded-[6px]">
                                    <div className="text-4xl sm:text-5xl font-grotesk font-bold text-red-600 mb-3">
                                        {point.stat}
                                    </div>
                                    <div className="text-base font-grotesk font-semibold text-black mb-2">
                                        {point.label}
                                    </div>
                                    <p className="text-sm font-inter text-gray-600">
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* User Personas */}
                    <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-8">
                        Strategic Research Approach
                    </h3>
                    <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed mb-8">
                        To validate assumptions and build empathy, I conducted comprehensive user research across two critical personas:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {personas.map((persona, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 sm:p-8 rounded-[6px] shadow-card border-2 border-gray-100 hover:border-gray-800 hover:shadow-xl transition-all"
                            >
                                <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-grotesk font-bold mb-6">
                                    {persona.role}
                                </div>
                                <h4 className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-3">
                                    {persona.name}
                                </h4>
                                <p className="text-sm font-inter text-gray-600 mb-4">
                                    <strong>Age:</strong> {persona.age} • <strong>Location:</strong> {persona.location}
                                </p>
                                <div className="mb-4">
                                    <p className="text-xs font-grotesk font-bold text-gray-500 uppercase tracking-wider mb-2">
                                        Pain Points
                                    </p>
                                    <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                        {persona.painPoints}
                                    </p>
                                </div>
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                    <p className="text-sm font-inter italic text-red-800">
                                        {persona.quote}
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

export default ProblemStatement;
