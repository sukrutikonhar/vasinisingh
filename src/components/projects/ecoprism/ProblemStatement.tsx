'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

const ProblemStatement: React.FC = () => {
    const challenges = [
        'Complex ESG data scattered across multiple systems',
        'Time-consuming manual compliance reporting processes',
        'Lack of real-time visibility into sustainability metrics',
        'Difficulty in tracking progress toward ESG goals'
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left - Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 mb-6">
                                <AlertCircle className="w-5 h-5" />
                                <span className="text-sm font-grotesk font-medium uppercase tracking-wider">
                                    The Problem
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-8">
                                ESG Compliance<br />is Overwhelming
                            </h2>

                            <p className="text-xl font-inter text-gray-700 leading-relaxed mb-8">
                                Enterprise teams struggle with fragmented data sources, manual processes, and
                                lack of unified visibility into their ESG performance. This leads to
                                inefficiencies, compliance risks, and missed opportunities for improvement.
                            </p>

                            <div className="space-y-4">
                                <p className="text-lg font-grotesk font-semibold text-black">
                                    Key Challenges:
                                </p>
                                {challenges.map((challenge, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-black flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-xs font-grotesk font-bold">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 font-inter">{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Visual */}
                        <div className="bg-gray-50 border-4 border-black p-12">
                            <blockquote className="text-2xl sm:text-3xl font-grotesk font-medium text-black leading-tight">
                                &ldquo;We needed a way to turn chaotic ESG data into actionable insights
                                that our team could actually use.&rdquo;
                            </blockquote>
                            <p className="text-sm font-inter text-gray-600 mt-6">
                                — ESG Manager, Fortune 500 Company
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;

