'use client';

import React from 'react';
import { LayoutGrid, TrendingDown, MessageSquare } from 'lucide-react';

const Challenge: React.FC = () => {
    const challenges = [
        {
            icon: LayoutGrid,
            title: 'Unstructured Practice',
            description: 'Most preparation methods lack realism and measurable feedback.'
        },
        {
            icon: TrendingDown,
            title: 'Confidence Gap',
            description: 'Candidates know the answers but struggle with delivery and presence.'
        },
        {
            icon: MessageSquare,
            title: 'Limited Feedback',
            description: 'Practicing alone or with peers rarely provides actionable insights.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-8 text-center">
                            The Challenge
                        </h2>
                        <div className="bg-white border border-gray-200 p-8 sm:p-12 rounded-[6px] mb-12">
                            <p className="text-lg sm:text-xl font-inter text-gray-800 leading-relaxed text-center">
                                Candidates often struggle with interview anxiety, lack of structured practice, and unclear feedback.
                            </p>
                        </div>
                    </div>

                    {/* Challenge Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 p-6 hover:border-black transition-all"
                            >
                                <div className="mb-4">
                                    {React.createElement(challenge.icon, {
                                        className: "w-8 h-8 text-black"
                                    })}
                                </div>
                                <h3 className="text-lg sm:text-xl font-grotesk font-bold text-black mb-3">
                                    {challenge.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                    {challenge.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Quote Section */}
                    <div className="mt-16 pt-12 border-t border-gray-200">
                        <blockquote className="text-xl sm:text-2xl font-inter italic text-gray-800 leading-relaxed text-center mb-4">
                            &quot;As a fresher, I knew the answers but had no real way to practise interviews, understand my mistakes, or build the confidence to speak clearly under pressure.&quot;
                        </blockquote>
                        <p className="text-sm font-inter text-gray-600 text-center">
                            — Snehal, Fresher Candidate applying for job
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenge;

